# AGENTS.md

本文件为 AI Assistant / Agent 在本代码库中进行开发、测试与部署的操作指南。

> 本地/私有部署的具体主机、域名与路径信息请放在 `AGENTS.local.md`（已被 `.gitignore` 忽略，不会进入公开仓库）。

---

## 1. 架构与服务概览

- **项目名称**：Words（少儿/小学生英语背单词系统）
- **技术栈**：Next.js (App Router) + TypeScript + Tailwind CSS + SQLite (`node:sqlite`)
- **运行环境**：
  - 本地环境：端口 `8861`（开发模式 `npm run dev`）
  - 远程服务器：Linux Docker，端口 `8861`（由 `docker compose` 管理）

### 远程服务器拓扑（占位符，按实际部署填写）
- **域名**：`<your-domain>`
- **服务器地址**：`<server-ip>`（局域网内优先使用局域网地址）
- **SSH 访问**：`ssh <ssh-user>@<server-ip>`
- **远程目录**：`<remote-dir>`
- **Git 仓库**：`<git-remote-url>`
- **Docker 容器名**：`words-app`
- **数据持久化挂载**：`<remote-dir>/data` 挂载到容器内 `/app/data`（SQLite 数据库位于 `/app/data/words.db`）
- **对外访问地址**：`http://<server-ip>:8861`

---

## 2. 远程服务更新标准流程 (Deployment SOP)

> [!IMPORTANT]
> **铁律**：未经用户明确要求（如“更新到远程”、“发布到线上”等指令），**绝对禁止**擅自向远程服务器或 Git 远端推送或部署。必须先在本地完成测试与验证！

当用户明确指示部署/更新远程服务器时，严格执行以下 5 步：

### 第 1 步：本地代码质量与语法检查
在本地确保没有类型错误，不要直接运行 `npm run build`（避免与后台运行的 `next dev` 产生构建缓存冲突）：
```bash
npx tsc --noEmit
```

### 第 2 步：提交并推送到 Git 远端
确认本地状态干净并将最新代码推送到远端仓库：
```bash
git add <修改的文件>
git commit -m "<清晰详细的提交信息>"
git push origin main
```

### 第 3 步：在远程服务器拉取最新代码
登录远程主机并拉取代码：
```bash
ssh <ssh-user>@<server-ip> "cd <remote-dir> && git pull && git log -1 --oneline"
```

### 第 4 步：重新构建并重启 Docker 服务
在远程服务器执行镜像重构与容器启动：
```bash
ssh <ssh-user>@<server-ip> "cd <remote-dir> && docker compose up -d --build"
```

### 第 5 步：健康检查与服务验证
验证容器运行状态、近期日志以及 HTTP 访问：
```bash
# 检查容器状态
ssh <ssh-user>@<server-ip> "docker ps --filter 'name=words-app'"

# 查看最近 30 行日志确认无报错
ssh <ssh-user>@<server-ip> "docker logs --tail 30 words-app"

# 检查 HTTP 接口响应状态码
ssh <ssh-user>@<server-ip> "curl -I -s http://127.0.0.1:8861/login"
```

---

## 3. 数据安全与数据库操作规范

1. **绝对保护用户学习数据**：
   - 数据库包含用户的学习记录（`progress` 表）、打卡日志（`study_logs` 表）与账号信息。
   - **严禁**清空或删除远程服务器的 `<remote-dir>/data/words.db`。
   - **严禁**在数据库升级中使用级联删除（`ON DELETE CASCADE`）无保护地清空 `units` 或 `words`。
2. **幂等迁移与增量同步**：
   - 词库新增字段（如 `example`、`phonetic`）应通过 `UPDATE ... WHERE (column = '' OR column IS NULL)` 模式增量补充，并在 `settings` 表记录迁移版本标记（如 `seed_examples_v1`）。
3. **备份建议**：
   - 进行重大数据库结构变更前，在远程执行备份：
     ```bash
     ssh <ssh-user>@<server-ip> "cp <remote-dir>/data/words.db <remote-dir>/data/words.db.bak.\$(date +%Y%m%d%H%M%S)"
     ```

---

## 4. 常见排错指引 (Troubleshooting)

- **Next.js 500 MODULE_NOT_FOUND (如 `Cannot find module './611.js'`)**：
  - 原因：在 `next dev` 运行期间并发执行了 `next build`，导致 `.next` 临时编译块冲突。
  - 解决办法：终止 `next dev` 进程 -> 删除本地 `.next` 目录 -> 重新启动 `npm run dev`。
- **SSH 连接超时或警告**：
  - 远程服务器在局域网内时优先使用局域网地址连接，速度最快且最稳定。
