<div align="center"><div align="center">



# 🤖 Copilot Kit# ��� Copilot Kit



> **Version 3.0** — Native GitHub Copilot Configuration Kit> **Version 2.0** — AI Agent templates for GitHub Copilot



[![npm version](https://img.shields.io/npm/v/@shtokov/copilot-kit.svg)](https://www.npmjs.com/package/@shtokov/copilot-kit)[![npm version](https://img.shields.io/npm/v/@shtokov/copilot-kit.svg)](https://www.npmjs.com/package/@shtokov/copilot-kit)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?logo=telegram)](https://t.me/IShtokov)[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?logo=telegram)](https://t.me/IShtokov)



**[English](#-english)** | **[Русский](#-русский)****[English](#-english)** | **[Русский](#-русский)**



</div></div>



------



## ⚡ Quick Start## ⚡ Quick Start



```bash```bash

npx @shtokov/copilot-kit initnpx @shtokov/copilot-kit init

``````



Or install globally:Or install globally:



```bash```bash

npm install -g @shtokov/copilot-kitnpm install -g @shtokov/copilot-kit

copilot-kit initcopilot-kit init

``````



------



<a name="-english"></a><a name="-english"></a>



## 🇬🇧 English## ������ English



### What is Copilot Kit?### What is Copilot Kit?



**Copilot Kit** is a production-ready collection of configurations for [GitHub Copilot](https://github.com/features/copilot) using **native VS Code customization** standards (January 2026). It works immediately after installation with no additional setup required.**Copilot Kit** is a comprehensive collection of AI Agent templates designed to supercharge [GitHub Copilot](https://github.com/features/copilot). It includes **16 Custom Agents**, **40+ Prompt Files**, and **11 Instructions**.



### ✨ Key Features### ��� What's Included



- ✅ **Native Copilot Integration** — Uses official VS Code customization formats| Component | Count | Description |

- ✅ **16 Custom Agents** — Specialized AI personas with `.agent.md` format|-----------|-------|-------------|

- ✅ **40 Agent Skills** — Domain-specific knowledge using `SKILL.md` standard| **Custom Agents** | 16 | Specialist AI personas |

- ✅ **11 Instructions** — Slash command templates with `.instructions.md` format| **Prompt Files** | 40+ | Domain-specific knowledge |

- ✅ **5 Prompt Files** — Reusable prompts with `.prompt.md` format| **Instructions** | 11 | Slash command templates |

- ✅ **Auto-configured settings** — `.vscode/settings.json` included

### ��� Project Structure

### 📦 What's Included

```

| Component | Count | Format | Description |.github/

|-----------|-------|--------|-------------|├── agents/                    # 16 Custom Agents

| **Custom Agents** | 16 | `*.agent.md` | Specialist AI personas |├── prompts/                   # 40+ Prompt Files

| **Agent Skills** | 40 | `*/SKILL.md` | Domain-specific knowledge |├── instructions/              # 11 Instructions

| **Instructions** | 11 | `*.instructions.md` | Slash command templates |├── copilot-instructions.md    # Repository Instructions

| **Prompt Files** | 5 | `*.prompt.md` | Reusable prompt templates |└── ARCHITECTURE.md            # Full documentation

```

### 📁 Project Structure

### ��� Custom Agents (16)

```

.github/| Agent | Description |

├── agents/                    # 16 Custom Agents (*.agent.md)|-------|-------------|

│   ├── orchestrator.agent.md| **orchestrator** | Multi-agent coordination |

│   ├── frontend-specialist.agent.md| **project-planner** | Architecture and planning |

│   └── ...| **frontend-specialist** | React, Next.js, Vue, CSS |

├── skills/                    # 40 Agent Skills (*/SKILL.md)| **backend-specialist** | API, databases, optimization |

│   ├── react-patterns/SKILL.md| **mobile-developer** | React Native, Flutter |

│   ├── nextjs-best-practices/SKILL.md| **database-architect** | Schema design, migrations |

│   └── ...| **security-auditor** | Vulnerability scanning |

├── instructions/              # 11 Instructions (*.instructions.md)| **penetration-tester** | Red team tactics |

│   ├── create.instructions.md| **debugger** | Root cause analysis |

│   ├── debug.instructions.md| **performance-optimizer** | Core Web Vitals |

│   └── ...| **devops-engineer** | CI/CD, Docker, K8s |

├── prompts/                   # 5 Prompt Files (*.prompt.md)| **test-engineer** | Unit, E2E testing |

│   ├── create.prompt.md| **documentation-writer** | API docs, guides |

│   ├── debug.prompt.md| **seo-specialist** | Technical SEO |

│   └── ...| **game-developer** | Unity, Unreal, WebGL |

├── copilot-instructions.md    # Repository Instructions (applyTo: "**")| **explorer-agent** | Codebase exploration |

└── ARCHITECTURE.md            # Full documentation

.vscode/### ��� Instructions (11)

└── settings.json              # Pre-configured Copilot settings

```| Command | Description |

|---------|-------------|

### 🤖 Custom Agents (16)| `/brainstorm` | Explore options with Socratic questioning |

| `/create` | Create new features, components |

Use `@agent-name` in GitHub Copilot Chat:| `/debug` | Systematic debugging |

| `/deploy` | Deploy with safety checks |

| Agent | Description || `/enhance` | Improve code quality |

|-------|-------------|| `/orchestrate` | Multi-agent coordination |

| **@orchestrator** | Multi-agent coordination for complex tasks || `/plan` | Create implementation plans |

| **@project-planner** | Architecture and planning || `/preview` | Preview changes locally |

| **@frontend-specialist** | React, Next.js, Vue, CSS, animations || `/status` | Check project health |

| **@backend-specialist** | API, databases, server optimization || `/test` | Generate and run tests |

| **@mobile-developer** | React Native, Flutter, iOS, Android |

| **@database-architect** | Schema design, indexing, migrations |### ��� CLI Reference

| **@security-auditor** | Vulnerability scanning, OWASP |

| **@penetration-tester** | Red team tactics, exploit development || Command | Description |

| **@debugger** | Root cause analysis, bug fixing ||---------|-------------|

| **@performance-optimizer** | Core Web Vitals, profiling || `copilot-kit init` | Install `.github` folder |

| **@devops-engineer** | CI/CD, Docker, Kubernetes || `copilot-kit init --force` | Overwrite existing |

| **@test-engineer** | Unit, integration, E2E testing || `copilot-kit init --path ./app` | Install in directory |

| **@documentation-writer** | API docs, technical writing || `copilot-kit update` | Update to latest |

| **@seo-specialist** | Technical SEO optimization || `copilot-kit status` | Check status |

| **@game-developer** | Unity, Unreal, WebGL |

| **@explorer-agent** | Codebase exploration |### ��� License



### 📋 Instructions (11)MIT © [@IShtokov](https://t.me/IShtokov)



Attach via Copilot Edits or use in Chat:---



| Command | Description |<a name="-русский"></a>

|---------|-------------|

| `/brainstorm` | Explore options with Socratic questioning |## ������ Русский

| `/create` | Create new features, components |

| `/debug` | Systematic debugging with RCA |### Что такое Copilot Kit?

| `/deploy` | Deploy with safety checks |

| `/enhance` | Improve code quality |**Copilot Kit** — коллекция AI-агентов для [GitHub Copilot](https://github.com/features/copilot). Включает **16 агентов**, **40+ промптов** и **11 инструкций**.

| `/orchestrate` | Multi-agent coordination |

| `/plan` | Create implementation plans |### ⚡ Быстрая установка

| `/preview` | Preview changes locally |

| `/status` | Check project health |```bash

| `/test` | Generate and run tests |npx @shtokov/copilot-kit init

| `/ui-ux-pro-max` | Professional UI/UX design |```



### 🧩 Agent Skills (40)### ��� Кастомные агенты (16)



Skills are automatically loaded and provide domain-specific knowledge:| Агент | Описание |

|-------|----------|

**Frontend**: react-patterns, nextjs-best-practices, vue-patterns, svelte-patterns, css-architecture, animation-patterns, accessibility-patterns| **orchestrator** | Координация агентов |

| **project-planner** | Архитектура и планирование |

**Backend**: api-patterns, database-design, graphql-patterns, microservices-patterns, websocket-patterns, queue-patterns| **frontend-specialist** | React, Next.js, Vue |

| **backend-specialist** | API, базы данных |

**Testing**: testing-patterns, e2e-testing, performance-testing, security-testing| **mobile-developer** | React Native, Flutter |

| **security-auditor** | Аудит безопасности |

**DevOps**: docker-patterns, kubernetes-patterns, ci-cd-patterns, infrastructure-as-code| **debugger** | Поиск багов |

| **devops-engineer** | CI/CD, Docker |

**And more**: mobile-patterns, game-dev-patterns, ml-patterns, blockchain-patterns...

### ��� Инструкции

### 🛠️ CLI Reference

| Команда | Описание |

| Command | Description ||---------|----------|

|---------|-------------|| `/brainstorm` | Сократический диалог |

| `copilot-kit init` | Install `.github` folder || `/create` | Создание фич |

| `copilot-kit init --force` | Overwrite existing || `/debug` | Отладка |

| `copilot-kit init --path ./app` | Install in directory || `/deploy` | Деплой |

| `copilot-kit update` | Update to latest || `/plan` | Планирование |

| `copilot-kit status` | Check status |

### ��� CLI команды

### ⚙️ VS Code Settings

| Команда | Описание |

The kit includes pre-configured `.vscode/settings.json` with all required Copilot settings:|---------|----------|

| `copilot-kit init` | Установить `.github` |

```json| `copilot-kit init --force` | Перезаписать |

{| `copilot-kit update` | Обновить |

  "github.copilot.chat.codeGeneration.useInstructionFiles": true,

  "chat.promptFiles": true,### ��� Лицензия

  "chat.useAgentSkills": true,

  "chat.useAgentsMdFile": trueMIT © [@IShtokov](https://t.me/IShtokov)

}

```---



### 📄 License<div align="center">



MIT © [@IShtokov](https://t.me/IShtokov)### ☕ Support / Поддержать



---[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/shtokov)



<a name="-русский"></a>### ��� Contact / Контакт



## 🇷🇺 Русский[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?style=for-the-badge&logo=telegram)](https://t.me/IShtokov)



### Что такое Copilot Kit?</div>


**Copilot Kit** — готовая к использованию коллекция конфигураций для [GitHub Copilot](https://github.com/features/copilot), использующая **нативные стандарты кастомизации VS Code** (январь 2026). Работает сразу после установки без дополнительной настройки.

### ✨ Ключевые особенности

- ✅ **Нативная интеграция с Copilot** — Официальные форматы VS Code
- ✅ **16 кастомных агентов** — `.agent.md` формат
- ✅ **40 Agent Skills** — Доменные знания в формате `SKILL.md`
- ✅ **11 инструкций** — `.instructions.md` формат
- ✅ **5 промпт-файлов** — `.prompt.md` формат
- ✅ **Автонастройка** — `.vscode/settings.json` включён

### ⚡ Быстрая установка

```bash
npx @shtokov/copilot-kit init
```

### 📁 Структура проекта

```
.github/
├── agents/                    # 16 агентов (*.agent.md)
├── skills/                    # 40 скиллов (*/SKILL.md)
├── instructions/              # 11 инструкций (*.instructions.md)
├── prompts/                   # 5 промптов (*.prompt.md)
├── copilot-instructions.md    # Главные инструкции
└── ARCHITECTURE.md            # Документация
.vscode/
└── settings.json              # Настройки Copilot
```

### 🤖 Кастомные агенты (16)

Используйте `@agent-name` в чате Copilot:

| Агент | Описание |
|-------|----------|
| **@orchestrator** | Координация агентов |
| **@project-planner** | Архитектура и планирование |
| **@frontend-specialist** | React, Next.js, Vue |
| **@backend-specialist** | API, базы данных |
| **@mobile-developer** | React Native, Flutter |
| **@database-architect** | Схемы БД, миграции |
| **@security-auditor** | Аудит безопасности |
| **@penetration-tester** | Тестирование на проникновение |
| **@debugger** | Поиск и исправление багов |
| **@performance-optimizer** | Оптимизация производительности |
| **@devops-engineer** | CI/CD, Docker, K8s |
| **@test-engineer** | Тестирование |
| **@documentation-writer** | Документация |
| **@seo-specialist** | SEO оптимизация |
| **@game-developer** | Разработка игр |
| **@explorer-agent** | Исследование кодовой базы |

### 📋 Инструкции (11)

| Команда | Описание |
|---------|----------|
| `/brainstorm` | Сократический диалог |
| `/create` | Создание фич |
| `/debug` | Отладка |
| `/deploy` | Деплой |
| `/enhance` | Улучшение кода |
| `/orchestrate` | Координация агентов |
| `/plan` | Планирование |
| `/preview` | Предпросмотр |
| `/status` | Статус проекта |
| `/test` | Тестирование |
| `/ui-ux-pro-max` | UI/UX дизайн |

### 🧩 Agent Skills (40)

Скиллы автоматически загружаются и предоставляют доменные знания:

**Frontend**: react-patterns, nextjs-best-practices, vue-patterns, css-architecture...

**Backend**: api-patterns, database-design, graphql-patterns, microservices-patterns...

**Testing**: testing-patterns, e2e-testing, performance-testing...

**DevOps**: docker-patterns, kubernetes-patterns, ci-cd-patterns...

### 🛠️ CLI команды

| Команда | Описание |
|---------|----------|
| `copilot-kit init` | Установить `.github` |
| `copilot-kit init --force` | Перезаписать |
| `copilot-kit update` | Обновить |
| `copilot-kit status` | Статус |

### 📄 Лицензия

MIT © [@IShtokov](https://t.me/IShtokov)

---

<div align="center">

### ☕ Support / Поддержать

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/shtokov)

### 📬 Contact / Контакт

[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?style=for-the-badge&logo=telegram)](https://t.me/IShtokov)

</div>
