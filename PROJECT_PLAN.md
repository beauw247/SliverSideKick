# What Should I Ask? - Project Plan

## Version 1 Goal

Build a beginner-friendly, frontend-only React app that helps users prepare for a call with an insurance company using sample insurance scenarios.

## Scope

- Let the user choose an insurance issue category.
- Let the user optionally type general notes for themselves.
- Show sample questions to ask during the call.
- Show information to have ready.
- Show suggested next steps.
- Show a clear disclaimer that the app provides general guidance only.

## Safety Boundaries

- Do not connect to real insurance systems.
- Do not collect PHI, medical records, Social Security numbers, member IDs, or private account data.
- Use hardcoded sample guidance only.
- Keep user notes local in the browser during the session.

## File Structure

```text
what-should-i-ask/
+-- README.md
+-- index.html
+-- package.json
+-- src/
|   +-- App.jsx
|   +-- main.jsx
|   +-- styles.css
+-- PROJECT_PLAN.md
```

## Build Steps

1. Create a Vite React project structure.
2. Add hardcoded sample issue categories.
3. Build a simple form with category selection and optional notes.
4. Display questions, information to have ready, next steps, and disclaimer.
5. Add clean CSS for readability and accessibility.
6. Write a README with purpose, features, run instructions, and future improvements.
