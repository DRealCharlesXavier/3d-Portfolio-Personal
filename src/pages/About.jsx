import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Heading, Text, Flex, Image, Divider } from "@chakra-ui/react";
import { skills, experiences } from "../constants";
import CTA from "../components/CTA";
import { useColorModeValue } from "@/components/ui/color-mode";

const About = () => {
  const bgColor = useColorModeValue("bg-white", "bg-gray-800");
  const textColor = useColorModeValue("text-gray-500", "text-gray-300");

  return (
    <Box as="section" className={`max-container ${bgColor}`}>
      <Heading as="h1" className="head-text">
        Hello, I'm{" "}
        <Text as="span" className="blue-gradient_text">
          Xavier
        </Text>
      </Heading>

      <Box className={`mt-5 ${textColor}`}>
        <Text>
          Software Engineer based in Nigeria, specialising in building
          applications, and is dedicated to creating and scaling cutting-edge
          software solutions that empower businesses and enhance customer
          experiences.
        </Text>
      </Box>

      <Box className="py-10">
        <Heading as="h3" className="subhead-text">
          My Skills
        </Heading>

        <Flex className="mt-16 flex-wrap gap-12">
          {skills.map((skill) => (
            <Box key={skill.name} className="block-container w-20 h-20">
              <Box className="btn-back rounded-xl" />
              <Flex className="btn-front rounded-xl justify-center items-center">
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box className="py-16">
        <Heading as="h3" className="subhead-text">
          Work Experience
        </Heading>
        <Box className={`mt-5 ${textColor}`}>
          <Text>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </Text>
        </Box>

        <Box className="mt-12">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <Flex className="justify-center items-center w-full h-full">
                    <Image
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </Flex>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  background: useColorModeValue("white", "gray.800"),
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <Box>
                  <Heading as="h3" className="subhead-text">
                    {experience.title}
                  </Heading>
                  <Text className={`font-medium mt-0 ${textColor}`}>
                    {experience.company_name}
                  </Text>
                </Box>

                <Box as="ul" className="my-5 ml-5 space-y-2 list-disc">
                  {experience.points.map((point, index) => (
                    <Text
                      as="li"
                      key={`experience-point-${index}`}
                      className={`text-sm ${textColor}`}
                    >
                      {point}
                    </Text>
                  ))}
                </Box>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Box>
      </Box>

      <Divider
        className={useColorModeValue("border-gray-200", "border-gray-700")}
      />

      <CTA />
    </Box>
  );
};

export default About;
