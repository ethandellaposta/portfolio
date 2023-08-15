export const SlantedBackground = function (props: {
  children?: React.ReactNode;
  reverse?: boolean;
  className: "mesh" | "off-white" | "blue" | "purple";
}) {
  return (
    <div className={`relative skew${props.reverse ? "-opposite" : ""}`}>
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <canvas
          className={`w-full h-full ${props.className} ${
            props.className === "mesh"
              ? "blur-0"
              : props.className === "purple"
              ? "blur-2xl"
              : "blur-sm"
          }`}
        />
      </div>
      {props.className === "mesh" && (
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 mesh-grain-img blur-3xl`}
        ></div>
      )}
      <div className={`skew${props.reverse ? "" : "-reverse"} `}>
        {" "}
        {props.children}
      </div>
    </div>
  );
};
