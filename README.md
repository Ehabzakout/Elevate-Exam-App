## Abstract

**Exam App**is a web application that offers programming exams across various subjects. Users can select a subject, take an exam, and view results that include a percentage score and a count of incorrect answers.

The app includes both **user** and **admin** interfaces on the frontend. However, **the admin dashboard is not supported by the backend API yet**. This project is built with Next.js.

## Getting Started

The app is not deployed yet, so you can run it locally:

1. Clone the repository to your local machine.

2. Install the required libraries.

3. Run the application locally.

```bash
# Install dependencies
npm i next-auth react-hook-form @hookform/resolvers zod  @react-icons/all-files clsx

# Initialize shadcn components
npx shadcn@2.3.0 init

# Run the app
  npm run dev
```

## App Libraries

1.  Next Auth for authentication.
2.  React-hook-form for forms.
3.  shadcn/ui for some component.
4.  clsx to manage some classes.
5.  Zod for schema
6.  React icons for icons

## Note

The API does not currently support **admin** functionality. However, you can still access the admin dashboard UI by manually navigating to:

```bash
  http://localhost:3000/admin
```
