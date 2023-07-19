import { ExperienceTimelineLabel } from "./ExperienceTimelineLabel";
import { ExperienceTimelineProject } from "./ExperienceTimelineProject";

// top-16 left-20 right-20 md:top-20 md:left-24 md:right-24 lg:top-24 lg:left-32 lg:right-32
export const ExperienceTimeline = () => {
  return (
    <div className="relative">
      <div className="absolute -top-80 pb-60 pt-64 px-8 md:px-20 lg:px-24 flex flex-col space-y-12 md:space-y-24 mesh overflow-hidden">
        <div className="mesh-grain-img"></div>

        <ExperienceTimelineLabel
          title="Yumi"
          year="2023"
          role="Full Stack Software Engineer"
        />

        <ExperienceTimelineProject
          title="Shopify migration"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="12 months"
          icon="/shopify.png"
          tech={[
            "Shopify",
            "Next.js",
            "Node.js",
            "MySQL",
            "AWS CloudWatch Events",
          ]}
        />

        <ExperienceTimelineLabel year="2022" />

        <ExperienceTimelineProject
          title="Product shipping permutations"
          icon="/boxes.png"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="1 month"
          tech={["Feathers.js", "MySQL"]}
        />

        <ExperienceTimelineProject
          title="Ecommerce platform"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="6 months"
          tech={["Feathers.js", "Next.js", "MySQL", "AWS"]}
        />

        <ExperienceTimelineProject
          title="Backend architecture remodel"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="6 months"
          tech={["Stripe", "Feathers.js", "MySQL", "AWS"]}
        />

        <ExperienceTimelineProject
          title="SSH command line tool"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="1 week"
          tech={["NPM", "Node.js", "AWS SDK"]}
        />

        <ExperienceTimelineLabel
          title="Acquia"
          year="2021"
          role="Associate Software Engineer"
        />

        <ExperienceTimelineProject
          title="Go REST API"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="3 months"
          tech={["Go", "MySQL", "Docker"]}
        />

        <ExperienceTimelineProject
          title="Unified UI Monorepo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="3 months"
          tech={[
            "React",
            "NestJS",
            "Drupal",
            "MySQL",
            "GraphQL",
            "Nx",
            "AWS",
            "Kubernetes",
          ]}
        />

        <ExperienceTimelineLabel year="2020" />

        <ExperienceTimelineLabel
          title="Urspace"
          role="Full Stack Software Engineer • Part-time"
        />

        <ExperienceTimelineProject
          title="Portfolio site hosting"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="3 months"
          tech={["Next.js", "Express.js", "AWS"]}
        />

        <ExperienceTimelineLabel year="2019" />

        <ExperienceTimelineProject
          title="Dashboard editor"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="3 months"
          tech={["Next.js", "Express.js", "AWS"]}
        />

        <ExperienceTimelineLabel title="SRC" role="Software Engineer Intern" />

        <ExperienceTimelineProject
          title="Radar data machine learning"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="3 months"
          tech={["Python", "Keras", "Matplotlib", "Pandas", "Numpy"]}
        />

        <ExperienceTimelineLabel
          title="Blueprint"
          role="Mobile App Developer • Side Project"
        />

        <ExperienceTimelineProject
          title="RIT student accelerator"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="4 months"
          tech={["Customer Research", "Business Model Canvas", "Pitch Deck"]}
        />

        <ExperienceTimelineProject
          title="Mobile app"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="9 months"
          tech={["React Native", "Express.js", "MongoDB", "AWS"]}
        />

        <ExperienceTimelineLabel
          title="LenelS2"
          year="2018"
          role="Software Engineer Co-op"
        />

        <ExperienceTimelineProject
          title="Access control dashboard"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="4 months"
          tech={["React", "Redux", "Express.js", "Azure"]}
        />

        <ExperienceTimelineLabel title="SRC" role="Software Engineer Intern" />

        <ExperienceTimelineProject
          title="Jira plugins"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
          pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor."
          duration="3 months"
          tech={["Java", "Spring", "Jira API"]}
        />
      </div>
    </div>
  );
};
