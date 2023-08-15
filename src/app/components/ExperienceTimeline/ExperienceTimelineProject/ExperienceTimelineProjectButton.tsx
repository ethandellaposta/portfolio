"use client";

import { use, useContext, useEffect } from "react";
import { GlobalContext } from "../../common/context/global/GlobalContext";

interface ExperienceTimelineProjectButtonProps {
  project_index: number;
}

export const ExperienceTimelineProjectButton = function (
  props: ExperienceTimelineProjectButtonProps
) {
  const globalContext = useContext(GlobalContext);

  function onClick() {
    const highlightedElement = document.getElementById(
      `project-${props.project_index}`
    );

    globalContext.setHighlightedProject(props.project_index);
    globalContext.setPreviousScrollValue(window.scrollY);

    if (highlightedElement) {
      console.log({ highlightedElement });
      const { offsetTop } = highlightedElement;

      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  }

  return (
    <a
      href="#_"
      onClick={onClick}
      className={`relative px-6 py-3 font-bold text-white duration-300 rounded-lg group transform ${
        globalContext.highlightedProject !== undefined
          ? "scale-y-0 scale-x-0 opacity-0"
          : "scale-y-100 scale-x-100 opacity-100"
      }`}
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-orange-700 rounded-md ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>

      <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-blue-800 rounded-md ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-normal"></span>

      <p className="relative">LEARN MORE</p>
    </a>
  );
};
