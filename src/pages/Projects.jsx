import { Link } from "react-router-dom";
import { Box, Heading, Text, Flex, Image, Divider } from "@chakra-ui/react";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import { useColorModeValue } from "@/components/ui/color-mode";

const Projects = () => {
  const bgColor = useColorModeValue("bg-white", "bg-gray-800");
  const textColor = useColorModeValue("text-gray-500", "text-gray-300");

  return (
    <Box as="section" className={`max-container ${bgColor}`}>
      <Heading as="h1" className="head-text">
        My{" "}
        <Text as="span" className="blue-gradient_text">
          Projects
        </Text>
      </Heading>

      <Box className="mt-5">
        <Text className={textColor}>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </Text>
      </Box>

      <Flex className="my-20 flex-wrap gap-16">
        {projects.map((project) => (
          <Box key={project.name} className="lg:w-[400px] w-full">
            <Box className="block-container w-12 h-12">
              <Box className={`${project.theme} btn-back rounded-xl`} />
              <Flex className="btn-front rounded-xl justify-center items-center">
                <Image
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </Flex>
            </Box>

            <Box className="mt-5 flex flex-col">
              <Heading as="h4" className="subhead-text">
                {project.name}
              </Heading>
              <Text className={`mt-2 ${textColor}`}>
                {project.description}
              </Text>
              <Flex className="mt-5 items-center gap-2">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <Image
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>

      <Divider className={useColorModeValue("border-gray-200", "border-gray-700")} />

      <CTA />
    </Box>
  );
};

export default Projects;