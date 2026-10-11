---
title: "What the Pin on the Map Doesn't Tell You: Reading an Earthquake Report"
slug: epicentre-hypocentre
description: The "epicentre" in the news is just a point on the surface. Here's
  how to read an earthquake report properly, which numbers to trust, which ones
  were simply filled in, and how to check for yourself on the USGS website.
date: 2026-10-11
category: geo
lang: en
cover: /uploads/epicentre-hypocentre-cover.png
coverAlt: A cross-section through rock layers, with a pin on the surface marking
  the epicentre and a red dot directly below marking the hypocentre
youtubeId: tCVqOF6OwoI
tags:
  - earthquakes
  - epicentre
  - hypocentre
  - Segamat
  - Sabah
draft: false
---
Most earthquake news boils down to three lines:

> Magnitude 4.1. Epicentre 5 km west of Segamat. Depth 10 km.

They read like measurements taken with a ruler. To someone who locates earthquakes for a living, though, those three numbers deserve very different amounts of trust. One is pretty solid, one carries an uncertainty of more than ten kilometres, and one was essentially filled in by hand.

The video starts from the definitions. In this post I want to come at it from the other end: take an earthquake report apart, look at where each number comes from and how far to trust it, and finish with a small exercise you can try yourself.

## Two words, sorted out

The **hypocentre** (or focus) is the point underground where the rock starts to break. The **epicentre** is the point on the surface directly above it. The distance between the two is the **depth**.[1]

![From the video: on a map you only see the epicentre (left); in cross-section the hypocentre sits directly beneath it, and the distance between them is the depth (schematic)](/uploads/blog/ep01-two-points.jpg)

So the pin on a news map is a point underground projected up onto the surface. It tells you where, and quietly throws away how deep.

> **Did you know?** Japanese earthquake bulletins talk about the 震源地 and the 震源の深さ, which sounds like they're describing the hypocentre. But the Japan Meteorological Agency's own explanation is that the 震源 is the point underground where the rupture starts, the 震央 is the point on the surface above it, and the everyday word 震源地 is in practice given as the **place name of the epicentre**.[2] Even Japanese news language blurs the two.

## An earthquake report, taken apart

Take the Segamat earthquake of 24 August 2025. Both MetMalaysia and USGS published solutions.[3][4] Put them side by side and each number turns out to have its own personality:


| Number in the report | My take | Why |
| -------------------- | -------- | -------------------------------------------------------------------------- |
| Epicentre | moderate | the two agencies' locations are more than 10 km apart |
| Magnitude | moderate | different agencies and magnitude types (ML, Mw) can differ by a few tenths |
| Depth | lowest | the 10 km was filled in, as explained below |


![From the video: the same Segamat earthquake, with MetMalaysia's epicentre (gold) and USGS's (cyan) more than ten kilometres apart. MetMalaysia only said "about 5 km west", so its pin is placed from that description](/uploads/blog/ep01-two-answers.jpg)

That doesn't mean anyone got it wrong. Use different stations, or assume different wave speeds in the ground, and you'll get a different answer. The key point is that **every hypocentre is an estimate, and every estimate comes with an uncertainty.**

## One station only hears "how far"

The moment an earthquake starts, it sends out two main kinds of wave: the fast P-wave and the slower S-wave. Think of two runners setting off together at different speeds. The longer the race, the bigger the gap between them at the finish.

![From the video: a near station and a far station. The gap between the fast wave (cyan) and the slow wave (gold) grows with distance (schematic)](/uploads/blog/ep01-time-gap.jpg)

> **Try it yourself:** for fairly nearby earthquakes, multiply the gap between the S-wave and P-wave arrivals (in seconds) by 8, and you get roughly the distance in kilometres.[5] A 5-second gap means about 40 km; a 10-second gap, about 80 km. For distant earthquakes the multiplier grows and you need a proper travel-time table.

What a single station can't tell you is the direction. Draw a circle around each of three stations and they cross at the epicentre. That's the textbook method, and the one I showed in the video:

![From the video: one circle each around Kuala Lumpur, Kuantan and Johor Bahru, crossing at Segamat (illustrative station positions, not real MetMalaysia stations). Map: Natural Earth](/uploads/blog/ep01-three-circles.jpg)

Real location work is a bit more involved. The earthquake is underground, so there are four unknowns: latitude, longitude, depth and origin time. A computer takes the arrival times from tens or hundreds of stations and keeps adjusting those four numbers until they fit all the observations as well as possible.[6][7]

## Depth: the hardest number of all

Why is depth so hard? Because depth and origin time can trade off against each other. An earthquake that's a little deeper but started a little earlier can produce almost the same arrival times at distant stations as one that's shallower and later.

![From the video: a shallower, later hypocentre and a deeper, earlier one give almost the same arrival times at the outer stations; only a station near the epicentre (right) tells them apart (schematic, times illustrative)](/uploads/blog/ep01-depth-vs-time.jpg)

The best way to break the tie is a station close to the epicentre. The USGS rule of thumb is that depth is only reliable when **the nearest station is closer to the epicentre than the earthquake is deep**.[8]

That's a big part of why Japanese earthquake depths are usually so good. Japan's Hi-net has nearly 800 high-sensitivity stations, about one every 20 km, most of them at the bottom of boreholes a hundred metres or more deep to get away from wind, waves and traffic noise.[9] Almost every earthquake has a station somewhere near its epicentre.

Malaysia has nothing that dense. For the Segamat earthquake, the nearest station USGS used was more than 100 km away,[4] far further than the 10 km depth it reported.

### Where "10 km" comes from

When there isn't enough data to pin down the depth, catalogues fill in a sensible default, known as a **fixed depth**. USGS and Germany's GEOFON both use 10 km, because reliable depths for shallow earthquakes in many regions average out around there.[8][10] USGS used to use 33 km and later switched to 10.[8]

You can see the habit clearly in the data. Here are the shallow earthquakes in Southeast Asia from the USGS catalogue for January to September 2026:

![Depths of shallow earthquakes in Southeast Asia (USGS ComCat, January–September 2026, M4.5+, shallower than 40 km, queried 11 October 2026). The 10 km bar towers over the rest. There's also a spike at 35 km that I haven't found an official explanation for yet](/uploads/blog/depth-histogram-en.png)

Out of more than 900 earthquakes, over 500 have a depth of exactly 10.0 km.[11] The Earth isn't that tidy. People are.

> **A correction:** in my earlier video on Segamat, I repeated the news and said the earthquake was 10 km deep. When I later checked the USGS record, the depth was marked *operator assigned*, meaning it was set by hand. MetMalaysia hasn't said how it arrived at its 10 km.

## Exercise: check an earthquake on USGS yourself

You don't need to be a seismologist to judge whether a depth is trustworthy. On the USGS event page for an earthquake (Segamat, for instance), open the details of the Origin and look at these fields:[4]


| Field | Segamat | How to read it |
| ------------------ | --------------------- | ------------------------------------------------------ |
| Depth | 10 km | looks precise |
| Depth Type | operator assigned | set by hand, not calculated |
| Number of Stations | 5 | only five stations used |
| Minimum Distance | 1.137° (about 126 km) | the nearest station is far further away than the depth |
| Horizontal Error | 6.7 km | the uncertainty in the epicentre itself |
| Depth Error | none | it wasn't calculated, so there's no error to give |


Next time you see a depth of exactly 10 km, check the Depth Type and the Minimum Distance. If the nearest station was a hundred kilometres away, put a question mark next to that depth.

## The deepest earthquakes are the most precise

Here's the twist. The earthquake more than 600 km under the sea off Sabah in February 2026 had its depth pinned down by USGS, using broadband waveform modelling, to within about 2 km.[12]

Why are deep ones more precise? As well as the direct P-wave, some energy travels upwards first, bounces off the Earth's surface and then heads to the station. This reflected wave is a **depth phase** (pP, for example). It arrives slightly after the direct wave, and the delay depends almost entirely on depth.[13] The deeper the earthquake, the further apart the two arrivals are on the seismogram, and the easier they are to measure.

![From the video: two earthquakes of the same size. The shallow one (left) shakes the few houses right above it hard; the deep one's waves have a long way to travel up (schematic)](/uploads/blog/ep01-shallow-deep.jpg)

It also explains why the Sabah earthquake, three magnitude units bigger than Segamat, didn't cause any damage. By the time its waves had climbed 600-odd kilometres to the surface they'd spread out a lot, so the shaking was weak but felt over a huge area, across the whole of Sabah.[12][14]

> **How deep can earthquakes go?** About 700 km. The first person to show convincingly that earthquakes can start that deep was the Japanese seismologist Kiyoo Wadati. Working on Japanese earthquakes in the late 1920s, he found some were hundreds of kilometres down, getting deeper towards the Sea of Japan side and lining up on a sloping plane.[15] We now know that plane is a subducting plate, and it's called the **Wadati–Benioff zone**. Every earthquake deeper than 70 km happens inside one of these sinking slabs.[13]

How rock can break at all 600 km down, under enormous pressure, is still an open question. The main ideas, such as minerals suddenly changing to a denser form, water being released from hydrous minerals, or runaway heating along a shear zone, each explain part of what we observe, but none of them explains all of it.[16] It's one of my favourite unsolved problems in seismology.

## Big earthquakes aren't points

One last thing that's easy to miss: the hypocentre is only where the rupture **starts**.

![From the video: the 2004 Sumatra–Andaman earthquake started at its epicentre (star) in the south and tore northwards for over a thousand kilometres in about eight minutes. Data: Ni et al. 2005; Krüger & Ohrnberger 2005. Map: Natural Earth](/uploads/blog/ep01-rupture-2004.jpg)

The 2004 Sumatra–Andaman earthquake began at its southern end and tore northwards for roughly 1,150 to 1,200 km over about eight minutes.[17][18] GPS data showed that most of the energy was released at least 200 km north of the epicentre.[19]

For an earthquake like that, the pin on the news map only marks the starting line. The area around the epicentre isn't necessarily where the shaking was worst.

## Three questions for the next earthquake headline

1. **How deep was it?** For the same magnitude, shallow quakes shake harder and deep ones are felt further.
2. **Was the depth calculated or filled in?** If it's exactly 10 km, be sceptical.
3. **Was it a point or a whole fault?** For anything above magnitude 7, the rupture can run for tens or hundreds of kilometres.

The pin on the map is only the start of the story. The rest of it is buried underground.

Next time I'll get into magnitude: Segamat was 4.1 and Sabah 7.1, a difference of just 3, so how much more energy is that? And what's the actual difference between the Richter scale and moment magnitude?

## References

1. USGS FAQ. What does it mean that the earthquake occurred at a depth of 0 km? [https://www.usgs.gov/faqs/what-does-it-mean-earthquake-occurred-a-depth-0-km-how-can-earthquake-have-a-negative-depth](https://www.usgs.gov/faqs/what-does-it-mean-earthquake-occurred-a-depth-0-km-how-can-earthquake-have-a-negative-depth)
2. Japan Meteorological Agency, Nagoya Local Meteorological Office. 震源と震央 (hypocentre and epicentre). [https://www.data.jma.go.jp/nagoya/shosai/info/mini-jishin/singen.html](https://www.data.jma.go.jp/nagoya/shosai/info/mini-jishin/singen.html)
3. Bernama (24 August 2025). MetMalaysia: 4.1-magnitude quake strikes Segamat. [https://www.bernama.com/en/general/news.php?id=2459992](https://www.bernama.com/en/general/news.php?id=2459992)
4. USGS ComCat. M 4.0 – 13 km ESE of Segamat, Malaysia (us6000r3fi). [https://earthquake.usgs.gov/earthquakes/eventpage/us6000r3fi](https://earthquake.usgs.gov/earthquakes/eventpage/us6000r3fi)
5. IRIS. How are earthquakes located? [https://dev.iris.edu/hq/inclass/fact-sheet/13](https://dev.iris.edu/hq/inclass/fact-sheet/13) ; USGS / NOAA ITTI. Earthquake location (D ≈ 8 × (S−P)). [https://nctr.pmel.noaa.gov/education/ITTI/seismic/EQ_location_USGS.pdf](https://nctr.pmel.noaa.gov/education/ITTI/seismic/EQ_location_USGS.pdf)
6. Stein, S. & Wysession, M. (2003). *An Introduction to Seismology, Earthquakes, and Earth Structure*. Blackwell.
7. Kennett, B. L. N. Earthquake location. CMA Proceedings vol. 31, ANU. [https://maths.anu.edu.au/files/CMAProcVol31-Kennett.pdf](https://maths.anu.edu.au/files/CMAProcVol31-Kennett.pdf)
8. USGS FAQ. Why do so many earthquakes occur at a depth of 10 km? [https://www.usgs.gov/faqs/why-do-so-many-earthquakes-occur-depth-10km](https://www.usgs.gov/faqs/why-do-so-many-earthquakes-occur-depth-10km)
9. NIED MOWLAS. Our networks (Hi-net: nearly 800 stations, average spacing 20 km). [https://www.mowlas.bosai.go.jp/network/?LANG=en](https://www.mowlas.bosai.go.jp/network/?LANG=en)
10. GEOFON / GFZ. About the earthquake list (FAQ). [https://geofon.gfz.de/eqinfo/faq/](https://geofon.gfz.de/eqinfo/faq/)
11. USGS ComCat query (Southeast Asia 90–130°E, 10°S–20°N, January–September 2026, M≥4.5, depth < 40 km). [https://earthquake.usgs.gov/fdsnws/event/1/query?format=csv&starttime=2026-01-01&endtime=2026-10-01&minlatitude=-10&maxlatitude=20&minlongitude=90&maxlongitude=130&minmagnitude=4.5&maxdepth=40](https://earthquake.usgs.gov/fdsnws/event/1/query?format=csv&starttime=2026-01-01&endtime=2026-10-01&minlatitude=-10&maxlatitude=20&minlongitude=90&maxlongitude=130&minmagnitude=4.5&maxdepth=40)
12. USGS ComCat. M 7.1 – 57 km NNW of Kota Belud, Malaysia (us6000sasz). [https://earthquake.usgs.gov/earthquakes/eventpage/us6000sasz](https://earthquake.usgs.gov/earthquakes/eventpage/us6000sasz)
13. USGS. Determining the Depth of an Earthquake. [https://www.usgs.gov/programs/earthquake-hazards/determining-depth-earthquake](https://www.usgs.gov/programs/earthquake-hazards/determining-depth-earthquake)
14. Bernama (23 February 2026). MetMalaysia: 6.8-magnitude quake off Sabah. [https://www.bernama.com/tv/news.php?id=2526438](https://www.bernama.com/tv/news.php?id=2526438)
15. Frohlich, C. (1987). Kiyoo Wadati and early research on deep focus earthquakes. *Journal of Geophysical Research* 92(B13), 13777–13788. [https://doi.org/10.1029/JB092iB13p13777](https://doi.org/10.1029/JB092iB13p13777)
16. Zhan, Z. (2020). Mechanisms and implications of deep earthquakes. *Annual Review of Earth and Planetary Sciences* 48. [https://resolver.caltech.edu/CaltechAUTHORS:20200102-143031414](https://resolver.caltech.edu/CaltechAUTHORS:20200102-143031414)
17. Ni, S., Kanamori, H. & Helmberger, D. (2005). Energy radiation from the Sumatra earthquake. *Nature* 434, 582. [https://doi.org/10.1038/434582a](https://doi.org/10.1038/434582a)
18. Krüger, F. & Ohrnberger, M. (2005). Tracking the rupture of the Mw = 9.3 Sumatra earthquake over 1,150 km at teleseismic distance. *Nature* 435, 937–939. [https://doi.org/10.1038/nature03696](https://doi.org/10.1038/nature03696)
19. Vigny, C. et al. (2005). Insight into the 2004 Sumatra–Andaman earthquake from GPS measurements in southeast Asia. *Nature* 436, 201–206. [https://doi.org/10.1038/nature03937](https://doi.org/10.1038/nature03937)

