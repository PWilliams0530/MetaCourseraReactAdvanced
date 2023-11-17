import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ProfilePic from "../images/philProfilePic.jpg"

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    text = "hello"
  >

<img src="https://i.pravatar.cc/150?img=7" alt="Default Image" />
<p>Hello, I am Pete!</p>

<Heading as="h1" id="landing-section">
  <VStack>
    <Box>
      {bio1}
    </Box>
    <Box>
      {bio2}
    </Box>
  </VStack>

</Heading>


  </FullScreenSection>
);

export default LandingSection;
