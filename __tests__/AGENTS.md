# Test Module Guidelines

## Overview

- `__tests__/` contains behavior tests for app flow and log UI.
- Tests are integration-leaning component tests (not snapshot-heavy).
- Prefer assertions on visible behavior and button enabled/disabled states.

## Structure

```text
__tests__/
├── App.test.tsx     # startup/permission/START/STOP behavior
└── LogCat.test.tsx  # log filtering + clear/copy control behavior
```

## Where To Look

- App lifecycle regressions: `App.test.tsx`.
- Session filtering and control-state regressions: `LogCat.test.tsx`.
- Mock shape mismatches: sibling files in `__mocks__/`.

## Conventions

- Use `@testing-library/react-native` (`render`, `screen`, `fireEvent`, `act`).
- Mock `@dongminyu/react-native-step-counter` inline when test-specific return values are needed.
- Keep tests deterministic; rely on `process.env.TZ = 'UTC'` from `jest.config.js`.
- Name tests by user-visible behavior ("shows...", "enables...", "calls...").

## Anti-Patterns

- Coupling tests to implementation internals instead of UI state/side effects.
- Reusing mutable test objects across cases without reset.
- Silent native dependency additions without new/updated mocks.
- Introducing time/locale-sensitive assertions without stabilization.
