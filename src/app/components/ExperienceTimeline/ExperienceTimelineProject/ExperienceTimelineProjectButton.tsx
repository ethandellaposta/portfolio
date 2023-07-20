export const ExperienceTimelineProjectButton = () => {
  return (
    <a
      href="#_"
      className="relative px-6 py-3 font-bold text-white rounded-lg group"
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-gradient-purple ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>

      <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-blue-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-normal"></span>

      <p className="relative">LEARN MORE</p>
    </a>
  );
};
