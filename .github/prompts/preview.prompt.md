---
description: Start, stop, or check preview server status
agent: agent
tools: ['runInTerminal', 'codebase', 'textSearch', 'readFile']
---

# Preview Server Management

Manage local development preview server.

## Commands

- `/preview` - Show current status
- `/preview start` - Start server
- `/preview stop` - Stop server
- `/preview restart` - Restart server

## Context

- Detect project type from package.json
- Use appropriate dev command
- Handle port conflicts

## Actions

1. **Detect project type**
   - Next.js: `npm run dev`
   - Vite: `npm run dev`
   - React: `npm start`

2. **Start server**
   - Run dev command in background
   - Report URL and port

3. **Handle issues**
   - Port conflicts
   - Missing dependencies
   - Build errors

## User Request

$ARGUMENTS
