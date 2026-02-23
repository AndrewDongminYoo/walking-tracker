# Repository Guidelines

## Project Structure & Module Organization

Core app code lives in `src/`:

- `src/App.tsx`: root screen and step-counter lifecycle.
- `src/LogCat.tsx`: log viewer UI.
- `src/permission.ts`: platform permission helpers.

App entry is `index.js`. Unit/UI tests live in `__tests__/` and native-module test doubles in `__mocks__/`. Native platform projects are under `android/` and `ios/`.

## Build, Test, and Development Commands

- `yarn start`: start Metro (`--reset-cache` is already configured).
- `yarn android`: build/run on Android emulator or device.
- `yarn ios`: build/run on iOS simulator or device.
- `yarn lint`: run ESLint using `@react-native/eslint-config`.
- `yarn test`: run all Jest tests.
- `yarn test __tests__/App.test.tsx`: run a single test file.
- `bundle exec pod install`: refresh iOS pods after native dependency changes.
- `trunk check` / `trunk fmt`: optional full lint/format pass used by local hooks.

Use Node `>=22.11.0` as defined in `package.json`.

## Coding Style & Naming Conventions

Use TypeScript + functional React components with hooks. Formatting is enforced by Prettier (`singleQuote: true`, `trailingComma: all`, `arrowParens: avoid`); default 2-space indentation. Follow ESLint rules from `@react-native`.

Naming patterns:

- Components/types: `PascalCase` (`LogCat`, `StepCountData`).
- Variables/functions/hooks: `camelCase` (`startStepCounter`, `useEffect` state handlers).
- Tests: `<Module>.test.tsx`.
- Mocks: mirror package names in `__mocks__/` (for example `react-native-permissions.ts`).

## Testing Guidelines

Testing uses Jest (`preset: react-native`) and `@testing-library/react-native`. Add or update tests when changing UI state flow, permission handling, or native event wiring. When introducing a new native dependency, add a mock in `__mocks__/` and map it in `jest.config.js`.

No coverage threshold is enforced, but each behavior change should include targeted tests and pass `yarn test` + `yarn lint`.

## Commit & Pull Request Guidelines

Follow the existing history style: Conventional Commits with gitmoji when possible, e.g. `feat: ✨ add restart guard` or `refactor: ♻️ simplify permission flow`.

For PRs, include:

- clear summary of what changed and why,
- linked issue (if applicable),
- test evidence (`yarn test`, `yarn lint`),
- screenshots/video for UI changes,
- notes for Android/iOS permission or native config updates.
