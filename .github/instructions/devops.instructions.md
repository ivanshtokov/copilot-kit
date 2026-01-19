---
applyTo: "**/workflows/**,**/.github/workflows/**,**/*.yml,**/*.yaml"
description: "CI/CD and DevOps standards - Auto-Orchestrator"
---

# CI/CD & DevOps Standards

## 🎯 Before Any DevOps Work

**READ**: `.github/skills/deployment-procedures/SKILL.md`

## 📋 GitHub Actions Best Practices

### Workflow Structure

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm test
```

### Security Rules

- Use `${{ secrets.* }}` for sensitive data
- Pin action versions (`@v4`, not `@latest`)
- Use environment protection rules
- Limit permissions with `permissions:` block

## 🚀 Deployment Principles

### Pre-Deployment Checklist

- [ ] All tests passing
- [ ] Code reviewed
- [ ] Environment variables set
- [ ] Backup ready
- [ ] Rollback plan documented

### Deployment Order

1. **Prepare**: Verify code, build, env vars
2. **Backup**: Save current state
3. **Deploy**: Execute with monitoring
4. **Verify**: Health check, logs, key flows
5. **Confirm**: Monitor for 15+ minutes

## ⚠️ Anti-Patterns

- Don't deploy on Fridays
- Don't skip staging environment
- Don't deploy without rollback plan
- Don't make multiple changes at once
