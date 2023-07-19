interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  duration: string;
  tech?: string[];
}

export const Project = (props: ProjectProps) => {
  return (
    <div className="flex flex-col space-y-8">
      <h3 className="text-white text-2xl">{props.title}</h3>
      <div className="flex flex-row justify-start space-x-8">
        <div className="border-gray-400 border-2 w-60 h-40 rounded-md"></div>
        <div className="flex flex-col justify-end space-y-4">
          <div className="bg-white bg-opacity-10 w-32 h-8 "></div>
          <div className="bg-white bg-opacity-10 w-60 h-8"></div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center border-4 border-white border-opacity-10 border-dotted p-4 rounded-md">
        <p className="text-white text-opacity-70 text-md lg:text-xl leading-relaxed">
          {props.description}
        </p>
      </div>
    </div>
  );
};
