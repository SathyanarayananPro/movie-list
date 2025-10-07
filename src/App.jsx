import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DynamicRouterHandler from "./pages/Dynamic/DynamicRouterHandler";
import { ThemeProvider } from "./utils/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<DynamicRouterHandler />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
