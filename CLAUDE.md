# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
# Start Metro bundler (reset cache on native dep changes)
yarn start

# Run on device/emulator
yarn android
yarn ios

# Lint (ESLint via @react-native/eslint-config)
yarn lint

# Run tests
yarn test

# Run a single test file
yarn test __tests__/App.test.tsx

# iOS: install/update CocoaPods (after native dep changes)
bundle exec pod install
```

**Trunk** is configured as a pre-commit formatter and pre-push linter. Run `trunk check` or `trunk fmt` manually if needed. Trunk manages ESLint, Prettier, ktlint, swiftlint, and security scanners (gitleaks, trufflehog).

Node >= 22.11.0 is required.

## Architecture

This is a React Native 0.84 step-counter demo app using `@dongminyu/react-native-step-counter` (the author's own native module).

### Source layout

```
src/
  App.tsx         # Root component — owns all state and native subscriptions
  LogCat.tsx      # Pure log-viewer component (no subscriptions)
  permission.ts   # Platform-specific permission helpers

index.js          # AppRegistry entry point → App.tsx
__tests__/        # Jest + @testing-library/react-native tests
__mocks__/        # Manual mocks for all native-only packages
```

### Key design decisions in `App.tsx`

- **Single subscription owner**: `startStepCounterUpdate` is called exactly once in `startStepCounter`. `LogCat` is a pure renderer; it receives `logs` as a prop and never subscribes to native events itself.
- **`startedRef` guard**: prevents double-starts caused by async state updates during RESTART flows.
- **`sessionIdRef`**: because `sessionId` is React state, it would be stale inside the native subscription closure. A ref mirrors the current value so log lines can be tagged with the correct session without stale closure issues.
- **Session boundary**: each `startStepCounter()` call generates a new `sessionId`. `LogCat` filters `logs` by `sessionId`, so stale entries from a previous session are invisible even if not yet cleared.

### Permission model (`src/permission.ts`)

| Platform | Permission                                                                           |
| -------- | ------------------------------------------------------------------------------------ |
| Android  | `ACTIVITY_RECOGNITION` (primary), `BODY_SENSORS_BACKGROUND` (secondary via settings) |
| iOS      | `MOTION`                                                                             |

`getStepCounterPermission` requests first; if denied, opens app settings and then checks status. `getBodySensorPermission` goes directly to settings (background sensor requires manual grant).

### Testing

All native packages are mocked under `__mocks__/`. When adding a new native dependency, add a corresponding mock file and register it in `jest.config.js` under `moduleNameMapper`.

`@dongminyu/react-native-step-counter` is mocked inline per test file using `jest.mock(...)` rather than via a file in `__mocks__/`, because different tests need different return values from `isStepCountingSupported`.

`process.env.TZ = 'UTC'` is set in `jest.config.js` to make timestamp assertions deterministic.
