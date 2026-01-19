<div align="center"><div align="center"># Copilot Kit



# 🚀 Copilot Kit



> **Version 2.0** — AI Agent templates with Prompt Files, Agents, and Instructions for GitHub Copilot# 🚀 Copilot Kit> **Version 2.0** - AI Agent templates with Prompt Files, Agents, and Instructions for GitHub Copilot



[![npm version](https://img.shields.io/npm/v/@shtokov/copilot-kit.svg)](https://www.npmjs.com/package/@shtokov/copilot-kit)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?logo=telegram)](https://t.me/IShtokov)**[English](#english) | [Русский](#russian)**## Quick Install



**[English](#-english)** | **[Русский](#-русский)**



</div>[![npm version](https://img.shields.io/npm/v/@shtokov/copilot-kit.svg)](https://www.npmjs.com/package/@shtokov/copilot-kit)```bash



---[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)npx @shtokov/copilot-kit init



## ⚡ Quick Start[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?logo=telegram)](https://t.me/IShtokov)```



```bash

npx @shtokov/copilot-kit init

```</div>Or install globally:



Or install globally:



```bash---```bash

npm install -g @shtokov/copilot-kit

copilot-kit initnpm install -g @shtokov/copilot-kit

```

<a name="english"></a>copilot-kit init

This installs the `.github` folder containing all AI templates into your project.

```

---

## 🇬🇧 English

<a name="-english"></a>

This installs the `.github` folder containing all templates into your project.

## 🇬🇧 English

### What is Copilot Kit?

### What is Copilot Kit?

## What's Included

**Copilot Kit** is a comprehensive collection of AI Agent templates designed to supercharge [GitHub Copilot](https://github.com/features/copilot). It includes **16 Custom Agents**, **40+ Prompt Files**, and **11 Instructions** that help you build better software faster.

**Copilot Kit** is a comprehensive collection of AI Agent templates designed to supercharge [GitHub Copilot](https://github.com/features/copilot). It includes **16 Custom Agents**, **40+ Prompt Files**, and **11 Instructions** that help you build better software faster.

### 📦 What's Included

| Component | Count | Description |

| Component | Count | Description |

|-----------|-------|-------------|### ⚡ Quick Install|-----------|-------|-------------|

| **Custom Agents** | 16 | Specialist AI personas (frontend, backend, security, etc.) |

| **Prompt Files** | 40+ | Domain-specific knowledge modules || **Custom Agents** | 16 | Specialist AI personas (frontend, backend, security, etc.) |

| **Instructions** | 11 | Reusable slash command instructions |

```bash| **Prompt Files** | 40 | Domain-specific knowledge modules |

### 📁 Project Structure

npx @shtokov/copilot-kit init| **Instructions** | 11 | Reusable instruction files |

```

.github/```

├── agents/                    # 16 Custom Agents

├── prompts/                   # 40+ Prompt Files## Structure

├── instructions/              # 11 Instructions

├── copilot-instructions.md    # Repository InstructionsOr install globally:

└── ARCHITECTURE.md            # Full documentation

``````



---```bash.github/



### 🤖 Custom Agents (16)npm install -g @shtokov/copilot-kit├── agents/                    # 16 Custom Agents



| Agent | Description |copilot-kit init├── prompts/                   # 40+ Prompt Files

|-------|-------------|

| **orchestrator** | Multi-agent coordination and synthesis |```├── instructions/              # Instructions Files

| **project-planner** | Discovery, architecture, and task planning |

| **frontend-specialist** | Frontend expert: React, Next.js, Vue, CSS |├── copilot-instructions.md    # Repository Instructions

| **backend-specialist** | Backend architecture: API, databases, optimization |

| **mobile-developer** | Cross-platform: React Native, Flutter, iOS, Android |### 📁 Project Structure└── ARCHITECTURE.md            # Full documentation

| **database-architect** | Database design, indexing, migrations |

| **security-auditor** | Security auditing, vulnerability scanning, hardening |```

| **penetration-tester** | Red team tactics, offensive security testing |

| **debugger** | Systematic root cause analysis, bug fixing |```

| **performance-optimizer** | Bundle optimization, Core Web Vitals, caching |

| **devops-engineer** | CI/CD, Docker, Kubernetes, IaC |.github/## Usage

| **test-engineer** | Unit, integration, E2E testing, TDD |

| **documentation-writer** | Technical docs, API guides, tutorials |├── agents/                    # 16 Custom Agents

| **seo-specialist** | Technical SEO, structured data |

| **game-developer** | Unity, Unreal, WebGL, game mechanics |├── prompts/                   # 40+ Prompt Files### Using Custom Agents

| **explorer-agent** | Codebase exploration, dependency mapping |

├── instructions/              # 11 Instructions

---

├── copilot-instructions.md    # Repository InstructionsCreate custom agents in `.github/agents/` with YAML frontmatter:

### 📚 Prompt Files (40+)

└── workflows/                 # GitHub Actions

#### 🎨 Frontend & Design

``````

| Prompt | Description |

|--------|-------------|Use @Planner to create implementation plan

| **react-patterns** | React hooks, state management, component patterns |

| **nextjs-best-practices** | App Router, SSR, ISR, middleware |---Use @CodeReviewer to analyze React components

| **tailwind-patterns** | Tailwind utilities, responsive design |

| **frontend-design** | UI/UX principles, color systems, typography |```

| **mobile-design** | Mobile-first design, touch interactions |

| **ui-ux-pro-max** | Advanced UI/UX with 50+ design styles |### 🤖 Custom Agents (16)



#### ⚙️ Backend & API### Using Prompt Files



| Prompt | Description || Agent | Description |

|--------|-------------|

| **api-patterns** | REST, GraphQL, tRPC, authentication ||-------|-------------|Prompt files (`.prompt.md`) are reusable templates stored in `.github/prompts/`. They're loaded automatically based on task context.

| **nodejs-best-practices** | Node.js performance, security |

| **nestjs-expert** | NestJS architecture, modules, providers || **orchestrator** | Multi-agent coordination and synthesis. Routes tasks to appropriate specialists. |

| **prisma-expert** | Prisma ORM, schema design, migrations |

| **database-design** | Schema design, indexing strategies || **project-planner** | Discovery, architecture, and task planning. Creates implementation roadmaps. |### Using Instructions



#### 🔒 Security & Testing| **frontend-specialist** | Frontend development expert. React, Next.js, Vue, CSS, animations. |



| Prompt | Description || **backend-specialist** | Backend architecture. API design, databases, server optimization. |Repository instructions in `.github/copilot-instructions.md` are automatically applied to all Copilot interactions.

|--------|-------------|

| **vulnerability-scanner** | OWASP Top 10, dependency auditing || **mobile-developer** | Cross-platform mobile development. React Native, Flutter, iOS, Android. |

| **red-team-tactics** | Penetration testing, exploit development |

| **testing-patterns** | Unit, integration, E2E strategies || **database-architect** | Database design and optimization. Schema design, indexing, migrations. || Command | Description |

| **tdd-workflow** | Test-driven development methodology |

| **webapp-testing** | Playwright, Cypress, browser automation || **security-auditor** | Security auditing. Vulnerability scanning, penetration testing, hardening. ||---------|-------------|



#### 🛠️ DevOps & Infrastructure| **penetration-tester** | Red team tactics. Offensive security testing and exploit development. || `/brainstorm` | Explore options before implementation |



| Prompt | Description || **debugger** | Systematic root cause analysis. Bug fixing and performance debugging. || `/create` | Create new features or apps |

|--------|-------------|

| **docker-expert** | Dockerfile optimization, multi-stage builds || **performance-optimizer** | Performance profiling. Bundle optimization, Core Web Vitals, caching. || `/debug` | Systematic debugging |

| **deployment-procedures** | CI/CD pipelines, zero-downtime deployments |

| **server-management** | Linux administration, Nginx, monitoring || **devops-engineer** | CI/CD, Docker, Kubernetes, infrastructure as code. || `/deploy` | Deploy application |

| **performance-profiling** | Lighthouse, bundle analysis, Core Web Vitals |

| **test-engineer** | Testing strategies. Unit, integration, E2E testing, TDD workflows. || `/enhance` | Improve existing code |

#### 💻 Languages & Tools

| **documentation-writer** | Technical documentation. API docs, guides, tutorials. || `/orchestrate` | Multi-agent coordination |

| Prompt | Description |

|--------|-------------|| **seo-specialist** | Search engine optimization. Technical SEO, structured data, performance. || `/plan` | Create task breakdown |

| **typescript-expert** | Advanced TypeScript patterns, generics |

| **python-patterns** | Python best practices, async, type hints || **game-developer** | Game development. Unity, Unreal, WebGL, game mechanics. || `/preview` | Preview changes locally |

| **bash-linux** | Shell scripting, Linux commands |

| **powershell-windows** | PowerShell scripting, Windows administration || **explorer-agent** | Codebase exploration. File analysis, dependency mapping. || `/status` | Check project status |



#### 📦 Architecture & Planning| `/test` | Generate and run tests |



| Prompt | Description |---| `/ui-ux-pro-max` | Design with 50 styles |

|--------|-------------|

| **architecture** | System design, microservices, monolith patterns |

| **app-builder** | Full-stack scaffolding with 14+ templates |

| **clean-code** | Code quality standards, SOLID principles |### 📚 Prompt Files (40+)Example:

| **plan-writing** | Task breakdown, implementation plans |

| **brainstorming** | Socratic questioning, requirements gathering |```



#### 🎮 Specialized#### 🎨 Frontend & Design/brainstorm authentication system



| Prompt | Description || Prompt | Description |/create landing page with hero section

|--------|-------------|

| **game-development** | 2D/3D games, multiplayer, game engines ||--------|-------------|/debug why login fails

| **mcp-builder** | Model Context Protocol server development |

| **i18n-localization** | Internationalization, translations || **react-patterns** | React best practices, hooks, state management, component patterns |```

| **seo-fundamentals** | SEO optimization, structured data |

| **geo-fundamentals** | Geolocation, maps, spatial data || **nextjs-best-practices** | Next.js App Router, SSR, ISR, middleware, optimization |



---| **tailwind-patterns** | Tailwind CSS utilities, responsive design, custom configurations |### Using Instructions Files



### 📋 Instructions (11)| **frontend-design** | UI/UX design principles, color systems, typography, animations |



| Instruction | Command | Description || **mobile-design** | Mobile-first design, touch interactions, platform-specific guidelines |Instructions in `.github/instructions/` are automatically applied. The main configuration file is `copilot-instructions.md`.

|-------------|---------|-------------|

| **brainstorm** | `/brainstorm` | Explore options with Socratic questioning || **ui-ux-pro-max** | Advanced UI/UX with 50+ design styles and templates |

| **create** | `/create` | Create new features, components, apps |

| **debug** | `/debug` | Systematic debugging with root cause analysis |## CLI Tool

| **deploy** | `/deploy` | Deploy application with safety checks |

| **enhance** | `/enhance` | Improve code quality and performance |#### ⚙️ Backend & API

| **orchestrate** | `/orchestrate` | Multi-agent task coordination |

| **plan** | `/plan` | Create detailed implementation plans || Prompt | Description || Command | Description |

| **preview** | `/preview` | Preview changes locally |

| **status** | `/status` | Check project health and dependencies ||--------|-------------||---------|-------------|

| **test** | `/test` | Generate and run comprehensive tests |

| **api-patterns** | REST, GraphQL, tRPC design patterns, authentication, rate limiting || `copilot-kit init` | Install `.github` folder into your project |

**Usage Examples:**

| **nodejs-best-practices** | Node.js performance, security, error handling || `copilot-kit update` | Update to the latest version |

```

/brainstorm authentication system| **nestjs-expert** | NestJS architecture, modules, providers, guards || `copilot-kit status` | Check installation status |

/create landing page with hero section

/debug why login fails| **prisma-expert** | Prisma ORM, schema design, relations, migrations |

/deploy to production

```| **database-design** | Schema design, indexing strategies, query optimization |### Options



---



### 🔧 CLI Reference#### 🔒 Security & Testing```bash



| Command | Description || Prompt | Description |copilot-kit init --force        # Overwrite existing .github folder

|---------|-------------|

| `copilot-kit init` | Install `.github` folder into your project ||--------|-------------|copilot-kit init --path ./myapp # Install in specific directory

| `copilot-kit init --force` | Overwrite existing `.github` folder |

| `copilot-kit init --path ./myapp` | Install in specific directory || **vulnerability-scanner** | Security scanning, OWASP Top 10, dependency auditing |copilot-kit init --branch dev   # Use specific branch

| `copilot-kit update` | Update to the latest version |

| `copilot-kit status` | Check installation status || **red-team-tactics** | Penetration testing, exploit development, security assessment |copilot-kit init --quiet        # Suppress output (for CI/CD)



**Options:**| **testing-patterns** | Unit, integration, E2E testing strategies |copilot-kit init --dry-run      # Preview actions without executing



```bash| **tdd-workflow** | Test-driven development methodology |```

copilot-kit init --force        # Overwrite existing .github folder

copilot-kit init --path ./myapp # Install in specific directory| **webapp-testing** | Playwright, Cypress, browser automation |

copilot-kit init --quiet        # Suppress output (for CI/CD)

copilot-kit init --dry-run      # Preview actions without executing## Documentation

```

#### 🛠️ DevOps & Infrastructure

---

| Prompt | Description |See [ARCHITECTURE.md](.github/ARCHITECTURE.md) for full documentation on custom agents, prompt files, and instructions.

### 📄 License

|--------|-------------|

MIT © [@IShtokov](https://t.me/IShtokov)

| **docker-expert** | Dockerfile optimization, multi-stage builds, compose |## Buy me coffee

---

| **deployment-procedures** | CI/CD pipelines, zero-downtime deployments |

<a name="-русский"></a>

| **server-management** | Linux administration, Nginx, monitoring |<p align="center">

## 🇷🇺 Русский

| **performance-profiling** | Lighthouse, bundle analysis, Core Web Vitals |  <a href="https://buymeacoffee.com/shtokov">

### Что такое Copilot Kit?

    <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me a Coffee" />

**Copilot Kit** — это комплексная коллекция шаблонов AI-агентов для усиления [GitHub Copilot](https://github.com/features/copilot). Включает **16 кастомных агентов**, **40+ файлов промптов** и **11 инструкций**, которые помогают создавать качественное ПО быстрее.

#### 💻 Languages & Tools  </a>

### ⚡ Быстрая установка

| Prompt | Description |</p>

```bash

npx @shtokov/copilot-kit init|--------|-------------|

```

| **typescript-expert** | TypeScript advanced patterns, generics, utility types |## License

Или глобальная установка:

| **python-patterns** | Python best practices, async, type hints |

```bash

npm install -g @shtokov/copilot-kit| **bash-linux** | Shell scripting, Linux commands, automation |MIT © shtokov

copilot-kit init

```| **powershell-windows** | PowerShell scripting, Windows administration |



### 📁 Структура проекта#### 📦 Architecture & Planning

| Prompt | Description |

```|--------|-------------|

.github/| **architecture** | System design, microservices, monolith patterns |

├── agents/                    # 16 кастомных агентов| **app-builder** | Full-stack scaffolding with 14+ project templates |

├── prompts/                   # 40+ файлов промптов| **clean-code** | Code quality standards, SOLID principles, refactoring |

├── instructions/              # 11 инструкций| **plan-writing** | Task breakdown, implementation plans, documentation |

├── copilot-instructions.md    # Инструкции репозитория| **brainstorming** | Socratic questioning, requirements gathering |

└── ARCHITECTURE.md            # Полная документация

```#### 🎮 Specialized

| Prompt | Description |

---|--------|-------------|

| **game-development** | 2D/3D games, multiplayer, game engines |

### 🤖 Кастомные агенты (16)| **mcp-builder** | Model Context Protocol server development |

| **i18n-localization** | Internationalization, translation workflows |

| Агент | Описание || **seo-fundamentals** | SEO optimization, structured data, sitemaps |

|-------|----------|| **geo-fundamentals** | Geolocation, maps, spatial data |

| **orchestrator** | Координация мультиагентных задач |

| **project-planner** | Анализ, архитектура и планирование |---

| **frontend-specialist** | Эксперт фронтенда: React, Next.js, Vue, CSS |

| **backend-specialist** | Архитектура бэкенда: API, базы данных |### 📋 Instructions (11)

| **mobile-developer** | Кроссплатформа: React Native, Flutter, iOS, Android |

| **database-architect** | Проектирование БД, индексы, миграции || Instruction | Command | Description |

| **security-auditor** | Аудит безопасности, сканирование уязвимостей ||-------------|---------|-------------|

| **penetration-tester** | Red team тактики, наступательное тестирование || **brainstorm** | `/brainstorm` | Explore options before implementation with Socratic questioning |

| **debugger** | Систематический поиск причин, исправление багов || **create** | `/create` | Create new features, components, or applications |

| **performance-optimizer** | Оптимизация бандлов, Core Web Vitals, кеширование || **debug** | `/debug` | Systematic debugging with root cause analysis |

| **devops-engineer** | CI/CD, Docker, Kubernetes, IaC || **deploy** | `/deploy` | Deploy application with safety checks |

| **test-engineer** | Unit, интеграционные, E2E тесты, TDD || **enhance** | `/enhance` | Improve existing code quality and performance |

| **documentation-writer** | Техническая документация, API docs, гайды || **orchestrate** | `/orchestrate` | Multi-agent task coordination |

| **seo-specialist** | Техническое SEO, структурированные данные || **plan** | `/plan` | Create detailed implementation plans |

| **game-developer** | Unity, Unreal, WebGL, игровая механика || **preview** | `/preview` | Preview changes in local environment |

| **explorer-agent** | Исследование кодовой базы, карта зависимостей || **status** | `/status` | Check project health and dependencies |

| **test** | `/test` | Generate and run comprehensive tests |

---

**Usage Examples:**

### 📚 Файлы промптов (40+)```

/brainstorm authentication system

#### 🎨 Фронтенд и дизайн/create landing page with hero section

/debug why login fails

| Промпт | Описание |/deploy to production

|--------|----------|```

| **react-patterns** | Хуки React, управление состоянием |

| **nextjs-best-practices** | App Router, SSR, ISR, middleware |---

| **tailwind-patterns** | Tailwind утилиты, адаптивный дизайн |

| **frontend-design** | Принципы UI/UX, цветовые системы |### 🔧 CLI Reference

| **mobile-design** | Mobile-first дизайн, тач-взаимодействия |

| **ui-ux-pro-max** | Продвинутый UI/UX с 50+ стилями || Command | Description |

|---------|-------------|

#### ⚙️ Бэкенд и API| `copilot-kit init` | Install `.github` folder into your project |

| `copilot-kit init --force` | Overwrite existing `.github` folder |

| Промпт | Описание || `copilot-kit init --path ./myapp` | Install in specific directory |

|--------|----------|

| **api-patterns** | REST, GraphQL, tRPC, аутентификация |---

| **nodejs-best-practices** | Производительность Node.js, безопасность |

| **nestjs-expert** | Архитектура NestJS, модули, провайдеры |### 📄 License

| **prisma-expert** | Prisma ORM, схемы, связи, миграции |

| **database-design** | Проектирование схем, стратегии индексации |MIT © [@IShtokov](https://t.me/IShtokov)



#### 🔒 Безопасность и тестирование---



| Промпт | Описание |<a name="russian"></a>

|--------|----------|

| **vulnerability-scanner** | OWASP Top 10, аудит зависимостей |## 🇷🇺 Русский

| **red-team-tactics** | Пентест, разработка эксплойтов |

| **testing-patterns** | Unit, интеграционное, E2E тестирование |### Что такое Copilot Kit?

| **tdd-workflow** | Методология TDD |

| **webapp-testing** | Playwright, Cypress, автоматизация |**Copilot Kit** — это комплексная коллекция шаблонов AI-агентов, разработанная для усиления [GitHub Copilot](https://github.com/features/copilot). Включает **16 кастомных агентов**, **40+ файлов промптов** и **11 инструкций**, которые помогают создавать качественное ПО быстрее.



#### 🛠️ DevOps и инфраструктура### ⚡ Быстрая установка



| Промпт | Описание |```bash

|--------|----------|npx @shtokov/copilot-kit init

| **docker-expert** | Оптимизация Dockerfile, multi-stage сборки |```

| **deployment-procedures** | CI/CD пайплайны, zero-downtime деплой |

| **server-management** | Администрирование Linux, Nginx, мониторинг |Или глобальная установка:

| **performance-profiling** | Lighthouse, анализ бандлов, Core Web Vitals |

```bash

#### 💻 Языки и инструментыnpm install -g @shtokov/copilot-kit

copilot-kit init

| Промпт | Описание |```

|--------|----------|

| **typescript-expert** | Продвинутые паттерны TypeScript, generics |### 📁 Структура проекта

| **python-patterns** | Best practices Python, async, type hints |

| **bash-linux** | Shell скрипты, команды Linux |```

| **powershell-windows** | PowerShell скрипты, администрирование Windows |.github/

├── agents/                    # 16 кастомных агентов

#### 📦 Архитектура и планирование├── prompts/                   # 40+ файлов промптов

├── instructions/              # 11 инструкций

| Промпт | Описание |├── copilot-instructions.md    # Инструкции репозитория

|--------|----------|└── workflows/                 # GitHub Actions

| **architecture** | Системный дизайн, микросервисы, монолит |```

| **app-builder** | Full-stack скаффолдинг с 14+ шаблонами |

| **clean-code** | Стандарты качества кода, SOLID принципы |---

| **plan-writing** | Декомпозиция задач, планы реализации |

| **brainstorming** | Сократический метод, сбор требований |### 🤖 Кастомные агенты (16)



#### 🎮 Специализированные| Агент | Описание |

|-------|----------|

| Промпт | Описание || **orchestrator** | Координация мультиагентных задач. Маршрутизирует задачи к специалистам. |

|--------|----------|| **project-planner** | Анализ, архитектура и планирование. Создаёт дорожные карты реализации. |

| **game-development** | 2D/3D игры, мультиплеер, игровые движки || **frontend-specialist** | Эксперт фронтенда. React, Next.js, Vue, CSS, анимации. |

| **mcp-builder** | Разработка MCP серверов || **backend-specialist** | Архитектура бэкенда. API дизайн, базы данных, оптимизация. |

| **i18n-localization** | Интернационализация, переводы || **mobile-developer** | Кроссплатформенная мобильная разработка. React Native, Flutter, iOS, Android. |

| **seo-fundamentals** | SEO оптимизация, структурированные данные || **database-architect** | Проектирование БД. Схемы, индексы, миграции. |

| **geo-fundamentals** | Геолокация, карты, пространственные данные || **security-auditor** | Аудит безопасности. Сканирование уязвимостей, пентест, hardening. |

| **penetration-tester** | Red team тактики. Наступательное тестирование безопасности. |

---| **debugger** | Систематический поиск причин. Исправление багов и отладка производительности. |

| **performance-optimizer** | Профилирование производительности. Бандлы, Core Web Vitals, кеширование. |

### 📋 Инструкции (11)| **devops-engineer** | CI/CD, Docker, Kubernetes, инфраструктура как код. |

| **test-engineer** | Стратегии тестирования. Unit, интеграционные, E2E тесты, TDD. |

| Инструкция | Команда | Описание || **documentation-writer** | Техническая документация. API docs, гайды, туториалы. |

|------------|---------|----------|| **seo-specialist** | Поисковая оптимизация. Техническое SEO, структурированные данные. |

| **brainstorm** | `/brainstorm` | Исследование вариантов через сократический диалог || **game-developer** | Разработка игр. Unity, Unreal, WebGL, игровая механика. |

| **create** | `/create` | Создание новых фич, компонентов или приложений || **explorer-agent** | Исследование кодовой базы. Анализ файлов, карта зависимостей. |

| **debug** | `/debug` | Систематическая отладка с анализом причин |

| **deploy** | `/deploy` | Деплой приложения с проверками безопасности |---

| **enhance** | `/enhance` | Улучшение качества и производительности кода |

| **orchestrate** | `/orchestrate` | Координация мультиагентных задач |### 📚 Файлы промптов (40+)

| **plan** | `/plan` | Создание детальных планов реализации |

| **preview** | `/preview` | Превью изменений в локальном окружении |#### 🎨 Фронтенд и дизайн

| **status** | `/status` | Проверка здоровья проекта и зависимостей || Промпт | Описание |

| **test** | `/test` | Генерация и запуск тестов ||--------|----------|

| **react-patterns** | Best practices React, хуки, управление состоянием |

**Примеры использования:**| **nextjs-best-practices** | Next.js App Router, SSR, ISR, middleware |

| **tailwind-patterns** | Tailwind CSS утилиты, адаптивный дизайн |

```| **frontend-design** | Принципы UI/UX, цветовые системы, типографика |

/brainstorm система аутентификации| **mobile-design** | Mobile-first дизайн, тач-взаимодействия |

/create лендинг с hero секцией| **ui-ux-pro-max** | Продвинутый UI/UX с 50+ стилями дизайна |

/debug почему не работает логин

/deploy в production#### ⚙️ Бэкенд и API

```| Промпт | Описание |

|--------|----------|

---| **api-patterns** | REST, GraphQL, tRPC паттерны, аутентификация |

| **nodejs-best-practices** | Производительность Node.js, безопасность |

### 🔧 CLI команды| **nestjs-expert** | Архитектура NestJS, модули, провайдеры |

| **prisma-expert** | Prisma ORM, схемы, связи, миграции |

| Команда | Описание || **database-design** | Проектирование схем, стратегии индексации |

|---------|----------|

| `copilot-kit init` | Установить папку `.github` в проект |#### 🔒 Безопасность и тестирование

| `copilot-kit init --force` | Перезаписать существующую папку `.github` || Промпт | Описание |

| `copilot-kit init --path ./myapp` | Установить в указанную директорию ||--------|----------|

| `copilot-kit update` | Обновить до последней версии || **vulnerability-scanner** | Сканирование безопасности, OWASP Top 10 |

| `copilot-kit status` | Проверить статус установки || **red-team-tactics** | Пентест, разработка эксплойтов |

| **testing-patterns** | Unit, интеграционное, E2E тестирование |

---| **tdd-workflow** | Методология TDD |

| **webapp-testing** | Playwright, Cypress, автоматизация браузера |

### 📄 Лицензия

#### 🛠️ DevOps и инфраструктура

MIT © [@IShtokov](https://t.me/IShtokov)| Промпт | Описание |

|--------|----------|

---| **docker-expert** | Оптимизация Dockerfile, multi-stage сборки |

| **deployment-procedures** | CI/CD пайплайны, zero-downtime деплой |

<div align="center">| **server-management** | Администрирование Linux, Nginx, мониторинг |

| **performance-profiling** | Lighthouse, анализ бандлов, Core Web Vitals |

### ☕ Поддержать проект / Support

#### 💻 Языки и инструменты

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/shtokov)| Промпт | Описание |

|--------|----------|

### 💬 Контакт / Contact| **typescript-expert** | Продвинутые паттерны TypeScript, generics |

| **python-patterns** | Best practices Python, async, type hints |

[![Telegram](https://img.shields.io/badge/Telegram-@IShtokov-blue?style=for-the-badge&logo=telegram)](https://t.me/IShtokov)| **bash-linux** | Shell скрипты, команды Linux |

| **powershell-windows** | PowerShell скрипты, администрирование Windows |

</div>

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
