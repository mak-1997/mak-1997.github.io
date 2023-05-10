import React from "react";
import My_Photo from "../assets/profile_pic.jpg";
import { DownloadIcon } from "@chakra-ui/icons";
// import Mayank_Singh_Resume from "../assets/Mayank_Singh_Resume.pdf";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Box
      id="home"
      paddingTop="100"
      paddingLeft={{ md: "100" }}
      paddingRight={{ md: "100" }}
      fontSize={"3xl"}
      fontWeight={"bold"}
    >
      <Text>Hi 👋 I'm Mayank Singh</Text>
      <Typewriter
        options={{
          strings: [
            "A Full Stack Web Developer",
            "A Problem Solver",
            "A Team Player",
          ],
          pauseFor: 1500,
          autoStart: true,
          loop: true,
          // style: styles.typeWriterText,
        }}
      />
    </Box>
  );
};

export default Home;
