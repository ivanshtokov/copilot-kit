---
applyTo: "**"
---

# Repository Coding Standards

These instructions apply to all code generation in this workspace.

## Code Quality

- Write clean, self-documenting code with meaningful names
- Follow Single Responsibility Principle - each function does ONE thing
- Apply DRY (Don't Repeat Yourself) - extract duplicates immediately
- Use KISS (Keep It Simple) - prefer the simplest working solution
- Practice YAGNI (You Aren't Gonna Need It) - don't build unused features

## Naming Conventions

- Variables: reveal intent (`userCount` not `n`)
- Functions: verb + noun (`getUserById()` not `user()`)
- Booleans: question form (`isActive`, `hasPermission`, `canEdit`)
- Constants: SCREAMING_SNAKE_CASE (`MAX_RETRY_COUNT`)

## Function Guidelines

- Keep functions small: max 20 lines, ideally 5-10
- Limit arguments: max 3, prefer 0-2
- Avoid side effects: don't mutate inputs unexpectedly
- One level of abstraction per function

## Communication

- Match user's language in responses
- Code comments and variables always in English
- Be concise, direct, and solution-focused

## Error Handling

- Always validate user inputs
- Handle errors gracefully with try/catch
- Provide meaningful error messages
- Log errors appropriately for debugging

## TypeScript/JavaScript

- Use TypeScript types when applicable
- Prefer `const` over `let`, avoid `var`
- Use async/await over raw promises
- Destructure objects and arrays when it improves readability

## Testing

- Write tests for critical functionality
- Follow AAA pattern: Arrange, Act, Assert
- Use descriptive test names that explain expected behavior

## Security

- Never commit secrets or credentials
- Validate and sanitize all external inputs
- Check for security vulnerabilities in dependencies
