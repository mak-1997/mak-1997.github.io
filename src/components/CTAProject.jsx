import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  HStack,
} from "@chakra-ui/react";

export default function CTAProject({
  id,
  imageSrc,
  title,
  description,
  features,
  techStacks,
  github,
  live,
}) {
  return (
    <Container maxWidth={{ base: "100%", md: "80%" }} marginTop={"-20"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 5 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"} color={"#01497C"} className="project-title">
              {title}
            </Text>
          </Heading>
          <Text color={"gray.500"} className="project-description">
            {description}
          </Text>
          <Box textAlign={"left"}>
            <Text as="b">Features : </Text>
            {features.map((elem) => {
              return <Text>• {elem} </Text>;
            })}
          </Box>
          <HStack>
            <Text as="b">Tech Stacks : </Text>
            {techStacks.map((elem) => {
              return (
                <Text as="b" className="project-tech-stack">
                  {" "}
                  {elem}{" "}
                </Text>
              );
            })}
          </HStack>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"sm"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"red.400"}
              _hover={{ bg: "red.500" }}
              onClick={() => window.open(github, "_blank")}
              className="project-github-link"
            >
              Github
            </Button>
            <Button
              rounded={"full"}
              size={"sm"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"gray"}
              bg={"gray.400"}
              _hover={{ bg: "gray.500" }}
              onClick={() => window.open(live, "_blank")}
              className="project-deployed-link"
            >
              Live
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            _hover={{ transform: "scale(1.2)" }}
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={imageSrc}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
