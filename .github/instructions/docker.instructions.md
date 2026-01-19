---
applyTo: "**/Dockerfile*,**/docker-compose*.yml,**/docker-compose*.yaml"
description: "Docker standards - Auto-Orchestrator"
---

# Docker Standards

## 🎯 Before Any Docker Work

**READ**: `.github/skills/docker-expert/SKILL.md`

## 📋 Dockerfile Best Practices

### Multi-Stage Builds

```dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
USER node
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

### Layer Caching

1. Copy dependency files first (`package.json`)
2. Install dependencies
3. Copy source code last
4. Minimize layers (combine RUN commands)

## 🔐 Security

- Always use non-root user (`USER node`)
- Use specific version tags, not `latest`
- Don't store secrets in images
- Use multi-stage to exclude build tools

## 📦 .dockerignore

```
node_modules
.git
.env
*.log
dist
coverage
```

## 🔧 Docker Compose

- Use named volumes for persistence
- Set resource limits
- Use health checks
- Separate networks for frontend/backend
