---
created: '2022-08-06'
title: "Do's and dont's when writing a thesis"
description: ''
keywords:
  - thesis
  - academic writing
  - guidelines
hidden: true
---

## Do's and dont's

General notes:

- In chapter/section headlines, do not add the acronym.  
  Good: `3. Data Plane Development Kit`.  
  Bad: `3. Data Plane Development Kit (DPDK)`
- Avoid enumerations in brackets; instead use "such as"
- Use an acronym library and use it consistently throughout the thesis
- Use a spellchecker!
- Do not use a new page for a couple sentences. At least fill 1/4 or even more
  of a page.
- Do not add a Section 7.1 when you do not have a 7.2
- Check for double spaces
- Tables/Listings/... should not reach into the side edge
- Use the package siunitx for consistent formatting of numbers
- Use colors and different line types to highlight graphs better
- Do not ever use forward references
- Section/Chapter/Listing always with uppercase (this might be TUM specific?)
- Tables should never have vertical lines

Figures:

- Avoid png or jpegs. Instead use vector graphics such as svg.
- Do not write a novel in a figure caption. The caption is printed in the table
  of content; large sentences look strage there and decreases readability.
- A figure should have the same font as the remaining thesis
- Avoid hard-to-read colors like yellow in figures.

## Spellchecker

_I am not afiliated to any service mentioned here_

I personally had good experience with
[Writefull](https://www.writefull.com/writefull-for-overleaf). More
specifically, compared to alternatives, they support Latex. They trained their
AI with scientific papers so that the recommendations mostly fit the expected
writing style. Especially when it comes to commas, it pointed out many mistakes
I would have never caught on my own.

One thing I disliked about Writefull is that it is only available for Word
documents or Overleaf. I am using neither of that. Therefore, I had to copy
paste my tex files from my local editor to Overleaf. A bit of a hassle, but
okay. Another thing I noticed is that the Latex acronym package is not
supported. Often it would suggest to reorder my `\ac{DPDK}` so that it doesnt
make any sense afterwards.
