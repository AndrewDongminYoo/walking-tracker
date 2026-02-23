# Repository Guidelines

## Overview

- React Native 0.84 step-counter demo app.
- Core behavior: permission gating + native step subscription + log rendering.
- Primary package under test: `@dongminyu/react-native-step-counter`.

## Structure Tree

```text
.
├── src/                  # App logic, UI, permission helpers
├── __tests__/            # Jest + Testing Library behavior tests
├── __mocks__/            # Native-package test doubles
├── android/              # Android host app + Gradle config
├── ios/                  # iOS host app + CocoaPods/Xcode config
├── index.js              # RN entrypoint (AppRegistry)
├── jest.config.js        # test env + moduleNameMapper for mocks
├── eslint.config.cjs     # ESLint 9-compatible RN flat config patching
└── .trunk/trunk.yaml     # format/lint/security toolchain config
```

## AGENTS Hierarchy

- `AGENTS.md` (this file): cross-repo map and rules.
- `src/AGENTS.md`: JS/TS architecture and state-flow invariants.
- `__tests__/AGENTS.md`: testing patterns and guardrails.
- `__mocks__/AGENTS.md`: mock-shape and determinism rules.
- `android/AGENTS.md`: Android-specific build/runtime guidance.
- `ios/AGENTS.md`: iOS-specific build/runtime guidance.

## Where To Look First

- Runtime state bugs: `src/App.tsx`.
- Log rendering/formatting issues: `src/LogCat.tsx`.
- Permission behavior: `src/permission.ts`, `__mocks__/react-native-permissions.ts`.
- Failing component tests: `__tests__/`.
- Native boot/build failures: `android/` or `ios/` by platform.

## Code Map (High Signal)

- `App` owns start/stop/restart lifecycle and native subscription.
- `LogCat` is presentational and session-filtered.
- `permission.ts` encapsulates platform-specific permission request/check flow.
- Jest maps native modules to local mocks in `jest.config.js`.

## Conventions

- TypeScript + function components + hooks.
- Formatting: Prettier (`singleQuote`, `trailingComma`, `arrowParens: avoid`).
- Lint: `eslint.config.cjs` extends RN flat config with plugin compatibility patches.
- Naming: `PascalCase` components/types, `camelCase` values/functions.
- Commits: conventional type + gitmoji (`feat: ✨ ...`, `refactor: ♻️ ...`).

## Anti-Patterns

- Duplicating step subscription ownership outside `App`.
- Editing generated/vendor trees (`ios/Pods`, `android/build`, `android/.gradle`).
- Adding native deps without matching Jest mock + mapper entry.
- Copying root guidance into child AGENTS files verbatim.

## Commands

- `yarn start` / `yarn android` / `yarn ios`
- `yarn lint`
- `yarn test` or `yarn test __tests__/App.test.tsx`
- `bundle exec pod install` (after native dependency changes)
- `trunk fmt` / `trunk check`

## Notes

- Node runtime requirement: `>=22.11.0`.
- Keep docs telegraphic and repository-specific.
