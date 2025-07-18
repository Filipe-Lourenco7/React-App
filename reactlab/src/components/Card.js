// Card.js
import React from "react";
import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <VStack
      backgroundColor="white"
      color="black"
      borderRadius="lg"
      overflow="hidden"
      align="stretch"
      spacing={0}
    >
      <Image src={imageSrc} alt={title} objectFit="cover" width="100%" />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        <Text mb={4}>{description}</Text>
        {url && (
          <Link
            href={url}
            color="teal.500"
            isExternal
            fontWeight="bold"
            display="inline-flex"
            alignItems="center"
          >
            Learn more <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "8px" }} />
          </Link>
        )}
      </Box>
    </VStack>
  );
};

export default Card;
