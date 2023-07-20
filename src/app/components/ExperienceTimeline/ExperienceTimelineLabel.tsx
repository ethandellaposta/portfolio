interface TimelineLabelProps {
  title?: string;
  year?: string;
  role?: string;
  mesh?: boolean;
  color?: "white" | "black";
}

export const ExperienceTimelineLabel = (props: TimelineLabelProps) => {
  return (
    <div className="w-full flex flex-row justify-stretch items-center  px-8 md:px-36 lg:px-60 pt-20 pb-8">
      {props.title ? (
        <div className="flex flex-col items-start">
          <h2 style={{ color: props.color }} className="text-6xl">
            {props.title}
          </h2>
          {props.role ? (
            <p
              style={{ color: props.color }}
              className="text-lg opacity-50 whitespace-nowrap font-extralight mt-4"
            >
              {props.role}
            </p>
          ) : null}
        </div>
      ) : null}
      {props.year ? (
        <div className="flex flex-col w-full space-y-2">
          <div
            style={{ borderColor: props.color, opacity: 0.2 }}
            className="border-b-2"
          ></div>
          <p
            style={{ color: props.color }}
            className=" text-3xl place-self-end opacity-80"
          >
            {props.year}
          </p>
        </div>
      ) : null}
    </div>
  );
};
