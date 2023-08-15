interface SectionHeaderProps {
  title: string;
}

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className="flex flex-row justify-center mt-48 place-self-end">
      <div className="relative">
        <div className="absolute w-3/4 h-6 bg-orange-700 rounded-md shadow-xl bg-opacity-20 -top-2 -left-5 z-5"></div>

        <div className="z-10 text-2xl text-center text-blue-700">
          {props.title.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
