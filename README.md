# 湛选科技(北京) 有限公司 官网

纯静态官网，用于 [GitHub Pages](https://pages.github.com/) 展示，并可用于 Apple 组织开发者注册时的官网验证。

## 部署到 GitHub Pages

1. 将本仓库推送至 GitHub（可命名为 `PureChoice` 或 `用户名.github.io` 等）。
2. 打开仓库 **Settings → Pages**。
3. 在 **Build and deployment** 中：
   - **Source**：Deploy from a branch
   - **Branch**：`main`（或你的默认分支）
   - **Folder**：`/` (root)
4. 保存后等待构建完成。站点地址一般为：
   - 用户/组织站：`https://<user|org>.github.io/`
   - 项目站：`https://<user|org>.github.io/PureChoice/`

## 本地预览

在项目根目录启动任意静态服务器，例如：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 自定义内容

- **联系邮箱**：在 `index.html` 中搜索 `contact@zhanxuan-tech.com` 并替换为实际邮箱。
- **关于我们 / Slogan**：直接修改 `index.html` 内对应文案即可。

## 技术说明

- 纯 HTML、CSS、JS，无构建步骤。
- 根目录含 `.nojekyll`，发布时禁用 Jekyll 处理。
