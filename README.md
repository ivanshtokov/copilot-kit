<div align="center"><div align="center"><div align="center">



# 🤖 Copilot Kit



> **Version 3.0.2** — Native GitHub Copilot Configuration Kit# 🤖 Copilot Kit# ��� Copilot Kit



[![npm version](https://img.shields.io/npm/v/@shtokov/copilot-kit.svg)](https://www.npmjs.com/package/@shtokov/copilot-kit)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?logo=telegram)](https://t.me/IShtokov)> **Version 3.0** — Native GitHub Copilot Configuration Kit> **Version 2.0** — AI Agent templates for GitHub Copilot



**[English](#-english)** | **[Русский](#-русский)**



</div>[![npm version](https://img.shields.io/npm/v/@shtokov/copilot-kit.svg)](https://www.npmjs.com/package/@shtokov/copilot-kit)[![npm version](https://img.shields.io/npm/v/@shtokov/copilot-kit.svg)](https://www.npmjs.com/package/@shtokov/copilot-kit)



---[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## ⚡ Quick Start[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?logo=telegram)](https://t.me/IShtokov)[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?logo=telegram)](https://t.me/IShtokov)



```bash

npx @shtokov/copilot-kit init

```**[English](#-english)** | **[Русский](#-русский)****[English](#-english)** | **[Русский](#-русский)**



Or install globally:



```bash</div></div>

npm install -g @shtokov/copilot-kit

copilot-kit init

```

------

---



<a name="-english"></a>

## ⚡ Quick Start## ⚡ Quick Start

## 🇬🇧 English



### What is Copilot Kit?

```bash```bash

**Copilot Kit** is a production-ready collection of configurations for [GitHub Copilot](https://github.com/features/copilot) using **native VS Code customization** standards (January 2026). It works immediately after installation with no additional setup required.

npx @shtokov/copilot-kit initnpx @shtokov/copilot-kit init

### ✨ Key Features

``````

- ✅ **Native Copilot Integration** — Uses official VS Code customization formats

- ✅ **16 Custom Agents** — Specialized AI personas with `.agent.md` format

- ✅ **40 Agent Skills** — Domain-specific knowledge using `SKILL.md` standard

- ✅ **11 Instructions** — Slash command templates with `.instructions.md` formatOr install globally:Or install globally:

- ✅ **5 Prompt Files** — Reusable prompts with `.prompt.md` format

- ✅ **Auto-configured settings** — `.vscode/settings.json` included



### 📦 What's Included```bash```bash



| Component | Count | Format | Description |npm install -g @shtokov/copilot-kitnpm install -g @shtokov/copilot-kit

|-----------|-------|--------|-------------|

| **Custom Agents** | 16 | `*.agent.md` | Specialist AI personas |copilot-kit initcopilot-kit init

| **Agent Skills** | 40 | `*/SKILL.md` | Domain-specific knowledge |

| **Instructions** | 11 | `*.instructions.md` | Slash command templates |``````

| **Prompt Files** | 5 | `*.prompt.md` | Reusable prompt templates |



### 📁 Project Structure

------

```

.github/

├── agents/                    # 16 Custom Agents (*.agent.md)

│   ├── orchestrator.agent.md<a name="-english"></a><a name="-english"></a>

│   ├── frontend-specialist.agent.md

│   └── ...

├── skills/                    # 40 Agent Skills (*/SKILL.md)

│   ├── react-patterns/SKILL.md## 🇬🇧 English## ������ English

│   ├── nextjs-best-practices/SKILL.md

│   └── ...

├── instructions/              # 11 Instructions (*.instructions.md)

│   ├── create.instructions.md### What is Copilot Kit?### What is Copilot Kit?

│   ├── debug.instructions.md

│   └── ...

├── prompts/                   # 5 Prompt Files (*.prompt.md)

│   ├── create.prompt.md**Copilot Kit** is a production-ready collection of configurations for [GitHub Copilot](https://github.com/features/copilot) using **native VS Code customization** standards (January 2026). It works immediately after installation with no additional setup required.**Copilot Kit** is a comprehensive collection of AI Agent templates designed to supercharge [GitHub Copilot](https://github.com/features/copilot). It includes **16 Custom Agents**, **40+ Prompt Files**, and **11 Instructions**.

│   ├── debug.prompt.md

│   └── ...

├── copilot-instructions.md    # Repository Instructions (applyTo: "**")

└── ARCHITECTURE.md            # Full documentation### ✨ Key Features### ��� What's Included

.vscode/

└── settings.json              # Pre-configured Copilot settings

```

- ✅ **Native Copilot Integration** — Uses official VS Code customization formats| Component | Count | Description |

### 🤖 Custom Agents (16)

- ✅ **16 Custom Agents** — Specialized AI personas with `.agent.md` format|-----------|-------|-------------|

Use `@agent-name` in GitHub Copilot Chat:

- ✅ **40 Agent Skills** — Domain-specific knowledge using `SKILL.md` standard| **Custom Agents** | 16 | Specialist AI personas |

| Agent | Description |

|-------|-------------|- ✅ **11 Instructions** — Slash command templates with `.instructions.md` format| **Prompt Files** | 40+ | Domain-specific knowledge |

| **@orchestrator** | Multi-agent coordination for complex tasks |

| **@project-planner** | Architecture and planning |- ✅ **5 Prompt Files** — Reusable prompts with `.prompt.md` format| **Instructions** | 11 | Slash command templates |

| **@frontend-specialist** | React, Next.js, Vue, CSS, animations |

| **@backend-specialist** | API, databases, server optimization |- ✅ **Auto-configured settings** — `.vscode/settings.json` included

| **@mobile-developer** | React Native, Flutter, iOS, Android |

| **@database-architect** | Schema design, indexing, migrations |### ��� Project Structure

| **@security-auditor** | Vulnerability scanning, OWASP |

| **@penetration-tester** | Red team tactics, exploit development |### 📦 What's Included

| **@debugger** | Root cause analysis, bug fixing |

| **@performance-optimizer** | Core Web Vitals, profiling |```

| **@devops-engineer** | CI/CD, Docker, Kubernetes |

| **@test-engineer** | Unit, integration, E2E testing || Component | Count | Format | Description |.github/

| **@documentation-writer** | API docs, technical writing |

| **@seo-specialist** | Technical SEO optimization ||-----------|-------|--------|-------------|├── agents/                    # 16 Custom Agents

| **@game-developer** | Unity, Unreal, WebGL |

| **@explorer-agent** | Codebase exploration || **Custom Agents** | 16 | `*.agent.md` | Specialist AI personas |├── prompts/                   # 40+ Prompt Files



### 📋 Instructions (11)| **Agent Skills** | 40 | `*/SKILL.md` | Domain-specific knowledge |├── instructions/              # 11 Instructions



Attach via Copilot Edits or use in Chat:| **Instructions** | 11 | `*.instructions.md` | Slash command templates |├── copilot-instructions.md    # Repository Instructions



| Command | Description || **Prompt Files** | 5 | `*.prompt.md` | Reusable prompt templates |└── ARCHITECTURE.md            # Full documentation

|---------|-------------|

| `/brainstorm` | Explore options with Socratic questioning |```

| `/create` | Create new features, components |

| `/debug` | Systematic debugging with RCA |### 📁 Project Structure

| `/deploy` | Deploy with safety checks |

| `/enhance` | Improve code quality |### ��� Custom Agents (16)

| `/orchestrate` | Multi-agent coordination |

| `/plan` | Create implementation plans |```

| `/preview` | Preview changes locally |

| `/status` | Check project health |.github/| Agent | Description |

| `/test` | Generate and run tests |

| `/ui-ux-pro-max` | Professional UI/UX design |├── agents/                    # 16 Custom Agents (*.agent.md)|-------|-------------|



### 🧩 Agent Skills (40)│   ├── orchestrator.agent.md| **orchestrator** | Multi-agent coordination |



Skills are automatically loaded and provide domain-specific knowledge:│   ├── frontend-specialist.agent.md| **project-planner** | Architecture and planning |



**Frontend**: react-patterns, nextjs-best-practices, vue-patterns, svelte-patterns, css-architecture, animation-patterns, accessibility-patterns│   └── ...| **frontend-specialist** | React, Next.js, Vue, CSS |



**Backend**: api-patterns, database-design, graphql-patterns, microservices-patterns, websocket-patterns, queue-patterns├── skills/                    # 40 Agent Skills (*/SKILL.md)| **backend-specialist** | API, databases, optimization |



**Testing**: testing-patterns, e2e-testing, performance-testing, security-testing│   ├── react-patterns/SKILL.md| **mobile-developer** | React Native, Flutter |



**DevOps**: docker-patterns, kubernetes-patterns, ci-cd-patterns, infrastructure-as-code│   ├── nextjs-best-practices/SKILL.md| **database-architect** | Schema design, migrations |



**And more**: mobile-patterns, game-dev-patterns, ml-patterns, blockchain-patterns...│   └── ...| **security-auditor** | Vulnerability scanning |



### 🛠️ CLI Reference├── instructions/              # 11 Instructions (*.instructions.md)| **penetration-tester** | Red team tactics |



| Command | Description |│   ├── create.instructions.md| **debugger** | Root cause analysis |

|---------|-------------|

| `copilot-kit init` | Install `.github` folder |│   ├── debug.instructions.md| **performance-optimizer** | Core Web Vitals |

| `copilot-kit init --force` | Overwrite existing |

| `copilot-kit init --path ./app` | Install in directory |│   └── ...| **devops-engineer** | CI/CD, Docker, K8s |

| `copilot-kit update` | Update to latest |

| `copilot-kit status` | Check status |├── prompts/                   # 5 Prompt Files (*.prompt.md)| **test-engineer** | Unit, E2E testing |



### ⚙️ VS Code Settings│   ├── create.prompt.md| **documentation-writer** | API docs, guides |



The kit includes pre-configured `.vscode/settings.json` with all required Copilot settings:│   ├── debug.prompt.md| **seo-specialist** | Technical SEO |



```json│   └── ...| **game-developer** | Unity, Unreal, WebGL |

{

  "github.copilot.chat.codeGeneration.useInstructionFiles": true,├── copilot-instructions.md    # Repository Instructions (applyTo: "**")| **explorer-agent** | Codebase exploration |

  "chat.promptFiles": true,

  "chat.useAgentSkills": true,└── ARCHITECTURE.md            # Full documentation

  "chat.useAgentsMdFile": true

}.vscode/### ��� Instructions (11)

```

└── settings.json              # Pre-configured Copilot settings

### 📄 License

```| Command | Description |

MIT © [@IShtokov](https://t.me/IShtokov)

|---------|-------------|

---

### 🤖 Custom Agents (16)| `/brainstorm` | Explore options with Socratic questioning |

<a name="-русский"></a>

| `/create` | Create new features, components |

## 🇷🇺 Русский

Use `@agent-name` in GitHub Copilot Chat:| `/debug` | Systematic debugging |

### Что такое Copilot Kit?

| `/deploy` | Deploy with safety checks |

**Copilot Kit** — готовая к использованию коллекция конфигураций для [GitHub Copilot](https://github.com/features/copilot), использующая **нативные стандарты кастомизации VS Code** (январь 2026). Работает сразу после установки без дополнительной настройки.

| Agent | Description || `/enhance` | Improve code quality |

### ✨ Ключевые особенности

|-------|-------------|| `/orchestrate` | Multi-agent coordination |

- ✅ **Нативная интеграция с Copilot** — Официальные форматы VS Code

- ✅ **16 кастомных агентов** — `.agent.md` формат| **@orchestrator** | Multi-agent coordination for complex tasks || `/plan` | Create implementation plans |

- ✅ **40 Agent Skills** — Доменные знания в формате `SKILL.md`

- ✅ **11 инструкций** — `.instructions.md` формат| **@project-planner** | Architecture and planning || `/preview` | Preview changes locally |

- ✅ **5 промпт-файлов** — `.prompt.md` формат

- ✅ **Автонастройка** — `.vscode/settings.json` включён| **@frontend-specialist** | React, Next.js, Vue, CSS, animations || `/status` | Check project health |



### ⚡ Быстрая установка| **@backend-specialist** | API, databases, server optimization || `/test` | Generate and run tests |



```bash| **@mobile-developer** | React Native, Flutter, iOS, Android |

npx @shtokov/copilot-kit init

```| **@database-architect** | Schema design, indexing, migrations |### ��� CLI Reference



### 📁 Структура проекта| **@security-auditor** | Vulnerability scanning, OWASP |



```| **@penetration-tester** | Red team tactics, exploit development || Command | Description |

.github/

├── agents/                    # 16 агентов (*.agent.md)| **@debugger** | Root cause analysis, bug fixing ||---------|-------------|

├── skills/                    # 40 скиллов (*/SKILL.md)

├── instructions/              # 11 инструкций (*.instructions.md)| **@performance-optimizer** | Core Web Vitals, profiling || `copilot-kit init` | Install `.github` folder |

├── prompts/                   # 5 промптов (*.prompt.md)

├── copilot-instructions.md    # Главные инструкции| **@devops-engineer** | CI/CD, Docker, Kubernetes || `copilot-kit init --force` | Overwrite existing |

└── ARCHITECTURE.md            # Документация

.vscode/| **@test-engineer** | Unit, integration, E2E testing || `copilot-kit init --path ./app` | Install in directory |

└── settings.json              # Настройки Copilot

```| **@documentation-writer** | API docs, technical writing || `copilot-kit update` | Update to latest |



### 🤖 Кастомные агенты (16)| **@seo-specialist** | Technical SEO optimization || `copilot-kit status` | Check status |



Используйте `@agent-name` в чате Copilot:| **@game-developer** | Unity, Unreal, WebGL |



| Агент | Описание || **@explorer-agent** | Codebase exploration |### ��� License

|-------|----------|

| **@orchestrator** | Координация агентов |

| **@project-planner** | Архитектура и планирование |

| **@frontend-specialist** | React, Next.js, Vue |### 📋 Instructions (11)MIT © [@IShtokov](https://t.me/IShtokov)

| **@backend-specialist** | API, базы данных |

| **@mobile-developer** | React Native, Flutter |

| **@database-architect** | Схемы БД, миграции |

| **@security-auditor** | Аудит безопасности |Attach via Copilot Edits or use in Chat:---

| **@penetration-tester** | Тестирование на проникновение |

| **@debugger** | Поиск и исправление багов |

| **@performance-optimizer** | Оптимизация производительности |

| **@devops-engineer** | CI/CD, Docker, K8s || Command | Description |<a name="-русский"></a>

| **@test-engineer** | Тестирование |

| **@documentation-writer** | Документация ||---------|-------------|

| **@seo-specialist** | SEO оптимизация |

| **@game-developer** | Разработка игр || `/brainstorm` | Explore options with Socratic questioning |## ������ Русский

| **@explorer-agent** | Исследование кодовой базы |

| `/create` | Create new features, components |

### 📋 Инструкции (11)

| `/debug` | Systematic debugging with RCA |### Что такое Copilot Kit?

| Команда | Описание |

|---------|----------|| `/deploy` | Deploy with safety checks |

| `/brainstorm` | Сократический диалог |

| `/create` | Создание фич || `/enhance` | Improve code quality |**Copilot Kit** — коллекция AI-агентов для [GitHub Copilot](https://github.com/features/copilot). Включает **16 агентов**, **40+ промптов** и **11 инструкций**.

| `/debug` | Отладка |

| `/deploy` | Деплой || `/orchestrate` | Multi-agent coordination |

| `/enhance` | Улучшение кода |

| `/orchestrate` | Координация агентов || `/plan` | Create implementation plans |### ⚡ Быстрая установка

| `/plan` | Планирование |

| `/preview` | Предпросмотр || `/preview` | Preview changes locally |

| `/status` | Статус проекта |

| `/test` | Тестирование || `/status` | Check project health |```bash

| `/ui-ux-pro-max` | UI/UX дизайн |

| `/test` | Generate and run tests |npx @shtokov/copilot-kit init

### 🧩 Agent Skills (40)

| `/ui-ux-pro-max` | Professional UI/UX design |```

Скиллы автоматически загружаются и предоставляют доменные знания:



**Frontend**: react-patterns, nextjs-best-practices, vue-patterns, css-architecture...

### 🧩 Agent Skills (40)### ��� Кастомные агенты (16)

**Backend**: api-patterns, database-design, graphql-patterns, microservices-patterns...



**Testing**: testing-patterns, e2e-testing, performance-testing...

Skills are automatically loaded and provide domain-specific knowledge:| Агент | Описание |

**DevOps**: docker-patterns, kubernetes-patterns, ci-cd-patterns...

|-------|----------|

### 🛠️ CLI команды

**Frontend**: react-patterns, nextjs-best-practices, vue-patterns, svelte-patterns, css-architecture, animation-patterns, accessibility-patterns| **orchestrator** | Координация агентов |

| Команда | Описание |

|---------|----------|| **project-planner** | Архитектура и планирование |

| `copilot-kit init` | Установить `.github` |

| `copilot-kit init --force` | Перезаписать |**Backend**: api-patterns, database-design, graphql-patterns, microservices-patterns, websocket-patterns, queue-patterns| **frontend-specialist** | React, Next.js, Vue |

| `copilot-kit update` | Обновить |

| `copilot-kit status` | Статус || **backend-specialist** | API, базы данных |



### 📄 Лицензия**Testing**: testing-patterns, e2e-testing, performance-testing, security-testing| **mobile-developer** | React Native, Flutter |



MIT © [@IShtokov](https://t.me/IShtokov)| **security-auditor** | Аудит безопасности |



---**DevOps**: docker-patterns, kubernetes-patterns, ci-cd-patterns, infrastructure-as-code| **debugger** | Поиск багов |



<div align="center">| **devops-engineer** | CI/CD, Docker |



### ☕ Support / Поддержать**And more**: mobile-patterns, game-dev-patterns, ml-patterns, blockchain-patterns...



[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/shtokov)### ��� Инструкции



### 📬 Contact / Контакт### 🛠️ CLI Reference



[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?style=for-the-badge&logo=telegram)](https://t.me/IShtokov)| Команда | Описание |



</div>| Command | Description ||---------|----------|


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
