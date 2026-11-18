LearnLingo
LearnLingo is an online language learning platform that helps students find teachers and choose a tutor based on their learning goals, language preferences, and budget.
The application provides a teacher directory, filtering options, user authentication, a personal favorites list, and a trial lesson booking form.
Features
Teacher Directory — Browse available language teachers and view their profiles, experience, ratings, lesson information, and reviews.
Filtering — Find teachers by language, proficiency level, and hourly price.
Load More — Load additional teacher cards without navigating to another page.
User Authentication — Register and log in using Firebase Authentication.
Favorites — Add or remove teachers from a personal favorites list. Favorites are stored separately for each authenticated user in the browser's local storage.
Teacher Profiles — Expand teacher cards to read more information about their experience, teaching conditions, and reviews.
Trial Lesson Form — Open a booking form for a selected teacher, enter contact details, and choose a learning goal.
Form Validation — Validate registration and booking forms using React Hook Form and Yup.
Protected User Area — Access a personal page with saved favorite teachers.
Technologies
React — Building the user interface with reusable components and hooks.
JavaScript — Application logic.
Vite — Development server and build tool.
React Router — Client-side routing.
Firebase Authentication — User registration and authentication.
Firebase Realtime Database — Storing and retrieving teacher data.
React Hook Form — Form state management.
Yup — Form validation.
CSS Modules — Component-scoped styling.
Current Project Status
LearnLingo is a portfolio project developed to practice building a React application with authentication, database integration, reusable components, routing, and form validation.
The trial lesson form currently demonstrates client-side validation and form submission handling. It does not yet create or store actual bookings in the database.
Future Improvements
Implement backend processing and storage of trial lesson bookings.
Improve loading and error states.
Add automated tests.
Further improve responsive design and accessibility.