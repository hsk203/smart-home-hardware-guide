# 部署说明（Cloudflare Pages）

> 状态：未部署。等用户的新 Cloudflare 账号建好后再部署。不要部署到 switchlivo.com 那个账号上。

## 一次性准备（新账号）

1. 在新 Cloudflare 账号里创建一个 Pages 项目，连接 GitHub 仓库 `hsk203/ai-tools-guide`，分支 `main`。
2. 构建设置：
   - 框架预设：Astro（或留空，手动填下面两项）
   - 构建命令：`pnpm build`
   - 输出目录：`dist`
   - Node 版本：24（环境变量 `NODE_VERSION=24`；仓库里有 `.node-version` 和 `packageManager: pnpm@10.33.0`）
3. 环境变量：
   - `SITE_URL`：`https://<项目名>.pages.dev`（部署后拿到真实地址，再改成自定义域名并重新部署）
   - `PUBLIC_SITE_LANGUAGE`：不填，默认简体中文（zh-CN）
4. 自定义域名接好后，把 `SITE_URL` 改成正式域名，再部署一次（canonical / sitemap / RSS 里的地址才会正确）。

## 繁体中文（zh-Hant）

繁体是单独构建：同一个仓库，再建一个 Pages 项目，环境变量加 `PUBLIC_SITE_LANGUAGE=zh-Hant`，其他设置相同。构建时 `prebuild` 脚本会自动用 opencc-js 把简体文章转成繁体（输出到 `src/content/posts/zh-Hant/`，生成文件，不进仓库）。

## 本地验证

```bash
pnpm install
pnpm build        # 先跑 prebuild（生成繁体文章）+ pnpm check，再构建
pnpm preview      # 本地预览
```

构建默认 `SITE_URL=http://localhost:4321` 也能跑，但部署前务必设成真实域名，否则 canonical / sitemap / RSS 里的地址是错的。
