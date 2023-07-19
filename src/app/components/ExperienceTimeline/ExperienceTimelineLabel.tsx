interface TimelineLabelProps {
  title?: string;
  year?: string;
}

export const TimelineLabel = (props: TimelineLabelProps) => {
  return (
    <div className="w-full flex flex-row justify-stretch items-center gap-16">
      {props.title ? (
        <h2 className="text-white text-6xl">{props.title}</h2>
      ) : null}
      {props.year ? (
        <div className="flex flex-col w-full">
          <div className="border-b-2 border-white border-opacity-70"></div>
          <p className="text-white text-3xl place-self-end">{props.year}</p>
        </div>
      ) : null}
    </div>
  );
};
