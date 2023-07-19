interface SkewedBackgroundProps {
  square_side: "top" | "bottom";
  height: string;
}

export const SkewedBackground = (props: SkewedBackgroundProps) => {
  return (
    <div className="relative z-10">
      {props.square_side === "top" ? (
        <>
          <div
            className="absolute top-0 right-0 left-0
        bg-white lg:h-y14 h-32 border-opacity-20"
          ></div>
          <div
            className="transform -skew-y-[8deg] bg-white"
            style={{ height: props.height }}
          ></div>
        </>
      ) : (
        <div className="transform -translate-y-[27rem]">
          <div
            className="absolute bottom-0 right-0 left-0
      bg-white lg:h-y14 h-32 border-black border-t border-opacity-20"
          ></div>
          <div
            className="transform -skew-y-[8deg] bg-white"
            style={{ height: props.height }}
          ></div>
        </div>
      )}
    </div>
  );
};
