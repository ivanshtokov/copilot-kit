---
applyTo: "**/*.swift,**/*.kt,**/*.dart,**/android/**,**/ios/**"
description: "Mobile development standards - Auto-Orchestrator"
---

# Mobile Development Standards

## 🎯 Before Any Mobile Work

**READ**: `.github/skills/mobile-design/SKILL.md`

## 📱 Platform Detection

| Files | Platform |
|-------|----------|
| `*.swift`, `ios/` | iOS (SwiftUI/UIKit) |
| `*.kt`, `android/` | Android (Kotlin/Compose) |
| `*.dart`, `lib/` | Flutter |
| `*.tsx` + `app.json` | React Native |

## 🎯 Touch Targets

- **iOS**: Minimum 44pt × 44pt
- **Android**: Minimum 48dp × 48dp
- **Spacing**: 8px+ between targets

## ⚡ Performance Rules

### Lists (CRITICAL)

| ❌ Don't | ✅ Do |
|----------|-------|
| ScrollView for lists | FlatList/ListView.builder |
| Inline render functions | Memoized components |
| Index as key | Unique stable ID |

### Animations

- Use native driver (`useNativeDriver: true`)
- Animate only `transform` and `opacity`
- Avoid animating `width`, `height`, `margin`

## 🔐 Security

- Use SecureStore/Keychain for tokens
- Never hardcode API keys
- Enable SSL pinning in production
- Don't log sensitive data

## 🧪 Testing

- Unit test business logic
- Integration test API calls
- E2E test critical user flows
- Test on real devices
