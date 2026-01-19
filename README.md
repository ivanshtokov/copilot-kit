<div align="center">

# Copilot Kit

### Auto-Orchestrator System for GitHub Copilot

> **Version 3.8.0** — Native GitHub Copilot Configuration Kit with Auto-Orchestrator

[![npm version](https://img.shields.io/npm/v/@shtokov/copilot-kit.svg)](https://www.npmjs.com/package/@shtokov/copilot-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?logo=telegram)](https://t.me/IShtokov)

**[English](#-english)** | **[Русский](#-русский)**

</div>

---

## Quick Start

```bash
npx @shtokov/copilot-kit init
```

Or install globally:

```bash
npm install -g @shtokov/copilot-kit
copilot-kit init
```

---

<a name="-english"></a>

## English

### What is Copilot Kit?

**Copilot Kit** is a production-ready Auto-Orchestrator system for [GitHub Copilot](https://github.com/features/copilot) that works across **VS Code, Cursor, Windsurf, Devin**, and 10+ other AI coding agents. It automatically handles ALL user requests without explicit `@agent` or `/command` calls.

### Key Features

| Feature | Count | Description |
|---------|-------|-------------|
| **AGENTS.md** | Yes | Universal AI agent instructions (VS Code 1.104+) |
| **Custom Agents** | 16 | Specialized AI personas |
| **Agent Skills** | 40 | Domain knowledge libraries |
| **Prompt Files** | 10 | Reusable slash commands |
| **Auto-Apply Instructions** | 21 | File-type specific rules |
| **Custom Chat Mode** | Yes | Pre-configured Auto-Orchestrator mode |
| **VS Code Settings** | Yes | Maximum determinism configuration |

### Auto-Orchestrator System

Every response automatically follows this structured format:

```
TASK: [One-line task description]
DOMAIN: [FRONTEND | BACKEND | FULLSTACK | DEVOPS | SECURITY | TESTING | MOBILE | DATABASE | PLANNING | DEBUG | DOCS]
COMPLEXITY: [SIMPLE | MEDIUM | COMPLEX]
CLARITY: [1-10] -> [Action: Proceed | Clarify]
```

### Custom Agents (16)

Use `@agent-name` in GitHub Copilot Chat:

| Agent | Domain | Description |
|-------|--------|-------------|
| **@orchestrator** | Meta | Multi-agent coordination |
| **@project-planner** | Planning | Architecture, roadmaps |
| **@frontend-specialist** | Frontend | React, Vue, CSS, UI/UX |
| **@backend-specialist** | Backend | API, Node.js, databases |
| **@database-architect** | Database | Schema design, migrations |
| **@mobile-developer** | Mobile | React Native, Flutter |
| **@security-auditor** | Security | Vulnerability scanning |
| **@penetration-tester** | Security | Red team tactics |
| **@debugger** | Debug | Systematic debugging |
| **@performance-optimizer** | Performance | Profiling, optimization |
| **@devops-engineer** | DevOps | Docker, CI/CD, deployment |
| **@test-engineer** | Testing | Unit, integration, E2E |
| **@documentation-writer** | Docs | README, API docs |
| **@seo-specialist** | SEO | Search optimization |
| **@game-developer** | Games | Unity, Godot, Phaser |
| **@explorer-agent** | Discovery | Codebase exploration |

### Prompt Commands (10)

| Command | Description |
|---------|-------------|
| `/brainstorm` | Structured idea exploration |
| `/create` | Create new application |
| `/debug` | Systematic debugging |
| `/deploy` | Production deployment |
| `/enhance` | Add features to existing app |
| `/orchestrate` | Multi-agent coordination |
| `/plan` | Create project plan |
| `/preview` | Manage preview server |
| `/status` | Show project status |
| `/test` | Generate and run tests |

### Auto-Apply Instructions (21)

Instructions automatically apply based on file type:

| Pattern | Instruction |
|---------|-------------|
| `*.ts, *.tsx, *.js, *.jsx` | TypeScript/JavaScript standards |
| `*.css, *.scss, *.tsx, *.jsx` | Frontend/UI standards |
| `api/**, server/**, routes/**` | Backend/API standards |
| `*.test.*, *.spec.*, __tests__/**` | Testing standards |
| `*.py` | Python standards (PEP 8) |
| `*.prisma, prisma/**` | Prisma ORM standards |
| `Dockerfile*, docker-compose*` | Docker standards |
| `*.md, docs/**` | Documentation standards |
| `*.swift, *.kt, *.dart` | Mobile standards |
| `workflows/**` | CI/CD and DevOps standards |
| `**/*` | Security standards (always active) |

### Agent Skills (40)

Skills are domain-specific knowledge libraries organized by category:

**Frontend and UI:**
- frontend-design, react-patterns, tailwind-patterns, nextjs-best-practices, ui-ux-pro-max

**Backend and API:**
- api-patterns, nodejs-best-practices, nestjs-expert, python-patterns

**Database:**
- database-design, prisma-expert

**Security:**
- vulnerability-scanner, red-team-tactics

**Testing:**
- testing-patterns, tdd-workflow, webapp-testing

**Mobile:**
- mobile-design

**DevOps:**
- docker-expert, deployment-procedures

**Architecture and Planning:**
- architecture, app-builder, plan-writing

**Other:**
- clean-code, typescript-expert, game-development, mcp-builder, bash-linux, powershell-windows, seo-fundamentals, i18n-localization

### CLI Commands

```bash
copilot-kit init           # Initialize kit in current project
copilot-kit init --force   # Force overwrite existing files
copilot-kit --help         # Show help
copilot-kit --version      # Show version
```

### Project Structure

After installation, your project will have:

```
your-project/
├── AGENTS.md                     # Universal AI agent instructions
├── .vscode/
│   └── settings.json             # VS Code + Copilot configuration
└── .github/
    ├── copilot-instructions.md   # Main Auto-Orchestrator instructions
    ├── agents/                   # 16 custom agents
    ├── skills/                   # 40 domain skills
    ├── prompts/                  # 10 prompt templates
    ├── instructions/             # 21 auto-apply instructions
    └── modes/                    # Custom chat modes
```

### Compatibility

| Tool | Support |
|------|---------|
| VS Code 1.104+ | Full (AGENTS.md, instructions, modes) |
| Cursor | Full (AGENTS.md) |
| Windsurf | Full (AGENTS.md) |
| Devin | Full (AGENTS.md) |
| GitHub Copilot | Full |

---

<a name="-русский"></a>

## Русский

### Что такое Copilot Kit?

**Copilot Kit** — это готовая к использованию система Auto-Orchestrator для [GitHub Copilot](https://github.com/features/copilot), которая работает в **VS Code, Cursor, Windsurf, Devin** и 10+ других AI-агентах. Автоматически обрабатывает ВСЕ запросы пользователя без явных вызовов `@agent` или `/command`.

### Ключевые особенности

| Функция | Количество | Описание |
|---------|------------|----------|
| **AGENTS.md** | Да | Универсальные инструкции для AI |
| **Кастомные агенты** | 16 | Специализированные AI персоны |
| **Agent Skills** | 40 | Библиотеки доменных знаний |
| **Prompt-файлы** | 10 | Переиспользуемые команды |
| **Auto-Apply инструкции** | 21 | Правила по типам файлов |
| **Custom Chat Mode** | Да | Режим Auto-Orchestrator |
| **VS Code Settings** | Да | Максимальный детерминизм |

### Система Auto-Orchestrator

Каждый ответ автоматически следует структурированному формату:

```
TASK: [Описание задачи]
DOMAIN: [FRONTEND | BACKEND | FULLSTACK | DEVOPS | SECURITY | TESTING | MOBILE | DATABASE | PLANNING | DEBUG | DOCS]
COMPLEXITY: [SIMPLE | MEDIUM | COMPLEX]
CLARITY: [1-10] -> [Action: Proceed | Clarify]
```

### Кастомные агенты (16)

| Агент | Домен | Описание |
|-------|-------|----------|
| **@orchestrator** | Meta | Координация нескольких агентов |
| **@project-planner** | Planning | Архитектура, roadmaps |
| **@frontend-specialist** | Frontend | React, Vue, CSS, UI/UX |
| **@backend-specialist** | Backend | API, Node.js, базы данных |
| **@database-architect** | Database | Схемы, миграции |
| **@mobile-developer** | Mobile | React Native, Flutter |
| **@security-auditor** | Security | Поиск уязвимостей |
| **@penetration-tester** | Security | Red team тактики |
| **@debugger** | Debug | Систематический дебаггинг |
| **@performance-optimizer** | Performance | Профилирование |
| **@devops-engineer** | DevOps | Docker, CI/CD, деплой |
| **@test-engineer** | Testing | Unit, E2E тесты |
| **@documentation-writer** | Docs | README, API docs |
| **@seo-specialist** | SEO | Оптимизация поиска |
| **@game-developer** | Games | Unity, Godot |
| **@explorer-agent** | Discovery | Исследование кода |

### Команды (10)

| Команда | Описание |
|---------|----------|
| `/brainstorm` | Структурированный мозговой штурм |
| `/create` | Создание нового приложения |
| `/debug` | Систематический дебаггинг |
| `/deploy` | Деплой в продакшен |
| `/enhance` | Добавление функций |
| `/orchestrate` | Координация агентов |
| `/plan` | Создание плана проекта |
| `/preview` | Управление превью |
| `/status` | Статус проекта |
| `/test` | Генерация тестов |

### Auto-Apply инструкции (21)

| Паттерн | Инструкция |
|---------|------------|
| `*.ts, *.tsx, *.js, *.jsx` | TypeScript/JavaScript стандарты |
| `*.py` | Python стандарты (PEP 8) |
| `*.prisma` | Prisma ORM стандарты |
| `Dockerfile*` | Docker стандарты |
| `*.md` | Документация |
| `*.swift, *.kt, *.dart` | Mobile стандарты |
| `**/*` | Security (всегда активны) |

### CLI команды

```bash
copilot-kit init           # Установить kit
copilot-kit init --force   # Перезаписать существующие файлы
copilot-kit --version      # Версия
```

### Совместимость

| Инструмент | Поддержка |
|------------|-----------|
| VS Code 1.104+ | Полная |
| Cursor | Полная |
| Windsurf | Полная |
| Devin | Полная |

---

## License

MIT (c) [@IShtokov](https://t.me/IShtokov)

---

<div align="center">

### Support

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/shtokov)

### Contact

[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?style=for-the-badge&logo=telegram)](https://t.me/IShtokov)

**Made with love by [Ivan Shtokov](https://t.me/IShtokov)**

</div>
