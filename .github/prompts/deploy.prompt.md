---
description: Production deployment with pre-flight checks
agent: orchestrator
tools: ['codebase', 'textSearch', 'runInTerminal', 'problems', 'changes']
---

# Deploy to Production

Run pre-deployment checks and deploy application.

## Context

- Check for errors with `#problems`
- Review changes with `#changes`
- Run build and tests before deployment

## Deployment Tasks

1. **Pre-flight checks**
   - TypeScript compilation
   - Linting
   - Tests
   - Security audit

2. **Build**
   - Production build
   - Bundle analysis
   - Environment validation

3. **Deploy**
   - Execute deployment command
   - Verify deployment
   - Health check

## User Request

$ARGUMENTS
