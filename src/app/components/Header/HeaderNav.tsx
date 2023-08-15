export function HeaderNav() {
  return (
    <div className="absolute flex flex-col items-end justify-around h-40 lg:h-48 -right-5 md:-right-18 xl:-right-32">
      <a
        href="#skills"
        className={` text-xl flex items-center justify-center h-8 text-center text-blue-700 align-middle duration-200 cursor-pointer hover:bg-transparent hover:border-b-2 hover:border-orange-700`}
      >
        Skills
      </a>
      <a
        href="#experience"
        className={`text-xl flex items-center justify-center h-8 text-center text-blue-700 align-middle duration-200 cursor-pointer hover:bg-transparent border-b-2 border-transparent hover:border-orange-700`}
      >
        Experience
      </a>
      <a
        href="#sideprojects"
        className={`text-xl flex items-center justify-center h-8 text-center  text-blue-700 align-middle duration-200 cursor-pointer hover:bg-transparent hover:border-b-2 hover:border-orange-700`}
      >
        Side Projects
      </a>
      <a
        href="#contactme"
        className={`text-xl flex items-center justify-center h-8 text-center text-blue-700 align-middle duration-200 cursor-pointer hover:bg-transparent hover:border-b-2 hover:border-orange-700`}
      >
        Contact Me
      </a>
    </div>
  );
}
