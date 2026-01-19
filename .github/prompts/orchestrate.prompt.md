---
description: Coordinate multiple agents for complex tasks
agent: orchestrator
tools: ['codebase', 'textSearch', 'readFile', 'editFiles', 'createFile', 'runInTerminal', 'problems', 'usages', 'listDirectory']
---

# Multi-Agent Orchestration

Coordinate specialized agents to solve complex problems.

## Context

- Analyze task complexity
- Determine required expertise areas
- Plan agent coordination strategy

## Orchestration Rules

1. **Minimum 3 agents** for true orchestration
2. **Phase 1: Planning** - sequential, project-planner first
3. **Phase 2: Implementation** - parallel where possible
4. **Checkpoints** - user approval between phases

## Agent Selection

| Task Type | Required Agents |
|-----------|-----------------|
| Web App | frontend, backend, test-engineer |
| API | backend, security, test-engineer |
| Database | database-architect, backend, security |
| Full Stack | planner, frontend, backend, devops |

## Process

1. Create plan with project-planner
2. Get user approval
3. Execute with specialized agents
4. Synthesize results
5. Verify and test

## User Request

$ARGUMENTS
