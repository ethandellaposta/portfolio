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
    <div className="flex flex-col space-y-8  bg-white bg-opacity-5 backdrop-blur-sm p-8 pt-5 rounded-md drop-shadow-md drop-shadow">
      <h3 className="text-white text-2xl">{props.title}</h3>
      <div className="flex flex-col lg:flex-row justify-start space-y-8 lg:space-x-8">
        <div className=" w-40 h-40 rounded-md bg-white bg-opacity-5 flex flex-row justify-center items-center aspect-square">
          <img
            className="opacity-20 w-1/2"
            src={props.icon ? props.icon : "/shopify.png"}
          />
        </div>
        <div className="flex flex-col justify-end items-start space-y-4">
          <div className="bg-white bg-opacity-5 min-h-8 px-4 py-2 flex flex-row justify-center items-center rounded-md">
            <p className="text-white opacity-50">{props.duration}</p>
          </div>
          <div className="bg-white bg-opacity-5 min-h-8 px-4 min-h-8 py-2 flex flex-row justify-center items-center rounded-md">
            <p className="text-white opacity-50">{props.tech?.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center bg-white bg-opacity-5 p-4 rounded-md">
        <p className="text-white text-opacity-90 text-md lg:text-xl leading-relaxed">
          {props.description}
        </p>
      </div>
    </div>
  );
};
