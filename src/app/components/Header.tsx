export const Header = () => {
  return (
    <div className="w-full mb-8 flex flex-col">
      <div className="absolute top-0 left-0 right-0 transform -translate-y-32 bg-white h-96 lg:h-y14"></div>
      <div className="transform -skew-y-[8deg] bg-white h-y3  md:h-y1 lg:h-y2"></div>

      {/* Top */}
      <div
        className={`p-4 absolute top-20 left-24 right-24 lg:top-24 lg:left-32 lg:right-32 flex flex-col md:flex-row justify-start gap-14 md:gap-28`}
      >
        {/* Photo */}
        <div className="relative lg:w-48 lg:h-48 w-32 h-32 aspect-square">
          <div className=" mesh absolute top-0 bottom-0 left-0 right-0 transform -translate-y-4 -translate-x-4 rounded-full aspect-square opacity-20"></div>
          <img
            className="absolute top-0 bottom-0 left-0 right-0 drop-shadow-md rounded-full aspect-square object-cover "
            src="/avatar.jpg"
          />
        </div>

        {/* Name */}
        <div className="mb-36 flex justify-center z-10 lg:max-w-3xl">
          <h1 className="text-7xl lg:text-9xl force-line-break">{`Ethan
          Della Posta`}</h1>
        </div>
      </div>
      {/* Bio */}
      <div className="bg-white bg-opacity-10 place-self-center rounded-md transform w-6/12 p-4 backdrop-filter backdrop-blur-sm bg-opacity-40 border-white border-opacity-50 drop-shadow-xl transform -translate-y-16">
        <p className="text-lg lg:text-2xl leading-relaxed">
          Full stack web developer with strong experience in React, Next.js,
          Node.js, MySQL, and AWS. I love to dive deep into pixel pushing,
          testing backend services, and auditing data. Big fan of clean code and
          clean UIs.
        </p>
      </div>
    </div>
  );
};
