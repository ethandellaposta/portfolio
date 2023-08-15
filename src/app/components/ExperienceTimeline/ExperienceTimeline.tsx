"use client";

import { useContext } from "react";
import { SlantedBackground } from "../common/SlantedBackground";
import { ExperienceTimelineLabel } from "./ExperienceTimelineLabel";
import { ExperienceTimelineProject } from "./ExperienceTimelineProject/ExperienceTimelineProject";
import { GlobalContext } from "../common/context/global/GlobalContext";
import {
  ExperienceTimelineItem,
  JobProps,
  ProjectProps,
  YearProps,
} from "../../content/data";
import { SectionHeader } from "../common/SectionHeader";

export type ExperienceTimelineProps = {
  items: ExperienceTimelineItem[] | undefined;
};

export const ExperienceTimeline = function (props: ExperienceTimelineProps) {
  const globalContext = useContext(GlobalContext);
  if (props.items === undefined) {
    return null;
  }
  const mostRecentJob = props.items[0] as JobProps;

  return (
    <div id="experience" className="w-full">
      <div className="z-20 md:gap-y-28 ">
        <SectionHeader title="Experience" />
        <div className="pt-4 pb-12">
          <ExperienceTimelineLabel
            company={mostRecentJob.company}
            year={mostRecentJob.year}
            role={mostRecentJob.position}
            color={mostRecentJob.color}
          />
        </div>
        <div className="flex flex-col w-full bg-opacity-100 gap-y-24">
          {props.items.slice(1).map((item, index) => {
            if (item.type === "project") {
              item = item as ProjectProps;
              return (
                <ExperienceTimelineProject
                  index={index}
                  isHighlighted={globalContext.highlightedProject === index}
                  {...item}
                />
              );
            } else if (item.type === "job") {
              item = item as JobProps;
              console.log(index);
              return (
                <>
                  {index === 6 ? (
                    <div className="relative">
                      <div className="absolute -left-[100rem] -right-[100rem] top-1/2">
                        <SlantedBackground
                          reverse
                          className="blue"
                        ></SlantedBackground>
                      </div>
                      <div className="absolute -left-[100rem] -right-[100rem] top-1/2">
                        <SlantedBackground className="blue"></SlantedBackground>
                      </div>
                    </div>
                  ) : null}
                  <ExperienceTimelineLabel
                    company={item.company}
                    year={item.year}
                    role={item.position}
                    color={item.color}
                  />
                </>
              );
            } else if (item.type === "year") {
              item = item as YearProps;
              return (
                <ExperienceTimelineLabel year={item.year} color={item.color} />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};
