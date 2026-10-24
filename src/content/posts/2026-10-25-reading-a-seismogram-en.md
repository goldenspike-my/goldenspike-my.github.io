---
title: Read a seismogram yourself and work out how far away the earthquake was
slug: reading-a-seismogram
description: A seismogram has two arrivals, and the quiet stretch between them hides a distance. Using a real record from a seismometer in Ipoh, this post shows you how to pick out the P-wave and the S-wave, estimate the distance yourself, and spot when that estimate goes wrong.
date: 2026-10-25
category: geo
lang: en
cover: /uploads/reading-a-seismogram-cover.jpg
youtubeId: 9fqKAyF-pe8
coverAlt: The Sabah magnitude 7.1 earthquake recorded in Ipoh. A small green wiggle (P) comes first, then after a long gap a much bigger gold one (S)
tags:
  - Earthquake
  - P-wave
  - S-wave
  - Seismogram
  - Sabah
  - Earthquake early warning
draft: false
---
On 22 February this year, a magnitude 7.1 earthquake struck deep beneath the sea off Sabah, 629 km down. [8] More than 1,700 km away, a seismometer in Ipoh wrote it down.

What it recorded was a small wiggle, then a long quiet stretch, and only 2 minutes 36 seconds later a much bigger wiggle.

In this post I'd like you to read that record yourself. By the end you'll know what the two wiggles are, how the gap between them turns into a distance, and where that calculation goes wrong. If you want the quick answer first, there's the one-minute version: [my 60-second short on why an earthquake alert can arrive before the shaking](https://youtube.com/shorts/c7xPRyjqZe0).

## Step one: spot the two arrivals

When an earthquake happens underground, it sends out two kinds of motion at the same moment. One is a push and pull: the rock is squeezed, springs back and squeezes the next bit along, like a spring that has been pushed at one end. That's the P-wave. The other is a sideways flick: the rock is pushed out of shape, like shaking a rope, so the rope moves up and down while the wave travels along it. That's the S-wave. [1]

![From the video: a P-wave is like pushing a spring. The coils move back and forth in the same direction the wave travels (schematic)](/uploads/blog/ep03-p-spring.jpg)

![From the video: an S-wave is like flicking a rope. The rope moves up and down while the wave travels sideways, so the shaking is at right angles to the direction of travel (schematic)](/uploads/blog/ep03-s-rope.jpg)

Both set off together, but P is faster. In the upper crust P travels at about 6 km per second and S at about 3.5. [1][6] So the first arrival on a seismogram is P and the second is S.

The figure below shows the Ipoh seismometer (MY.IPM) at the same moment, in three directions. A seismometer doesn't have just one pen: it records up-down, north-south and east-west separately.

![Real records of the Sabah magnitude 7.1 earthquake from the Ipoh seismometer, in three directions. Each trace is scaled to its own peak, so compare P with S within one trace: going up and down, P is about as big as S; north-south, S is about four times P. Data: EarthScope (IRIS DMC); P and S times from the iasp91 model](/uploads/blog/ipm-components-en.png)

On the up-down trace (BHZ), P is obvious straight away and about as big as the S that follows. On the north-south trace (BHN), P is just a small shiver, and S comes in four times bigger. That's what the video describes: P is mostly the up-and-down jolt you feel, and S is the sideways sway, which is usually the stronger of the two. [2]

> **Did you know?** Why does P come straight up from under your feet? Rock usually gets stiffer with depth, so waves travel faster lower down. As a wave climbs towards the surface it keeps entering slower layers, and each time its path bends a little closer to vertical, the way light bends when it goes into water (Snell's law). By the time it reaches the ground it's travelling almost straight up. [6] P shakes along its direction of travel, so you feel it as up and down. S shakes across it, so you feel it as side to side.

![From the video: the waves come straight up from under your feet. P pushes along that upward path, so up and down; S shakes across it, so side to side (schematic)](/uploads/blog/ep03-which-way.jpg)

## Step two: turn the gap into a distance

The further you are from an earthquake, the further apart P and S get, because the faster one keeps pulling ahead. Here is the same Sabah earthquake recorded at six stations, nearest at the bottom:

![The same Sabah magnitude 7.1 earthquake recorded at six stations (vertical component). The further away, the longer the gap between P (green) and S (gold): 66 seconds at Lahad Datu, 193 seconds at Chiang Mai. Data: EarthScope (IRIS DMC), USGS us6000sasz; P and S times from the iasp91 model](/uploads/blog/ps-record-section-en.png)

The Japanese seismologist Fusakichi Omori turned this pattern into a very simple rule of thumb:

> distance in km ≈ the gap in seconds × about 8

A 1924 paper in the Journal of the Meteorological Society of Japan quotes his formula with a factor of 7.42, valid up to 1,000 km. [4] In practice the factor people use varies from about 6 to 8, depending on how fast the rock is in that region. [4][5]

![Fusakichi Omori (1868–1923). Image: unknown author, public domain, via Wikimedia Commons](/uploads/blog/photo-omori.jpg)

Have a go yourself:

| Gap between P and S | Estimated distance (factor 6–8) |
| --- | --- |
| 5 seconds | 30–40 km |
| 10 seconds | 60–80 km |
| 35 seconds | 210–280 km |

The last row is the example from the video. If an earthquake struck at Penang, the gap measured in KL would be about 35 seconds. Times 8, that's 280 km, close to the straight-line distance from Penang to KL of about 290 km.

![From the video: for an earthquake at Penang, P reaches KL after about 50 seconds and S after about 1 minute 20, roughly 35 seconds apart (typical crustal speeds; times are approximate)](/uploads/blog/ep03-penang-kl.jpg)

> **To be honest:** the Penang example in the video is simplified. At 290 km, the first P to arrive hasn't travelled through the crust the whole way. It dives below the crust, runs along the faster top of the mantle and comes back up (this is called Pn), so the real timings differ from the simple sum. [6] That's why the video says "about".

### Where the rule of thumb breaks down

Try it on the Sabah earthquake and it goes badly wrong. For each station below I've estimated the distance as "gap × 8" and compared it with the real straight-line distance from the hypocentre, 629 km down:

| Station | Gap | Gap × 8 | Real straight-line distance |
| --- | --- | --- | --- |
| Lahad Datu | 66 s | about 530 km | about 690 km |
| Sibu | 84 s | about 680 km | about 890 km |
| Ipoh | 156 s | about 1,250 km | about 1,740 km |
| Chiang Mai | 193 s | about 1,540 km | about 2,260 km |

Every station comes out a quarter to a third short. The reason is depth. Most of these waves travelled through the mantle, where the rock is stiffer than in the crust, so both P and S move faster and the same gap stands for a longer distance. Working backwards from these stations, you'd need a factor of 10 to 12 to match. [6][15]

So Omori's rule suits earthquakes that are neither very deep nor very far away. For deep or distant ones, seismologists use a velocity model of the whole Earth, such as iasp91, instead of a single multiplier. [15]

## Who first spotted the two waves?

In June 1897 a great earthquake struck Assam in north-east India. The man sent to investigate was Richard Dixon Oldham of the Geological Survey of India. He gathered records from seismographs in Europe, mostly in Italy, and noticed that distant records all showed three parts: a small first phase, then a second, and finally long, slow, large swings. [9]

He published this in 1900 in the Philosophical Transactions of the Royal Society. He read the first phase as a push-and-pull wave and the second as a twisting wave, both travelling through the Earth's interior, and the third as waves running along the surface. [9] These are what we now call P-waves, S-waves and surface waves.

![The George Inglis monument at Chhatak after the 1897 Assam earthquake, with about 45 feet left standing. Image: frontispiece of Oldham (1899), Memoirs of the Geological Survey of India vol. 29, public domain, via Wikimedia Commons](/uploads/blog/photo-assam-1897.jpg)

## Where S-waves can't go

An S-wave travels by pushing rock out of shape and letting it spring back. A liquid has no such springiness: push water sideways and it simply flows away instead of springing back. So S-waves can't pass through liquids. [1][6]

That turned into a way of looking inside the planet. Beyond about 103 to 104 degrees from the epicentre, roughly the far side of the globe, stations don't receive S-waves that have come straight through the centre, as if there were a shadow. [11] From that shadow, seismologists concluded that the Earth's outer core is liquid. Oldham had already argued for a core in 1906 from distant records; in 1913 Beno Gutenberg put the core boundary at about 2,900 km deep; and in 1926 Harold Jeffreys used tides and seismic data to argue that the outer core was very likely liquid. [12]

So the S arrival on that Ipoh record is the same kind of clue people used a century ago to work out what's inside the Earth.

## Why do people in tall buildings feel distant earthquakes most?

Many of the earthquakes we feel in Malaysia actually come from far away in Sumatra. On 25 February 2022, an earthquake of around magnitude 6 in western Sumatra sent people hurrying out of several high-rise buildings in the Klang Valley and Melaka. [13]

At times like that, it usually isn't only P and S doing the shaking. The third phase Oldham saw, the surface waves running along the ground, have longer periods and travel more slowly, so they tend to arrive last yet keep going for a long time. [1][6] A tall building also has its own natural rhythm of swaying, and the taller it is, the longer each sway takes. When the long-period shaking has a similar rhythm, the sway can build up. USGS studied a 55-storey building in Osaka: it was about 770 km from the 2011 Great East Japan earthquake, yet it swayed for more than 1,000 seconds. [14]

So if you live high up and feel a slow sway that goes on and on, it's more likely a big earthquake far away than a small one nearby, and what's moving you is mainly the long-period waves.

## What can those few seconds do?

Back to the gap between P and S. Japan uses it to send warnings. As soon as stations near the source pick up the P-wave, computers estimate where the earthquake is and how big it is, then send the warning out electronically. An electronic signal is far faster than an S-wave, so the warning can arrive before the strong shaking, anywhere from a few seconds to a few tens of seconds ahead. [2] Japan's Earthquake Early Warning (緊急地震速報) has been issued to the general public since 1 October 2007. [3]

![From the video: a station picks up the P-wave, a computer makes a quick estimate, and the warning reaches phones and TVs electronically, ahead of the S-wave (schematic)](/uploads/blog/ep03-eew-chain.jpg)

It has one limit, though. Close to the source, the S-wave arrives almost together with the P-wave, so the warning may come too late. [2]

![From the video: if the earthquake is right under your home, P and S arrive almost together and the warning may not make it in time (schematic)](/uploads/blog/ep03-eew-near.jpg)

> Those few seconds may be enough to get under a table.

## Three questions to ask next time you feel an earthquake

First, did it start with up and down, or side to side? If there was an up-and-down jolt first, that was probably P, and the bigger shaking (S) is still on its way.

Second, how long was the gap between the up-and-down and the side to side? Count it in your head. Multiply the seconds by about 8 and you have a rough distance in kilometres. Almost no gap means the earthquake is close.

Third, was it a quick jolt or a slow sway that went on and on? A long slow sway in a tall building is often a big earthquake a long way off.

If you'd like to make more sense of earthquake numbers in the news, have a look at my two earlier posts: [The "epicentre" in the news isn't where the earthquake happened](/en/blog/epicentre-hypocentre) and [Three things to ask when the news gives a magnitude](/en/blog/reading-magnitude).

Next time we're switching fields to talk about rocks.

## References

1. USGS, *Two kinds of waves are generated by earthquakes*. https://earthquake.usgs.gov/earthquakes/events/1906calif/18april/earthwaves.php
2. Japan Meteorological Agency (JMA), *How Earthquake Early Warnings work* (緊急地震速報のしくみ). https://www.jma.go.jp/jma/kishou/know/jishin/eew/shikumi/shikumi.html
3. JMA press release (21 September 2007), start of Earthquake Early Warnings for the general public. https://www.jma.go.jp/jma/press/0709/21a/eew_start070921.html
4. Hirano, K. (1924), quoting Omori's formula Δ = 7.42T (0–1,000 km), *Journal of the Meteorological Society of Japan*, Ser. II, 2(4). https://www.jstage.jst.go.jp/article/jmsj1923/2/4/2_4_112/_article ; see also JMA, *Kenshin Jiho*. https://www.jma.go.jp/jma/kishou/books/kenshin/vol4p001.pdf
5. UC Berkeley Seismological Laboratory, *P-waves and S-waves: which are faster?* (2008). https://seismo.berkeley.edu/blog/2008/09/10/p-waves-and-s-waves-which-are-faster.html
6. Stein, S. & Wysession, M. (2003). *An Introduction to Seismology, Earthquakes, and Earth Structure*. Blackwell.
7. EarthScope Consortium (IRIS DMC) FDSN web services, stations MY.LDM, MY.SBM, MY.IPM, IU.DAV, II.KAPI, IU.CHTO. https://service.iris.edu
8. USGS ComCat us6000sasz (M7.1, 22 February 2026, 629 km deep). https://earthquake.usgs.gov/earthquakes/eventpage/us6000sasz
9. Oldham, R. D. (1900). On the propagation of earthquake motion to great distances. *Philosophical Transactions of the Royal Society A*, 194, 135–174.
10. Oldham, R. D. (1899). Report on the Great Earthquake of 12th June 1897. *Memoirs of the Geological Survey of India*, 29.
11. IRIS, *Seismic Shadow Zone: Basic Introduction* (animation). https://www.iris.edu/hq/inclass/animation/121
12. *History of the detection of the core* (Royal Observatory of Belgium page, NASA mirror). https://core2.gsfc.nasa.gov/MIRROR_www_astro_oma_be/history.html
13. The Star / Asia News Network (25 February 2022), Several highrises in Klang Valley evacuated following tremors. https://asianews.network/several-highrises-in-klang-valley-evacuated-following-tremors/
14. USGS, Response of a tall building far from the epicenter of the 11 March 2011 M 9.0 Great East Japan earthquake. https://www.usgs.gov/publications/response-a-tall-building-far-epicenter-11-march-2011-m-90-great-east-japan-earthquake
15. Kennett, B. L. N. & Engdahl, E. R. (1991). Traveltimes for global earthquake location and phase identification. *Geophysical Journal International*, 105, 429–465.

## Image credits

- Fusakichi Omori: unknown author, public domain. https://commons.wikimedia.org/wiki/File:Omori_Fusakichi.jpg
- The George Inglis monument (Chhatak, after the 1897 earthquake): frontispiece of Oldham (1899), public domain. https://commons.wikimedia.org/wiki/File:Oldham_1899_Frontispiece_memoirsofgeologi29geol_0008.jpg
- Seismograms: drawn by me from open EarthScope (IRIS DMC) data. Video frames are from GoldenSpike episode 03.
