import React from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Box id="contact">
      <VStack marginBottom={"5"}>
        <Text as="b" fontSize="3xl">
          Get In Touch
        </Text>
        <Text as="b" fontSize={"3xl"}>
          Mayank Singh
        </Text>
        <Text as="b" fontSize={"2xl"} id="contact-phone">
          Phone : +91-8077-01-6076
        </Text>
      </VStack>
      <HStack justifyContent={"center"} marginBottom={"5"}>
        <BsLinkedin
          id="contact-linkedin"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/mayank-singh-ab196110b/",
              "_blank"
            )
          }
          size="30px"
        />
        <BsGithub
          id="contact-github"
          onClick={() => window.open("https://github.com/mak-1997", "_blank")}
          size="30px"
        />
        <MdEmail
          id="contact-email"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/mayank-singh-ab196110b/",
              "_blank"
            )
          }
          size="30px"
        />
      </HStack>
      <Text as="b" fontSize={"lg"}>
        Thank You
      </Text>
    </Box>
  );
};

export default Contact;
