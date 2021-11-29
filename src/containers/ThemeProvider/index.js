import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeSelectIsDarkMode } from 'containers/App/selectors';

export default function ThemeProvider({ children }) {
  const isDarkMode = useSelector(makeSelectIsDarkMode());

  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  return children;
}
