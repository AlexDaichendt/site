---
created: '2022-07-27'
title: 'How to: Run a DPDK application in an LXC container'
description: ''
keywords:
  - LXC
  - DPDK
---

For my thesis, I evaluated if containers are viable for low-latency networking. I
decided to pick LXC as my container implementation due to them being extremely
lightweight compared to its peers and also related work indicating, that LXC beats
others in raw performance. Latency-critical applications are typically
implemented with poll mode drivers in userspace, due to the traditional
interrupt-based network stack inducing unreliable delays[^1]. Unfortunately,
there are not a lot of tutorials out there on how to get DPDK to run with LXC. One resource that did help me, but is not complete and also is a bit older is from J. Krishnamurthy[^2].

## Prerequisites

This tutorial expects that you went over the following checklist:

- Debian Bullseye (other distributions should work too)
- a working LXC instance of at least LXC 4.0 (did not test earlier versions)
- a network interface for your containers so that they can communicate with the internet, and also you can SSH into the container
- another NIC that you want to use with DPDK

## Host Setup

We first must initialize the userspace device driver. There exist two kinds of
kernel modules that provide the driver interface: `igb_uio` and `vfio`. Since
the `vfio` module requires the IOMMU and the IOMMU can have - under some
circumstances - a bad impact on system performance, we opt for the `igb_uio`
module. A very interesting read about how the drivers work on a kernel level is
the paper of Koch[^3]. The following code installs the `igb_uio` kernel module.

```bash
git clone http://dpdk.org/git/dpdk-kmods
cd dpdk-kmods/linux/igb_uio/
make
modprobe uio
insmod igb_uio.ko
```

Next, clone whatever version of DPDK you want to use on your host. Do not
compile it! We will utilize the `dpdk-devbind` script from the provided usertools to bind a NIC to the driver `igb_uio`. This script can also be called with `--status` to verify if your NIC indeed was bound to the driver. Instead of eno8 in the following example, it is also possible to use the PCI identifier like 0000:65:00.0.

```bash
git clone https://github.com/DPDK/dpdk.git
python dpdk/usertools/dpdk-devbind.py --bind=igb_uio eno8
```

By binding the NIC to this driver, device files are created. These device files allow the userspace driver of DPDK to directly interact with the PCI device. The next example demonstrates how to find the device files and their major/minor IDs, which we need for the next step. In this case, the major ID is 239 and the minor ID is 0.

```bash
$ ls /dev/uio* -la
crw------- 1 root root 239, 0 Jul 27 20:21 /dev/uio0
```

Now we will pass through these device files to the container. Open the container config file under `/var/lib/lxc/<name>/config` and add following lines. The first two lines are required according to the lead developer of LXC Stéphane Graber[^4]. The third line gives access to the device with CGroups v2. And finally, we pass through the device file. The last line could also be replaced with a `mknode` call after starting the container, but I found this variant cleaner.

```toml
lxc.mount.auto =
lxc.mount.auto = proc:rw sys:rw
lxc.cgroup2.devices.allow = c 239:0 rwm
lxc.mount.entry = /dev/uio0 dev/uio0 none bind,create=file
```

One last step is missing on the container host: the creation of hugepages. Modern CPUs with high core counts rely on multiple NUMA nodes, where each node has its memory.
Since I don't want to write more about the impact of suboptimal assigned memory, we create 2Mb hugepages for each node.

```bash
echo 512 > /sys/devices/system/node/node0/hugepages/hugepages-2048kB/nr_hugepages
echo 512 > /sys/devices/system/node/node1/hugepages/hugepages-2048kB/nr_hugepages
echo 512 > /sys/devices/system/node/node2/hugepages/hugepages-2048kB/nr_hugepages
...
```

Now we pass through the created device file to the container again. Open the container config file and add the following line.

```toml
lxc.mount.entry = /dev/hugepages dev/hugepages none bind,create=dir 0 0
```

The host is now set up and it should be possible to use your DPDK application in the container like you are used to it. In case multiple devices are bound to `igb_uio`, each container still sees the other devices even though they were not passed through. I assume this is because we mounted the `/sys` folder as well. While it throws a small warning in the DPDK application, it is no reason to be worried.

Any questions? [Contact me!](/contact)

<br />

[^1]: [5G QoS: Impact of Security Functions on Latency](https://www.net.in.tum.de/fileadmin/bibtex/publications/papers/gallenmueller_noms2020.pdf)
[^2]: http://mails.dpdk.org/archives/dev/2014-October/006373.html
[^3]: Koch, Hans J from Linutronix GmbH, 2013, "Userspace I/O drivers in a realtime context"
[^4]: https://github.com/lxc/lxd/issues/3619\#issuecomment-319430483
