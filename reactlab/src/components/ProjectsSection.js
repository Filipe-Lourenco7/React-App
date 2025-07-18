import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "HTML, CSS and JS",
    description: "My personal website created with HTML, CSS, and JavaScript. Take a look!",
    getImageSrc: () => require("../images/photo1.jpg"),
    url: "https://filipe-lourenco7.github.io/Blog-Filipe/",
  },
  {
    title: "Game in JS",
    description: "A game created using JavaScript with FreeCodeCamp 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: "https://filipe-lourenco7.github.io/Game-RPG/",
  },
  {
    title: "Binary Conversion",
    description: "A website built with JavaScript to convert binary numbers",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: "https://filipe-lourenco7.github.io/Conversor/",
  },
  {
    title: "Music App",
    description: "A music app developed in JavaScript with FreeCodeCamp guidance",
    getImageSrc: () => require("../images/photo4.jpg"),
    url: "https://filipe-lourenco7.github.io/Music/",
  },
];


const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
