import { ExperienceTimelineProjectButton } from "./ExperienceTimelineProjectButton";

interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  duration: string;
  icon?: string;
  tech?: string[];
}

export const ExperienceTimelineProject = (props: ProjectProps) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row mx-8 md:mx-36 lg:mx-36 xl:mx-60 bg-white backdrop-blur-sm rounded-md p-8 gap-8 gap-y-6 justify-between items-stretch">
      {/* COPY */}
      <div className="flex flex-col justify-start items-start gap-y-6 lg:w-1/2">
        <h3 className="text-black text-2xl tracking-wider font-bold">
          {props.title.toUpperCase()}
        </h3>
        <div className="bg-black bg-opacity-5 min-h-8 px-4 py-2 flex flex-row justify-center items-center rounded-md drop-shadow-md">
          <p className="text-blue-700">{props.duration}</p>
        </div>
        <div className="bg-black bg-opacity-5 min-h-8 px-4 min-h-8 py-2 flex flex-row justify-center items-center rounded-md drop-shadow-md">
          <p className="text-blue-700">{props.tech?.join(", ")}</p>
        </div>
        <div>
          <p className="text-black text-opacity-90 text-md lg:text-xl leading-relaxed line-clamp-5">
            {props.description}
          </p>
        </div>
        <ExperienceTimelineProjectButton />
      </div>

      {/* IMAGE */}

      <div className="lg:w-1/2 rounded-md bg-black bg-opacity-5 flex flex-row justify-center items-center h-96 lg:h-auto">
        <img src={props.icon ? props.icon : "/shopify.png"} />
      </div>
    </div>
  );
};
