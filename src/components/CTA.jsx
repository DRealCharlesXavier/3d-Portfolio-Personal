import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";

const CTA = () => {
  return (
    <Box as="section" className="cta">
      <Text className="cta-text">
        Have a project in mind? <Box as="br" className="sm:block hidden" />
        Let's build something together!
      </Text>
      <Button as={Link} to="/contact" className="btn">
        Contact
      </Button>
    </Box>
  );
};

export default CTA;
