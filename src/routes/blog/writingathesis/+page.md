---
created: '2022-08-12'
title: "Do's and don't when writing a thesis"
description: 'Useful tips for avoiding common mistakes when writing a thesis. Includes recommendations for writing, formatting, figures and Latex.'
keywords:
  - thesis
  - latex
  - figures
  - spellchecking
  - academic writing
  - guidelines
hidden: false
---

When I wrote my Bachelor's thesis in computer science, I had barely any experience with
academic writing. So far, I only attended one seminar about OT security, where I wrote a small 10-page paper, which was not published. Although I learned the basics of Latex and
academic writing, it was less comprehensive than the requirements in my thesis.

First, check your faculty's homepage for guidelines. They usually provide extensive
documents on style, format, and writing. Ultimately, these documents overrule any other
advice you may find on dubious websites.

## Do's and dont's

General notes:

- In chapter/section headlines, do not add the acronym.  
  Good: `3. Data Plane Development Kit`.  
  Bad: `3. Data Plane Development Kit (DPDK)`
- Avoid enumerations in brackets; instead, use "such as"
- Use a spellchecker!
- Read out loud to detect errors or strange wording
- Do not use a new page for a couple of sentences. At least fill 1/4 or even more of a page.
- Do not add Section 7.1 when you do not have a 7.2
- Check for double spaces
- Tables/Listings/... should not reach into the side margin
- Use colors and different line types to highlight graphs better
- Do not ever use forward references
- Section/Chapter/Listing always with uppercase (this might be TUM specific?)
- Tables should never have vertical lines
- Check for consistent dashing in words such as "low latency" vs "low-latency"

Latex:

- Citations should be on the same line; use invisible spaces (~) to avoid a linebreak
  before a citation
- Use the package siunitx for consistent formatting of numbers
- Use an acronym library and use it consistently throughout the thesis

Figures:

- Avoid png or jpegs. Instead, use vector graphics such as SVG
- Do not write a novel in a figure caption. The caption is printed in the table of contents; large sentences look strange there and decrease readability
- A figure should have the same font as the remaining thesis
- Avoid hard-to-read colors like yellow in figures

## Spellchecker

_I am not affiliated with any service mentioned here_

I have had good experience with
[Writefull](https://www.writefull.com/writefull-for-overleaf). More specifically, compared
to alternatives, they support Latex. They trained their AI with scientific papers so that
the recommendations mostly match the expected writing style. Especially when it comes to
commas, it pointed out many mistakes which I would have not noticed on my own.

One thing I disliked about Writefull is that it is only available for Word documents or
Overleaf. I am using neither. Therefore, I had to copy and paste my tex files from my local
editor to Overleaf. A bit of a hassle, but okay. Another thing I noticed is that the Latex
acronym package is not supported. Often it would suggest reordering my `\`ac{DPDK}` so that
it does not make sense afterward.
