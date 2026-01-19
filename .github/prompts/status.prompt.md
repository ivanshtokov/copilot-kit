---
description: Display project and agent status
agent: agent
tools: ['codebase', 'textSearch', 'readFile', 'listDirectory', 'problems', 'changes']
---

# Project Status

Display current project state and progress.

## Context

- Scan workspace structure
- Check for errors with `#problems`
- Review recent changes with `#changes`

## Status Report

1. **Project Info**
   - Name and path
   - Tech stack detection
   - Framework and dependencies

2. **Code Health**
   - Error count
   - Warning count
   - Test status

3. **File Statistics**
   - Total files
   - Recent changes
   - Lines of code

4. **Environment**
   - Node/Python version
   - Package manager
   - Dependencies status

## Output Format

```
=== Project Status ===

📁 Project: {name}
📂 Path: {path}
🏷️ Type: {framework}

🔧 Tech Stack:
   {dependencies}

📊 Health:
   Errors: {count}
   Warnings: {count}

📄 Files: {total} files
```

## User Request

$ARGUMENTS
