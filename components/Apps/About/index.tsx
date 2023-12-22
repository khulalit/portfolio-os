import "./styles.css";
import Image from "next/image";
import { useState } from "react";
import { ABOUT_APP_SECTION } from "@/constants/AboutHeading";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Resume from "./Resume";

const ICON_SIZE = 20;

export default function About() {
  const [selected, setSelected] = useState<number | string>(1);

  function listClickHandler(id: string | number) {
    setSelected(id);
  }

  return (
    <div className="flex about ">
      <ul className="side-nav">
        {ABOUT_APP_SECTION.map((section: any) => (
          <li
            key={section.index}
            className={`${selected == section.id ? "selected" : "hover_"}`}
            onClick={() => {
              listClickHandler(section.id);
            }}
          >
            <Image width={ICON_SIZE} src={section.icon} alt={section.label} />{" "}
            {section.label}
          </li>
        ))}
      </ul>
      <div className="bg-black text-white flex-1">
        {/* <AboutMe/> */}
        {selected === 1 ? (
          <AboutMe />
        ) : selected === 2 ? (
          <Education />
        ) : selected === 3 ? (
          <Skills />
        ) : selected === 4 ? (
          <Projects />
        ) : (
          <Resume />
        )}
        {/* <Education/> */}
      </div>
    </div>
  );
}
