import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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

  const bgColor = useColorModeValue("bg-white", "bg-gray-800"); // Theme-aware background
  const textColor = useColorModeValue("text-black-500", "text-gray-300"); // Theme-aware text
  const headingColor = useColorModeValue("text-black", "text-white"); // Theme-aware headings
  const inputBg = useColorModeValue("bg-gray-100", "bg-gray-700"); // Theme-aware input background
  const inputText = useColorModeValue("text-black", "text-white"); // Theme-aware input text

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
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
        showAlert({
          show: true,
          text: "I didn't recieve your message",
          type: "danger",
        });
      });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section
      className={`relative flex lg:flex-row flex-col max-container h-[100vh] ${bgColor}`}
    >
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className={`head-text ${headingColor}`}>Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7mt-14"
          onSubmit={handleSubmit}
        >
          <label className={`${textColor} font-semibold`}>
            Name
            <input
              type="text"
              name="name"
              className={`input ${inputBg} ${inputText}`}
              placeholder="John Doe"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className={`${textColor} font-semibold`}>
            Email
            <input
              type="email"
              name="email"
              className={`input ${inputBg} ${inputText}`}
              placeholder="Johndoe@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className={`${textColor} font-semibold`}>
            Your Message
            <textarea
              name="message"
              rows={4}
              className={`textarea ${inputBg} ${inputText}`}
              placeholder="Let me know how I can help you"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={Loader}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
