# Project Overview

- **Purpose**: React Native step-counter demo app (walking tracker) that showcases native step tracking integration via `@dongminyu/react-native-step-counter`.
- **Primary stack**: React Native 0.84, React 19, TypeScript, Jest, React Native Testing Library.
- **Native targets**: Android (`android/`) and iOS (`ios/`).
- **Entry points**: `index.js` registers the app; main app logic is in `src/App.tsx`.

## High-level structure

- `src/`: application code (`App.tsx`, `LogCat.tsx`, `permission.ts`).
- `__tests__/`: Jest tests for app components and behavior.
- `__mocks__/`: manual mocks for native-only dependencies used by tests.
- `android/`, `ios/`: native project files.
- Root configs: `package.json`, `jest.config.js`, `eslint.config.js`, `.prettierrc.js`, `.trunk/trunk.yaml`, `tsconfig.json`.

## Key implementation notes

- App behavior centers around step-counter lifecycle (start/stop/restart), permission checks, and log rendering.
- Test setup maps native modules to mocks via `jest.config.js`.
- Development guidance is documented in `CLAUDE.md` and `AGENTS.md`.
