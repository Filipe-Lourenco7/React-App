import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:filipe.coorp55@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Filipe-Lourenco7",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/filipe-louren%C3%A7o-194a60359/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@filipe.coorp55",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/31079688/filipe-louren%c3%a7o",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <HStack spacing={8}>
                <a href="#projects-section" onClick={handleClick("projects")}>
                  Projects
                </a>
                <a href="#contactme-section" onClick={handleClick("contactme")}>
                  Contact Me
                </a>
              </HStack>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
