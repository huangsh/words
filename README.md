# 单词乐园

面向家庭使用的英语背单词应用，帮助孩子通过循序渐进的练习学习和复习词汇。项目提供家长管理后台、儿童学习界面，以及本地 SQLite 数据持久化。

## Todo
- [x] 雅思高频词库建设（10 大核心学术主题、132 个单元、1472 个词汇）
- [x] 同义替换与词族派生（Lexical Resource 提分核心，支持交互式发音朗读与辨析提示）
- [x] 例句挖空填词（Cloze Test）模式
- [x] 在管理界面中可以设置不同学习模式是否开启，同时前一个模式完成后才可以进行下一个模式，且《闪卡认词》这个模式必须保留
- [x] 一键生成「听写/默写练习纸」（PDF / 网页打印），模式包括 1.看中文写英文，2.看英文写中文，3.听写卷（仅保留题号横线，方便家长念、孩子手写）
- [x] 全流程键盘快捷键支持（空格/Enter翻转、1/2认识、A/B/C/D选择、Tab提示、Esc返回等）
- [x] 闪卡认词增加「✨ AI 单词解释」按钮（调用 DeepSeek Flash `deepseek-chat` 非思考模式 `thinking: disabled`，支持 SQLite 结果缓存、同根词点击发音，以及三段式深度助记拆解：1. 结构拆解 → 2. 词义演进逻辑 → 3. 同根词串联记忆）

## 功能

- **分角色账号**：首次创建家长账号；家长可为孩子新增独立账号和每日目标。
- **多种学习模式**：闪卡认词、四选一闯关、听音选词、拼写挑战；后续关卡按学习进度解锁。
- **间隔复习**：根据答题结果安排待复习词，并展示连续学习天数、掌握量和学习统计。
- **词库管理**：按“词库 → 年级 → 单元”维护单词，支持音标、词性、例句、词族、近义词和标签。
- **批量导入**：支持粘贴文本、Excel 复制，以及 CSV、TSV、TXT 文件导入；导入前可预览和校验。
- **内置词库**：首次访问数据库时自动、幂等地导入人教版小学英语词汇和雅思核心高频词汇。
- **本地持久化**：所有账号、学习记录和词库保存在 SQLite 数据库中。

## 技术栈

- [Next.js 15](https://nextjs.org/) App Router + React 19 + TypeScript
- Tailwind CSS 4
- SQLite（Node.js 内置 [`node:sqlite`](https://nodejs.org/api/sqlite.html)）
- Docker Compose

## 环境要求

- Node.js **24 或更高版本**（项目使用 `node:sqlite`，Docker 镜像基于 Node.js 24）
- npm
- Docker 与 Docker Compose（仅容器部署时需要）

## 本地开发

安装依赖并启动开发服务器：

```bash
npm ci
npm run dev
```

访问 <http://localhost:8861>。首次访问会显示初始化页，请创建家长账号；之后家长可在后台创建孩子账号并管理词库。

默认数据库路径为 `data/words.db`。该目录包含账号与学习记录，应妥善备份且不要提交到版本控制。

### 常用命令

```bash
# TypeScript 类型检查
npx tsc --noEmit

# ESLint 检查
npm run lint

# 构建生产版本
npm run build

# 启动已构建的生产版本
npm run start
```

> 开发服务器运行时请不要并行执行 `npm run build`，两者可能竞争 `.next` 构建缓存。需要构建时，先停止 `npm run dev`。

## Docker 部署

在项目根目录执行：

```bash
docker compose up -d --build
```

应用将在 <http://localhost:8861> 提供服务。Compose 会将本地 `./data` 挂载到容器内的 `/app/data`，数据库文件位于 `data/words.db`；重建容器不会删除该目录中的数据。

查看运行状态和日志：

```bash
docker compose ps
docker compose logs --tail 100 -f
```

停止服务：

```bash
docker compose down
```

## 配置

| 环境变量 | 默认值 | 说明 |
| --- | --- | --- |
| `DATABASE_PATH` | `data/words.db` | SQLite 数据库文件路径。Docker 中为 `/app/data/words.db`。 |
| `SESSION_SECRET` | 自动生成并保存到数据库 | 会话签名密钥。生产环境建议设置为随机、稳定的长字符串。 |
| `COOKIE_SECURE` | `false` | 设为 `true` 后，仅通过 HTTPS 发送登录 Cookie。 |

示例：

```bash
SESSION_SECRET="replace-with-a-long-random-secret" \
COOKIE_SECURE=true \
npm run start
```

## 批量导入格式

进入家长后台的“批量导入单词”页面，可粘贴内容或上传 `.csv`、`.tsv`、`.txt` 文件。字段可使用竖线、Tab 或逗号分隔；也支持从英文到首个中文字段的空格分隔。

```text
# 3上 Unit 1 Hello!
ruler | 尺子
pencil | n. 铅笔 | /ˈpensl/
pencil box | 铅笔盒 | #短语
# 3上 Unit 2 Colours
red | 红色的 | | | I like red. | 我喜欢红色。 | #重点
green	绿色的
```

- 以 `#` 开头的行定义年级、册别和单元；未指定的年级/册别会沿用上一标题或页面中的默认设置。
- 支持字段：`英文 | 中文释义 | 音标 | 词性 | 英文例句 | 中文例句 | #标签`。
- 导入前会显示新增、重复和格式提示；重复单词可选择跳过，或更新释义、音标和例句。

## 数据备份与恢复

请在升级、迁移或调整词库前备份数据库。先停止服务，再复制 `data/words.db`，以确保 SQLite 已正常关闭并完成检查点：

```bash
docker compose stop
cp data/words.db data/words.db.bak.$(date +%Y%m%d%H%M%S)
docker compose start
```

恢复时先停止服务，用备份替换数据库文件后再启动服务。不要删除 `data/words.db`，否则账号、学习进度与打卡记录将无法恢复。

## 项目结构

```text
src/
├── app/                 # 页面与 Route Handlers
│   ├── admin/           # 家长后台
│   ├── api/             # 认证、词库、学习和统计 API
│   └── learn/           # 儿童学习界面
├── components/          # 可复用 UI 组件
└── lib/
    ├── data/            # 内置词库数据
    ├── db.ts            # SQLite 初始化与迁移
    ├── seed.ts          # 内置词库幂等导入
    └── study.ts         # 学习队列与复习逻辑
data/                    # 运行时 SQLite 数据（不提交）
```
