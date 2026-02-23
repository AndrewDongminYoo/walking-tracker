# iOS Module Guidelines

## Overview

- iOS host project for the React Native app.
- Swift app delegate bootstraps RN factory and bundle URL selection.
- CocoaPods manages native dependencies.

## Structure

```text
ios/
├── Podfile                               # RN pod integration
├── Podfile.lock                          # locked native dependency graph
├── walking_tracker/AppDelegate.swift     # app bootstrap + RN bridge setup
├── walking_tracker/Info.plist            # app metadata + usage descriptions
├── walking_tracker.xcodeproj/            # project config
└── walking_tracker.xcworkspace/          # workspace (pods + app)
```

## Where To Look

- Startup/module-name issues: `walking_tracker/AppDelegate.swift`.
- Permission prompt text and app metadata: `walking_tracker/Info.plist`.
- Pod install/integration issues: `Podfile`, workspace/project settings.

## Conventions

- Keep module name consistent with JS registration (`walking_tracker`).
- Preserve `NSMotionUsageDescription` when motion/step features are used.
- Use `bundle exec pod install` after native dependency updates.
- Commit source/project changes; avoid committing transient user-specific workspace data.

## Anti-Patterns

- Editing `ios/Pods/` directly (generated).
- Drifting plist usage strings from actual runtime behavior.
- Mixing workspace and project targets without validating build/run.
- Omitting pod install after dependency changes.
