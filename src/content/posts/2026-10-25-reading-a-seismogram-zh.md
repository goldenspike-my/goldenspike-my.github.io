---
title: 自己读一张地震图：从 P 和 S 中间的空档，算出地震有多远
slug: reading-a-seismogram
description: 地震图上有两次起跳，中间那段安静的空档藏着距离。这篇用 Ipoh 一台地震仪的真实记录，教你认出 P-wave 和 S-wave、自己估算地震多远，也讲这条估算法在哪里会失灵。
date: 2026-10-25
category: geo
lang: zh
cover: /uploads/reading-a-seismogram-cover.jpg
youtubeId: 9fqKAyF-pe8
coverAlt: Ipoh 地震仪记录的 Sabah 7.1 级地震，先是一段绿色的小摆动（P），隔了一大段之后才是金色的大摆动（S）
tags:
  - 地震
  - P-wave
  - S-wave
  - 地震图
  - Sabah
  - 緊急地震速報
draft: false
---
今年 2 月 22 日，Sabah 外海深处发生了一个 7.1 级地震，震源深 629 公里。[8] 离那里一千七百多公里的 Ipoh，有一台地震仪把它记了下来。

这台地震仪的记录，先是一段小小的摆动，然后安静了很久，过了 2 分 36 秒，才来一段大很多的摆动。

这一篇，我想请你自己读一读这张图。读懂之后，你会知道那两段摆动各是什么、中间那段空档怎么变成距离，也会知道这个算法在哪里会出错。想先看一分钟的答案，可以看「60秒看懂」短片：[地震警报为什么能比摇晃先到？](https://youtube.com/shorts/c7xPRyjqZe0)

## 第一步：认出两次起跳

地震在地底下发生的时候，会同时放出两种震动。一种是推拉：岩石被压一下、弹回来，再压到下一段，像一条弹簧被推了一下。这叫 P-wave。另一种是甩动：岩石被往旁边推歪，像甩一条绳子，绳子往上下抖，波却往前走。这叫 S-wave。[1]

![影片画面：P-wave 像弹簧被推，弹簧本身前后挤、往前传，振动的方向跟前进的方向一样（示意图）](/uploads/blog/ep03-p-spring.jpg)

![影片画面：S-wave 像甩绳子，绳子上下抖，波往旁边传，振动的方向跟前进的方向垂直（示意图）](/uploads/blog/ep03-s-rope.jpg)

两种波同时出发，可是 P 比较快。在地壳上层，P 大约每秒 6 公里，S 大约每秒 3.5 公里。[1][6] 所以地震图上先出现的那次起跳是 P，后面那次是 S。

下面这张图是 Ipoh 那台地震仪（MY.IPM）同一时间记下的三个方向。地震仪其实不只一根针，它分别记上下、南北、东西。

![Ipoh 地震仪三个方向的真实记录，Sabah 7.1 级地震。每条线各自按最大值缩放，所以要在同一条线里比 P 和 S：上下那条，P 跟 S 差不多大；南北那条，S 大约是 P 的 4 倍。资料：EarthScope（IRIS DMC），P、S 时间按 iasp91 模型](/uploads/blog/ipm-components-zh.png)

你可以看到，上下那条线（BHZ），P 一来就很明显，跟后面的 S 差不多大。可是南北那条（BHN），P 只是小小地抖一下，S 一来就大了四倍。这跟影片里讲的一样：P 主要让你感觉上下一顿，S 让你左右摇，而且通常摇得更厉害。[2]

> **小知识**：为什么 P 会从脚底往上冲？地底的岩石越深通常越硬、波跑得越快。波从深处往上走，每进入比较慢的一层，路线就被“掰”得更竖一点，像光进入水里会转弯一样（Snell's law）。快到地面的时候，波几乎是垂直往上的。[6] P 的推拉方向就是前进方向，所以你感觉是上下；S 的甩动方向垂直于前进方向，所以你感觉是水平。

![影片画面：震动从脚底往上冲，P 顺着往上的方向推拉，所以上下；S 跟前进方向垂直，所以左右（示意图）](/uploads/blog/ep03-which-way.jpg)

## 第二步：用空档估距离

离地震越远，P 和 S 就拉得越开，因为跑得快的那个越跑越前。下面是同一个 Sabah 地震，在六个地震站的记录，按距离从近到远排：

![同一个 Sabah 7.1 级地震，在六个地震站的真实记录（上下方向）。离得越远，P（绿线）和 S（金线）中间的空档越长：Lahad Datu 66 秒，Chiang Mai 193 秒。资料：EarthScope（IRIS DMC），USGS us6000sasz，P、S 时间按 iasp91 模型](/uploads/blog/ps-record-section-zh.png)

这个“越远、空档越长”的关系，日本地震学家大森房吉（Fusakichi Omori）把它变成了一条很简单的估算法：

> 距离（公里）≈ 空档秒数 × 大约 8

1924 年一篇日本气象学会的论文引用他的公式时，写的系数是 7.42，适用于 1,000 公里以内。[4] 后来各地用的系数在 6 到 8 左右，看当地地底的速度而定。[4][5]

![大森房吉（1868–1923）。图片来源：作者不详，公有领域，Wikimedia Commons](/uploads/blog/photo-omori.jpg)

你可以自己试一试：

| P 和 S 的空档 | 估计距离（系数 6–8） |
| --- | --- |
| 5 秒 | 30–40 公里 |
| 10 秒 | 60–80 公里 |
| 35 秒 | 210–280 公里 |

最后一行就是影片里的例子：如果地震发生在 Penang，在 KL 量到的空档大约 35 秒，乘 8 就是 280 公里，跟 Penang 到 KL 的直线距离（约 290 公里）差不多。

![影片画面：如果地震发生在 Penang，P 大约 50 秒到 KL，S 大约 1 分 20 多秒才到，中间差约 35 秒（速度取地壳典型值，秒数为约数）](/uploads/blog/ep03-penang-kl.jpg)

> **老实说**：影片里这个 Penang 的例子是简化过的。290 公里外，最先到的 P 其实不是一路走地壳，而是先往下钻到地壳底下、沿着比较快的地幔顶部走一段再上来（叫 Pn），所以真正的秒数会跟这个简单算法有出入。[6] 这就是为什么影片里说“大约”。

### 这条估算法会失灵的地方

用 Sabah 那次地震来算，你会发现它差很远。下面每一站都用“空档 × 8”去估，再跟真正的直线距离（从 629 公里深的震源算起）比：

| 地震站 | 空档 | 空档 × 8 | 真正的直线距离 |
| --- | --- | --- | --- |
| Lahad Datu | 66 秒 | 约 530 公里 | 约 690 公里 |
| Sibu | 84 秒 | 约 680 公里 | 约 890 公里 |
| Ipoh | 156 秒 | 约 1,250 公里 | 约 1,740 公里 |
| Chiang Mai | 193 秒 | 约 1,540 公里 | 约 2,260 公里 |

每一站都少算了两成多到三成多。原因是这个地震太深了：它的波大部分走在地幔里，那里的岩石比地壳硬，P 和 S 都跑得比较快，同样的空档就代表更远的距离。用这几站反算，系数要用 10 到 12 才对得上。[6][15]

所以大森的算法，适合的是“不太深、不太远”的地震。遇到深源地震或很远的地震，地震学家会用整个地球的速度模型（例如 iasp91）去算，不会只乘一个数字。[15]

## 一百多年前，是谁先认出它们的？

1897 年 6 月，印度东北部的 Assam 发生了一场大地震。负责调查的是印度地质调查所的 Richard Dixon Oldham。他收集了欧洲（主要是意大利）几个地震站的记录，发现远方的地震图上都有三段：先是一段小的，接着另一段，最后才是又长又慢的大摆动。[9]

1900 年他在英国皇家学会的期刊上发表了这个结果，把第一段解释为推拉的波、第二段解释为扭动的波，两者都穿过地球内部，第三段则是沿着地表走的波。[9] 这就是我们今天说的 P-wave、S-wave 和表面波。

![1897 年 Assam 大地震后，Chhatak 的 George Inglis 纪念碑断剩约 45 英尺。图片来源：Oldham（1899），Memoirs of the Geological Survey of India 第 29 卷卷首插图，公有领域，Wikimedia Commons](/uploads/blog/photo-assam-1897.jpg)

## S-wave 过不去的地方

S-wave 是靠岩石“被推歪又弹回来”传下去的。液体没有这种弹力，你推一下水，它只会流走，不会弹回来，所以 S-wave 过不了液体。[1][6]

这个特点后来变成看进地球里面的工具。离震中大约 103 到 104 度以外（大约地球另一边），地震站收不到直接穿过地心来的 S-wave，好像有一个影子。[11] 地震学家从这个“影子”推论：地球的外核是液体。1906 年 Oldham 已经从远方记录推论地球有一个核；1913 年 Beno Gutenberg 算出核的边界大约在 2,900 公里深；1926 年 Harold Jeffreys 用潮汐和地震资料，推论外核很可能是液体。[12]

所以你在 Ipoh 那张图上看到的那段 S，也是一百年前人们认识地球内部的同一种线索。

## 远方的地震，为什么高楼里的人最有感？

在马来西亚，我们感觉到的地震，很多其实来自很远的 Sumatra。2022 年 2 月 25 日，Sumatra 西部一个 6 级左右的地震，就让 Klang Valley 和 Melaka 好几栋高楼的人跑下楼。[13]

这种时候，摇晃你的通常不只是 P 和 S。Oldham 当年看到的第三段，沿着地表走的表面波，周期比较长，跑得也比较慢，往往最后才到，却可以摇很久。[1][6] 高楼本身也有自己摇摆的节奏，楼越高，摇一下来回的时间越长；遇到节奏相近的长周期摇晃，就容易越摇越大。USGS 研究过大阪一栋 55 层的大楼：2011 年东日本大地震离它约 770 公里，它却摇了一千秒以上。[14]

所以如果你住在高楼、觉得慢慢晃了很久，那很可能不是附近的小地震，而是远方的大地震，晃你的主要是长周期的波。

## 那几秒能做什么？

回到 P 和 S 中间的空档。日本把它用来发警报：靠近震源的地震站一感觉到 P-wave，电脑马上估算地震在哪里、有多大，再用电子讯号把警报送出去。电子讯号比 S-wave 快得多，所以警报有机会比大摇晃先到，大约早几秒到几十秒。[2] 日本的緊急地震速報从 2007 年 10 月 1 日起开始对一般民众发布。[3]

![影片画面：地震站感觉到 P-wave，电脑马上估算，警报用电子讯号传到手机和电视，抢在 S-wave 前面（示意图）](/uploads/blog/ep03-eew-chain.jpg)

可是它有一个限制：离震源很近的地方，S-wave 几乎是跟着 P-wave 一起到的，警报可能来不及。[2]

![影片画面：如果地震就在你家附近，P 和 S 几乎同时到，警报可能来不及（示意图）](/uploads/blog/ep03-eew-near.jpg)

> 那几秒钟，可能就够你躲到桌子底下。

## 下次感觉到地震，可以问自己的三件事

第一，先来的是上下，还是左右？如果先上下一顿，那很可能是 P，真正大的摇晃（S）还在后面。

第二，上下和左右中间隔了多久？在心里数秒。隔几秒，乘 8 左右，就是大概多少公里外。几乎没有空档，代表地震离你很近。

第三，是快速的抖，还是慢慢地晃很久？在高楼里慢慢晃很久，常常是很远的大地震。

想更了解新闻里的地震数字，可以看之前的两篇：[新闻说的“震中”，其实不是地震发生的地方](/blog/epicentre-hypocentre)、[新闻说“几级地震”的时候，你该多问的三件事](/blog/reading-magnitude)。

下一期我们换个领域，来聊聊石头。

## 参考资料

1. USGS, *Two kinds of waves are generated by earthquakes*. https://earthquake.usgs.gov/earthquakes/events/1906calif/18april/earthwaves.php
2. 気象庁（JMA）「緊急地震速報のしくみ」. https://www.jma.go.jp/jma/kishou/know/jishin/eew/shikumi/shikumi.html
3. 気象庁 报道发表（2007-09-21）「緊急地震速報の一般への提供開始について」. https://www.jma.go.jp/jma/press/0709/21a/eew_start070921.html
4. Hirano, K. (1924). 引用大森公式 Δ = 7.42T（0–1,000 km），*Journal of the Meteorological Society of Japan*, Ser. II, 2(4). https://www.jstage.jst.go.jp/article/jmsj1923/2/4/2_4_112/_article ；另见気象庁『験震時報』https://www.jma.go.jp/jma/kishou/books/kenshin/vol4p001.pdf
5. UC Berkeley Seismological Laboratory, *P-waves and S-waves: which are faster?* (2008). https://seismo.berkeley.edu/blog/2008/09/10/p-waves-and-s-waves-which-are-faster.html
6. Stein, S. & Wysession, M. (2003). *An Introduction to Seismology, Earthquakes, and Earth Structure*. Blackwell.
7. EarthScope Consortium (IRIS DMC) FDSN web services，地震站 MY.LDM、MY.SBM、MY.IPM、IU.DAV、II.KAPI、IU.CHTO. https://service.iris.edu
8. USGS ComCat us6000sasz（M7.1，2026-02-22，深 629 km）. https://earthquake.usgs.gov/earthquakes/eventpage/us6000sasz
9. Oldham, R. D. (1900). On the propagation of earthquake motion to great distances. *Philosophical Transactions of the Royal Society A*, 194, 135–174.
10. Oldham, R. D. (1899). Report on the Great Earthquake of 12th June 1897. *Memoirs of the Geological Survey of India*, 29.
11. IRIS, *Seismic Shadow Zone: Basic Introduction*（动画）. https://www.iris.edu/hq/inclass/animation/121
12. *History of the detection of the core*（比利时皇家天文台页面，NASA 镜像）. https://core2.gsfc.nasa.gov/MIRROR_www_astro_oma_be/history.html
13. The Star / Asia News Network（2022-02-25）, Several highrises in Klang Valley evacuated following tremors. https://asianews.network/several-highrises-in-klang-valley-evacuated-following-tremors/
14. USGS, Response of a tall building far from the epicenter of the 11 March 2011 M 9.0 Great East Japan earthquake. https://www.usgs.gov/publications/response-a-tall-building-far-epicenter-11-march-2011-m-90-great-east-japan-earthquake
15. Kennett, B. L. N. & Engdahl, E. R. (1991). Traveltimes for global earthquake location and phase identification. *Geophysical Journal International*, 105, 429–465.

## 图片来源

- 大森房吉：作者不详，公有领域。https://commons.wikimedia.org/wiki/File:Omori_Fusakichi.jpg
- George Inglis 纪念碑（Chhatak，1897 年地震后）：Oldham（1899）卷首插图，公有领域。https://commons.wikimedia.org/wiki/File:Oldham_1899_Frontispiece_memoirsofgeologi29geol_0008.jpg
- 地震图：我用 EarthScope（IRIS DMC）的公开资料画的；影片画面为金釘子第 03 集。
