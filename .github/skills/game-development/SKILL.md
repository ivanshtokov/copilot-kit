---
name: game-development
description: Game development orchestrator. Routes to platform-specific references based on project needs. Covers web, mobile, PC, VR/AR, 2D, 3D games, multiplayer networking, game design, art, and audio.
---

# Game Development

> **Orchestrator skill** that provides core principles and routes to specialized references.

---

## When to Use This Skill

You are working on a game development project. This skill teaches the PRINCIPLES of game development and directs you to the right reference based on context.

---

## Reference Files

### Platform-Specific

| If the game targets... | Load Reference |
|------------------------|----------------|
| Web browsers (HTML5, WebGL) | [web-games](./web-games/REFERENCE.md) |
| Mobile (iOS, Android) | [mobile-games](./mobile-games/REFERENCE.md) |
| PC (Steam, Desktop) | [pc-games](./pc-games/REFERENCE.md) |
| VR/AR headsets | [vr-ar](./vr-ar/REFERENCE.md) |

### Dimension-Specific

| If the game is... | Load Reference |
|-------------------|----------------|
| 2D (sprites, tilemaps) | [2d-games](./2d-games/REFERENCE.md) |
| 3D (meshes, shaders) | [3d-games](./3d-games/REFERENCE.md) |

### Specialty Areas

| If you need... | Load Reference |
|----------------|----------------|
| GDD, balancing, player psychology | [game-design](./game-design/REFERENCE.md) |
| Multiplayer, networking | [multiplayer](./multiplayer/REFERENCE.md) |
| Visual style, asset pipeline, animation | [game-art](./game-art/REFERENCE.md) |
| Sound design, music, adaptive audio | [game-audio](./game-audio/REFERENCE.md) |

---

## Core Principles (All Platforms)

### 1. The Game Loop

Every game, regardless of platform, follows this pattern:

```
INPUT  → Read player actions
UPDATE → Process game logic (fixed timestep)
RENDER → Draw the frame (interpolated)
```

**Fixed Timestep Rule:**
- Physics/logic: Fixed rate (e.g., 50Hz)
- Rendering: As fast as possible
- Interpolate between states for smooth visuals

---

### 2. Pattern Selection Matrix

| Pattern | Use When | Example |
|---------|----------|---------|
| **State Machine** | 3-5 discrete states | Player: Idle→Walk→Jump |
| **Object Pooling** | Frequent spawn/destroy | Bullets, particles |
| **Observer/Events** | Cross-system communication | Health→UI updates |
| **ECS** | Thousands of similar entities | RTS units, particles |
| **Command** | Undo, replay, networking | Input recording |
| **Behavior Tree** | Complex AI decisions | Enemy AI |

**Decision Rule:** Start with State Machine. Add ECS only when performance demands.

---

### 3. Input Abstraction

Abstract input into ACTIONS, not raw keys:

```
"jump"  → Space, Gamepad A, Touch tap
"move"  → WASD, Left stick, Virtual joystick
```

**Why:** Enables multi-platform, rebindable controls.

---

### 4. Performance Budget (60 FPS = 16.67ms)

| System | Budget |
|--------|--------|
| Input | 1ms |
| Physics | 3ms |
| AI | 2ms |
| Game Logic | 4ms |
| Rendering | 5ms |
| Buffer | 1.67ms |

**Optimization Priority:**
1. Algorithm (O(n²) → O(n log n))
2. Batching (reduce draw calls)
3. Pooling (avoid GC spikes)
4. LOD (detail by distance)
5. Culling (skip invisible)

---

### 5. AI Selection by Complexity

| AI Type | Complexity | Use When |
|---------|------------|----------|
| **FSM** | Simple | 3-5 states, predictable behavior |
| **Behavior Tree** | Medium | Modular, designer-friendly |
| **GOAP** | High | Emergent, planning-based |
| **Utility AI** | High | Scoring-based decisions |

---

### 6. Collision Strategy

| Type | Best For |
|------|----------|
| **AABB** | Rectangles, fast checks |
| **Circle** | Round objects, cheap |
| **Spatial Hash** | Many similar-sized objects |
| **Quadtree** | Large worlds, varying sizes |

---

## Anti-Patterns (Universal)

| Don't | Do |
|-------|-----|
| Update everything every frame | Use events, dirty flags |
| Create objects in hot loops | Object pooling |
| Cache nothing | Cache references |
| Optimize without profiling | Profile first |
| Mix input with logic | Abstract input layer |

---

## Routing Examples

### Example 1: "I want to make a browser-based 2D platformer"
→ Load [web-games](./web-games/REFERENCE.md) for framework selection
→ Then [2d-games](./2d-games/REFERENCE.md) for sprite/tilemap patterns
→ Reference [game-design](./game-design/REFERENCE.md) for level design

### Example 2: "Mobile puzzle game for iOS and Android"
→ Load [mobile-games](./mobile-games/REFERENCE.md) for touch input and stores
→ Use [game-design](./game-design/REFERENCE.md) for puzzle balancing

### Example 3: "Multiplayer VR shooter"
→ [vr-ar](./vr-ar/REFERENCE.md) for comfort and immersion
→ [3d-games](./3d-games/REFERENCE.md) for rendering
→ [multiplayer](./multiplayer/REFERENCE.md) for networking

---

> **Remember:** Great games come from iteration, not perfection. Prototype fast, then polish.
