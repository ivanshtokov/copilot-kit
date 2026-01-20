---
applyTo: "**/api/**,**/server/**,**/routes/**,**/auth/**,**/*.env*"
description: "Security standards - Auto-applied for backend/API files"
---

# Security Standards

## 🎯 Before Any Security-Sensitive Work

**READ**: `.github/skills/vulnerability-scanner/SKILL.md`

## 🔐 OWASP Top 10 Quick Reference

| Risk | Prevention |
|------|------------|
| **Injection** | Parameterized queries, input validation |
| **Broken Auth** | Strong passwords, MFA, secure sessions |
| **Data Exposure** | Encryption at rest and transit |
| **XXE** | Disable DTD processing |
| **Access Control** | Least privilege, deny by default |
| **Misconfiguration** | Secure defaults, remove unused features |
| **XSS** | Output encoding, CSP headers |
| **Deserialization** | Validate, avoid untrusted data |
| **Components** | Audit dependencies, keep updated |
| **Logging** | Monitor, alert, protect logs |

## 🔑 Authentication

- Hash passwords with bcrypt/argon2
- Use secure session management
- Implement rate limiting
- Support MFA for sensitive actions

## 📝 Input Validation

```typescript
// Validate ALL inputs at API boundary
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const validated = schema.parse(input);
```

## 🚫 Never Do

- Store passwords in plain text
- Use `eval()` with user input
- Expose internal errors
- Trust client-side validation alone
- Hardcode secrets in code
- Log sensitive data
