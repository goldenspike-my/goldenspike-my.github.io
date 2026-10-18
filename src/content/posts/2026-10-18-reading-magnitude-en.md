---
title: Three things to ask when the news gives an earthquake's magnitude
slug: reading-magnitude
description: Magnitude isn't read off a single ruler. Here's how to make sense of the number in the news, which scale it is, who worked it out and how far away it was, plus a formula for working out the energy yourself.
date: 2026-10-18
category: geo
lang: en
cover: /uploads/reading-magnitude-cover.png
coverAlt: Four squares for the energy of magnitude 4 to 7 earthquakes; each step is 32 times the area, so magnitude 4 is a dot and magnitude 7 a wall
youtubeId: Ae6IBve_N10
tags:
  - Earthquakes
  - Magnitude
  - Richter Scale
  - Moment Magnitude
  - Sabah
  - Segamat
draft: false
---
Last November The Star TV ran a short item: another small earthquake in Segamat, "measuring a magnitude of 2.7 on the Richter scale". [1]

It's a perfectly ordinary sentence. Malaysian news almost always puts it that way. But when I read it as someone who works with earthquake data every day, it leaves three questions open. Which ruler was that 2.7 measured with? Who worked it out? And what does it have to do with how hard your house shook?

The video explains where magnitude comes from. This post takes a different route: it pulls apart the number you see in the news, and ends with a formula you can try yourself.

## First, one step is not a small step

Each step up in magnitude means the wiggle on a seismogram is 10 times bigger and the energy released is about 32 times greater. [2] Two steps is roughly a thousand times, three steps over thirty thousand.

![Magnitude against energy. The vertical axis is logarithmic, so each gridline is a hundred times more energy. Segamat 2025 and off Sabah 2026 use the USGS values; energy is from the Gutenberg–Richter empirical relation](/uploads/blog/energy-ladder-en.png)

So the magnitude 4 in Segamat and the magnitude 7 off Sabah look three notches apart, but the energy differs by tens of thousands of times. Using the two USGS values, 4.0 and 7.1, it comes to about 45,000.

The same factor of 32 also magnifies small differences. Keep this table in mind next time you read the news:

| Difference in magnitude | Roughly how much more energy |
| --- | --- |
| 0.1 | 1.4 times |
| 0.3 | 2.8 times |
| 1 | 32 times |
| 2 | 1,000 times |
| 3 | 32,000 times |

For the same Sabah earthquake, USGS said 7.1 and MetMalaysia said 6.8. A gap of 0.3 sounds tiny, yet in energy terms it's almost a factor of three. That doesn't mean either of them got it wrong, and I'll come back to why.

## Question one: which ruler?

### Richter's ruler

The name comes from Charles Richter, a seismologist in California. In 1935 he wanted to rank southern California's earthquakes by size, so he set a rule. Use the same instrument, a Wood-Anderson torsion seismometer, imagine it 100 km from the earthquake, and see how big the wiggle on the paper is. A magnitude 3 at that distance moves the pen about 1 mm, and every tenfold increase adds one to the magnitude. [3][4]

![From the video: Richter's rule. At 100 km, a magnitude 3 wiggles about 1 mm, a 4 about 1 cm and a 5 about 10 cm. By magnitude 6 the trace no longer fits on the paper (extrapolated for the same instrument)](/uploads/blog/ep02-richter-rule.jpg)

![Charles Richter, around 1970. Image: Caltech, via USGS, Wikimedia Commons, public domain](/uploads/blog/photo-richter.jpg)

> **Did you know?** In his 1935 paper Richter wrote that the only earlier work he knew of along these lines was by the Japanese seismologist Kiyoo Wadati, who had plotted maximum amplitude against distance. The word "magnitude" was suggested by his colleague Harry Wood. [3][4] Wadati is the same person who showed that earthquakes can happen hundreds of kilometres deep, which came up in the previous post.

There's a limit people tend to forget. The original scale only applied to California earthquakes within 600 km, and its distance correction was worked out for the crust under southern California. [2] Other regions later built their own local magnitudes (ML) on the same idea, recalibrated for local conditions.

### Why it fails for big earthquakes

The trouble starts with large earthquakes. A big rupture can go on for minutes, and much of its energy goes into long, slow waves. Wiggle-based scales read short, quick waves, and beyond a certain size those stop getting bigger. [5][6]

![From the video: like a bathroom scale. It weighs a person fine, but an elephant and a loaded lorry both push the needle to the last mark and it stops there](/uploads/blog/ep02-scale-saturation.jpg)

This is called **saturation**, and each scale tops out in a different place: [7]

| Scale | What it reads | Roughly where it saturates |
| --- | --- | --- |
| ML (local magnitude, the Richter family) | short-period wiggles at close range | about 6.5 |
| mb (body-wave magnitude) | P-waves at long range | about 6.5 |
| Ms (surface-wave magnitude) | surface waves with periods around 20 s | about 8.3 |
| Mw (Moment Magnitude) | the fault slip itself | doesn't saturate |

### Moment Magnitude: measure the slip itself

In 1979 Thomas Hanks and Hiroo Kanamori proposed Moment Magnitude. Instead of reading a wiggle, it works out the size of the slip underground: the area of fault in contact, times how far it slipped, times how stiff the rock is (its rigidity). That product is the seismic moment, M₀. [8]

![From the video: two books standing in for the rock on either side of a fault. Contact area, slip and rigidity multiply together to give the seismic moment (illustration)](/uploads/blog/ep02-three-factors.jpg)

![Hiroo Kanamori in 2022. Image: Christopher Michel, Wikimedia Commons, CC BY-SA 4.0](/uploads/blog/photo-kanamori.jpg)

The clever part is that the formula was built to line up with the older scales, so switching rulers doesn't make the number suddenly jump. [8][9] Today USGS uses Mw as the authoritative magnitude for large earthquakes. [7]

> **Try it yourself.** USGS gives Mw = ⅔ × (log₁₀M₀ − 9.1), with M₀ in newton metres. [2] For the earthquake off Sabah, USGS lists M₀ = 4.73 × 10¹⁹ N·m. [10] Then log₁₀(4.73 × 10¹⁹) ≈ 19.67; take away 9.1 to get 10.57; multiply by ⅔ and you get about 7.05, which rounds to 7.1.

### Back to the news

So the Segamat and Sabah numbers come from two different rulers. The USGS 4.0 for Segamat is ml, a local magnitude that reads the wiggle. The 7.1 for Sabah is Mww, which is based on fault slip. [10][11] Small earthquakes get the small-earthquake ruler and large ones get the large-earthquake ruler.

As for the "Richter scale" in Malaysian news, I couldn't find anywhere in MetMalaysia's press releases that says which magnitude type they use. I'm honestly not sure.

## Question two: who worked it out?

Agencies use different stations and different methods, so one earthquake often ends up with several numbers. [9] The Sabah quake is a good example:

| Agency | Magnitude | Type |
| --- | --- | --- |
| USGS | 7.1 | Mww (authoritative); also Mwc 7.1 and Mwb 7.1 |
| MetMalaysia | 6.8 | not stated in the press release |

A difference of a few tenths is completely normal in seismology. When you compare two earthquakes, use numbers from the same agency. At the end of episode 1 I compared MetMalaysia's 4.1 with USGS's 7.1, which strictly speaking mixes two agencies, so this episode uses the USGS pair, 4.0 and 7.1.

### So how big was 2004?

The bigger the earthquake, the more numbers there are. For the 2004 Sumatra-Andaman earthquake, the USGS catalogue alone holds several: [12]

| Value | Source |
| --- | --- |
| 8.5 | USGS catalogue, Me (energy magnitude) |
| 9.0 | USGS catalogue, Mwc |
| **9.1** | **USGS authoritative value, Mw** |
| 9.2 | USGS catalogue, Mww |
| 9.31 | USGS catalogue, Mw |
| 9.3 | Stein & Okal (2005), using the Earth's free oscillations, much slower waves [13] |

![From the video: aftershocks of the 2004 earthquake (USGS, 26 December 2004 to 31 January 2005, M4.5+) line up for more than 1,000 km along the Sunda Trench. A wiggle-based scale would underestimate a quake like this; Moment Magnitude gives 9.1. Plate boundaries: PB2002 (Bird 2003). Maps: Natural Earth](/uploads/blog/ep02-sumatra-2004.jpg)

Why the spread? The bigger the earthquake, the longer the rupture lasts and the more of its energy sits in the slowest waves. Use only faster waves and you get a lower number; bring in slower ones and it goes up. Stein and Okal used extremely long-period waves and found a seismic moment about 2.5 times the first estimate. [13]

> **Correction.** In my older video on the "sleeping giant" under the Malay Peninsula, I gave the 2004 earthquake as magnitude 9.3, and elsewhere as 9.2. Both figures have a source; I just didn't say who calculated them or how. If I could only give one now, I'd use the USGS authoritative value of 9.1 and note that some studies reach 9.3.

## Question three: how far away, and how deep?

Magnitude is the size of the earthquake itself, and ideally each earthquake has one. How hard your house shakes is a different thing, called **intensity**. It changes from place to place depending on distance, depth and the ground under your feet. [2]

The Sabah earthquake shows this nicely. It released more than ten thousand times the energy of the Segamat one, yet caused very little damage, because it was over 600 km deep and the waves had spread out by the time they reached the surface. [10][14]

Countries use different intensity scales. The USA commonly uses the Modified Mercalli Intensity scale, written in Roman numerals from I to XII. [15] The Japan Meteorological Agency uses *shindo*, from 0 to 7, with 5 and 6 each split into lower and upper, ten levels in all. [16] So Japanese news gives two numbers at once, say M7.1 and a maximum shindo of 5 upper. The first is how big the earthquake was, the second how hard one place shook.

## How common are the big ones?

If each step up is 32 times the energy, big earthquakes should be much rarer than small ones. I counted fifty years of USGS catalogue entries around Malaysia, including Sumatra:

![How often earthquakes happen around Malaysia (7°S–10°N, 88–115°E), USGS catalogue 1976–2025, M5+. Logarithmic vertical axis. The area includes the subduction zone off Sumatra, where most of the large events happen, not the Malay Peninsula](/uploads/blog/magnitude-frequency-en.png)

There are about sixty magnitude 5s a year, about four magnitude 6s, roughly one magnitude 7 every two years and one magnitude 8 or larger about every ten years. [17] Each step down in magnitude means roughly ten times as many earthquakes, the well-known Gutenberg–Richter relation. [6] Bear in mind that these fifty years include the 2004 and 2005 great earthquakes and their aftershocks, so these are averages, not forecasts.

## Another way to picture magnitude

At the end of the video I used fault length to picture magnitude. In 1994 Wells and Coppersmith compiled data on a few hundred shallow earthquakes and found empirical relationships between magnitude and rupture length: [18]

![From the video: a magnitude 4 breaks about a kilometre of fault, a magnitude 7 about fifty kilometres, roughly the distance from KL to Seremban (empirical estimate, illustration, not a real fault)](/uploads/blog/ep02-kl-seremban.jpg)

| Magnitude | Typical rupture length | Roughly like |
| --- | --- | --- |
| 4 | about 0.8 km | two laps of a 400 m track |
| 5 | about 3 km | a walk of just over half an hour |
| 6 | about 13 km | |
| 7 | about 50 km | KL to Seremban |
| 8 | about 190 km | KL to Melaka and then some |

These are typical values, and earthquakes of the same magnitude can differ by several times. The relations come from shallow crustal earthquakes of magnitude 4.8 and above, so magnitude 4 is an extrapolation and 8 is at the edge. For an earthquake like Sabah's, over 600 km deep, they don't apply at all. [18]

## Next time you see a magnitude, ask three things

1. **Which ruler?** Small earthquakes are usually a local magnitude; for big ones you want Mw.
2. **Who worked it out?** To compare two earthquakes, use the same agency. A few tenths' difference is normal, but 0.3 already means nearly three times the energy.
3. **How far away, and how deep?** Magnitude tells you how big the earthquake was; intensity tells you how hard your house shook.

Next time: P-waves and S-waves, and why an earthquake often starts with a jolt up and down before the side-to-side shaking.

## References

1. The Star TV (2025-11-03). Minor 2.7-magnitude earthquake recorded in Segamat, says MetMalaysia. [https://thestartv.com/v/minor-2-7-magnitude-earthquake-recorded-in-segamat-says-metmalaysia](https://thestartv.com/v/minor-2-7-magnitude-earthquake-recorded-in-segamat-says-metmalaysia)
2. USGS. Earthquake Magnitude, Energy Release, and Shaking Intensity. [https://www.usgs.gov/programs/earthquake-hazards/earthquake-magnitude-energy-release-and-shaking-intensity](https://www.usgs.gov/programs/earthquake-hazards/earthquake-magnitude-energy-release-and-shaking-intensity)
3. Richter, C. F. (1935). An instrumental earthquake magnitude scale. *BSSA* 25(1), 1–32. [https://ncedc.org/ftp/outgoing/peggy/ML/Richter_1935.pdf](https://ncedc.org/ftp/outgoing/peggy/ML/Richter_1935.pdf)
4. Boore, D. M. (1989). The Richter scale: its development and use for determining earthquake source parameters. *Tectonophysics* 166, 1–14. [https://doi.org/10.1016/0040-1951(89)90200-X](https://doi.org/10.1016/0040-1951(89)90200-X)
5. Kanamori, H. (1983). Magnitude scale and quantification of earthquakes. *Tectonophysics* 93, 185–199. [https://doi.org/10.1016/0040-1951(83)90273-1](https://doi.org/10.1016/0040-1951(83)90273-1)
6. Stein, S. & Wysession, M. (2003). *An Introduction to Seismology, Earthquakes, and Earth Structure*. Blackwell. (Magnitude, saturation, the energy relation log E = 1.5M + 4.8, the Gutenberg–Richter relation)
7. USGS. Magnitude Types. [https://www.usgs.gov/programs/earthquake-hazards/magnitude-types](https://www.usgs.gov/programs/earthquake-hazards/magnitude-types)
8. Hanks, T. C. & Kanamori, H. (1979). A moment magnitude scale. *JGR* 84(B5), 2348–2350. [https://doi.org/10.1029/JB084iB05p02348](https://doi.org/10.1029/JB084iB05p02348)
9. USGS FAQ. Moment magnitude, Richter scale – what are the different magnitude scales, and why are there so many? [https://www.usgs.gov/faqs/moment-magnitude-richter-scale-what-are-different-magnitude-scales-and-why-are-there-so-many](https://www.usgs.gov/faqs/moment-magnitude-richter-scale-what-are-different-magnitude-scales-and-why-are-there-so-many)
10. USGS ComCat. M 7.1 – 57 km NNW of Kota Belud, Malaysia (us6000sasz). [https://earthquake.usgs.gov/earthquakes/eventpage/us6000sasz](https://earthquake.usgs.gov/earthquakes/eventpage/us6000sasz)
11. USGS ComCat. M 4.0 – 13 km ESE of Segamat, Malaysia (us6000r3fi). [https://earthquake.usgs.gov/earthquakes/eventpage/us6000r3fi](https://earthquake.usgs.gov/earthquakes/eventpage/us6000r3fi)
12. USGS ComCat. 2004 Sumatra – Andaman Islands Earthquake. [https://earthquake.usgs.gov/earthquakes/eventpage/official20041226005853450_30](https://earthquake.usgs.gov/earthquakes/eventpage/official20041226005853450_30)
13. Stein, S. & Okal, E. A. (2005). Speed and size of the Sumatra earthquake. *Nature* 434, 581–582. [https://doi.org/10.1038/434581a](https://doi.org/10.1038/434581a)
14. Bernama (2026-02-23). MetMalaysia: 6.8-magnitude quake off Sabah. [https://www.bernama.com/tv/news.php?id=2526438](https://www.bernama.com/tv/news.php?id=2526438)
15. USGS. The Modified Mercalli Intensity Scale. [https://www.usgs.gov/programs/earthquake-hazards/modified-mercalli-intensity-scale](https://www.usgs.gov/programs/earthquake-hazards/modified-mercalli-intensity-scale)
16. Japan Meteorological Agency. 震度について (About seismic intensity). [https://www.jma.go.jp/jma/kishou/know/shindo/index.html](https://www.jma.go.jp/jma/kishou/know/shindo/index.html)
17. USGS ComCat query (7°S–10°N, 88–115°E, 1976–2025, M≥5). [https://earthquake.usgs.gov/fdsnws/event/1/query?format=csv&orderby=magnitude&starttime=1976-01-01&endtime=2026-01-01&minlatitude=-7&maxlatitude=10&minlongitude=88&maxlongitude=115&minmagnitude=5](https://earthquake.usgs.gov/fdsnws/event/1/query?format=csv&orderby=magnitude&starttime=1976-01-01&endtime=2026-01-01&minlatitude=-7&maxlatitude=10&minlongitude=88&maxlongitude=115&minmagnitude=5)
18. Wells, D. L. & Coppersmith, K. J. (1994). New empirical relationships among magnitude, rupture length, rupture width, rupture area, and surface displacement. *BSSA* 84(4), 974–1002.

**Image credits**: Charles Richter, Caltech, via USGS, Wikimedia Commons, public domain. Hiroo Kanamori, Christopher Michel, Wikimedia Commons, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). All other images are frames from the video or figures I drew from USGS data.
