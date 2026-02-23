# Source Module Guidelines

## Overview

- `src/` is the product core.
- Runtime behavior is driven from `App.tsx`.
- Keep control flow explicit: capability check -> permission -> subscribe -> render -> stop.

## Structure

```text
src/
├── App.tsx         # lifecycle owner, state owner, native callbacks
├── LogCat.tsx      # log UI, copy/clear UX, session filtering safety net
└── permission.ts   # platform permission helpers for motion/activity sensors
```

## Where To Look

- Unexpected start/stop/restart behavior: `App.tsx`.
- Stale log lines or copy formatting: `LogCat.tsx`.
- Permission regressions per platform: `permission.ts`.

## Conventions

- `App` is the single owner of `startStepCounterUpdate` subscription lifecycle.
- Keep `LogCat` presentational; pass data/handlers as props.
- Preserve session isolation semantics (`sessionId` and filtering).
- Favor typed payload paths (`LogLine`, `StepCountData`) over loose objects.
- Keep state updates idempotent around restart flows.

## Anti-Patterns

- Subscribing to native events from `LogCat` or other leaf components.
- Removing guards that prevent double-start race conditions.
- Mixing permission UI copy and permission side effects across multiple files.
- Pushing raw non-serialized payload objects into log rendering paths.
