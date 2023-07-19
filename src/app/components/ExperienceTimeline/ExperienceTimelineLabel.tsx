interface TimelineLabelProps {
  title?: string;
  year?: string;
  role?: string;
}

export const ExperienceTimelineLabel = (props: TimelineLabelProps) => {
  return (
    <div className="w-full flex flex-row justify-stretch items-center gap-16">
      {props.title ? (
        <div className="flex flex-col items-start ">
          <h2 className="text-white text-6xl">{props.title}</h2>
          {props.role ? (
            <p className="text-white text-lg opacity-50 whitespace-nowrap font-extralight mt-4">
              {props.role}
            </p>
          ) : null}
        </div>
      ) : null}
      {props.year ? (
        <div className="flex flex-col w-full space-y-2">
          <div className="border-b-2 border-white border-opacity-20"></div>
          <p className="text-white text-3xl place-self-end opacity-80">
            {props.year}
          </p>
        </div>
      ) : null}
    </div>
  );
};
