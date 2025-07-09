# Project Documentation – Live Feed Filter

## Project Overview

**Live Feed Filter** is a full-stack web application designed to demonstrate foundational web development skills using React on the frontend and Express.js with Node.js on the backend. The application allows users to fetch and filter a list of "posts" served from a local backend and toggle between light and dark themes for better accessibility. The frontend also tracks the previous search query and updates dynamically based on user input.

This app is intentionally lightweight, avoiding databases and authentication to stay focused on **core concepts**: React hooks, state management, RESTful APIs, component structure, and basic server-side architecture.

---

## Project Purpose

This project was built to:

- Practice React fundamentals, including `useState`, `useEffect`, `useRef`, `useContext`, and `useReducer`
- Understand client-server interaction through a local Express backend
- Prepare for interviews by reinforcing frontend + backend integration patterns

---

## Technologies Used

| Layer      | Tools / Libraries                  |
|------------|------------------------------------|
| Frontend   | React, JSX, Axios, React Context   |
| Backend    | Node.js, Express.js                |
| Dev Tools  | npm, create-react-app, Postman     |
| Mobile     | React Native (planned extension)   |

---

## File Descriptions

### `/backend/index.js`

This is the main entry point for the backend. It uses Express to define a simple HTTP server with one GET endpoint `/posts`. It serves data from a JSON file using Node's built-in `fs` module. The `cors` middleware is used to allow cross-origin access from the frontend.

---

### `/backend/data/posts.json`

This is a static dataset in JSON format. Each object represents a post with an `id`, `title`, and `body`. It acts as a substitute for a real database and allows quick data retrieval for frontend testing.

---

### `/frontend/src/index.js`

This file renders the React app to the browser using `ReactDOM.createRoot`. It mounts the root component (`App.js`) inside the DOM element with the ID `root`. The app is wrapped in a `ThemeProvider` for global theme state management.

---

### `/frontend/src/App.js`

The main logic of the application lives here. This component:

- Fetches posts from the backend using Axios and stores them in state
- Tracks the user’s search input and filters the displayed posts accordingly
- Uses a custom `usePrevious` hook to show the previous search term
- Applies light/dark theme using context
- Renders the layout, including the `ThemeToggle`, `SearchBar`, and `PostList` components

---

### `/frontend/src/components/SearchBar.jsx`

A controlled input field that allows the user to search posts by title. It receives a `value` and `onChange` prop to control the search term from the parent (`App.js`). It also uses `useRef` to focus the input when the user clicks "Clear."

---

### `/frontend/src/components/PostList.jsx`

A presentational component that accepts an array of filtered posts and renders them as a list. If no posts match the search query, it displays a message. Each post displays a title and a body.

---

### `/frontend/src/components/ThemeToggle.jsx`

A simple button that toggles between light and dark themes using a `dispatch` function from React’s `useReducer`. The current theme is accessed via context (`useTheme()`), and the button label updates based on the active theme.

---

### `/frontend/src/context/ThemeContext.js`

Provides global theme state using the Context API + `useReducer`. It defines a reducer with a single action type: `TOGGLE_THEME`. This lets any child component access or update the current theme without prop drilling.

---

### `/frontend/src/hooks/usePrevious.js`

A custom React Hook that tracks the previous value of a given state variable. It uses `useRef` to persist data across renders and `useEffect` to update the ref whenever the input value changes.

---

## Things I learned

- Understand how to structure a React project with reusable components and separation of concerns
- Implement and consume a RESTful API using Express and Axios
- Learn how React hooks (`useState`, `useEffect`, `useRef`, `useContext`, `useReducer`) work in practice
- Track previous state using custom hooks
- Implement global state management without Redux
- Learn to serve static data without needing a full database
- Prepare to extend the same backend for use with React Native or other platforms

---

## Next Steps

- Stylize the UI
- Make a post and put endpoint to add/edit posts to make this a full crud app
- Create a mobile version using React Native that consumes the same API
- Deploy the frontend to github pages and the backend to a cloud service like Render
- Add unit testing

---
