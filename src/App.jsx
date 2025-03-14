import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import { Home, About, Projects, Contact } from "./pages";
import Navbar from "./components/Navbar";
import { useColorModeValue } from "./components/ui/color-mode";
import Test from "./components/ui/test";

const App = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900"); // Theme-aware background

  return (
    <Box bg={bgColor} h="full">
      <Router>
        <Navbar />
        <Test />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
