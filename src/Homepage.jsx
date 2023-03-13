import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {Box, Divider} from '@chakra-ui/react';
import GithubStats from './components/GithubStats';

const Homepage = () => {
  return (
    <Box bg="#FEFAE0" >
      <Navbar   />
      <About  />
      <Skills   />
      <GithubStats />
      <Projects  />
      <Divider />
      <Contact  />
    </Box>
  );
};

export default Homepage;
