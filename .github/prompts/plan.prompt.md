---
description: Generate an implementation plan for features or refactoring
agent: ask
tools: ['codebase', 'search', 'fetch', 'usages']
---
# Plan

$ARGUMENTS

## Task

Generate a detailed implementation plan without writing code.

### Output Format:

```markdown
## Overview
Brief description of the feature/task

## Requirements
- [ ] Requirement 1
- [ ] Requirement 2

## Implementation Steps
1. Step 1 - Description
2. Step 2 - Description

## Files to Create/Modify
- `path/to/file.ts` - Purpose
- `path/to/file2.ts` - Purpose

## Testing Strategy
- Unit tests for...
- Integration tests for...

## Risks & Considerations
- Risk 1 and mitigation
```
