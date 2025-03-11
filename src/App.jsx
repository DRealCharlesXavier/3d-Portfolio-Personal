import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home, About, Projects, Contact } from "./pages";
import Navbar from "./components/Navbar";
import { useColorModeValue } from "./components/ui/color-mode";

const App = () => {
  const bgColor = useColorModeValue("bg-slate-300/20", "bg-gray-900/80"); // Theme-aware background

  return (
    <main className={`${bgColor} h-full`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
