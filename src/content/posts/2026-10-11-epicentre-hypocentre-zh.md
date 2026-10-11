---
title: 新闻说的「震中」，其实不是地震发生的地方？认识 Epicentre 和 Hypocentre
slug: epicentre-hypocentre
description: Epicentre 只是地面上的一个点，地震真正开始的地方在地底下。新闻常见的「深度 10 公里」，也不一定是量出来的。
date: 2026-10-11
category: geo
lang: zh
cover: /uploads/epicentre-hypocentre-cover.png
coverAlt: 地层剖面图：地面上的图钉是 Epicentre，正下方地底的红点是 Hypocentre
youtubeId: tCVqOF6OwoI
tags:
  - 地震
  - Epicentre
  - Hypocentre
  - Segamat
  - Sabah
draft: false
---
2025 年 8 月 24 日，一个星期天的早上，Segamat 地震了。新闻说这场地震的 Epicentre 在 Segamat 以西约 5 公里，深度 10 公里。[1]

很多人因此以为，Epicentre 就是地震发生的地方。其实不是。而且那个「10 公里」，也不一定是真的量出来的。

这篇是影片的文字延伸版。影片讲了三层：入门、原理、进阶。这里我会把每一层再多补一点，包括影片里没放进去的：怎么用一张地震记录估算距离、地震学家怎么「看出」深度，还有我自己在京都做地震定位时的一些体会。

## 入门：地底的一个点

地震，是地底的岩石突然破裂、滑动。破裂总是从某一个点开始，这个起点叫 **Hypocentre**（也叫 Focus）。从 Hypocentre 往正上方画一条线，碰到地面的那一点，就是 **Epicentre**。[2]

我在影片里用了一杯水来示范：杯底的一枚硬币是 Hypocentre，水面就是地面。从正上方看下去，水面上刚好对着硬币的那一点，就是 Epicentre。

> Epicentre 告诉你「在哪里」，Hypocentre 还多告诉你一件事：「有多深」。

两点之间的距离，就是 **depth**。

新闻总是报 Epicentre，原因很实际：它可以直接画在平面地图上，而且一般来说，离 Epicentre 越近，摇得越厉害。

## 原理：地震学家怎么找到这个点

岩石破裂的那一刻，会放出 **seismic wave**，往四面八方传开。各地的 **seismic station** 会记下波到达的时间。

地震波有快有慢。跑得快的 P-wave 先到，跑得慢的 S-wave 后到。离得越远，两种波到达的时间差得越多。所以一个站只要看这个时间差，就能算出地震离它有多远。

> **小知识**：有一个粗略的估算法，对比较近的地震很好用：把 S-wave 和 P-wave 的到达时间差（秒）乘以 8，大约就是地震离测站的距离（公里）。[3] 例如时间差 5 秒，地震大约在 40 公里外。距离很远的时候这个倍数会变大，就要查走时表（travel-time table）了。

可是，一个站只知道距离，不知道方向。以测站为圆心、以这个距离为半径画一个圆，地震就在圆上的某个地方。第二个站再画一个圆，两个圆交在两个点；第三个站的圆，会穿过其中同一个点，那就是 Epicentre。

当然，这是教学上的简化。真实的地震在地底，不在纸上。要找的其实有**四个未知数**：longitude、latitude、depth，还有地震发生的时间。所以理论上至少要四个站。实际上，地震学家会用几十、甚至几百个站的资料，让电脑找出跟所有观测最吻合的答案。[4][5]

### 深度的三个等级

算出 depth 之后，地震学家会把地震分成三类：[6]

| 类别 | 深度 |
|---|---|
| Shallow earthquake | 0–70 km |
| Intermediate earthquake | 70–300 km |
| Deep earthquake | 300–700 km |

再深下去，就几乎没有地震了。而且 USGS 指出，所有深于 70 公里的地震，都发生在隐没到地函（mantle）里的板块之中。[6]

### 为什么 depth 很重要

同样大小的地震，越浅，离我们越近，能量还没散开就到了地面，摇得越厉害。越深，波要走很远才到地面，摇晃变弱了，但会传得很广。

## 进阶：Hypocentre 其实是一个估计值

我们拿两个马来西亚的地震来比一比。

**Segamat，2025 年 8 月**：4.1 级，规模不大，但发生在很浅的地方。附近不只学校，连医院的墙也出现了轻微裂缝。[1][7]

**Sabah 外海，2026 年 2 月**：一个 7 级以上的地震，比 Segamat 大了三级，却发生在地下 600 多公里。整个 Sabah 都有感，连 Sarawak 和半岛都有人感觉到，可是没有造成伤亡或损坏。[8][9]

有趣的是，同一个地震，不同机构算出来的数字也会不一样：

| | MetMalaysia | USGS |
|---|---|---|
| Sabah 外海（2026-02） | 6.8 级，深 678 km | 7.1 级（Mww），深 629 km |
| Segamat（2025-08） | Epicentre 在市区以西约 5 km | Epicentre 在 Segamat 东南约 13 km |

Segamat 的两个 Epicentre，相差了十几公里。[1][10]

这不代表有谁算错了。用的测站不一样、所假设的地底波速不一样，答案就会不一样。**每一个 Hypocentre 都带着一个误差范围。** 这十几公里很重要：要判断地震是哪一条 fault 引起的，先要知道 Epicentre 有多准。

### 最难算准的是 depth

误差最大的，通常是 depth。原因是 depth 和发生时间会「互相抵消」：Hypocentre 深一点、但早一点发生，地震波到达测站的时间可能几乎一样。电脑很难分辨这两种情况。[4]

最好的解决办法，是在 Hypocentre 附近就有测站。USGS 有一个经验法则：最近的测站离 Epicentre 的距离，最好小于地震的深度，深度才比较可靠。[11]

> 这也是我在京大做地震定位时，每天在处理的问题。

> **小知识**：对于远方的地震，地震学家还有一招：看 **depth phase**。地震波除了直接往下传到测站，也有一部分先往上走、在地面反射一次再传过去，这个反射波叫 pP。它比直达的 P-wave 晚到一点，晚多少几乎只跟深度有关。量出 pP 和 P 的时间差，就能比较准地算出深度。[6]

### 那个「10 公里」

所以你会发现，很多浅层地震的 depth 都**刚好**是 10 公里。我查了 USGS 目录：2026 年 1 到 9 月，东南亚的浅层地震（M4.5 以上、深度小于 40 公里）一共 921 个，其中 523 个的深度刚好是 10.0 公里。[12]

这有时是一个 **fixed depth**：数据不够、depth 算不准的时候，就先填一个合理的数字。[11][13] USGS 对 Segamat 地震的解，depth 一栏就写着 *operator assigned*，也就是人工指定，因为它用到的最近测站在 100 多公里外。[10] MetMalaysia 的 10 公里是怎么来的，官方没有说明。

看到 10 公里，不一定代表真的是 10 公里。连我之前那支 Segamat 的影片，也是照着新闻报了 10 公里。

### 最深的，反而最准

反过来，Sabah 那个 600 多公里深的地震，USGS 用 broadband 波形模拟，把 depth 算到误差只有约 2 公里。[9] 很深的地震，直达波和地面反射回来的 depth phase 在波形上分得很开，通常比较容易分辨，深度反而算得准。

## 大地震不是一个点

还有一点。大地震不是一个点在破裂，而是一整片 fault 在破裂。

2004 年的 Sumatra–Andaman 大地震，从南端的 Epicentre 开始，一路往北裂了大约 1,150 到 1,200 公里，持续大约八分钟。[14][15] GPS 资料显示，这场地震释放能量最集中的地方，在 Epicentre 以北至少 200 公里。[16]

对这种地震来说，Hypocentre 只是起跑线，Epicentre 附近不一定是摇得最厉害的地方。

## 下次看新闻，多问一句

所以下次新闻说 Epicentre 在哪里，你可以多问一句：它有多深？算得准吗？

地图上那根图钉，只是故事的开头。真正的故事，埋在地底下。

下一集我们来聊规模：Segamat 4.1 级、Sabah 7.1 级，只差 3，能量到底差了多少？Richter Scale 和 Moment Magnitude 又有什么不同？

## 参考资料

1. Bernama (2025-08-24). MetMalaysia: 4.1-magnitude quake strikes Segamat. https://www.bernama.com/en/general/news.php?id=2459992
2. USGS FAQ. What does it mean that the earthquake occurred at a depth of 0 km? https://www.usgs.gov/faqs/what-does-it-mean-earthquake-occurred-a-depth-0-km-how-can-earthquake-have-a-negative-depth
3. IRIS. How are earthquakes located? https://dev.iris.edu/hq/inclass/fact-sheet/13 ；USGS / NOAA ITTI. Earthquake location（D ≈ 8 × (S−P)）. https://nctr.pmel.noaa.gov/education/ITTI/seismic/EQ_location_USGS.pdf
4. Stein, S. & Wysession, M. (2003). *An Introduction to Seismology, Earthquakes, and Earth Structure*. Blackwell.
5. Kennett, B. L. N. Earthquake location. CMA Proceedings vol. 31, ANU. https://maths.anu.edu.au/files/CMAProcVol31-Kennett.pdf
6. USGS. Determining the Depth of an Earthquake. https://www.usgs.gov/programs/earthquake-hazards/determining-depth-earthquake
7. Malay Mail (2025-09-08). Segamat quakes leave cracks in schools, hospital and homes. https://www.malaymail.com/news/malaysia/2025/09/08/segamat-quakes-leave-cracks-in-schools-hospital-and-homes-says-ahmad-maslan-rm550000-needed-for-urgent-repairs/190461
8. Bernama (2026-02-23). MetMalaysia: 6.8-magnitude quake off Sabah. https://www.bernama.com/tv/news.php?id=2526438
9. USGS ComCat. M 7.1 – 57 km NNW of Kota Belud, Malaysia (us6000sasz). https://earthquake.usgs.gov/earthquakes/eventpage/us6000sasz
10. USGS ComCat. M 4.0 – 13 km ESE of Segamat, Malaysia (us6000r3fi). https://earthquake.usgs.gov/earthquakes/eventpage/us6000r3fi
11. USGS FAQ. Why do so many earthquakes occur at a depth of 10 km? https://www.usgs.gov/faqs/why-do-so-many-earthquakes-occur-depth-10km
12. USGS ComCat 查询（东南亚 90–130°E、10°S–20°N，2026 年 1–9 月，M≥4.5，深度 < 40 km）. https://earthquake.usgs.gov/fdsnws/event/1/query?format=csv&starttime=2026-01-01&endtime=2026-10-01&minlatitude=-10&maxlatitude=20&minlongitude=90&maxlongitude=130&minmagnitude=4.5&maxdepth=40
13. GEOFON / GFZ. About the earthquake list (FAQ). https://geofon.gfz.de/eqinfo/faq/
14. Ni, S., Kanamori, H. & Helmberger, D. (2005). Energy radiation from the Sumatra earthquake. *Nature* 434, 582. https://doi.org/10.1038/434582a
15. Krüger, F. & Ohrnberger, M. (2005). Tracking the rupture of the Mw = 9.3 Sumatra earthquake over 1,150 km at teleseismic distance. *Nature* 435, 937–939. https://doi.org/10.1038/nature03696
16. Vigny, C. et al. (2005). Insight into the 2004 Sumatra–Andaman earthquake from GPS measurements in southeast Asia. *Nature* 436, 201–206. https://doi.org/10.1038/nature03937
