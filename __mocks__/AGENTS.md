# Mock Module Guidelines

## Overview

- `__mocks__/` hosts manual mocks for native-only dependencies.
- Goal: deterministic tests without native runtime requirements.
- Mock contracts must follow the imported API surface exactly.

## Structure

```text
__mocks__/
├── react-native-permissions.ts
├── react-native-safe-area-context.tsx
├── react-native-svg.tsx
└── react-native-circular-progress-indicator.tsx
```

## Where To Look

- Permission-related failures: `react-native-permissions.ts`.
- Rendering failures in test env: SVG / safe-area / progress mocks.
- Mapper wiring: `jest.config.js` `moduleNameMapper`.

## Conventions

- Export constants/functions with the same names used by production imports.
- Default behavior should be stable and permissive unless tests override with `jest.fn().mock...`.
- Keep return shapes minimal but type-compatible.
- Prefer explicit `jest.fn()` mocks for call tracking and overrides.

## Anti-Patterns

- Adding ad-hoc exports not present in the real package.
- Changing default mock behavior in ways that silently rewrite broad test intent.
- Forgetting to map a new mock in `jest.config.js`.
- Embedding app business logic in mock implementations.
