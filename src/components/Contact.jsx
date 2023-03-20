import React from "react";
import {
  Box,
  Container,
  HStack,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

import emailjs from "emailjs-com";

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const toast = useToast();
  const form = React.useRef();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const name = formData.get("name");
    // const email = formData.get("email");
    // const subject = formData.get("subject");
    // const message = formData.get("message");

    emailjs
      .sendForm(
        "service_d23bx1f",
        "template_1jqkoct",
        form.current,
        "j3fgWtwIDM0cW16rT"
      )
      .then(
        (result) => {
          toast({
            title: "Email sent!",
            description:
              "Thanks for contacting us. We will get back to you soon.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          event.target.reset();
        },
        (error) => {
          console.error(error);
          toast({
            title: "Error!",
            description: "Something went wrong. Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    await handleFormSubmit(event);
    setIsLoading(false);
  };

  return (
    <Box id="contact">
      <Text as="b" fontSize="3xl">
        Get In Touch
      </Text>
      <Container>
        <Box as="form" onSubmit={handleSubmit} ref={form}>
          <FormControl id="name" isRequired>
            <FormLabel>Your Name</FormLabel>
            <Input name="name" type="text" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input name="email" type="email" />
          </FormControl>

          <FormControl id="subject" isRequired>
            <FormLabel>Subject</FormLabel>
            <Input name="subject" type="text" />
          </FormControl>

          <FormControl id="message" isRequired>
            <FormLabel>Project Details</FormLabel>
            <Textarea name="message" resize="none" />
          </FormControl>

          <Button mt={4} colorScheme="blue" isLoading={isLoading} type="submit">
            Send
          </Button>
        </Box>
        <Box marginTop={"3"}>
          <HStack
            _hover={{ cursor: "pointer" }}
            margin={"auto"}
            justifyContent={"center"}
            color="#01497C"
            id="contact-phone"
            marginTop={"3"}
          >
            <MdEmail
              onClick={() =>
                window.open("mailto: mnksingh337@gmail.com", "_blank")
              }
              size="30px"
            />
            <Text as="b" fontSize={"lg"} id="contact-email">
              {" "}
              : mnksingh337@gmail.com
            </Text>
          </HStack>
          <HStack
            _hover={{ cursor: "pointer" }}
            margin={"auto"}
            justifyContent={"center"}
            color="#01497C"
            marginTop={"3"}
          >
            <BsFillTelephoneFill
              onClick={() => {
                navigator.clipboard.writeText("+91 8077016076");
                toast({
                  title: "Number copied!",
                  description: "+91 8077016076",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
              size="25px"
            />
            <Text as="b" fontSize={"lg"} id="contact-phone">
              {" "}
              : +91 8077016076
            </Text>
          </HStack>
          <HStack
            marginTop={"3"}
            justifyContent={"center"}
            _hover={{ cursor: "pointer" }}
            color="#01497C"
          >
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
              onClick={() =>
                window.open("https://github.com/mak-1997", "_blank")
              }
              size="30px"
            />
          </HStack>
        </Box>
      </Container>
      <Text as="b" fontSize={"xl"} color="#01497C" marginTop={"3"}>
        Thank You
      </Text>
    </Box>
  );
};

export default Contact;
