import { TimelineLabel } from "./ExperienceTimelineLabel";
import { Project } from "./ExperienceTimelineProject";

export const ExperienceTimeline = () => {
  return (
    <div className="p-20 lg:p-32 flex flex-col space-y-24">
      <TimelineLabel title="Yumi" year="2022" />

      <Project
        title="Stripe to Shopify migration"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
        duration="3 months"
      />

      <TimelineLabel year="2021" />

      <Project
        title="Product shipping permutations"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
        duration="1 month"
      />

      <TimelineLabel title="Acquia" year="2020" />

      <Project
        title="Unified UI POC"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
        duration="1 month"
      />

      <TimelineLabel title="Urspace" />

      <Project
        title="Portfolio site"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
        duration="1 month"
      />

      <TimelineLabel year="2019" />

      <Project
        title="Dashboard editor"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
        duration="1 month"
      />

      <TimelineLabel title="SRC" />

      <Project
        title="Radar data labeling"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
        duration="1 month"
      />

      <TimelineLabel title="LenelS2" year="2018" />

      <Project
        title="Access control dashboard"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
        duration="1 month"
      />

      <TimelineLabel title="SRC" />

      <Project
        title="Jira plugins"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
        duration="1 month"
      />
    </div>
  );
};
