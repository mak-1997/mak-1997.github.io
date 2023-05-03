import React from "react";
import { Box, Text } from "@chakra-ui/react";
import CTAProject from "./CTAProject";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
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
import tailwindcss from "../assets/tailwindcss.svg";
import websocket from "../assets/websocket.png";

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
      logo: [html5, css3, javascript],
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
      logo: [html5, css3, javascript],
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
      logo: [reactjs, chakraui, css3, nodejs],
      github: "https://github.com/mak-1997/fragile-hot-3247",
      live: "https://candid-crumble-7b020e.netlify.app/",
    },
    {
      id: 4,
      imageSrc: project4,
      title: "Ajio Clone",
      description:
        "AJIO, a fashion and lifestyle brand, is Reliance Retail's digital commerce initiative and is the ultimate fashion destination for styles that are handpicked, on trend and at prices that are the best you'll find anywhere.",
      features: [
        "Home Page",
        "Login & Sign Up Page",
        "Men's, Women's & Kid's Page",
        "Cart Page",
        "Add to cart & Remove from Cart functionality",
      ],
      techStacks: ["REACT JS", "CHAKRA UI", "CSS", "NODE JS"],
      logo: [reactjs, chakraui, css3, nodejs],
      github: "https://github.com/piyushkhurana8744/-prompt-wilderness-693",
      live: "https://ajio-app.vercel.app/",
    },
    {
      id: 5,
      imageSrc: project5,
      title: "Smart Shop",
      description:
        "Smart shop is a clone of IndiaMart which is India’s largest online B2B marketplace, connecting buyers with suppliers.",
      features: [
        "Home Page",
        "Login & Sign Up Page",
        "Men's, Women's & Kid's Page",
        "Cart Page",
        "Admin Page",
      ],
      techStacks: ["REACT JS", "CHAKRA UI", "CSS", "NODE JS", "Redux"],
      logo: [reactjs, chakraui, css3, nodejs, redux],
      github: "https://github.com/mak-1997/Smart-Shop",
      live: "https://smart-shop-alpha.vercel.app/",
    },
    {
      id: 6,
      imageSrc: project6,
      title: "Meesho",
      description:
        "Meesho is a social E- commerce platform based in India that allows individuals to start their own online businesses by selling products to their social network.",
      features: [
        "Home Page",
        "Login & Sign Up Page",
        "Men's, Women's & Kid's Page",
        "Cart Page",
        "Admin Page",
      ],
      techStacks: [
        "REACT JS",
        "Redux",
        "CHAKRA UI",
        "CSS",
        "NODE JS",
        "Express JS",
        "MongoDB",
      ],
      logo: [reactjs, redux, chakraui, css3, nodejs, expressjs, mongodb],
      github: "https://github.com/puja2795/meesho",
      live: "https://frontend-ochre-beta.vercel.app/",
    },
    {
      id: 7,
      imageSrc: project7,
      title: "Word Hunt",
      description:
        "Word-Hunt is a popular game that is often played in singleplayer or multiplayer modes, and can be enjoyed for fun and removing your stress.",
      features: [
        "Home Page",
        "Login & Sign Up Page",
        "Singleplayer & Multiplayer Modes",
        "User's List Page",
        "Invite User",
        "Match History Page",
      ],
      techStacks: [
        "REACT JS",
        "TypeScript",
        "Tailwind CSS",
        "CSS",
        "NODE JS",
        "Express JS",
        "MongoDB",
        "WebSocket",
      ],
      logo: [
        reactjs,
        typescript,
        tailwindcss,
        css3,
        nodejs,
        expressjs,
        mongodb,
        websocket,
      ],
      github: "https://github.com/ojasbendale18200/Word-Hunt",
      live: "https://word-hunt-indol.vercel.app/",
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
