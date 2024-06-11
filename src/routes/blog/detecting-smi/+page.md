---
created: '2024-01-15'
title: 'Detecting System Management Interrupts (SMIs)'
description: ''
keywords:
  - SMI
---

# System Management Interrutps (SMI)

- high priority interrupts caused by the hardware
- transparent to the operating system
- can be used by the mainboard for power management, thermal management, or other system-level functions independent of the OS
- can take a long time to execute, causing a CPU core to be blocked from other work

## Detecting SMIs

- compile a kernel with hwlat tracing capabilities; usually, a typical Linux kernel has this enabled; if not, the config can be found in the appendix
- after starting the machine with a trace-capable image
    - check available tracers `cat /sys/kernel/debug/tracing/available_tracers`
    - enable the tracer `echo hwlat > /sys/kernel/debug/tracing/current_tracer`
    - there now should be a process "hwlat" running that takes up 50% of one CPU
- output of the hwlat tracer available `cat /sys/kernel/debug/tracing/trace` or `cat /sys/kernel/debug/tracing/trace_pipep`

## Example Output

```
# tracer: hwlat
#
# entries-in-buffer/entries-written: 1/1   #P:32
#
#                                _-----=> irqs-off
#                               / _----=> need-resched
#                              | / _---=> hardirq/softirq
#                              || / _--=> preempt-depth
#                              ||| /     delay
#           TASK-PID     CPU#  ||||   TIMESTAMP  FUNCTION
#              | |         |   ||||      |         |
           <...>-30395   [010] d...   533.362276: #1     inner/outer(us):    0/388   ts:1711469939.505579595 count:1
```

- inner/outer: where the latency was detected, see next section

### How does it work?

- this hwlat process is taking timestamps in a loop
- if distance between two timestamps is unreasonably large (bigger than ns), there was an SMI
- we should lower the threshold of this distance to 1us by executing `echo 1 > /sys/kernel/debug/tracing/tracing_thresh`
- the hwlat process is migrated over all the cores to catch SMIs there
- inner vs outer latency

```
  while (run) {
    start_ts = trace_local_clock();
    end_ts = trace_local_clock();
    if (!first && start_ts - last_ts > thresh)
	record_outer();
    if (end_ts - start_ts > thresh)
	record_inner();
    last_ts = end_ts;
    first = 0;
  }
```

### Further options

- by default, only 50% CPU time is used
- this can be increased by echoing into `echo 9999999 > /sys/kernel/debug/tracing/hwlat_detector/width`, where the value is smaller than the set window `cat /sys/kernel/debug/tracing/hwlat_detector/window` to avoid starving the system.
- from my experience, this, however, is not necessary to catch SMIs. The default option is "good enough".

## Firing an SMI manually

- There is a nice small kernel module [here](https://github.com/jib218/kernel-module-smi-trigger) for manually triggering an SMI to verify the setup
- follow the instructions in the readme to compile and load the module

## Hardware Registers for counting SMIs

- Intel: MSR0x34, can be read out with turbostat / perf
- AMD: ls\_msi\_rx, can be used with `perf stat -e ls_smi_rx -I 60000`
However, doesn't seem to count everything; counts seem incorrect

---

## Sources, Appendix

- https://wiki.linuxfoundation.org/realtime/documentation/howto/tools/hwlat
- https://www.kernel.org/doc/html/latest/trace/hwlat_detector.html
- https://lwn.net/Articles/860578/
- https://www.jabperf.com/ima-let-you-finish-but-hunting-down-system-interrupts/

Custom Kernel Fragment: files/kernel\_config\_fragments/trace

```
CONFIG_USER_STACKTRACE_SUPPORT=y
CONFIG_NOP_TRACER=y
CONFIG_HAVE_RETHOOK=y
CONFIG_RETHOOK=y
CONFIG_HAVE_FUNCTION_TRACER=y
CONFIG_HAVE_FUNCTION_GRAPH_TRACER=y
CONFIG_HAVE_FUNCTION_GRAPH_RETVAL=y
CONFIG_HAVE_DYNAMIC_FTRACE=y
CONFIG_HAVE_DYNAMIC_FTRACE_WITH_REGS=y
CONFIG_HAVE_DYNAMIC_FTRACE_WITH_DIRECT_CALLS=y
CONFIG_HAVE_DYNAMIC_FTRACE_WITH_ARGS=y
CONFIG_HAVE_DYNAMIC_FTRACE_NO_PATCHABLE=y
CONFIG_HAVE_FTRACE_MCOUNT_RECORD=y
CONFIG_HAVE_SYSCALL_TRACEPOINTS=y
CONFIG_HAVE_FENTRY=y
CONFIG_HAVE_OBJTOOL_MCOUNT=y
CONFIG_HAVE_OBJTOOL_NOP_MCOUNT=y
CONFIG_HAVE_C_RECORDMCOUNT=y
CONFIG_HAVE_BUILDTIME_MCOUNT_SORT=y
CONFIG_BUILDTIME_MCOUNT_SORT=y
CONFIG_TRACER_MAX_TRACE=y
CONFIG_TRACE_CLOCK=y
CONFIG_RING_BUFFER=y
CONFIG_EVENT_TRACING=y
CONFIG_CONTEXT_SWITCH_TRACER=y
CONFIG_RING_BUFFER_ALLOW_SWAP=y
CONFIG_PREEMPTIRQ_TRACEPOINTS=y
CONFIG_TRACING=y
CONFIG_GENERIC_TRACER=y
CONFIG_TRACING_SUPPORT=y
CONFIG_FTRACE=y
CONFIG_FUNCTION_TRACER=y
CONFIG_FUNCTION_GRAPH_TRACER=y
CONFIG_FUNCTION_GRAPH_RETVAL=y
CONFIG_DYNAMIC_FTRACE=y
CONFIG_DYNAMIC_FTRACE_WITH_REGS=y
CONFIG_DYNAMIC_FTRACE_WITH_DIRECT_CALLS=y
CONFIG_DYNAMIC_FTRACE_WITH_ARGS=y
CONFIG_FPROBE=y
CONFIG_FUNCTION_PROFILER=y
CONFIG_TRACE_PREEMPT_TOGGLE=y
CONFIG_IRQSOFF_TRACER=y
CONFIG_PREEMPT_TRACER=y
CONFIG_SCHED_TRACER=y
CONFIG_HWLAT_TRACER=y
CONFIG_OSNOISE_TRACER=y
CONFIG_TIMERLAT_TRACER=y
CONFIG_MMIOTRACE=y
CONFIG_FTRACE_SYSCALLS=y
CONFIG_TRACER_SNAPSHOT=y
CONFIG_TRACER_SNAPSHOT_PER_CPU_SWAP=y
CONFIG_BRANCH_PROFILE_NONE=y
CONFIG_BLK_DEV_IO_TRACE=y
CONFIG_FPROBE_EVENTS=y
CONFIG_KPROBE_EVENTS=y
CONFIG_UPROBE_EVENTS=y
CONFIG_DYNAMIC_EVENTS=y
CONFIG_PROBE_EVENTS=y
CONFIG_FTRACE_MCOUNT_RECORD=y
CONFIG_FTRACE_MCOUNT_USE_CC=y
CONFIG_PROVIDE_OHCI1394_DMA_INIT=y
CONFIG_HAVE_SAMPLE_FTRACE_DIRECT=y
CONFIG_HAVE_SAMPLE_FTRACE_DIRECT_MULTI=y
CONFIG_ARCH_HAS_DEVMEM_IS_ALLOWED=y
CONFIG_STRICT_DEVMEM=y
```
