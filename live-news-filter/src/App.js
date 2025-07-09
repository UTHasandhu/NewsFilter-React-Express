
// 7. Use useEffect to fetch posts from the backend on mount

// 8. Filter posts based on search term (convert both to lowercase)

// 9. Get previousSearch using usePrevious(searchTerm)

// 10. Render the ThemeToggle, SearchBar, PostList
//     - Also show the previous search term

// 11. Wrap this App component in <ThemeProvider> before exporting
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import ThemeToggle from './components/ThemeToggle';
import themeContext from './context/ThemeContext';

import logo from './logo.svg';
import './App.css';

//Shows theme toggle, search bar, then post list.
function App() {
  // Need to create state for posts and searched word
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  //This hook stores previous search term any time searchTerm updates.
  const previousSearch = usePrevious(searchTerm);
  const theme = useTheme();

  //Fetch posts from backend on page render
  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((res) =>
    {
      setPosts(res.data)
    }).catch(e => console.error(e))
   }, [])


  
  return (
    <div className={`app-container ${theme}`}>
      <ThemeToggle />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <PostList posts={posts} />
      {previousSearch && <div>Previous search term: {previousSearch}</div>} 
    </div>
  );
}

export default App;
