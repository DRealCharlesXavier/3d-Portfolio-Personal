import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import { Canvas } from "@react-three/fiber";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { useColorModeValue } from "@/components/ui/color-mode";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const bgColor = useColorModeValue("bg-white", "bg-gray-800");
  const textColor = useColorModeValue("text-gray-500", "text-gray-300");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Xavier",
          from_email: form.email,
          to_email: "drealcharlesxavier@proton.me",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
        showAlert({
          show: true,
          text: "I didn't receive your message",
          type: "danger",
        });
      });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <Box
      as="section"
      className={`max-container lg:flex flex-col lg:flex-row ${bgColor} h-screen`}
    >
      {alert.show && <Alert {...alert} />}

      <Box className="flex-1 min-w-[50%] flex flex-col">
        <Heading as="h1" className="head-text">
          Get in Touch
        </Heading>

        <Box
          as="form"
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <Box>
            <Text className={`font-semibold ${textColor}`}>Name</Text>
            <Input
              type="text"
              name="name"
              className="input"
              placeholder="John Doe"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Box>
          <Box>
            <Text className={`font-semibold ${textColor}`}>Email</Text>
            <Input
              type="email"
              name="email"
              className="input"
              placeholder="Johndoe@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Box>
          <Box>
            <Text className={`font-semibold ${textColor}`}>Your Message</Text>
            <Textarea
              name="message"
              className="textarea"
              rows={4}
              placeholder="Let me know how I can help you"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Box>
          <Button
            type="submit"
            className="btn"
            isLoading={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </Box>

      <Box className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </Box>
    </Box>
  );
};

export default Contact;
