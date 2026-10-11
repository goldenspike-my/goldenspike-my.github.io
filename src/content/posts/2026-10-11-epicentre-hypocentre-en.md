---
title: "The Epicentre Isn't Where an Earthquake Starts: Epicentre vs Hypocentre"
slug: epicentre-hypocentre
description: The epicentre is just a point on the map. The earthquake actually starts somewhere underground, and that "10 km deep" you keep seeing in the news often wasn't measured at all.
date: 2026-10-11
category: geo
lang: en
cover: /uploads/epicentre-hypocentre-cover.png
coverAlt: A cross-section through rock layers, with a pin on the surface marking the epicentre and a red dot directly below marking the hypocentre
youtubeId: tCVqOF6OwoI
tags:
  - earthquakes
  - epicentre
  - hypocentre
  - Segamat
  - Sabah
draft: false
---
On Sunday morning, 24 August 2025, Segamat had an earthquake. The news said the epicentre was about 5 km west of town, at a depth of 10 km.[1]

A lot of people took that to mean the epicentre is where the earthquake happened. It isn't. And that "10 km" may not have been measured at all.

This is the written companion to the video. The video works in three layers, the basics, how it works, and the deeper stuff, and here I've added a bit more to each: how to estimate distance from a single seismogram, how seismologists "see" depth, and a few things I've learnt doing earthquake location work in Kyoto.

## The basics: a point underground

An earthquake is rock underground suddenly breaking and slipping. The break always starts at one particular point, and that starting point is the **hypocentre** (also called the focus). Draw a line straight up from the hypocentre, and where it meets the ground is the **epicentre**.[2]

In the video I used a glass of water. A coin at the bottom is the hypocentre and the water's surface is the ground. Look straight down, and the spot on the surface directly above the coin is the epicentre.

> The epicentre tells you where. The hypocentre tells you one more thing: how deep.

The distance between the two is the **depth**.

The news always gives the epicentre for a practical reason: you can put it on a flat map, and generally the closer you are to it, the harder the shaking.

## How it works: finding the point

The moment the rock breaks, it sends out **seismic waves** in every direction, and **seismic stations** all over the region record when they arrive.

The waves travel at different speeds. The faster P-wave arrives first and the slower S-wave arrives later, and the further away the earthquake, the bigger the gap between them. So from that gap alone, a single station can work out how far away the earthquake was.

> **Rule of thumb:** for fairly nearby earthquakes, multiply the gap between the S-wave and P-wave arrivals (in seconds) by 8 and you get roughly the distance in kilometres.[3] A gap of 5 seconds means the quake was about 40 km away. For distant earthquakes the multiplier grows, and you need a proper travel-time table.

What one station can't tell you is the direction. Draw a circle around the station with that distance as the radius, and the earthquake is somewhere on that circle. A second station gives a second circle, and the two circles cross at two points. The third station's circle passes through one of them, and that's the epicentre.

That's the classroom version, of course. Real earthquakes happen underground, not on paper, so there are actually **four unknowns**: longitude, latitude, depth and the time the quake started. In theory you need at least four stations. In practice, seismologists use tens or hundreds of stations and let a computer find the answer that fits all the observations best.[4][5]

### Three depth classes

Once the depth is known, earthquakes are sorted into three groups:[6]

| Class | Depth |
|---|---|
| Shallow | 0–70 km |
| Intermediate | 70–300 km |
| Deep | 300–700 km |

Below that, earthquakes all but disappear. And according to the USGS, every earthquake deeper than 70 km happens inside a slab of plate that has sunk into the mantle.[6]

### Why depth matters

For two earthquakes of the same size, the shallower one is closer to us, its energy hasn't had time to spread out, and the shaking is stronger. The deeper one has to send its waves a long way up, so the shaking is weaker but it's felt over a much wider area.

## The deeper stuff: a hypocentre is an estimate

Let's compare two Malaysian earthquakes.

**Segamat, August 2025:** magnitude 4.1. Not big, but very shallow. Schools nearby, and even the walls of the hospital, ended up with minor cracks.[1][7]

**Off Sabah, February 2026:** a magnitude 7-plus earthquake, three magnitude units bigger than Segamat, but more than 600 km underground. It was felt across Sabah and even by some people in Sarawak and the peninsula, yet caused no casualties or damage.[8][9]

Interestingly, different agencies come up with different numbers for the same earthquake:

| | MetMalaysia | USGS |
|---|---|---|
| Off Sabah (Feb 2026) | magnitude 6.8, 678 km deep | magnitude 7.1 (Mww), 629 km deep |
| Segamat (Aug 2025) | epicentre about 5 km west of town | epicentre about 13 km east-south-east of Segamat |

The two Segamat epicentres are more than ten kilometres apart.[1][10]

That doesn't mean anyone got it wrong. Use different stations, or assume different wave speeds in the ground, and you'll get a different answer. **Every hypocentre comes with an uncertainty.** And those ten-odd kilometres matter: before you can say which fault caused an earthquake, you need to know how accurate the epicentre is.

### Depth is the hardest part

The biggest uncertainty is usually the depth, because depth and start time can trade off against each other. A hypocentre that's a bit deeper but started a bit earlier can produce almost the same arrival times at the stations, and the computer struggles to tell the two apart.[4]

The best fix is having a station close to the hypocentre. The USGS rule of thumb is that depth is only well constrained when the nearest station is closer to the epicentre than the earthquake is deep.[11]

> This is exactly the problem I deal with every day doing earthquake location at Kyoto University.

> **Another trick: depth phases.** For distant earthquakes, seismologists also look for a **depth phase**. Some of the energy heads upwards first, bounces off the Earth's surface and then travels to the station. This reflected wave, called pP, arrives a little after the direct P-wave, and the delay depends almost entirely on depth. Measure the gap between pP and P and you get a much better depth.[6]

### That "10 km"

This is why so many shallow earthquakes have a depth of **exactly** 10 km. I checked the USGS catalogue: from January to September 2026, there were 921 shallow earthquakes in Southeast Asia (M4.5 and above, shallower than 40 km), and 523 of them had a depth of exactly 10.0 km.[12]

Often that's a **fixed depth**: when there isn't enough data to pin down the depth, a reasonable default goes in instead.[11][13] In the USGS solution for Segamat, the depth field literally says *operator assigned*, meaning it was set by hand, because the nearest station used was more than 100 km away.[10] MetMalaysia hasn't said how it arrived at its 10 km.

So a depth of 10 km doesn't necessarily mean 10 km. Even my own earlier video on Segamat repeated the news and said 10 km.

### The deepest one was the most precise

Flip it round, and the Sabah earthquake 600-odd kilometres down had its depth worked out by USGS from broadband waveform modelling to within about 2 km.[9] In very deep earthquakes the direct wave and the surface-reflected depth phase arrive well apart, so they're usually easier to tell apart and the depth comes out more precise.

## Big earthquakes aren't points

One more thing. A big earthquake isn't one point breaking, it's a whole stretch of fault.

The 2004 Sumatra–Andaman earthquake started at its epicentre at the southern end and tore northwards for roughly 1,150 to 1,200 km, lasting about eight minutes.[14][15] GPS data showed that the bulk of the energy was released at least 200 km north of the epicentre.[16]

For an earthquake like that, the hypocentre is just the starting line, and the area around the epicentre isn't necessarily where the shaking was worst.

## Next time you see the news

So next time the news gives you an epicentre, ask one more question: how deep was it, and how sure are they?

The pin on the map is only the start of the story. The rest of it is buried underground.

In the next episode I'll get into magnitude: Segamat was 4.1 and Sabah 7.1, a difference of just 3, so how much more energy is that? And what's the difference between the Richter scale and moment magnitude?

## References

1. Bernama (24 August 2025). MetMalaysia: 4.1-magnitude quake strikes Segamat. https://www.bernama.com/en/general/news.php?id=2459992
2. USGS FAQ. What does it mean that the earthquake occurred at a depth of 0 km? https://www.usgs.gov/faqs/what-does-it-mean-earthquake-occurred-a-depth-0-km-how-can-earthquake-have-a-negative-depth
3. IRIS. How are earthquakes located? https://dev.iris.edu/hq/inclass/fact-sheet/13 ; USGS / NOAA ITTI. Earthquake location (D ≈ 8 × (S−P)). https://nctr.pmel.noaa.gov/education/ITTI/seismic/EQ_location_USGS.pdf
4. Stein, S. & Wysession, M. (2003). *An Introduction to Seismology, Earthquakes, and Earth Structure*. Blackwell.
5. Kennett, B. L. N. Earthquake location. CMA Proceedings vol. 31, ANU. https://maths.anu.edu.au/files/CMAProcVol31-Kennett.pdf
6. USGS. Determining the Depth of an Earthquake. https://www.usgs.gov/programs/earthquake-hazards/determining-depth-earthquake
7. Malay Mail (8 September 2025). Segamat quakes leave cracks in schools, hospital and homes. https://www.malaymail.com/news/malaysia/2025/09/08/segamat-quakes-leave-cracks-in-schools-hospital-and-homes-says-ahmad-maslan-rm550000-needed-for-urgent-repairs/190461
8. Bernama (23 February 2026). MetMalaysia: 6.8-magnitude quake off Sabah. https://www.bernama.com/tv/news.php?id=2526438
9. USGS ComCat. M 7.1 – 57 km NNW of Kota Belud, Malaysia (us6000sasz). https://earthquake.usgs.gov/earthquakes/eventpage/us6000sasz
10. USGS ComCat. M 4.0 – 13 km ESE of Segamat, Malaysia (us6000r3fi). https://earthquake.usgs.gov/earthquakes/eventpage/us6000r3fi
11. USGS FAQ. Why do so many earthquakes occur at a depth of 10 km? https://www.usgs.gov/faqs/why-do-so-many-earthquakes-occur-depth-10km
12. USGS ComCat query (Southeast Asia 90–130°E, 10°S–20°N, January–September 2026, M≥4.5, depth < 40 km). https://earthquake.usgs.gov/fdsnws/event/1/query?format=csv&starttime=2026-01-01&endtime=2026-10-01&minlatitude=-10&maxlatitude=20&minlongitude=90&maxlongitude=130&minmagnitude=4.5&maxdepth=40
13. GEOFON / GFZ. About the earthquake list (FAQ). https://geofon.gfz.de/eqinfo/faq/
14. Ni, S., Kanamori, H. & Helmberger, D. (2005). Energy radiation from the Sumatra earthquake. *Nature* 434, 582. https://doi.org/10.1038/434582a
15. Krüger, F. & Ohrnberger, M. (2005). Tracking the rupture of the Mw = 9.3 Sumatra earthquake over 1,150 km at teleseismic distance. *Nature* 435, 937–939. https://doi.org/10.1038/nature03696
16. Vigny, C. et al. (2005). Insight into the 2004 Sumatra–Andaman earthquake from GPS measurements in southeast Asia. *Nature* 436, 201–206. https://doi.org/10.1038/nature03937
