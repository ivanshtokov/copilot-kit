---
applyTo: "**/*.test.*,**/*.spec.*,**/__tests__/**"
description: "Testing standards - Auto-Orchestrator"
---

# Testing Standards

## 🎯 Before Writing Tests

**READ**: `.github/skills/testing-patterns/SKILL.md`

## 📊 Testing Pyramid

```
        /\          E2E (Few) - Critical user flows
       /  \         
      /----\        Integration (Some) - API, DB
     /      \       
    /--------\      Unit (Many) - Functions, classes
```

## ✅ AAA Pattern (Always Use)

```typescript
// Arrange - Set up test data
const user = createMockUser();

// Act - Execute code under test
const result = await getUserById(user.id);

// Assert - Verify outcome
expect(result).toEqual(user);
```

## 📋 Naming Convention

```typescript
describe('UserService', () => {
  describe('getUserById', () => {
    it('should return user when found', () => {});
    it('should throw NotFoundError when user does not exist', () => {});
    it('should handle invalid id gracefully', () => {});
  });
});
```

## 🎯 What to Test

| ✅ Test | ❌ Don't Test |
|---------|---------------|
| Business logic | Framework code |
| Edge cases | Third-party libs |
| Error handling | Simple getters |
| User-visible behavior | Implementation details |

## 🔧 Mocking Rules

- Mock external APIs and databases
- Mock time/random for determinism
- Don't mock the code under test
- Use factories for test data
