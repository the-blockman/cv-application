# CV Application

A small React app for building a CV/résumé. Fill in your general info, education, and work experience, and each section can be edited and submitted independently.

**Live demo:** [https://cv-application-daj.pages.dev/](https://cv-application-daj.pages.dev/)

## Features

- **General Info** section for name, email, and phone number
- **Education** section supporting multiple entries (school, study, date)
- **Work Experience** section supporting multiple entries (company name, title, main responsibilities, date from/until)
- Edit and submit toggle for each section — submitted data displays as read-only text, with an edit button to bring back the form
- Add and delete entries for Education and Work Experience
- Basic validation — sections can't be submitted while any field is empty
- Deployed with Cloudflare Pages

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- Plain CSS (per-component stylesheets)

## Running Locally

Clone the repo and install dependencies:

```bash
git clone https://github.com/the-blockman/cv-application.git
cd cv-application
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Build

```bash
npm run build
```

This outputs a production-ready build to the `dist` folder.

## Project Structure

```
src/
  components/
    GeneralInfo.jsx
    Education.jsx
    Experience.jsx
  styles/
    GeneralInfo.css
    Education.css
    Experience.css
  App.jsx
  main.jsx
```

## About

This project was built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-cv-application) React curriculum, focused on practicing component composition, controlled forms, conditional rendering, and state management with `useState` and props.
