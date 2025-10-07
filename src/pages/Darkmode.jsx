import { useTheme } from "../utils/ThemeContext";

function Darkmode() {
  // current darkmode is fetched from custom hook
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className="dark-mode-container">
      <button
        className={`dark-mode-text ${darkMode ? `dark` : ""}`}
        title="Dark Mode"
        onClick={() => toggleDarkMode()}
      >
        {!darkMode ? "☀️" : `🌙`}
      </button>
    </div>
  );
}

export default Darkmode;
