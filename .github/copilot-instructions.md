---
applyTo: "**"
---

# Copilot Kit - Repository Instructions

> **Version 2.0** - AI-Enhanced Development Configuration
> These instructions are automatically applied to all Copilot interactions in this workspace.

---

## ��� Core Principles

### Code Quality Standards
- Write **clean, self-documenting code** - if you need a comment, rename the variable
- Follow **Single Responsibility Principle** - each function does ONE thing
- Apply **DRY** (Don't Repeat Yourself) - extract duplicates immediately
- Use **KISS** (Keep It Simple) - simplest solution that works
- Practice **YAGNI** (You Aren't Gonna Need It) - don't build unused features

### Naming Conventions
| Element | Convention | Example |
|---------|------------|---------|
| Variables | Reveal intent | `userCount` not `n` |
| Functions | Verb + noun | `getUserById()` not `user()` |
| Booleans | Question form | `isActive`, `hasPermission` |
| Constants | SCREAMING_SNAKE | `MAX_RETRY_COUNT` |

### Function Rules
- **Small**: Max 20 lines, ideally 5-10
- **Few Arguments**: Max 3, prefer 0-2
- **No Side Effects**: Don't mutate inputs unexpectedly
- **One Level of Abstraction**: Per function

---

## ��� Language & Communication

- **Match user's language** in responses
- **Code comments/variables** always in English
- Be **concise, direct, solution-focused**
- No verbose explanations or over-commenting

---

## ��� Available Resources

### Custom Agents (Use @agent-name in chat)
Located in `.github/agents/`:

| Agent | Use Case |
|-------|----------|
| @orchestrator | Multi-agent coordination, complex tasks |
| @project-planner | Architecture, planning, roadmaps |
| @frontend-specialist | React, Next.js, Vue, CSS, animations |
| @backend-specialist | API, databases, server optimization |
| @mobile-developer | React Native, Flutter, iOS, Android |
| @security-auditor | Vulnerability scanning, penetration testing |
| @debugger | Root cause analysis, bug fixing |
| @test-engineer | Unit, integration, E2E testing |

### Prompt Files (Use /prompt-name or attach)
Located in `.github/prompts/`:

| Prompt | Description |
|--------|-------------|
| clean-code | Code quality standards, SOLID principles |
| react-patterns | React best practices, hooks, state management |
| nextjs-best-practices | Next.js App Router, SSR, ISR |
| api-patterns | REST, GraphQL, tRPC design patterns |
| testing-patterns | Testing strategies, TDD workflow |
| database-design | Schema design, indexing, migrations |

### Instructions (Slash commands)
Located in `.github/instructions/`:

| Command | Action |
|---------|--------|
| /brainstorm | Explore options with Socratic questioning |
| /create | Create new features or applications |
| /debug | Systematic debugging with RCA |
| /deploy | Deploy with safety checks |
| /enhance | Improve existing code quality |
| /plan | Create implementation plans |
| /test | Generate and run tests |

---

## ��� Workflow Guidelines

### For Complex Tasks
1. **Clarify** - Ask questions if requirements are unclear
2. **Plan** - Create a brief implementation plan
3. **Implement** - Write clean, tested code
4. **Verify** - Run tests, check for errors

### For Simple Fixes
- Proceed directly with the fix
- Explain what was changed and why

### For Design/UI Tasks
- Reference frontend-specialist or mobile-developer agent
- Follow accessibility guidelines
- Use modern, clean design patterns

---

## ���️ Safety & Quality

- Always validate user inputs
- Use TypeScript types when applicable
- Handle errors gracefully with try/catch
- Write tests for critical functionality
- Check for security vulnerabilities in dependencies

---

## ��� Additional Documentation

- See `ARCHITECTURE.md` for detailed system documentation
- Check agent files in `.github/agents/` for specialized knowledge
- Browse prompts in `.github/prompts/` for domain-specific patterns
