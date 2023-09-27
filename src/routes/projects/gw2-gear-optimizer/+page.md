---
title: 'GW2 Gear Optimizer'
description: 'The Gear Optimizer helps Guild Wars 2 players find optimal builds for fractals, raids, and strike missions.'
keywords:
  - gw2
  - guild wars 2
  - optimizer
layout: blog
---

<script>
  import overview from "./images/gear-optimizer.png?default"
  import Image from "$components/Image.svelte"
</script>

## TL;DR

{description}

- Demo / live site: [https://optimizer.discretize.eu](https://optimizer.discretize.eu)
- Code: [Github](https://github.com/discretize/discretize-gear-optimizer)

I made signifcant contributions to the frontend as well as to the calculation core by rewriting it in Rust and implementing threading.
Furthermore, I worked closely with and coordinated a small team of a few developers from all over the world ([see here](https://github.com/discretize/discretize-gear-optimizer/graphs/contributors)) to improve the project further.

<Image meta={overview} />

## Description

Interesting features for players of the video game:

- find optimal builds based on various parameters
- build templates with extensive sensible defaults that are used by players
- support for different game modes with different balancing
- Uptime input for conditional buffs
- keyboard shortcuts
- custom arbitrary modifier input to allow simulating theoretical balancing
- infusion helper: calculates the cheapest way to acquire n agony resistance
- input condition distribution
- displays the results just like in game
- share settings and results with a single link

## Most Significant Contributions

- I rewrote the frontend from scratch utilizing modern JS tooling  
  -> the old optimizer consisted out of one 10k LoC HTML file and an equally large js file; bundled with gulp and jquery ...
- ported the calculation core to Rust; refactored the combination generation code to support multi-threading  
  -> added some heuristics to reduce the amount of combinations
- state compression algorithm based on a schema so that players can share links to their builds without a server storing data

## Technical Details

The optimizer has numerous interesting technical features:

- React SPA without SSR with Vite
- Built with Material-UI 5 and Emotion for CSS-in-JS
- Statemanagement with ReduxJS
- multithreaded calculations with Rust compiled to WASM and WebWorkers
- i18n localization (Chinese and German)
- hosted on Cloudflare pages utilizing Workers and KV
- custom algorithm for lossless state compress based on a schema into base64, url-save strings
