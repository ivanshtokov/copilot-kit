---
applyTo: "**/prisma/**,**/*.prisma"
description: "Prisma ORM standards - Auto-Orchestrator"
---

# Prisma Standards

## 🎯 Before Any Prisma Work

**READ**: `.github/skills/prisma-expert/SKILL.md`

## 📋 Schema Design

### Model Naming

- Models: PascalCase singular (`User`, `Post`)
- Fields: camelCase (`createdAt`, `userId`)
- Relations: descriptive names

### Required Fields

```prisma
model User {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Add indexes for frequently queried fields
  @@index([email])
  @@map("users")  // Snake case table name
}
```

## 🔗 Relations

- Always use explicit `@relation` with `fields` and `references`
- Define cascade behavior (`onDelete`, `onUpdate`)
- Add indexes on foreign keys

```prisma
model Post {
  id       String @id @default(cuid())
  author   User   @relation("UserPosts", fields: [authorId], references: [id], onDelete: Cascade)
  authorId String

  @@index([authorId])
}
```

## 🚀 Query Optimization

| ❌ Don't | ✅ Do |
|----------|-------|
| `findMany()` all | Use `select` for needed fields |
| Loop with queries | Use `include` for relations |
| N+1 queries | Batch with `findMany` + `where: { id: { in: ids } }` |

## 🔐 Security

- Use transactions for multi-step operations
- Never expose raw Prisma errors to clients
- Validate input before queries
