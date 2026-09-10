# 软云专注 · SoftCloud

基于 https://github.com/remvze/moodist 定制，保留原项目许可证与作者署名。

生产域名：https://focus.zoci.pro

## Cloudflare Pages

GitHub 主分支自动部署。构建命令：`pnpm install --frozen-lockfile && pnpm build`；输出目录：`dist`；Node.js 22.16.0。无需后端数据库。

SoftCloud 样式与中文品牌文件位于 src 中，品牌图标为 public/softcloud.png。用户记录保存在当前浏览器，不跨设备同步。
