# AI 工具指南（ai-tools-guide）

出海 AI 工具中文指南：工具 + 图文教程站。每个工具都讲清楚：是什么、能干什么、多少钱、怎么用、国内能不能用、有没有平替。

> 站名、品牌、域名都是占位，待定后替换（见 `src/site.config.json`）。

## 技术栈

基于 [Kanade](https://github.com/sudoriaa/Kanade-Astro) 主题改的：Astro 7.3.7 + Tailwind CSS 4.3.3 + Vue 3.5，纯静态输出，部署在 Cloudflare Pages。

## 本地开发

```bash
pnpm install
pnpm dev      # 本地开发
pnpm build    # 构建（先跑 prebuild 生成繁体文章，再跑 pnpm check）
pnpm preview  # 本地预览构建结果
```

环境变量：`SITE_URL`（站点正式地址，部署时必填）、`PUBLIC_SITE_LANGUAGE`（默认 zh-CN，可选 zh-Hant / en / ja）。

## 写一篇文章

在 `src/content/posts/` 新建 `.md` 文件，frontmatter 示例：

```yaml
---
title: "工具名：副标题"
description: "一句话介绍"
date: 2026-11-12
category: writing # writing | art | video | coding | office
tags: ["AI 写作", "工具名"]
cover: tool
pricingModel: freemium # free | freemium | paid（可选）
startingPrice: "$20/月" # 可选
needVPN: true # 可选
cnAlternative: "文心一言" # 可选
affiliateUrl: "https://..." # 可选
updatedDate: 2026-11-12 # 可选
---
```

## 繁体中文

繁体文章由构建脚本自动生成：`scripts/convert-zh-hant.mjs` 用 opencc-js 把简体文章转成繁体，输出到 `src/content/posts/zh-Hant/`（生成文件，不进仓库）。`src/i18n/zh-Hant.json` 同样由简体字典自动转换。

## 部署

见 [DEPLOY.md](./DEPLOY.md)。
