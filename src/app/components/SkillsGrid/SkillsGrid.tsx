import React, { useEffect } from "react";
import { SectionHeader } from "../common/SectionHeader";

interface SkillsGridProps {
  skills: string[];
}

export function SkillsGrid(props: SkillsGridProps) {
  return (
    <div id="skills" className="relative mb-16">
      <SectionHeader title="My skills" />
      <div className="grid grid-cols-3 gap-5 mt-20 md:grid-rows-3">
        <SkillSection
          title="Backend"
          skills={props.skills.slice(0, props.skills.length / 3)}
        />
        <SkillSection
          title="Frontend"
          skills={props.skills.slice(
            props.skills.length / 3,
            (props.skills.length / 3) * 2
          )}
        />
        <SkillSection
          title="Cloud"
          skills={props.skills.slice((props.skills.length / 3) * 2)}
        />
      </div>
    </div>
  );
}
interface SkillSectionProps {
  title: string;
  skills: string[];
}

function SkillSection(props: SkillSectionProps) {
  return (
    <div className="z-10 flex flex-col flex-wrap items-center justify-start gap-4 p-8 rounded-md shadow-2xl backdrop-blur-3xl">
      <h2 className="text-2xl font-bold text-center bg-transparent">
        {props.title}
      </h2>
      <div className="flex flex-row flex-wrap gap-4">
        {props.skills.map((skill, index) => (
          <p
            className="flex items-center justify-center p-4 text-white bg-blue-700 rounded-md shadow-xl backdrop-blur-md"
            key={index}
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
}
