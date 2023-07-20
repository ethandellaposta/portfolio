import { ExperienceTimelineLabel } from "./ExperienceTimelineLabel";

export const ExperienceTimelineBackgroundMesh = () => {
  return (
    <div className="relative mesh skew pt-40 pb-12">
      <div className="mesh-grain-img"></div>
      <div className="skew-reverse">
        {" "}
        <ExperienceTimelineLabel
          title="Yumi"
          year="2023"
          role="Full Stack Software Engineer"
          color="white"
        />
      </div>
    </div>
  );
};
