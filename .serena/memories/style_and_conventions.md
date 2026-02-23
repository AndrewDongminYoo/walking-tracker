# Style and Conventions

## Language and framework

- Use TypeScript for app code and React functional components with hooks.
- Keep business/state logic in `src/App.tsx`; keep presentational pieces (e.g., log rendering) separated when practical.

## Formatting and linting

- Prettier config (`.prettierrc.js`):
  - `singleQuote: true`
  - `trailingComma: all`
  - `arrowParens: avoid`
- ESLint config (`eslint.config.js`) extends `@react-native/eslint-config/flat`.
- Trunk is configured for pre-commit format and pre-push checks.

## Naming

- Components/types: `PascalCase` (e.g., `LogCat`, `StepCountData`).
- Variables/functions/hooks: `camelCase` (e.g., `startStepCounter`).
- Test files: `<Name>.test.tsx` in `__tests__/`.
- Native-module mocks: one file per package in `__mocks__/`.

## Testing conventions

- Jest preset is `react-native` with `process.env.TZ = 'UTC'` for deterministic time behavior.
- When adding native dependencies, add/update corresponding Jest module mappings and mocks.
