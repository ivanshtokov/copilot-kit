---
description: Generate and run comprehensive tests
agent: agent
tools: ['codebase', 'search', 'testFailures', 'runCommand']
---
# Test

$ARGUMENTS

## Task

Generate and run tests for the specified code.

### Testing Pyramid:
1. **Unit Tests** (70%) - Fast, isolated
2. **Integration Tests** (20%) - Component interaction
3. **E2E Tests** (10%) - Full user flows

### Test Pattern (AAA):
```
// Arrange - Set up test data
// Act - Execute the code
// Assert - Verify results
```

### Steps:

1. **Identify Test Targets**
   - Functions/methods to test
   - Edge cases to cover

2. **Generate Tests**
   - Follow AAA pattern
   - Cover happy path and errors
   - Add meaningful assertions

3. **Run Tests**
   - Execute test suite
   - Report results
   - Fix failures if any
