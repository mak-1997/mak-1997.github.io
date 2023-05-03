import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Text,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { HamburgerIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";
import Mayank_Singh_Resume from "../assets/Mayank-Singh-Resume.pdf";

const Links = ["Home", "About", "Skills", "Projects", "Contact"];

const NavLink = ({ children }) => (
  <Link
    spy={true}
    as={ScrollLink}
    smooth={true}
    duration={500}
    px={2}
    py={1}
    rounded={"md"}
    color={"white"}
    _hover={{
      textDecoration: "none",
      color: "#01497C",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={`${children.toLowerCase()}`}
    className={`nav-link ${children.toLowerCase()}`}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position={"sticky"} top="0px" zIndex={"9999"} id="nav-menu">
      <Box bg={useColorModeValue("#01497C", "gray.100")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* <HStack spacing={8} alignItems={'center'} border={'1px solid'}> */}
          <Box _hover={{ cursor: "pointer", transform: "scale(1.2)" }}>
            {" "}
            <Text
              onClick={() => window.scrollTo({ top: 80, behavior: "smooth" })}
              color="white"
              as="b"
              fontSize={"2xl"}
              fontStyle="italic"
              // className="nav-link home"
            >
              {" "}
              {"< Mayank />"}{" "}
            </Text>{" "}
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          {/* </HStack> */}
          <Flex alignItems={"center"} >
            <Button
              id="resume-button-1"
              className="nav-link resume"
              // marginTop="5"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/14NdvUOo7lnNPL5OwgahQTmUjyck_lfMZ/view?usp=sharing",
                  "_blank"
                )
              }
              rightIcon={<DownloadIcon />}
              // as="a"
            >
              {" "}
              <a
                id="resume-link-1"
                href={Mayank_Singh_Resume}
                rel="noreferrer"
                target="_blank"
                download="Mayank-Singh-Resume.pdf"
              >
                Resume
              </a>
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
