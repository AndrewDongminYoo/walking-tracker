# Android Module Guidelines

## Overview

- Android host project for the React Native app.
- Uses RN Gradle plugin + Kotlin entrypoints.
- Package/application id: `com.stepcounter.example`.

## Structure

```text
android/
├── build.gradle                       # global SDK/Kotlin/NDK versions
├── settings.gradle                    # root project + RN gradle plugin wiring
├── app/build.gradle                   # app id, build types, RN/Hermes deps
├── app/src/main/AndroidManifest.xml   # app/activity declarations
└── app/src/main/java/...              # MainActivity.kt, MainApplication.kt
```

## Where To Look

- Build or dependency failures: `android/build.gradle`, `android/app/build.gradle`.
- Launch/startup issues: `MainActivity.kt`, `MainApplication.kt`.
- Manifest or permission-level behavior: `AndroidManifest.xml`.

## Conventions

- Keep `namespace` and `applicationId` aligned with package directory.
- Preserve RN autolinking flow (`autolinkLibrariesWithApp`, plugin includes).
- Keep release signing/minify changes deliberate and documented.
- Prefer Kotlin changes in existing default RN style unless needed otherwise.

## Anti-Patterns

- Editing `android/build/` or `android/.gradle/` artifacts.
- Hardcoding local machine paths in Gradle files.
- Renaming package/id in one place only (must update manifest + Kotlin package path + Gradle).
- Shipping debug signing setup as production intent.
