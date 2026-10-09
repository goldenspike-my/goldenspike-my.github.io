# 金釘子 GoldenSpike 网站

YouTube 频道首页 + 个人博客。中英双语，免费放在 GitHub Pages 上，用 Pages CMS 在网页上打字发文。

---

## 一、第一次上线（只需做一次，约 20 分钟）

### 1. 建立仓库（Repository）
1. 登入 GitHub，右上角 **+** → **New repository**。
2. **Repository name** 填：`你的GitHub账号.github.io`（例如账号是 otabe，就填 `otabe.github.io`）。
   - 用这个名字，网址最短，就是 `https://otabe.github.io`；文章里插入的图片也不会出问题。
3. 选 **Public**，其他不用勾，按 **Create repository**。

### 2. 上传网站文件
1. 在新仓库页面，点 **uploading an existing file**。
2. 打开这个 `goldenspike-site` 文件夹，**全选里面所有东西**（包括 `.github`、`.pages.yml` 这些以点开头的），拖进网页。
   - Windows 看不到点开头的文件？在文件夹上方选 **查看 → 显示 → 隐藏的项目**。
   - 不要上传 `node_modules`、`dist` 文件夹（如果有的话）。
3. 最下面按 **Commit changes**。
4. 检查：仓库里要看得到 `.github` 文件夹（里面有 `workflows/deploy.yml`）和 `.pages.yml`。
   如果少了，点 **Add file → Create new file**，文件名打 `.github/workflows/deploy.yml`，把电脑里同名文件的内容贴进去，再 Commit。

### 3. 打开自动发布
1. 仓库页面 → **Settings** → 左边 **Pages**。
2. **Source** 选 **GitHub Actions**。
3. 回到仓库的 **Actions** 分页，会看到一个正在跑的任务（黄色圆点）。等它变成绿色勾（约 1–2 分钟）。
   - 如果没有自动开始：点左边 **Deploy to GitHub Pages** → 右边 **Run workflow**。
4. 打开 `https://你的账号.github.io`，网站就上线了。

### 4. 连接 Pages CMS（发文工具）
1. 打开 https://app.pagescms.org ，用 GitHub 账号登入。
2. 第一次会请你安装 Pages CMS 的 GitHub App，选只给 `你的账号.github.io` 这个仓库权限。
3. 选这个仓库，就会看到左边有：博客文章、测验、标本图库、视频分类、你知道吗卡片、关于我、网站设定。

---

## 二、平常怎么用

| 想做什么 | 在 Pages CMS 点哪里 |
|---|---|
| 写新文章 | 博客文章 → **Add an entry**，填好按 **Save** |
| 先存草稿不公开 | 文章里勾选「草稿」 |
| 文章配上视频 | 填「对应的 YouTube 视频 ID」 |
| 出新测验 | 测验 → Add an entry |
| 上传标本照片 | 标本图库 → Add an entry |
| 改首页大标题、社交链接 | 网站设定 |
| 改自我介绍 | 关于我（中文 / 英文） |

按 **Save** 之后约 1–2 分钟，网站会自动更新。

### 视频会自动更新
网站每天早上 7 点（日本时间）自动去 YouTube 抓最新的视频，你**不用手动加**。
如果想让某支视频出现在正确的系列（岩石、地震…），或加英文标题：
到 **视频分类**，加一笔，填「YouTube 视频 ID」和「系列」即可。

### 英文版
- 网站上的按钮、栏目名称都已经有英文。
- 文章：写一篇新文章，「语言」选 English 就会出现在英文版。
- 英文版还没有文章时，会自动显示中文文章。

---

## 文章中间插入图片
- 在正文里想放图的地方：输入 **/** 选 Image，或直接把照片**拖进去**、**贴上**。
- 点一下图片，用工具列的 **Alt（图片说明）** 按钮写说明——它会显示在图片下方。
- 在说明里加关键词调整大小和位置：`#小` `#中`（不写 = 整行）、`#左` `#右`（文字绕图）。例：`吉隆坡的石灰岩山 #小 #右`
- 手机上，靠左/靠右的图会自动变回整行。

## 中英文版本与自动翻译
- 英文版 = 跟中文版**同一个网址名称**、语言选 English。两篇会自动互相连接（文章里会出现「Read in English →」）。
- **自动翻译**：发布一篇文章或测验（没勾草稿）后，如果还没有另一种语言的版本，Claude 会在几分钟内翻译好，存成**草稿**。
  到 Pages CMS 打开那篇翻译，检查一下，取消勾选「草稿」再保存，就会发布。
- 之后再修改中文原文，英文版**不会**自动更新，需要自己改（或请 Claude 帮忙）。
- 需要的钥匙：GitHub 仓库 Settings → Secrets and variables → Actions 里的 `CLAUDE_CODE_OAUTH_TOKEN`（一年有效，过期后用 `claude setup-token` 重新产生）。

---

## 三、文件位置（想自己改的时候）

| 内容 | 位置 |
|---|---|
| 颜色 | `src/styles/global.css` 最上面 |
| 按钮、栏目文字（中英） | `src/lib/i18n.ts` |
| 文章 | `src/content/posts/` |
| 测验 | `src/content/quizzes/` |
| 上传的图片 | `public/uploads/` |
| 首页排版 | `src/views/Home.astro` |

---

## 四、技术备注
- 网站框架：Astro 5（静态网站）。
- 地震数据：USGS 公开的 GeoJSON（浏览器直接读取，不需要密钥）。地图底图：Esri World Dark Gray（免费、不需要密钥）。
- 在自己电脑预览（可选，需要先安装 Node.js 22）：`npm install` 然后 `npm run dev`，打开 http://localhost:4321 。
