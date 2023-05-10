import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  return (
    <Box>
      <Box
        margin={"20px auto"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        width={{ base: "90%", sm: "80%", md: "fit-content" }}
        padding={"30px"}
        borderRadius={"20px"}
        gap="20px"
      >
        <Heading style={{ color: "yellowgreen", textAlign: "center" }}>
          GitHub Calendar
        </Heading>
        <GitHubCalendar username="mak-1997" fontSize={16} />
      </Box>
    </Box>
  );
};

export default GithubCalendar;
