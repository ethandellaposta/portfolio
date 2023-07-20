export const Header = () => {
  return (
    <div className=" w-full mb-24 flex flex-col z-10">
      {/* Top */}
      <div className="p-4 pt-16 px-20 md:pt-20 md:px-24 lg:pt-24 lg:px-32 flex flex-col md:flex-row justify-start gap-14 md:gap-28">
        {/* Photo */}
        <div className="relative lg:w-48 lg:h-4 w-40 h-40 aspect-square">
          <div className=" mesh absolute top-0 bottom-0 left-0 right-0 transform -translate-y-4 -translate-x-4 rounded-full aspect-square opacity-40"></div>
          <img
            className="absolute top-0 bottom-0 left-0 right-0 drop-shadow-md rounded-full aspect-square object-cover"
            src="/avatar.jpg"
          />
        </div>

        <div className="flex flex-col items-start">
          {/* Name */}
          <div className="flex justify-center lg:max-w-3xl">
            <h1 className="text-7xl sm:text-8xl md:text-9xl force-line-break">{`Ethan
Della Posta`}</h1>
          </div>

          {/* Bio */}
          <div className="rounded-md">
            <p className="text-xl md:text-3xl">
              Full stack web developer. Pixel pusher. I like to build things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
