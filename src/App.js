import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Service/Services";
import Projects from "./pages/Projects/Projects";


import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
      <Route path="/proiectExamen" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
