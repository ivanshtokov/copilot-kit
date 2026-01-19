---
applyTo: "**/*.md,**/docs/**"
description: "Documentation standards - Auto-Orchestrator"
---

# Documentation Standards

## 🎯 Before Any Docs Work

**READ**: `.github/skills/documentation-templates/SKILL.md`

## 📋 README Structure

```markdown
# Project Name

Brief description (1-2 sentences)

## Features
- Feature 1
- Feature 2

## Quick Start
\`\`\`bash
npm install
npm run dev
\`\`\`

## Documentation
- [Installation](docs/installation.md)
- [Configuration](docs/configuration.md)
- [API Reference](docs/api.md)

## Contributing
Guidelines for contributors

## License
MIT
```

## ✍️ Writing Style

- Use active voice
- Be concise and direct
- Use code blocks for commands/code
- Add examples for complex concepts
- Use headings for structure (H2, H3)

## 📝 Code Comments

| Type | When to Use |
|------|-------------|
| `// Comment` | Brief inline explanation |
| `/** JSDoc */` | Public API documentation |
| `// TODO:` | Future improvements |
| `// FIXME:` | Known issues |

## 🔧 API Documentation

- Document all public endpoints
- Include request/response examples
- Specify error codes and messages
- Keep examples up-to-date with code
