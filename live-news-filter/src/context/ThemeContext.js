// Global theme state using React Context and Reducer
import React, { createContext, useContext, useReducer } from 'react';
const ThemeContext = createContext(); // create context to be modified

const initialState = 'light';

//Implement reducer in case they don't toggle
function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  // Any change to theme reducer runs
  const [theme, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}