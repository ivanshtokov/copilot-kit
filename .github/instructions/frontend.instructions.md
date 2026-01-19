---
applyTo: "**/*.css,**/*.scss,**/*.tsx,**/*.jsx"
description: "Frontend/UI coding standards - Auto-Orchestrator"
---

# Frontend/UI Standards

## 🎨 Before Any UI Work

**READ**: `.github/skills/frontend-design/SKILL.md`

## ⚠️ ANTI-PATTERNS (NEVER DO)

| ❌ Don't | ✅ Do |
|----------|-------|
| Bento grids everywhere | Ask if grid is needed |
| Mesh/Aurora gradients | Consider solid colors first |
| Dark + neon as default | Ask for color preference |
| Same layout every time | Vary based on content |
| Skip asking preferences | Always ask when unclear |

## 📐 Core Principles

1. **Mobile-first**: Start with mobile, scale up
2. **8-point grid**: Use multiples of 8 for spacing
3. **60-30-10 color rule**: Primary 60%, Secondary 30%, Accent 10%
4. **Accessibility**: WCAG 2.1 AA minimum

## 🎯 Touch Targets

- Minimum 44px × 44px for mobile
- 8px+ spacing between targets
- Primary CTAs in thumb zone

## ⚡ Performance

- Lazy load images below fold
- Use `loading="lazy"` on images
- Prefer CSS animations over JS
- Animate only `transform` and `opacity`

## 🔧 Tailwind (if used)

- Use design system scale, not arbitrary values
- Extract repeated patterns to components
- Follow v4 CSS-first configuration
