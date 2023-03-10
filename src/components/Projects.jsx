import React from "react";
import { Box, Text } from "@chakra-ui/react";
import CTAProject from "./CTAProject";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      imageSrc: project1,
      title: "Shop Clone",
      description:
        "This a clone of an E- commerce website called shop.com, which offers coparision between products availabe on different websits and offers best deals ",
      features: ["Home Page", "Login & Sign Up Page", "Exclusive Brands Page"],
      techStacks: ["HTML", "CSS", "JS"],
      github: "https://github.com/mak-1997/brisk-smash-9621",
      live: "https://dashing-crepe-158570.netlify.app/",
    },
    {
      id: 2,
      imageSrc: project2,
      title: "Nykaa Clone",
      description:
        "Nykaa is an e-commerce website dealing with fashion, beauty, and wellness products.",
      features: ["Home Page", "Login & Sign Up Page", "Exclusive Brands Page"],
      techStacks: ["HTML", "CSS", "JS"],
      github: "https://github.com/mak-1997/groovy-airplane-6414",
      live: "https://sensational-torrone-ff2b20.netlify.app/",
    },
    {
      id: 3,
      imageSrc: project3,
      title: "Brand Shop",
      description:
        "Brand Shop is an e-commerce website dealing with Luxury items. ",
      features: ["Home Page", "Login & Sign Up Page", "Exclusive Brands Page"],
      techStacks: ["REACT JS", "CHAKRA UI", "CSS", "NODE JS"],
      github: "https://github.com/mak-1997/fragile-hot-3247",
      live: "https://candid-crumble-7b020e.netlify.app/",
    },
    {
      id: 4,
      imageSrc: project4,
      title: "Ajio Clone",
      description:
        "Ajio is an e-commerce website dealing with fashion, beauty, and wellness products.",
      features: ["Home Page", "Login & Sign Up Page", "Men's, Women's & Kid's Page","Cart Page", "Add to cart & Remove from Cart functionality"],
      techStacks: ["REACT JS", "CHAKRA UI", "CSS", "NODE JS"],
      github: "https://github.com/piyushkhurana8744/-prompt-wilderness-693",
      live: "https://ajio-app.vercel.app/",
    },
  ];

  return (
    <Box id="projects" paddingTop={"100"}>
      <Box>
        <Text fontSize="3xl" as="b">
          My Projects
        </Text>
        {projectData.reverse().map((elem) => (
          <CTAProject key={elem.id} {...elem} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
