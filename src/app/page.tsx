"use client";

import { useContext, useEffect, useState } from "react";
import { ExperienceTimeline } from "./components/ExperienceTimeline/ExperienceTimeline";
import {
  experience_timeline_items,
  skills,
  ExperienceTimelineItem,
} from "./content/data";
import { Header } from "./components/Header/Header";
import { GlobalProvider } from "./components/common/context/global/GlobalProvider";
import { GlobalContext } from "./components/common/context/global/GlobalContext";
import { SideProjects } from "./components/SideProjects/SideProjects";
import { SkillsGrid } from "./components/SkillsGrid/SkillsGrid";
import { ContactMe } from "./components/ContactMe";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  return (
    <GlobalProvider>
      <Page />
    </GlobalProvider>
  );
}

function Page() {
  const [experienceTimelineItems, setExperienceTimelineItems] =
    useState<ExperienceTimelineItem[]>();

  useEffect(() => {
    experience_timeline_items().then((items) => {
      setExperienceTimelineItems(items);
    });

    function setScrollVar() {
      const htmlElement = document.documentElement;
      const percentOfScreenScrolled =
        htmlElement.scrollTop / htmlElement.clientHeight;

      htmlElement.style.setProperty(
        "--scroll",
        Math.min(percentOfScreenScrolled * 100, 50).toString()
      );
    }
    window.addEventListener("scroll", setScrollVar);
    window.addEventListener("resize", setScrollVar);
    return () => {
      window.removeEventListener("scroll", setScrollVar);
      window.removeEventListener("resize", setScrollVar);
    };
  }, []);

  return (
    <main className="w-full overflow-y-hidden scroll-container">
      <div
        className={`relative flex flex-col w-full items-stretch my-8 px-8 md:px-36 lg:px-36 xl:px-60 overflow-x-hidden`}
      >
        <Header />
        <SkillsGrid skills={skills} />
        <ExperienceTimeline items={experienceTimelineItems} />
        {/* <SideProjects /> */}
        <ContactMe />
      </div>
    </main>
  );
}
