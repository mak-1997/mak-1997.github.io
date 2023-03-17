import React from "react";
import reactjs from "../assets/reactjs.png";
import chakraui from "../assets/chakraui.png";
import css3 from "../assets/css3.png";
import expressjs from "../assets/expressjs.png";
import github from "../assets/github.png";
import html5 from "../assets/html5.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import redux from "../assets/redux.png";
import typescript from "../assets/typescript.png";

import {
  Box,
  Container,
  Text,
  Grid,
  Image,
  GridItem,
} from "@chakra-ui/react";

const Skills = () => {
  return (
    <Box id="skills"  paddingTop="100">
      <Container maxWidth={{ base: "100%", md: "80%" }}>
        <Box>
          <Text fontSize="3xl" as="b">
            My Skills
          </Text>
        </Box>
        <Grid
          marginTop={"20"}
          templateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(5,1fr)",
          }}
          gap="6"
          className="skills-card"
        >
          <GridItem w="150px" _hover={{ transform: "scale(1.2)" }}>
            <Image className="skills-card-img" src={html5} alt="html" />{" "}
            <Text as="b" className="skills-card-name">HTML</Text>
          </GridItem>

          <GridItem w="150px" _hover={{ transform: "scale(1.2)" }}>
            <Image className="skills-card-img" src={css3} alt="css3" />{" "}
            <Text as="b" className="skills-card-name">CSS</Text>
          </GridItem>

          <GridItem w="150px" _hover={{ transform: "scale(1.2)" }}>
            <Image className="skills-card-img" src={javascript} alt="javascript" />{" "}
            <Text as="b" className="skills-card-name">JavaScript</Text>
          </GridItem>

          <GridItem w="150px" _hover={{ transform: "scale(1.2)" }}>
            <Image className="skills-card-img" src={reactjs} alt="reactjs" />{" "}
            <Text as="b" className="skills-card-name">React JS</Text>
          </GridItem>

          <GridItem w="150px" _hover={{ transform: "scale(1.2)" }}>
            <Image className="skills-card-img" src={redux} alt="redux" />{" "}
            <Text as="b" className="skills-card-name">Redux</Text>
          </GridItem>

          <GridItem w="150px" _hover={{ transform: "scale(1.2)" }}>
            <Image className="skills-card-img" src={typescript} alt="typescript" />{" "}
            <Text as="b" className="skills-card-name">Typescript</Text>
          </GridItem>

          <GridItem w="150px" _hover={{ transform: "scale(1.2)" }}>
            <Image className="skills-card-img" src={nodejs} alt="nodejs" />{" "}
            <Text as="b" className="skills-card-name">Node JS</Text>
          </GridItem>

          <GridItem w="150px" _hover={{ transform: "scale(1.2)" }}>
            <Image className="skills-card-img" src={expressjs} alt="expressjs" />{" "}
            <Text as="b" className="skills-card-name">Express JS</Text>
          </GridItem>

          <GridItem w="150px" _hover={{ transform: "scale(1.2)" }}>
            <Image className="skills-card-img" src={mongodb} alt="mongodb" />{" "}
            <Text as="b" className="skills-card-name">Mongo DB</Text>
          </GridItem>

          <GridItem w="150px" _hover={{ transform: "scale(1.2)" }}>
            <Image className="skills-card-img" src={chakraui} alt="chakraui" />{" "}
            <Text as="b" className="skills-card-name">Chakra UI</Text>
          </GridItem>

          <GridItem w="150px" _hover={{ transform: "scale(1.2)" }}>
            <Image className="skills-card-img" src={github} alt="git" />{" "}
            <Text as="b" className="skills-card-name">Git</Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
