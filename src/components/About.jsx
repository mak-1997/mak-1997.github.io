import React from "react";
import My_Photo from "../assets/profile_pic.jpg";
import { DownloadIcon } from "@chakra-ui/icons";
import Mayank_Singh_Resume from "../assets/Mayank_Singh_Resume.pdf";
import { Box, Image, Text, Button } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      id="about"
      className="about section"
      paddingTop="100"
      paddingLeft={{ md: "100" }}
      paddingRight={{ md: "100" }}
    >
      <Text fontSize="3xl" as="b">
        About Me
      </Text>
      <Box
        display={{ base: "block", md: "flex" }}
        justifyContent="space-around"
        marginTop={"20"}
        alignItems="center"
        width="100%"
      >
        <Box display="flex" justifyContent={"center"}>
          <Box borderRadius={"50%"} overflow="hidden" width="fit-content">
            <Image src={My_Photo} alt="Profile Pic" className="home-img" />
          </Box>
        </Box>
        <Box
          width={{ base: "100%", md: "550px" }}
          marginTop={{ base: "30", md: "0" }}
          height="fit-content"
        >
          <Text fontSize="lg" as="b" id="user-detail-name">
            Hello, I'm Mayank Singh.
          </Text>
          <Text fontSize="lg" id="user-detail-intro">
            An aspiring fullstack MERN Developer. I love to make projects with
            HTML, CSS, React JS, Redux, NodeJS, ExpressJS and MongoDB which are
            helpful for masses and serve as a great helpful entity.
          </Text>
          <Button
            id="resume-button-2"
            marginTop="5"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/14NdvUOo7lnNPL5OwgahQTmUjyck_lfMZ/view?usp=sharing",
                "_blank"
              )
            }
            rightIcon={<DownloadIcon />}
            // as="a"
            // className="nav-link resume"
          >
            {" "}
            <a
              id="resume-link-2"
              href={Mayank_Singh_Resume}
              rel="noreferrer"
              target="_blank"
              download="Mayank_Singh_Resume.pdf"
            >
              Resume
            </a>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
