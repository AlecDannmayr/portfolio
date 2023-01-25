import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./theme/backGroundShapes";
import Nav from "./components/nav";
import "./css/style.css";
import Intro from "./pages/intro";
import About from "./pages/about";
import Projects from "../src/pages/projects";
import Copyright from "../src/components/copyright";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = (props) => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div className="App" id={theme}>
      <BrowserRouter>
        <Nav themeToggled={theme} onChangeSwitch={toggleTheme} />
        <Routes>
          <Route path="/" exact element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <Copyright themeToggled={theme} />
      <Background />
    </div>
  );
}

export default App;
