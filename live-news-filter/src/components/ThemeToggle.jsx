// Toggle between light and dark mode
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, dispatch } = useTheme();

  return (
    <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
