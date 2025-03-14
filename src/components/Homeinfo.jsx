import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <Box className="info-box">
    <Text className="font-medium sm:text-xl text-center">{text}</Text>
    <Box as={Link} to={link} className="neo-btn">
      {btnText}
      <Image src={arrow} className="w-4 h-4 object-contain" />
    </Box>
  </Box>
);

const renderContent = {
  1: (
    <Heading
      as="h1"
      className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"
    >
      Hi, I am{" "}
      <Text as="span" className="font-semibold">
        CHARLES XAVIER
      </Text>
      👋 <br />A Software Engineer from Nigeria
    </Heading>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a Dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
