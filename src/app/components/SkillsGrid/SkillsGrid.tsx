import React from "react";
import { SectionHeader } from "../common/SectionHeader";

interface SkillsGridProps {
  skills: string[];
}

export function SkillsGrid(props: SkillsGridProps) {
  return (
    <div id="skills" className="relative mb-16">
      <SectionHeader title="My skills" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-8 mt-20">
        <div className="absolute w-64 h-32 bg-orange-300 opacity-50 blur-3xl top-64 left-1/4"></div>
        <div className="absolute w-64 h-32 border-2 border-black rounded-full opacity-50 blur-md top-64 left-1/4"></div>
        <div className="absolute w-32 h-32 bg-orange-700 opacity-50 blur-3xl top-80 left-1/4"></div>
        {props.skills.map((skill) => (
          <div className="z-10 flex flex-row items-center justify-center shadow-2xl">
            <p className="flex items-center justify-center h-8 p-6 text-white bg-blue-700 rounded-md shadow-xl backdrop-blur-md">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
