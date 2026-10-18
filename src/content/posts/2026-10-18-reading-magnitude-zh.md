---
title: 新闻说“几级地震”的时候，你该多问的三件事
slug: reading-magnitude
description: 地震规模不是一把尺量出来的。这篇教你读懂新闻里的“几级”：用的是哪一把尺、是谁算的、离你多远，再附上一个可以自己算能量的小公式。
date: 2026-10-18
category: geo
lang: zh
cover: /uploads/reading-magnitude-cover.png
coverAlt: 四个方块代表 4 到 7 级地震的能量，面积每级大 32 倍，4 级小到只剩一个点，7 级是一整面墙
youtubeId: Ae6IBve_N10
tags:
  - 地震
  - Magnitude
  - Richter Scale
  - Moment Magnitude
  - Sabah
  - Segamat
draft: false
---
去年 11 月，The Star TV 报了一则很短的新闻：Segamat 又有一个小地震，“measuring a magnitude of 2.7 on the Richter scale”。[1]

这句话很普通，马来西亚的新闻几乎都这样写。可是在我这种每天看地震资料的人眼里，它其实留了三个问题没有回答：这个 2.7 是用哪一把尺量的？是谁算的？还有，它跟你家摇得多厉害，到底有什么关系？

影片里我讲了规模是怎么来的。这篇换个角度，把新闻里那个“几级”拆开来看，最后再给你一个可以自己算的小公式。

## 先记住一件事：多一级，不是多一点

规模每多 1，地震仪上画出来的摆动大 10 倍，放出的能量大约大 32 倍。[2] 多两级差不多一千倍，多三级就是三万多倍。

![规模和能量的关系。纵轴是对数，每高一格能量就多一百倍。Segamat 2025 和 Sabah 外海 2026 都用 USGS 的数字；能量用 Gutenberg–Richter 的经验公式计算](/uploads/blog/energy-ladder-zh.png)

所以 Segamat 那次 4 级和 Sabah 外海那次 7 级，看起来只差三格，能量却差了好几万倍。用 USGS 的两个数字（4.0 和 7.1）算，大约是 4.5 万倍。

这个 32 倍，也会把很小的差别放大。下面这张表，下次看新闻时可以拿来对照：

| 规模差 | 能量大约差几倍 |
| --- | --- |
| 0.1 | 1.4 倍 |
| 0.3 | 2.8 倍 |
| 1 | 32 倍 |
| 2 | 1,000 倍 |
| 3 | 32,000 倍 |

看到了吗？同一个 Sabah 地震，USGS 说 7.1，MetMalaysia 说 6.8，只差 0.3，换成能量却差了将近三倍。这不代表有一家算错，下面会讲为什么。

## 第一件事：这是哪一把尺？

### Richter 的那把尺

“Richter scale”这个名字，来自美国加州的地震学家 Charles Richter。1935 年，他想把南加州的地震按大小排一排，于是定了一个规则：用同一种地震仪（Wood-Anderson 扭力地震仪），在离地震 100 公里的地方，看纸上画出来的摆动有多大。3 级地震在那个距离大约摆 1 毫米，每大 10 倍就多一级。[3][4]

![影片画面：Richter 的规则。100 公里外，3 级地震摆动约 1 毫米，4 级 1 厘米，5 级 10 厘米，到了 6 级，纸已经画不下了（按同一台地震仪推算）](/uploads/blog/ep02-richter-rule.jpg)

![Charles Richter（约 1970 年）。图片来源：Caltech，经 USGS，Wikimedia Commons，公有领域](/uploads/blog/photo-richter.jpg)

> **小知识**：Richter 在 1935 年的论文里写道，在他之前用这种思路做过的，只有日本地震学家和达清夫（Kiyoo Wadati）把最大振幅对距离作图的研究。“magnitude”这个名字，则是同事 Harry Wood 建议的。[3][4] 和达清夫也就是上一篇讲深源地震时提到的那位。规模这个概念，从一开始就有日本研究的影子。

这把尺有一个限制，常常被忘记：它原本只适用于 California 600 公里以内的地震，距离的修正也是按南加州的地底算的。[2] 后来各地都发展出自己的 local magnitude（ML），用的是同一个想法，只是按当地的情况重新校正。

### 为什么大地震量不准

问题出在大地震上。大地震的破裂可以持续好几分钟，很多能量放在又长又慢的波里。可是这种看摆动的尺，量的是短而快的波，地震大到某个程度，那种波就不再跟着变大。[5][6]

![影片画面：像体重秤，人站上去量得准，大象和载满货的罗里站上去，指针都卡在最大那一格](/uploads/blog/ep02-scale-saturation.jpg)

这就叫 **saturation**（饱和）。不同的尺，卡住的位置不一样：[7]

| 规模种类 | 量的是什么 | 大约在哪里卡住 |
| --- | --- | --- |
| ML（local magnitude，Richter 那一类） | 近距离、短周期的摆动 | 约 6.5 |
| mb（body-wave magnitude） | 远距离的 P-wave | 约 6.5 |
| Ms（surface-wave magnitude） | 周期约 20 秒的 surface wave | 约 8.3 |
| Mw（Moment Magnitude） | 断层滑动本身 | 不会卡住 |

### Moment Magnitude：直接算那次滑动

1979 年，Thomas Hanks 和金森博雄（Hiroo Kanamori）提出 Moment Magnitude。它不看摆动，而是直接算地底下那次滑动有多大：断层接触的面积，乘以滑动的距离，再乘以石头的硬度（rigidity）。这个乘积叫 seismic moment（M₀）。[8]

![影片画面：用两本书比喻断层两边的石头。接触面积、滑动距离、石头硬度，三样乘起来就是 seismic moment（示意图）](/uploads/blog/ep02-three-factors.jpg)

![金森博雄（Hiroo Kanamori），2022 年。图片来源：Christopher Michel，Wikimedia Commons，CC BY-SA 4.0](/uploads/blog/photo-kanamori.jpg)

最聪明的地方是，他们把公式设计成跟旧的级数接得上，所以换了尺，数字也不会突然跳一大截。[8][9] 现在 USGS 报大地震，正式用的就是 Mw。[7]

> **小知识：自己算一次 Mw**。USGS 用的公式是 Mw = ⅔ × (log₁₀M₀ − 9.1)，M₀ 的单位是 N·m。[2] Sabah 外海那次，USGS 给的 M₀ 是 4.73 × 10¹⁹ N·m。[10] 代进去：log₁₀(4.73 × 10¹⁹) ≈ 19.67，减 9.1 得 10.57，乘 ⅔ 约 7.05，四舍五入就是 7.1。

### 回到新闻

所以 Segamat 和 Sabah 那两个数字，其实是两把尺量的。USGS 给 Segamat 的 4.0 是 ml，也就是 local magnitude，看摆动的那一类；给 Sabah 的 7.1 是 Mww，算断层滑动的那一类。[10][11] 小地震用小地震的尺，大地震用大地震的尺。

至于马来西亚新闻写的“on the Richter scale”，MetMalaysia 的新闻稿里，我没有找到他们写明用的是哪一种规模。这一点我还不确定。

## 第二件事：是谁算的？

不同机构用的地震站不一样，算法也不一样，同一个地震常常会有好几个数字。[9] Sabah 外海那一次就是例子：

| 机构 | 规模 | 种类 |
| --- | --- | --- |
| USGS | 7.1 | Mww（正式值），另有 Mwc 7.1、Mwb 7.1 |
| MetMalaysia | 6.8 | 新闻稿没有注明 |

差零点几，在地震学里是很正常的事。比较两个地震的时候，最好用同一家机构的数字。第 01 集结尾我把 MetMalaysia 的 4.1 和 USGS 的 7.1 放在一起比，严格来说就是混了两家的数字，所以这一集改用同一家（USGS）的 4.0 和 7.1。

### 2004 年那个地震，到底几级？

再大一点的地震，数字更多。2004 年 Sumatra-Andaman 大地震，单单 USGS 的目录里就有好几个值：[12]

| 数字 | 来源 |
| --- | --- |
| 8.5 | USGS 目录，Me（energy magnitude） |
| 9.0 | USGS 目录，Mwc |
| **9.1** | **USGS 正式值，Mw** |
| 9.2 | USGS 目录，Mww |
| 9.31 | USGS 目录，Mw |
| 9.3 | Stein & Okal（2005），用地球自由振荡这种更慢的波来算 [13] |

![影片画面：2004 年的余震（USGS，2004-12-26 至 2005-01-31，M4.5 以上）沿着 Sunda Trench 排了一千多公里。只看摆动的尺量这种地震会量小，Moment Magnitude 算出来是 9.1。板块边界：PB2002（Bird 2003）；地图：Natural Earth](/uploads/blog/ep02-sumatra-2004.jpg)

为什么会这样？地震越大，破裂越久，越慢的波里藏着越多的能量。只用比较快的波，会低估；用到更慢的波，数字就会往上调。Stein 和 Okal 就是用周期非常长的波，算出 seismic moment 大约是最初估计的 2.5 倍。[13]

> **更正**：我在旧影片《马来半岛沉睡的巨人》里，把 2004 年的地震写成 9.3 级，也写过 9.2 级。两个数字都有出处，只是我没有说清楚是谁、用什么方法算的。如果只能写一个，我现在会用 USGS 的正式值 9.1，再注明有研究算到 9.3。

## 第三件事：离你多远、多深？

规模是地震本身的大小，一个地震只有一个规模（理想上是这样）。可是你家摇得多厉害，叫 **intensity**（烈度），每个地方都不一样，要看离地震多远、地震多深、脚下是什么土。[2]

Sabah 外海那次就是最好的例子：能量比 Segamat 大上万倍，却没有什么损坏，因为它深达 600 多公里，波传上来已经散开了。[10][14]

各国的烈度用不同的表。美国常用 Modified Mercalli Intensity（MMI），用罗马数字 I 到 XII；[15] 日本气象厅用“震度”，从 0 到 7，中间的 5 和 6 再分成弱和强，一共十级。[16] 所以在日本看新闻，会同时看到两个数字：M7.1、最大震度 5 强。前者是地震的大小，后者是某个地方摇得多厉害。

## 那么，大地震有多常见？

既然每多一级能量大 32 倍，大地震自然比小地震少很多。我把 USGS 目录里马来西亚周边（包括 Sumatra）五十年的地震拿出来数：

![马来西亚周边（7°S–10°N、88–115°E）的地震有多常见，USGS 目录 1976–2025，M5 以上。纵轴是对数。这个范围包括 Sumatra 外海的隐没带，大部分大地震发生在那里，不是马来半岛](/uploads/blog/magnitude-frequency-zh.png)

5 级左右的每年六十多个，6 级每年四个左右，7 级大约两年一个，8 级以上大约十年一个。[17] 规模每少一级，次数大约多十倍，这是地震学里很有名的 Gutenberg–Richter 关系。[6] 要注意，这五十年里包括了 2004 年和 2005 年的大地震和它们的余震，所以数字是平均，不是预测。

## 换一个方式想规模

影片最后，我用断层的长度来想规模。Wells 和 Coppersmith 在 1994 年整理了几百个浅层地震，找出规模和破裂长度的经验关系：[18]

![影片画面：4 级地震断开的 fault 大约一公里，7 级大约五十公里，差不多是 KL 到 Seremban 的距离（经验公式估算，示意，不是真实断层）](/uploads/blog/ep02-kl-seremban.jpg)

| 规模 | 破裂长度（典型值） | 差不多像…… |
| --- | --- | --- |
| 4 | 约 0.8 公里 | 400 米跑道两圈 |
| 5 | 约 3 公里 | 走路半小时多 |
| 6 | 约 13 公里 | |
| 7 | 约 50 公里 | KL 到 Seremban |
| 8 | 约 190 公里 | KL 到 Melaka 再多一段 |

这只是典型值，同样规模的地震可以差好几倍。公式是用 4.8 级以上的浅层地壳地震整理出来的，4 级是往外推的，8 级也已经在边缘；像 Sabah 那种 600 多公里深的地震，就完全不适用。[18]

## 下次看到“几级地震”，问三个问题

1. **这是哪一把尺？** 小地震多半是 local magnitude，大地震应该看 Mw。
2. **是谁算的？** 两个地震要比较，就用同一家机构的数字。差零点几很正常，但 0.3 已经是快三倍的能量。
3. **离我多远、多深？** 规模告诉你地震有多大，烈度才告诉你你家摇得多厉害。

下一篇讲 P-wave 和 S-wave：地震来的时候，为什么常常先上下一顿，再左右摇？

## 参考资料

1. The Star TV (2025-11-03). Minor 2.7-magnitude earthquake recorded in Segamat, says MetMalaysia. [https://thestartv.com/v/minor-2-7-magnitude-earthquake-recorded-in-segamat-says-metmalaysia](https://thestartv.com/v/minor-2-7-magnitude-earthquake-recorded-in-segamat-says-metmalaysia)
2. USGS. Earthquake Magnitude, Energy Release, and Shaking Intensity. [https://www.usgs.gov/programs/earthquake-hazards/earthquake-magnitude-energy-release-and-shaking-intensity](https://www.usgs.gov/programs/earthquake-hazards/earthquake-magnitude-energy-release-and-shaking-intensity)
3. Richter, C. F. (1935). An instrumental earthquake magnitude scale. *BSSA* 25(1), 1–32. [https://ncedc.org/ftp/outgoing/peggy/ML/Richter_1935.pdf](https://ncedc.org/ftp/outgoing/peggy/ML/Richter_1935.pdf)
4. Boore, D. M. (1989). The Richter scale: its development and use for determining earthquake source parameters. *Tectonophysics* 166, 1–14. [https://doi.org/10.1016/0040-1951(89)90200-X](https://doi.org/10.1016/0040-1951(89)90200-X)
5. Kanamori, H. (1983). Magnitude scale and quantification of earthquakes. *Tectonophysics* 93, 185–199. [https://doi.org/10.1016/0040-1951(83)90273-1](https://doi.org/10.1016/0040-1951(83)90273-1)
6. Stein, S. & Wysession, M. (2003). *An Introduction to Seismology, Earthquakes, and Earth Structure*. Blackwell.（规模、饱和、能量公式 log E = 1.5M + 4.8、Gutenberg–Richter 关系）
7. USGS. Magnitude Types. [https://www.usgs.gov/programs/earthquake-hazards/magnitude-types](https://www.usgs.gov/programs/earthquake-hazards/magnitude-types)
8. Hanks, T. C. & Kanamori, H. (1979). A moment magnitude scale. *JGR* 84(B5), 2348–2350. [https://doi.org/10.1029/JB084iB05p02348](https://doi.org/10.1029/JB084iB05p02348)
9. USGS FAQ. Moment magnitude, Richter scale – what are the different magnitude scales, and why are there so many? [https://www.usgs.gov/faqs/moment-magnitude-richter-scale-what-are-different-magnitude-scales-and-why-are-there-so-many](https://www.usgs.gov/faqs/moment-magnitude-richter-scale-what-are-different-magnitude-scales-and-why-are-there-so-many)
10. USGS ComCat. M 7.1 – 57 km NNW of Kota Belud, Malaysia (us6000sasz). [https://earthquake.usgs.gov/earthquakes/eventpage/us6000sasz](https://earthquake.usgs.gov/earthquakes/eventpage/us6000sasz)
11. USGS ComCat. M 4.0 – 13 km ESE of Segamat, Malaysia (us6000r3fi). [https://earthquake.usgs.gov/earthquakes/eventpage/us6000r3fi](https://earthquake.usgs.gov/earthquakes/eventpage/us6000r3fi)
12. USGS ComCat. 2004 Sumatra – Andaman Islands Earthquake. [https://earthquake.usgs.gov/earthquakes/eventpage/official20041226005853450_30](https://earthquake.usgs.gov/earthquakes/eventpage/official20041226005853450_30)
13. Stein, S. & Okal, E. A. (2005). Speed and size of the Sumatra earthquake. *Nature* 434, 581–582. [https://doi.org/10.1038/434581a](https://doi.org/10.1038/434581a)
14. Bernama (2026-02-23). MetMalaysia: 6.8-magnitude quake off Sabah. [https://www.bernama.com/tv/news.php?id=2526438](https://www.bernama.com/tv/news.php?id=2526438)
15. USGS. The Modified Mercalli Intensity Scale. [https://www.usgs.gov/programs/earthquake-hazards/modified-mercalli-intensity-scale](https://www.usgs.gov/programs/earthquake-hazards/modified-mercalli-intensity-scale)
16. 気象庁. 震度について. [https://www.jma.go.jp/jma/kishou/know/shindo/index.html](https://www.jma.go.jp/jma/kishou/know/shindo/index.html)
17. USGS ComCat 查询（7°S–10°N、88–115°E，1976–2025，M≥5）. [https://earthquake.usgs.gov/fdsnws/event/1/query?format=csv&orderby=magnitude&starttime=1976-01-01&endtime=2026-01-01&minlatitude=-7&maxlatitude=10&minlongitude=88&maxlongitude=115&minmagnitude=5](https://earthquake.usgs.gov/fdsnws/event/1/query?format=csv&orderby=magnitude&starttime=1976-01-01&endtime=2026-01-01&minlatitude=-7&maxlatitude=10&minlongitude=88&maxlongitude=115&minmagnitude=5)
18. Wells, D. L. & Coppersmith, K. J. (1994). New empirical relationships among magnitude, rupture length, rupture width, rupture area, and surface displacement. *BSSA* 84(4), 974–1002.

**图片来源**：Charles Richter 照片，Caltech，经 USGS，Wikimedia Commons，公有领域。金森博雄照片，Christopher Michel，Wikimedia Commons，[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)。其余图片为影片画面和作者用 USGS 资料绘制。
