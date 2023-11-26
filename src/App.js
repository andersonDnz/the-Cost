import React from "react";
import { 
  BrowserRouter, 
  Route, 
  Routes } from "react-router-dom";
  
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contato from "./components/pages/Contato";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Project from "./components/pages/Project";

import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/navbar";

function App() {
  
  return (
    <BrowserRouter>
     <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="Contato" element={<Contato />} />
          <Route path="Company" element={<Company />} />
          <Route path="NewProject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
