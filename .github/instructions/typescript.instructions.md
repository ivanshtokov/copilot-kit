---
applyTo: "**/*.ts,**/*.tsx,**/*.js,**/*.jsx"
description: "TypeScript/JavaScript coding standards - Auto-Orchestrator"
---

# TypeScript/JavaScript Standards

## 🎯 Always Follow These Rules

1. **Use TypeScript strict mode** when available
2. **Prefer `const` over `let`**, avoid `var`
3. **Use async/await** over raw promises
4. **Destructure objects and arrays** for readability
5. **Add meaningful variable names** that reveal intent

## 📋 Naming Conventions

- **Variables/Functions**: camelCase (`getUserById`, `isActive`)
- **Classes/Interfaces/Types**: PascalCase (`UserService`, `AuthConfig`)
- **Constants**: SCREAMING_SNAKE_CASE (`MAX_RETRIES`, `API_BASE_URL`)
- **Booleans**: question form (`isActive`, `hasPermission`, `canEdit`)

## 🔧 Function Rules

- Maximum 20 lines per function (ideally 5-10)
- Maximum 3 arguments (prefer 0-2)
- Single responsibility - one function = one job
- No unexpected side effects

## 🚨 Error Handling

- Always use try/catch for async operations
- Provide meaningful error messages
- Log errors with context
- Never swallow errors silently

## 📝 Import Order

1. External packages (react, next, etc.)
2. Internal aliases (@/components, @/lib)
3. Relative imports (./utils, ../hooks)
4. Type imports (import type { ... })
