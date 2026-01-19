---
applyTo: "**/*.py"
description: "Python coding standards - Auto-Orchestrator"
---

# Python Standards

## 🎯 Before Any Python Work

**READ**: `.github/skills/python-patterns/SKILL.md`

## 📋 Code Style (PEP 8)

- 4 spaces for indentation (NOT tabs)
- Maximum line length: 88 characters (Black formatter)
- Two blank lines before top-level definitions
- One blank line between methods

## 🔧 Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Variables | snake_case | `user_count` |
| Functions | snake_case | `get_user_by_id()` |
| Classes | PascalCase | `UserService` |
| Constants | SCREAMING_SNAKE | `MAX_RETRIES` |
| Private | _prefix | `_internal_method()` |

## 📝 Type Hints (Always Use)

```python
def get_user(user_id: int) -> User | None:
    """Get user by ID."""
    ...
```

## 🔐 Security Rules

- Never use `eval()` or `exec()` with user input
- Use parameterized queries for SQL
- Validate all external inputs
- Use `secrets` module for tokens, not `random`

## 📦 Import Order

1. Standard library (`os`, `sys`, `typing`)
2. Third-party (`fastapi`, `pydantic`)
3. Local application imports

## ⚡ Best Practices

- Use context managers (`with` statements)
- Prefer list comprehensions over loops
- Use `pathlib` for file paths
- Use `dataclasses` or Pydantic for data structures
