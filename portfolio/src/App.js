import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./theme/backGroundShapes";
import Nav from "./components/nav";
import "./css/style.css";
import "./theme/svgs/css/responsive.css";
import Intro from "./pages/intro";
import About from "./pages/about";
import Projects from "../src/pages/projects";

function App() {

  const handleSetTheme = (props) => {
    console.log(props)
  }

  return (
  <div className="App" setNewTheme={handleSetTheme} id={"theme"}>  
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" exact element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
        <Background />
      </div>
  );
}

export default App;
