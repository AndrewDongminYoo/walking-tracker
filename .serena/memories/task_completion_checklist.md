# Task Completion Checklist

Before considering a coding task complete in this repository:

1. Run static checks:
   - `yarn lint`
2. Run tests:
   - `yarn test`
   - Optionally run focused tests for touched areas, e.g. `yarn test __tests__/App.test.tsx`
3. If native dependencies/config changed:
   - Run `bundle exec pod install` (iOS)
   - Validate app launch at least on one target (`yarn android` or `yarn ios`)
4. If new native packages were introduced:
   - Add/update `__mocks__/` files
   - Update `jest.config.js` mappings
5. Keep commits consistent with repo history:
   - Conventional Commit style with gitmoji is preferred (e.g., `feat: ✨ ...`, `refactor: ♻️ ...`, `chore: ⬆️ ...`).
6. Include concise PR notes:
   - What changed, why, test evidence, and UI screenshots when relevant.
