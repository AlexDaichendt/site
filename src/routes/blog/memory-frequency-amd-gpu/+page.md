---
created: '2023-03-12'
title: '[Workaround] High idle power consumption with AMD GPUs'
description: There is a bug with AMD gpus on Linux that causes the memory to run at full speed even when the GPU is idle for certain refresh rates and resolutions. This causes high idle power consumption. This post explains how to fix it.
keywords:
  - AMD
  - amdgpu
  - gpu
  - idle power
  - power consumption
  - memory frequency
  - memory scaling
  - memory clock
  - memory speed
  - memory
  - linux
  - linux kernel
  - kernel
hidden: false
---

<script>
import hz120 from "./images/_120hz.png?default"
import hz144low from "./images/_144hzlow.png?default"

import Image from "$components/Image.svelte"
</script>

For many years, AMD GPUs have had a bug that causes the memory to run at full speed even when the GPU is idle for certain refresh rates and resolutions. For example, I am running a 34' UWQHD 3440x1440 monitor with 144Hz refresh rate. My GPU is a 6700 XT with 16GB of VRAM. When I set the resolution to 3440x1440 and the refresh rate to 144Hz, the memory frequency is stuck at 1000 MHz, or as Windows would report it 2000 Mhz. The high memory frequency consumes about 30 W of power - not doing anything at all.

<Image meta={hz120} alt="High power draw and high mem frequency"/>

This bug apparently existed on Windows as well, but was fixed some time in 2021. There were some tries to fix the issue on Linux in the past, but obviously nothing worked - as I found out now running the latest kernel 6.2.

As a non-feasible workaround, you could lower the refresh rate to 50Hz or 60Hz. This would reduce the memory frequency and therefore also the power draw. However, nobody enjoys to watch their mouse stutter at 50Hz when you spent money on a 1440Hz monitor.

Some interesting links to read up on the topic:

- https://gitlab.freedesktop.org/drm/amd/-/issues/1403
- https://gitlab.freedesktop.org/drm/amd/-/issues/1709

## Workaround

A user in a [Gitlab issue](https://gitlab.freedesktop.org/drm/amd/-/issues/1655) reported that a different xrandr profile with different timings would fix the issue. I can confirm that it works for me as well. However, a small downside is that infrequenctly - every few minutes or so a small flicker occurs. I'll test this setup for a bit and figure out if I'd rather have high power draw or an occasional flicker.

```bash
#!/bin/sh
xrandr --newmode "3440x1440_143.92" 891.4 3440 3536 3600 3920 1440 1446 1466 1580 +hsync -vsync
xrandr --addmode DisplayPort-0 3440x1440_143.92
xrandr --output DisplayPort-0 --mode 3440x1440_143.92
```

I added the script to my i3 config so that it is executed once I sign in.

The power draw is now as expected at around 8W. The memory downclocks to 96Mhz. Whenever I move my mouse I can observe a rise in GPU freqency and power draw to around 12W. This is much better.

This might not seem like a lot, but in situations like this I have to think about how many GPUs were sold globally and are affected by this bug. It's is not an insignificant amount of power that is wasted on a global scale.

<Image meta={hz144low} alt="High power draw and high mem frequency"/>
