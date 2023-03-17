import React from "react";
import GithubCalendar from "./GithubCalendar";
import { Box, Container, Text, Image } from "@chakra-ui/react";

const GithubStats = () => {
  return (
    <Container
      id="state"
      className="git-Calender"
      maxWidth={{ base: "100%", md: "80%" }}
    >
      <Text as="b" fontSize={"lg"} className="git1">
        Days I Code
      </Text>
      <Box className="git2">
        <GithubCalendar
          className="react-activity-calendar"
          username={"mak-1997"}
        />
      </Box>
      <Box align="center">
        <Text as="b" fontSize={"lg"} className="skillDes">
          <span className="name1">My github Statistics</span>
        </Text>
        <Box id="stats">
          <Image
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=mak-1997"
            alt="github-streak-stats"
          />
          <br></br>
          <Image
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=mak-1997&theme=white&hide_border=false&include_all_commits=true&count_public=true&count_private=true"
            alt="github-stats-card"
          />
          <br></br>
          <Image
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=mak-1997&theme=white&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
            alt="github-top-langs"
          />
        </Box>
      </Box>
    </Container>
  );
};
export default GithubStats;
