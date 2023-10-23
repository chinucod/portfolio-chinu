import React from "react";
import "./style.scss"
import Header from "./components/Header"
import About from "./components/About";
import Me from "./components/Me";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer"
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
          <Header/>
          <About />
          <Me />
          <Skills />
          <Projects />
          <Footer />
      
    </div>
  );
}

export default App;
