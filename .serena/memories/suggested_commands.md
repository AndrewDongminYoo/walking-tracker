# Suggested Commands

## Setup

- `yarn install` — install JavaScript dependencies.
- `bundle install` — install Ruby gems (CocoaPods tooling).
- `bundle exec pod install` — install/update iOS pods after native dependency changes.

## Run app

- `yarn start` — start Metro bundler (cache reset is included).
- `yarn android` — build/run Android app.
- `yarn ios` — build/run iOS app.

## Quality checks

- `yarn lint` — run ESLint.
- `yarn test` — run all Jest tests.
- `yarn test __tests__/App.test.tsx` — run a focused test file.
- `trunk fmt` — format files via Trunk-managed tools.
- `trunk check` — run Trunk lint/security checks.

## Common Darwin shell utilities

- `ls -la` — inspect files.
- `rg "pattern"` / `rg --files` — fast text/file search.
- `find . -maxdepth 3 -type f` — inspect tree quickly.
- `git status`, `git diff`, `git log --oneline -n 15` — VCS workflow.
