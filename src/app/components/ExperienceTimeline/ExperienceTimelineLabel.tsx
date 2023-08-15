interface TimelineLabelProps {
  company?: string;
  year?: number;
  role?: string;
  mesh?: boolean;
  color?: "white" | "black" | undefined;
}

export const ExperienceTimelineLabel = function (props: TimelineLabelProps) {
  return (
    <div className="flex flex-row items-center w-full pt-24 pb-24 justify-stretch">
      {props.company ? (
        <div className="flex flex-col items-start ">
          <h2 style={{ color: props.color }} className="text-6xl">
            {props.company}
          </h2>
          {props.role ? (
            <p
              style={{ color: props.color }}
              className="mt-4 text-lg opacity-50 whitespace-nowrap font-extralight"
            >
              {props.role}
            </p>
          ) : null}
        </div>
      ) : null}
      {props.year ? (
        <div className="flex flex-col w-full space-y-2 ">
          <div
            style={{ borderColor: props.color, opacity: 0.2 }}
            className="border-b-2 rounded-full"
          ></div>
          <p
            style={{ color: props.color }}
            className="text-3xl place-self-end opacity-80"
          >
            {props.year}
          </p>
        </div>
      ) : null}
    </div>
  );
};
