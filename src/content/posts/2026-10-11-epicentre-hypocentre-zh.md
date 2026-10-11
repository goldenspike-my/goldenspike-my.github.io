---
title: 地图上那根图钉，没告诉你的事：读懂地震新闻里的 Epicentre 和 Hypocentre
slug: epicentre-hypocentre
description: 地震新闻里的「震中」只是地面上的一个点。这篇教你看懂一则地震报告：哪些数字可靠、哪些只是先填上去的，还有怎么自己去 USGS 查。
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
一则地震新闻，通常只有三行：

> 规模 4.1。Epicentre 位于 Segamat 以西 5 公里。深度 10 公里。

这三行看起来很确定，像是量尺量出来的。但在我每天做地震定位的人眼里，这三个数字的「可信度」其实差很多：有的很准，有的带着十几公里的误差，有的根本是先填上去的。

影片里我从定义讲起，这篇想换个方式：把一则地震报告拆开来看，告诉你每个数字背后是怎么来的、该相信多少，最后附上一个你自己就能做的小练习。

## 先把两个词分清楚

**Hypocentre**（也叫 Focus）是地底岩石开始破裂的那一点。**Epicentre** 是它正上方、地面上的那一点。两点之间的距离，就是 **depth**。[1]

![影片画面：地图上只看得到 Epicentre（左）；剖面图里，Hypocentre 在它正下方，两者的距离就是 depth（示意图）](/uploads/blog/ep01-two-points.jpg)

所以新闻地图上的那根图钉，其实是把地底的一个点「投影」到地面上。它告诉你在哪里，却把「多深」这个信息丢掉了。

> **小知识**：日本的地震速报常写「震源地」和「震源の深さ」，听起来像是在讲 Hypocentre。但气象厅（JMA）自己的解说是：震源是地底开始破裂的点，震央是它正上方的地面点，而一般说的「震源地」，其实是用**震央的地名**来表示。[2] 连日本的新闻用语，也很容易把这两个概念混在一起。

## 一则地震报告，拆开来看

以 2025 年 8 月 24 日 Segamat 的地震为例，MetMalaysia 和 USGS 都发了报告。[3][4] 把它们放在一起看，就知道每个数字的「性格」不同：


| 报告里的数字 | 我的判断 | 为什么 |
| --------- | ---- | ----------------------- |
| Epicentre | 中等 | 两个机构的位置差了十几公里 |
| 规模 | 中等 | 不同机构、不同规模种类（ML、Mw）会差零点几 |
| Depth | 最低 | 10 公里是先填上去的，下面会解释 |


![影片画面：同一个 Segamat 地震，MetMalaysia（金色）和 USGS（青色）的 Epicentre 相差十几公里。MetMalaysia 只公布了「以西约 5 km」，图上按描述示意](/uploads/blog/ep01-two-answers.jpg)

这不代表谁算错了。用的测站不一样、假设的地底波速不一样，答案本来就会不一样。重点是：**每一个 Hypocentre 都是一个估计值，都带着误差范围。**

## 一个测站只听得到「多远」

地震发生的那一刻，会同时放出两种主要的波：跑得快的 P-wave 和跑得慢的 S-wave。它们像两个同时起跑、速度不同的人，跑得越远，到达终点的时间差就越大。

![影片画面：近的测站和远的测站。快的波（青色）和慢的波（金色）的时间差，距离越远就越大（示意图）](/uploads/blog/ep01-time-gap.jpg)

> **小知识：一个可以自己算的公式**。对比较近的地震，把 S-wave 和 P-wave 的到达时间差（秒）乘以 8，大约就是地震离测站的距离（公里）。[5] 时间差 5 秒，大约 40 公里；时间差 10 秒，大约 80 公里。很远的地震这个倍数会变大，就要查走时表了。

但一个测站只知道距离，不知道方向。三个测站各画一个圆，交点就是 Epicentre。这是课本上的方法，我在影片里也展示过：

![影片画面：以 Kuala Lumpur、Kuantan、Johor Bahru 为圆心各画一个圆，交在 Segamat（测站位置为示意，不是真实的 MetMalaysia 测站）。地图：Natural Earth](/uploads/blog/ep01-three-circles.jpg)

真实的定位复杂一点：地震在地底，所以要找的是经度、纬度、深度和发生时间四个未知数。电脑会用几十、几百个测站的到达时间，反复调整这四个数字，直到跟所有观测最吻合为止。[6][7]

## Depth：最难的那个数字

为什么深度最难？因为深度和发生时间会「互相抵消」。地震如果深一点、但早一点发生，波传到远处测站的时间，可能跟浅一点、晚一点发生的地震几乎一样。

![影片画面：一个较浅、较晚发生的 Hypocentre，和一个较深、较早发生的 Hypocentre，传到两边测站的时间几乎一样；只有正上方附近的测站（右图）分得出来（示意图，时间为示意）](/uploads/blog/ep01-depth-vs-time.jpg)

要分开这两种情况，最好的办法是在 Epicentre 附近就有测站。USGS 的经验法则是：**最近的测站离 Epicentre 的距离，要比地震的深度还近**，深度才比较可靠。[8]

这就是为什么日本的地震深度通常很准。日本的 Hi-net 有将近 800 个高感度地震站，平均每 20 公里就有一个，而且多数装在一百多公尺深的钻孔里，避开风浪和人车的噪音。[9] 几乎每个地震的正上方附近都有测站。

马来西亚就没有这么密的网。Segamat 地震时，USGS 用到的最近测站在 100 多公里外，[4] 远远超过 10 公里的深度。

### 所以出现了「10 公里」

资料不够、深度算不准的时候，地震目录会先填一个合理的数字，叫 **fixed depth**。USGS 和德国的 GEOFON 都用 10 公里，因为很多地区可靠的浅层地震深度，平均就在 10 公里左右。[8][10] USGS 以前用的是 33 公里，后来才改成 10 公里。[8]

这个习惯在资料里很明显。我把 USGS 目录里 2026 年 1 到 9 月东南亚的浅层地震拿出来画图：

![东南亚浅层地震的深度分布（USGS ComCat，2026 年 1–9 月，M4.5 以上，深度小于 40 km，2026-10-11 查询）。10 km 那一格特别高；35 km 也有一个高峰，原因我还没找到官方说明](/uploads/blog/depth-histogram-zh.png)

九百多个地震里，有五百多个的深度刚好是 10.0 公里。[11] 地球当然不会这么整齐，这是人填上去的。

> **更正**：我在之前的 Segamat 影片里，也是照着新闻说「深度 10 公里」。后来查 USGS 的资料才发现，那一栏写的是 *operator assigned*，也就是人工指定。MetMalaysia 的 10 公里是怎么来的，官方没有说明。

## 小练习：自己去 USGS 查一个地震

你不需要是地震学家，也能看出一个地震的深度靠不靠谱。在 USGS 的地震页面（例如 Segamat 那一次）点开 Origin 的细节，可以看到这几栏：[4]


| 栏位 | Segamat 地震 | 怎么读 |
| ------------------ | ----------------- | ----------------- |
| Depth | 10 km | 看起来很确定 |
| Depth Type | operator assigned | 人工指定，不是算出来的 |
| Number of Stations | 5 | 只用了五个站 |
| Minimum Distance | 1.137°（约 126 km） | 最近的站比深度远很多 |
| Horizontal Error | 6.7 km | Epicentre 本身的误差 |
| Depth Error | 没有 | 不是算出来的，所以也没有误差可以给 |


下次看到一个地震的深度刚好是 10 公里，可以先去看 Depth Type 和 Minimum Distance。如果最近的测站在一百公里外，那个深度就要打个问号。

## 深的地震，反而最准

有趣的是，2026 年 2 月 Sabah 外海那个 600 多公里深的地震，USGS 用 broadband 波形模拟，把深度算到误差只有约 2 公里。[12]

为什么深的反而准？除了直接传来的 P-wave，地震波还有一部分会先往上走、在地面反射一次再传到测站，叫做 **depth phase**（例如 pP）。它比直达波晚到一点，晚多少几乎只跟深度有关。[13] 地震越深，两者在地震记录上分得越开，越容易量。

![影片画面：同样大小的地震，浅的（左）集中摇晃上面几栋房子，深的（右）波要走很远才到地面（示意图）](/uploads/blog/ep01-shallow-deep.jpg)

这也解释了为什么 Sabah 那个地震规模比 Segamat 大三级，却没有造成损坏：波从 600 多公里深的地方传上来，已经散得很开，但传得很广，整个 Sabah 都有感。[12][14]

> **小知识：地球上的地震最深到多深？** 大约 700 公里。最早证明「地震可以发生在很深的地方」的，是日本气象学者和达清夫（Kiyoo Wadati）。他在 1920 年代后期分析日本的地震，发现有些地震深达几百公里，而且越往日本海那一侧越深，排成一个倾斜的面。[15] 后来大家知道，这个面就是隐没下去的板块，现在叫 **Wadati–Benioff zone**。所有深于 70 公里的地震，都发生在这种隐没板块里。[13]

至于岩石在 600 公里深、压力那么大的地方为什么还会「破裂」，到现在仍然没有定论。主要的几种假说，例如矿物在高压下突然相变、含水矿物脱水、或局部摩擦生热失控，各自都能解释一部分观测，但没有一个能解释全部。[16] 这是地震学里我很喜欢的一个未解之谜。

## 大地震不是一个点

最后一个容易被忽略的地方：Hypocentre 只是破裂**开始**的点。

![影片画面：2004 年 Sumatra–Andaman 大地震从南端的 Epicentre（星号）开始，往北裂了一千多公里，大约八分钟。资料：Ni et al. 2005；Krüger & Ohrnberger 2005。地图：Natural Earth](/uploads/blog/ep01-rupture-2004.jpg)

2004 年的 Sumatra–Andaman 大地震，从南端开始，一路往北裂了大约 1,150 到 1,200 公里，持续大约八分钟。[17][18] GPS 资料显示，能量释放最集中的地方，在 Epicentre 以北至少 200 公里。[19]

对这种地震来说，新闻上的那根图钉只标出了「起跑线」。Epicentre 附近，不一定是摇得最厉害的地方。

## 下次看到地震新闻，问三个问题

1. **它有多深？** 同样大小的地震，浅的摇得厉害，深的传得广。
2. **深度是算出来的，还是填上去的？** 刚好 10 公里的，先打个问号。
3. **这是一个点，还是一整条断层？** 规模 7 以上的地震，破裂可能有几十到几百公里长。

地图上那根图钉，只是故事的开头。真正的故事，埋在地底下。

下一篇会聊规模：Segamat 4.1 级、Sabah 7.1 级，只差 3，能量到底差了多少？Richter Scale 和 Moment Magnitude 又是怎么回事？

## 参考资料

1. USGS FAQ. What does it mean that the earthquake occurred at a depth of 0 km? [https://www.usgs.gov/faqs/what-does-it-mean-earthquake-occurred-a-depth-0-km-how-can-earthquake-have-a-negative-depth](https://www.usgs.gov/faqs/what-does-it-mean-earthquake-occurred-a-depth-0-km-how-can-earthquake-have-a-negative-depth)
2. 気象庁 名古屋地方気象台. 震源と震央. [https://www.data.jma.go.jp/nagoya/shosai/info/mini-jishin/singen.html](https://www.data.jma.go.jp/nagoya/shosai/info/mini-jishin/singen.html)
3. Bernama (2025-08-24). MetMalaysia: 4.1-magnitude quake strikes Segamat. [https://www.bernama.com/en/general/news.php?id=2459992](https://www.bernama.com/en/general/news.php?id=2459992)
4. USGS ComCat. M 4.0 – 13 km ESE of Segamat, Malaysia (us6000r3fi). [https://earthquake.usgs.gov/earthquakes/eventpage/us6000r3fi](https://earthquake.usgs.gov/earthquakes/eventpage/us6000r3fi)
5. IRIS. How are earthquakes located? [https://dev.iris.edu/hq/inclass/fact-sheet/13](https://dev.iris.edu/hq/inclass/fact-sheet/13) ；USGS / NOAA ITTI. Earthquake location（D ≈ 8 × (S−P)）. [https://nctr.pmel.noaa.gov/education/ITTI/seismic/EQ_location_USGS.pdf](https://nctr.pmel.noaa.gov/education/ITTI/seismic/EQ_location_USGS.pdf)
6. Stein, S. & Wysession, M. (2003). *An Introduction to Seismology, Earthquakes, and Earth Structure*. Blackwell.
7. Kennett, B. L. N. Earthquake location. CMA Proceedings vol. 31, ANU. [https://maths.anu.edu.au/files/CMAProcVol31-Kennett.pdf](https://maths.anu.edu.au/files/CMAProcVol31-Kennett.pdf)
8. USGS FAQ. Why do so many earthquakes occur at a depth of 10 km? [https://www.usgs.gov/faqs/why-do-so-many-earthquakes-occur-depth-10km](https://www.usgs.gov/faqs/why-do-so-many-earthquakes-occur-depth-10km)
9. NIED MOWLAS. Our networks（Hi-net：将近 800 站，平均间距 20 km）. [https://www.mowlas.bosai.go.jp/network/?LANG=en](https://www.mowlas.bosai.go.jp/network/?LANG=en)
10. GEOFON / GFZ. About the earthquake list (FAQ). [https://geofon.gfz.de/eqinfo/faq/](https://geofon.gfz.de/eqinfo/faq/)
11. USGS ComCat 查询（东南亚 90–130°E、10°S–20°N，2026 年 1–9 月，M≥4.5，深度 < 40 km）. [https://earthquake.usgs.gov/fdsnws/event/1/query?format=csv&starttime=2026-01-01&endtime=2026-10-01&minlatitude=-10&maxlatitude=20&minlongitude=90&maxlongitude=130&minmagnitude=4.5&maxdepth=40](https://earthquake.usgs.gov/fdsnws/event/1/query?format=csv&starttime=2026-01-01&endtime=2026-10-01&minlatitude=-10&maxlatitude=20&minlongitude=90&maxlongitude=130&minmagnitude=4.5&maxdepth=40)
12. USGS ComCat. M 7.1 – 57 km NNW of Kota Belud, Malaysia (us6000sasz). [https://earthquake.usgs.gov/earthquakes/eventpage/us6000sasz](https://earthquake.usgs.gov/earthquakes/eventpage/us6000sasz)
13. USGS. Determining the Depth of an Earthquake. [https://www.usgs.gov/programs/earthquake-hazards/determining-depth-earthquake](https://www.usgs.gov/programs/earthquake-hazards/determining-depth-earthquake)
14. Bernama (2026-02-23). MetMalaysia: 6.8-magnitude quake off Sabah. [https://www.bernama.com/tv/news.php?id=2526438](https://www.bernama.com/tv/news.php?id=2526438)
15. Frohlich, C. (1987). Kiyoo Wadati and early research on deep focus earthquakes. *Journal of Geophysical Research* 92(B13), 13777–13788. [https://doi.org/10.1029/JB092iB13p13777](https://doi.org/10.1029/JB092iB13p13777)
16. Zhan, Z. (2020). Mechanisms and implications of deep earthquakes. *Annual Review of Earth and Planetary Sciences* 48. [https://resolver.caltech.edu/CaltechAUTHORS:20200102-143031414](https://resolver.caltech.edu/CaltechAUTHORS:20200102-143031414)
17. Ni, S., Kanamori, H. & Helmberger, D. (2005). Energy radiation from the Sumatra earthquake. *Nature* 434, 582. [https://doi.org/10.1038/434582a](https://doi.org/10.1038/434582a)
18. Krüger, F. & Ohrnberger, M. (2005). Tracking the rupture of the Mw = 9.3 Sumatra earthquake over 1,150 km at teleseismic distance. *Nature* 435, 937–939. [https://doi.org/10.1038/nature03696](https://doi.org/10.1038/nature03696)
19. Vigny, C. et al. (2005). Insight into the 2004 Sumatra–Andaman earthquake from GPS measurements in southeast Asia. *Nature* 436, 201–206. [https://doi.org/10.1038/nature03937](https://doi.org/10.1038/nature03937)

