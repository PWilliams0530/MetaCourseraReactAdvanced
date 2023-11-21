import { Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      color="black"
      bg="white"
    >
      <Image src={imageSrc} alt={title} maxH="300px" objectFit="cover" />
      <Box p={4}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>{title}</Text>
        <Text fontSize="sm" mb={2}>{description}</Text>
        <Text fontSize="sm">see more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </Box>
    </Box>
  );
};

export default Card;
