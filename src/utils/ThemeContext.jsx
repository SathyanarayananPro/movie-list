import { createContext, useContext, useEffect, useState } from "react";

// Context is created
const ThemeContext = createContext();

// custom Hook is Created
export const useTheme = () => useContext(ThemeContext);

// Provider is created
export function ThemeProvider({ children }) {
  // setting Dark mode based on Local Storage,
  // because it can stay even when refreshed
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    // Selecting the body and Toggling Dark mode
    document.body.classList.toggle("dark-theme", darkMode);

    // Selecting the poster tag and Toggling style for darkmode
    const [...poster] = document.getElementsByClassName("poster");
    poster.forEach((poster) =>
      poster.classList.toggle("poster-in-dark", darkMode)
    );

    // current darkmode status is set in Local Storage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // toggling function
  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
