import { HeaderNav } from "./HeaderNav";

export const Header = function () {
  return (
    <div id="header" className="relative z-10 flex flex-col w-full">
      {/* Top */}
      <div className="flex flex-col justify-start md:pt-20 lg:pt-24 lg:flex-row gap-14 md:gap-28">
        {/* Photo */}
        <HeaderNav />
        <img
          className="object-cover w-40 h-40 duration-200 rounded-full drop-shadow-md lg:w-48 lg:h-48 aspect-square"
          src="avatar.jpg"
        />

        <div className="flex flex-col items-start gap-8">
          {/* Name */}
          <div id="name" className="flex justify-center lg:max-w-3xl">
            <h1 className="text-7xl sm:text-8xl md:text-9xl force-line-break">{`Ethan
Della Posta`}</h1>
          </div>

          {/* Bio */}
          <div id="header-bullets" className="rounded-md">
            <p className="text-xl md:text-3xl">
              Full stack software engineer • Persistent pixel pusher •
              Determined data wrangler
            </p>
          </div>

          <svg
            width="492"
            height="367"
            viewBox="0 0 492 367"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1">
              <rect
                id="rect-tr"
                x="179"
                y="47"
                width="268"
                height="71"
                rx="14"
                fill="black"
                fill-opacity="0.10"
              />
              <circle
                id="ellipse"
                cx="80.5"
                cy="82.5"
                r="35.5"
                fill="black"
                fill-opacity="0.24"
              />
              <rect
                id="rect-bl"
                x="45"
                y="167"
                width="140"
                height="151"
                rx="14"
                fill="black"
                fill-opacity="0.12"
              />
              <rect
                id="Rectangle 3"
                x="231"
                y="167"
                width="216"
                height="151"
                rx="14"
                fill="black"
                fill-opacity="0.04"
              />
              <g id="rect" filter="url(#filter0_d_2_8)">
                <rect
                  x="4"
                  width="484"
                  height="359"
                  rx="16"
                  fill="black"
                  fill-opacity="0.1"
                  shape-rendering="crispEdges"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
