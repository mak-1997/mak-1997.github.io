import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {Box, Divider} from '@chakra-ui/react';

const Homepage = () => {
  return (
    <Box bg="#FEFAE0" >
      <Navbar id="nav-menu"  />
      <About id="about" className="about section" />
      <Skills id="skills"  />
      <Projects id="projects" />
      <Divider />
      <Contact id="contact" />
    </Box>
  );
};

export default Homepage;
