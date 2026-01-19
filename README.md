<div align="center"># Copilot Kit



# 🚀 Copilot Kit> **Version 2.0** - AI Agent templates with Prompt Files, Agents, and Instructions for GitHub Copilot



**[English](#english) | [Русский](#russian)**## Quick Install



[![npm version](https://img.shields.io/npm/v/@shtokov/copilot-kit.svg)](https://www.npmjs.com/package/@shtokov/copilot-kit)```bash

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)npx @shtokov/copilot-kit init

[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?logo=telegram)](https://t.me/IShtokov)```



</div>Or install globally:



---```bash

npm install -g @shtokov/copilot-kit

<a name="english"></a>copilot-kit init

```

## 🇬🇧 English

This installs the `.github` folder containing all templates into your project.

### What is Copilot Kit?

## What's Included

**Copilot Kit** is a comprehensive collection of AI Agent templates designed to supercharge [GitHub Copilot](https://github.com/features/copilot). It includes **16 Custom Agents**, **40+ Prompt Files**, and **11 Instructions** that help you build better software faster.

| Component | Count | Description |

### ⚡ Quick Install|-----------|-------|-------------|

| **Custom Agents** | 16 | Specialist AI personas (frontend, backend, security, etc.) |

```bash| **Prompt Files** | 40 | Domain-specific knowledge modules |

npx @shtokov/copilot-kit init| **Instructions** | 11 | Reusable instruction files |

```

## Structure

Or install globally:

```

```bash.github/

npm install -g @shtokov/copilot-kit├── agents/                    # 16 Custom Agents

copilot-kit init├── prompts/                   # 40+ Prompt Files

```├── instructions/              # Instructions Files

├── copilot-instructions.md    # Repository Instructions

### 📁 Project Structure└── ARCHITECTURE.md            # Full documentation

```

```

.github/## Usage

├── agents/                    # 16 Custom Agents

├── prompts/                   # 40+ Prompt Files### Using Custom Agents

├── instructions/              # 11 Instructions

├── copilot-instructions.md    # Repository InstructionsCreate custom agents in `.github/agents/` with YAML frontmatter:

└── workflows/                 # GitHub Actions

``````

Use @Planner to create implementation plan

---Use @CodeReviewer to analyze React components

```

### 🤖 Custom Agents (16)

### Using Prompt Files

| Agent | Description |

|-------|-------------|Prompt files (`.prompt.md`) are reusable templates stored in `.github/prompts/`. They're loaded automatically based on task context.

| **orchestrator** | Multi-agent coordination and synthesis. Routes tasks to appropriate specialists. |

| **project-planner** | Discovery, architecture, and task planning. Creates implementation roadmaps. |### Using Instructions

| **frontend-specialist** | Frontend development expert. React, Next.js, Vue, CSS, animations. |

| **backend-specialist** | Backend architecture. API design, databases, server optimization. |Repository instructions in `.github/copilot-instructions.md` are automatically applied to all Copilot interactions.

| **mobile-developer** | Cross-platform mobile development. React Native, Flutter, iOS, Android. |

| **database-architect** | Database design and optimization. Schema design, indexing, migrations. || Command | Description |

| **security-auditor** | Security auditing. Vulnerability scanning, penetration testing, hardening. ||---------|-------------|

| **penetration-tester** | Red team tactics. Offensive security testing and exploit development. || `/brainstorm` | Explore options before implementation |

| **debugger** | Systematic root cause analysis. Bug fixing and performance debugging. || `/create` | Create new features or apps |

| **performance-optimizer** | Performance profiling. Bundle optimization, Core Web Vitals, caching. || `/debug` | Systematic debugging |

| **devops-engineer** | CI/CD, Docker, Kubernetes, infrastructure as code. || `/deploy` | Deploy application |

| **test-engineer** | Testing strategies. Unit, integration, E2E testing, TDD workflows. || `/enhance` | Improve existing code |

| **documentation-writer** | Technical documentation. API docs, guides, tutorials. || `/orchestrate` | Multi-agent coordination |

| **seo-specialist** | Search engine optimization. Technical SEO, structured data, performance. || `/plan` | Create task breakdown |

| **game-developer** | Game development. Unity, Unreal, WebGL, game mechanics. || `/preview` | Preview changes locally |

| **explorer-agent** | Codebase exploration. File analysis, dependency mapping. || `/status` | Check project status |

| `/test` | Generate and run tests |

---| `/ui-ux-pro-max` | Design with 50 styles |



### 📚 Prompt Files (40+)Example:

```

#### 🎨 Frontend & Design/brainstorm authentication system

| Prompt | Description |/create landing page with hero section

|--------|-------------|/debug why login fails

| **react-patterns** | React best practices, hooks, state management, component patterns |```

| **nextjs-best-practices** | Next.js App Router, SSR, ISR, middleware, optimization |

| **tailwind-patterns** | Tailwind CSS utilities, responsive design, custom configurations |### Using Instructions Files

| **frontend-design** | UI/UX design principles, color systems, typography, animations |

| **mobile-design** | Mobile-first design, touch interactions, platform-specific guidelines |Instructions in `.github/instructions/` are automatically applied. The main configuration file is `copilot-instructions.md`.

| **ui-ux-pro-max** | Advanced UI/UX with 50+ design styles and templates |

## CLI Tool

#### ⚙️ Backend & API

| Prompt | Description || Command | Description |

|--------|-------------||---------|-------------|

| **api-patterns** | REST, GraphQL, tRPC design patterns, authentication, rate limiting || `copilot-kit init` | Install `.github` folder into your project |

| **nodejs-best-practices** | Node.js performance, security, error handling || `copilot-kit update` | Update to the latest version |

| **nestjs-expert** | NestJS architecture, modules, providers, guards || `copilot-kit status` | Check installation status |

| **prisma-expert** | Prisma ORM, schema design, relations, migrations |

| **database-design** | Schema design, indexing strategies, query optimization |### Options



#### 🔒 Security & Testing```bash

| Prompt | Description |copilot-kit init --force        # Overwrite existing .github folder

|--------|-------------|copilot-kit init --path ./myapp # Install in specific directory

| **vulnerability-scanner** | Security scanning, OWASP Top 10, dependency auditing |copilot-kit init --branch dev   # Use specific branch

| **red-team-tactics** | Penetration testing, exploit development, security assessment |copilot-kit init --quiet        # Suppress output (for CI/CD)

| **testing-patterns** | Unit, integration, E2E testing strategies |copilot-kit init --dry-run      # Preview actions without executing

| **tdd-workflow** | Test-driven development methodology |```

| **webapp-testing** | Playwright, Cypress, browser automation |

## Documentation

#### 🛠️ DevOps & Infrastructure

| Prompt | Description |See [ARCHITECTURE.md](.github/ARCHITECTURE.md) for full documentation on custom agents, prompt files, and instructions.

|--------|-------------|

| **docker-expert** | Dockerfile optimization, multi-stage builds, compose |## Buy me coffee

| **deployment-procedures** | CI/CD pipelines, zero-downtime deployments |

| **server-management** | Linux administration, Nginx, monitoring |<p align="center">

| **performance-profiling** | Lighthouse, bundle analysis, Core Web Vitals |  <a href="https://buymeacoffee.com/shtokov">

    <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me a Coffee" />

#### 💻 Languages & Tools  </a>

| Prompt | Description |</p>

|--------|-------------|

| **typescript-expert** | TypeScript advanced patterns, generics, utility types |## License

| **python-patterns** | Python best practices, async, type hints |

| **bash-linux** | Shell scripting, Linux commands, automation |MIT © shtokov

| **powershell-windows** | PowerShell scripting, Windows administration |

#### 📦 Architecture & Planning
| Prompt | Description |
|--------|-------------|
| **architecture** | System design, microservices, monolith patterns |
| **app-builder** | Full-stack scaffolding with 14+ project templates |
| **clean-code** | Code quality standards, SOLID principles, refactoring |
| **plan-writing** | Task breakdown, implementation plans, documentation |
| **brainstorming** | Socratic questioning, requirements gathering |

#### 🎮 Specialized
| Prompt | Description |
|--------|-------------|
| **game-development** | 2D/3D games, multiplayer, game engines |
| **mcp-builder** | Model Context Protocol server development |
| **i18n-localization** | Internationalization, translation workflows |
| **seo-fundamentals** | SEO optimization, structured data, sitemaps |
| **geo-fundamentals** | Geolocation, maps, spatial data |

---

### 📋 Instructions (11)

| Instruction | Command | Description |
|-------------|---------|-------------|
| **brainstorm** | `/brainstorm` | Explore options before implementation with Socratic questioning |
| **create** | `/create` | Create new features, components, or applications |
| **debug** | `/debug` | Systematic debugging with root cause analysis |
| **deploy** | `/deploy` | Deploy application with safety checks |
| **enhance** | `/enhance` | Improve existing code quality and performance |
| **orchestrate** | `/orchestrate` | Multi-agent task coordination |
| **plan** | `/plan` | Create detailed implementation plans |
| **preview** | `/preview` | Preview changes in local environment |
| **status** | `/status` | Check project health and dependencies |
| **test** | `/test` | Generate and run comprehensive tests |

**Usage Examples:**
```
/brainstorm authentication system
/create landing page with hero section
/debug why login fails
/deploy to production
```

---

### 🔧 CLI Reference

| Command | Description |
|---------|-------------|
| `copilot-kit init` | Install `.github` folder into your project |
| `copilot-kit init --force` | Overwrite existing `.github` folder |
| `copilot-kit init --path ./myapp` | Install in specific directory |

---

### 📄 License

MIT © [@IShtokov](https://t.me/IShtokov)

---

<a name="russian"></a>

## 🇷🇺 Русский

### Что такое Copilot Kit?

**Copilot Kit** — это комплексная коллекция шаблонов AI-агентов, разработанная для усиления [GitHub Copilot](https://github.com/features/copilot). Включает **16 кастомных агентов**, **40+ файлов промптов** и **11 инструкций**, которые помогают создавать качественное ПО быстрее.

### ⚡ Быстрая установка

```bash
npx @shtokov/copilot-kit init
```

Или глобальная установка:

```bash
npm install -g @shtokov/copilot-kit
copilot-kit init
```

### 📁 Структура проекта

```
.github/
├── agents/                    # 16 кастомных агентов
├── prompts/                   # 40+ файлов промптов
├── instructions/              # 11 инструкций
├── copilot-instructions.md    # Инструкции репозитория
└── workflows/                 # GitHub Actions
```

---

### 🤖 Кастомные агенты (16)

| Агент | Описание |
|-------|----------|
| **orchestrator** | Координация мультиагентных задач. Маршрутизирует задачи к специалистам. |
| **project-planner** | Анализ, архитектура и планирование. Создаёт дорожные карты реализации. |
| **frontend-specialist** | Эксперт фронтенда. React, Next.js, Vue, CSS, анимации. |
| **backend-specialist** | Архитектура бэкенда. API дизайн, базы данных, оптимизация. |
| **mobile-developer** | Кроссплатформенная мобильная разработка. React Native, Flutter, iOS, Android. |
| **database-architect** | Проектирование БД. Схемы, индексы, миграции. |
| **security-auditor** | Аудит безопасности. Сканирование уязвимостей, пентест, hardening. |
| **penetration-tester** | Red team тактики. Наступательное тестирование безопасности. |
| **debugger** | Систематический поиск причин. Исправление багов и отладка производительности. |
| **performance-optimizer** | Профилирование производительности. Бандлы, Core Web Vitals, кеширование. |
| **devops-engineer** | CI/CD, Docker, Kubernetes, инфраструктура как код. |
| **test-engineer** | Стратегии тестирования. Unit, интеграционные, E2E тесты, TDD. |
| **documentation-writer** | Техническая документация. API docs, гайды, туториалы. |
| **seo-specialist** | Поисковая оптимизация. Техническое SEO, структурированные данные. |
| **game-developer** | Разработка игр. Unity, Unreal, WebGL, игровая механика. |
| **explorer-agent** | Исследование кодовой базы. Анализ файлов, карта зависимостей. |

---

### 📚 Файлы промптов (40+)

#### 🎨 Фронтенд и дизайн
| Промпт | Описание |
|--------|----------|
| **react-patterns** | Best practices React, хуки, управление состоянием |
| **nextjs-best-practices** | Next.js App Router, SSR, ISR, middleware |
| **tailwind-patterns** | Tailwind CSS утилиты, адаптивный дизайн |
| **frontend-design** | Принципы UI/UX, цветовые системы, типографика |
| **mobile-design** | Mobile-first дизайн, тач-взаимодействия |
| **ui-ux-pro-max** | Продвинутый UI/UX с 50+ стилями дизайна |

#### ⚙️ Бэкенд и API
| Промпт | Описание |
|--------|----------|
| **api-patterns** | REST, GraphQL, tRPC паттерны, аутентификация |
| **nodejs-best-practices** | Производительность Node.js, безопасность |
| **nestjs-expert** | Архитектура NestJS, модули, провайдеры |
| **prisma-expert** | Prisma ORM, схемы, связи, миграции |
| **database-design** | Проектирование схем, стратегии индексации |

#### 🔒 Безопасность и тестирование
| Промпт | Описание |
|--------|----------|
| **vulnerability-scanner** | Сканирование безопасности, OWASP Top 10 |
| **red-team-tactics** | Пентест, разработка эксплойтов |
| **testing-patterns** | Unit, интеграционное, E2E тестирование |
| **tdd-workflow** | Методология TDD |
| **webapp-testing** | Playwright, Cypress, автоматизация браузера |

#### 🛠️ DevOps и инфраструктура
| Промпт | Описание |
|--------|----------|
| **docker-expert** | Оптимизация Dockerfile, multi-stage сборки |
| **deployment-procedures** | CI/CD пайплайны, zero-downtime деплой |
| **server-management** | Администрирование Linux, Nginx, мониторинг |
| **performance-profiling** | Lighthouse, анализ бандлов, Core Web Vitals |

#### 💻 Языки и инструменты
| Промпт | Описание |
|--------|----------|
| **typescript-expert** | Продвинутые паттерны TypeScript, generics |
| **python-patterns** | Best practices Python, async, type hints |
| **bash-linux** | Shell скрипты, команды Linux |
| **powershell-windows** | PowerShell скрипты, администрирование Windows |

#### 📦 Архитектура и планирование
| Промпт | Описание |
|--------|----------|
| **architecture** | Системный дизайн, микросервисы, монолит |
| **app-builder** | Full-stack скаффолдинг с 14+ шаблонами |
| **clean-code** | Стандарты качества кода, SOLID принципы |
| **plan-writing** | Декомпозиция задач, планы реализации |
| **brainstorming** | Сократический метод, сбор требований |

#### 🎮 Специализированные
| Промпт | Описание |
|--------|----------|
| **game-development** | 2D/3D игры, мультиплеер, игровые движки |
| **mcp-builder** | Разработка MCP серверов |
| **i18n-localization** | Интернационализация, переводы |
| **seo-fundamentals** | SEO оптимизация, структурированные данные |
| **geo-fundamentals** | Геолокация, карты, пространственные данные |

---

### 📋 Инструкции (11)

| Инструкция | Команда | Описание |
|------------|---------|----------|
| **brainstorm** | `/brainstorm` | Исследование вариантов через сократический диалог |
| **create** | `/create` | Создание новых фич, компонентов или приложений |
| **debug** | `/debug` | Систематическая отладка с анализом причин |
| **deploy** | `/deploy` | Деплой приложения с проверками безопасности |
| **enhance** | `/enhance` | Улучшение качества и производительности кода |
| **orchestrate** | `/orchestrate` | Координация мультиагентных задач |
| **plan** | `/plan` | Создание детальных планов реализации |
| **preview** | `/preview` | Превью изменений в локальном окружении |
| **status** | `/status` | Проверка здоровья проекта и зависимостей |
| **test** | `/test` | Генерация и запуск тестов |

**Примеры использования:**
```
/brainstorm система аутентификации
/create лендинг с hero секцией
/debug почему не работает логин
/deploy в production
```

---

### 🔧 CLI команды

| Команда | Описание |
|---------|----------|
| `copilot-kit init` | Установить папку `.github` в проект |
| `copilot-kit init --force` | Перезаписать существующую папку `.github` |
| `copilot-kit init --path ./myapp` | Установить в указанную директорию |

---

### 📄 Лицензия

MIT © [@IShtokov](https://t.me/IShtokov)

---

<div align="center">

### 💬 Контакт / Contact

[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/IShtokov)

</div>
