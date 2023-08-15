import { useContext } from "react";
import { ExperienceTimelineProjectButton } from "./ExperienceTimelineProjectButton";
import { GlobalContext } from "../../common/context/global/GlobalContext";
import { ExperienceTimelineProjectDetails } from "./ExperienceTimelineProjectDetails";
import { ProjectDetailsProps } from "@/app/content/data";
import AnimateHeight from "react-animate-height";

interface ProjectProps {
  title: string;
  index: number;
  highlights: string[];
  image?: string;
  duration: string;
  icon?: string;
  tech?: string[];
  color?: string;
  isHighlighted?: boolean;
  details?: ProjectDetailsProps;
}

export const ExperienceTimelineProject = (props: ProjectProps) => {
  const globalContext = useContext(GlobalContext);
  function onClose() {
    globalContext.setHighlightedProject(undefined);
    window.scrollTo({
      top: globalContext.previousScrollValue,
      behavior: "smooth",
    });
  }

  const screenHeight = window.innerHeight;

  const imageURL = globalContext.cloudinary
    ?.image(`portfolio/${props.image}`)
    .toURL();

  return (
    <div
      className={`project ${
        props.isHighlighted
          ? "shadow-even rounded-md -mr-20 -ml-20 p-20"
          : "pt-20"
      }`}
    >
      <AnimateHeight height="auto">
        <div
          id={`project-${props.index}`}
          className={`flex flex-col-reverse items-stretch justify-between gap-8 lg:gap-32 lg:flex-row  backdrop-blur-sm gap-y-28 fade-in-scroll duration-200 ease-linear transform ${
            props.isHighlighted
              ? "z-50 bg-opacity-100"
              : "bg-opacity-60 rounded-md"
          } `}
        >
          {/* COPY */}
          <div className="flex flex-col items-start justify-start lg:w-1/2 ">
            <h3 className="text-2xl font-bold tracking-wider text-black">
              {props.title.toUpperCase()}
            </h3>
            <div className="flex flex-row items-center justify-center mb-6 rounded-md bg-opacity-5 min-h-8 drop-shadow-md">
              <p className="text-blue-700">{props.duration}</p>
            </div>
            <div className="flex flex-row items-center justify-center px-4 py-2 mb-6 bg-orange-700 rounded-md bg-opacity-5 min-h-8 drop-shadow-md">
              <p className="text-orange-700">{props.tech?.join(" • ")}</p>
            </div>
            <div className="mb-6">
              <ul className="mx-4 list-disc list-outside">
                {props.highlights.map((h) => (
                  <li>{h}</li>
                ))}
              </ul>
            </div>
            {props.details ? (
              <ExperienceTimelineProjectButton project_index={props.index} />
            ) : null}
          </div>

          {/* IMAGE */}

          {props.image ? (
            <div
              className="z-20 shadow-xl lg:w-1/2"
              style={{
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <img
                onClick={onClose}
                className="z-20 border rounded-md "
                style={{
                  objectFit: "cover",
                }}
                src={imageURL}
              />
            </div>
          ) : (
            <div
              onClick={onClose}
              style={{
                backgroundColor: props.color ? props.color : "black",
                opacity: 0.7,
              }}
              className="flex flex-row items-center justify-center rounded-md shadow-xl lg:w-1/2 h-96 lg:h-auto"
            >
              <img src={props.icon ? props.icon : "/shopify.png"} />
            </div>
          )}
        </div>
        {props.isHighlighted && props.details ? (
          <ExperienceTimelineProjectDetails details={props.details} />
        ) : null}
      </AnimateHeight>
    </div>
  );
};
