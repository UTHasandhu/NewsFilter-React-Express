// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import ThemeToggle from './components/ThemeToggle';
import usePrevious from './hooks/usePrevious';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

function App() {
  // Step 1: Set up state
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const previousSearch = usePrevious(searchTerm);

  // Step 2: Fetch posts on mount
  useEffect(() => {
    axios.get('http://localhost:3001/posts')
      .then(response => setPosts(response.data))
      .catch(err => console.error(err));
  }, []);

  // Filter posts
  const filtered = posts.filter(p =>
    p.title.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
  );

  // Step 4: Theme context
  const { theme } = useTheme();
  return (
    <div className={`.app-container.${theme}`}>
      <ThemeToggle />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {previousSearch && <div>Previous search term: {previousSearch}</div>} 
      <PostList posts={filtered} />
    </div>
  );
}

// Wrap in ThemeProvider
export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
