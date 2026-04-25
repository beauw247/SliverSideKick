# What Should I Ask?
https://sliver-side-kick.vercel.app/
A beginner-friendly React portfolio project that helps people prepare for a call with their insurance company.

The app uses sample insurance scenarios to suggest:

- Questions to ask during the call
- Information to have ready
- Suggested next steps
- A short disclaimer

## Project Purpose

Many people feel unsure about what to ask when calling an insurance company. This project gives users a simple starting point so they can feel more prepared and organized before making a call.

This first version is intentionally simple. It is frontend-only, uses hardcoded sample content, and does not connect to any real insurance systems.

## Important Privacy Notes

This app should not be used to collect private information.

Do not enter:

- Social Security numbers
- Medical records
- Member ID numbers
- Claim documents with private details
- Private account information
- Protected health information

The optional notes box is only for general reminders during the current browser session.

## Features

- Clear app title and purpose
- Dropdown for insurance issue categories
- Category buttons for quick selection
- Optional notes box
- Generated guidance for each category
- General disclaimer
- Simple, readable React code
- Plain CSS styling

## Included Categories

- Finding an in-network provider
- Billing or unexpected cost
- Prior authorization
- Prescription coverage
- Appointment or referral confusion

## Tech Stack

- React
- Vite
- Plain CSS

## How to Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Runs the app locally for development.

```bash
npm run build
```

Builds the app for production.

```bash
npm run preview
```

Previews the production build locally.

## File Structure

```text
what-should-i-ask/
+-- README.md
+-- PROJECT_PLAN.md
+-- index.html
+-- package.json
+-- src/
    +-- App.jsx
    +-- main.jsx
    +-- styles.css
```

## Future Improvements

- Add a print-friendly call checklist
- Add larger text mode for accessibility
- Add Spanish language sample content
- Let users copy questions to a clipboard
- Add unit tests for category data
- Add more sample insurance scenarios
- Save general notes locally with clear user consent

## Disclaimer

This project provides general educational guidance using sample scenarios only. It is not medical, legal, financial, or insurance advice. Users should confirm details directly with their insurance company, provider, or another qualified professional.
