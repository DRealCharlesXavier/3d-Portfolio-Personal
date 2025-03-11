import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";
import CTA from "../components/CTA";
import { useColorModeValue } from "@/components/ui/color-mode";

const About = () => {
  const bgColor = useColorModeValue("bg-white", "bg-gray-800"); // Theme-aware background
  const textColor = useColorModeValue("text-slate-500", "text-slate-300"); // Theme-aware text
  const headingColor = useColorModeValue("text-black", "text-white"); // Theme-aware headings

  return (
    <section className={`max-container ${bgColor}`}>
      <h1 className={`head-text ${headingColor}`}>
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Xavier
        </span>
      </h1>

      <div className={`mt-5 flex flex-col gap-3 ${textColor}`}>
        <p>
          Software Engineer based in Nigeria, specialising in building
          applications, and is dedicated to creating and scaling cutting-edge
          software solutions that empower businesses and enhance customer
          experiences.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className={`subhead-text ${headingColor}`}>My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className={`subhead-text ${headingColor}`}>Work Experience</h3>
        <div className={`mt-5 flex flex-col gap-3 ${textColor}`}>
          I've worked with all sorts of companies, leveling up my skills and
          teaming up with smart people. Here's the rundown:
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  background: useColorModeValue("white", "gray.800"), // Theme-aware background
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3
                    className={`text-xl font-poppins font-semibold ${headingColor}`}
                  >
                    {experience.title}
                  </h3>
                  <p
                    className={`${textColor} font-medium font-base`}
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className={`${textColor} font-normal pl-1 text-sm`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr
        className={useColorModeValue("border-slate-200", "border-slate-700")}
      />

      <CTA />
    </section>
  );
};

export default About;
