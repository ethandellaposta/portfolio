type TypeProps = { type: string };

export const skills = ["AWS EC2", "AWS CodePipeline", "AWS CloudWatch", "AWS RDS", "AWS Redshift", "CircleCI", "Node.js", "Feathers.js", "MySQL", "GraphQL", "TypeScript", "React", "Next.js", "Tailwind", "Cloudinary", "Contentful", "Shopify", "Stripe", "Launch Darkly"]

export type ProjectDetailsProps = {
  type: "image" | "code" | "text" | "header" | "bullets";
  content: string | string[];
}[];


export type ProjectProps = {
  type: "project";
  title: string;
  highlights: string[];
  image?: string;
  duration: string;
  icon?: string;
  tech?: string[];
  color?: string;
  details?: ProjectDetailsProps;
} & TypeProps;

export type JobProps = {
  type: "job";
  company: string;
  position: string;
  year?: number;
  color: "black" | "white"
} & TypeProps;

export type YearProps = {
  type: "year";
  year: number;
  color: "white" | "black";
} & TypeProps;

export type ExperienceTimelineItem = ProjectProps | JobProps | YearProps;


export async function experience_timeline_items(): Promise<ExperienceTimelineItem[]> {
  return [
    {
      type: "job",
      company: "Yumi",
      position: "Full Stack Software Engineer",
      year: 2023,
      color: "black"
    },
    {
      type: "project",
      title: "Shopify migration",
      highlights: ["Migrated payment processor from Stripe to Shopify", "Developed custom Shopify subscription app with AWS CloudWatch Events and Feathers.js", "A/B Tested new Shopify checkout against old custom checkout with LaunchDarkly"],
      image: "shopify-migration.png",
      color: "#5E8E3E",
      tech: [
        "Shopify", "Next.js", "Feathers.js", "MySQL", "AWS", "CloudWatch Events"
      ],
      duration: "1 year",
      details: [
        {
          type: "header",
          content: "Overview"
        },
        {
          type: "text",
          content: "Migration from Stripe to Shopify as primary payment processor for ecommerce website. The goal was to leverage Shopify's rich feature set surrounding checkout, order management tools, and various integrations to reduce the amount of custom code we had to maintain. In the end, this was a complete backend rewrite. The frontend changes were smaller in scope and so I will spare those details."
        },

        {
          type: "text",
          content: "The goal of the project was as close to 100% feature parody as possible with the existing Stripe implementation. This included the ability to sign up for a subscription, modify a subscription, cancel a subscription, and view subscription details. It also included the ability to view and manage orders, as well as view and manage customers."
        },

        { type: "bullets", content: ["Shopify doesn't support subscriptions out of the box. ", "We would need to develop our own subscription management system that would integrate with Shopify's API."] },
        {
          type: "text",
          content: "A crucial aspect to this effort was the development of robust webhooks to handle a myriad of Shopify events. Webhooks provided a vital link between our systems and Shopify's ecosystem, allowing us to stay in sync with real-time updates and changes within the subscription and order lifecycle. We would listen for events such as new orders, new subscription sign-ups, billing attempts, plan modifications, cancellations, and more. This enabled us to seamlessly update our internal databases, trigger essential notifications, and ensure a synchronized user experience."
        },
        {
          type: "text",
          content: "For example, when a user signed up for a new baby food subscription, we would need to create an internal subscription as well like so:"
        },
        {
          type: "header",
          content: "Webhooks"
        },
        {
          type: "code",
          content:
            await fetch("/snippets/create-subscription.txt").then((res) => res.text())
        },
        {
          type: "text",
          content: "Once the initial purchase was complete and the subscription created on our end, the next thing we needed to worry about was the billing cadence. To automatically charge active subscriptions, we would need to create a weekly cron job that would create a billing attempt for every subscription that was due for payment:"
        },
        {
          type: "code",
          content:

            await fetch("/snippets/billing-attempt-job.txt").then((res) => res.text())
          ,

        },
        {
          type: "text",
          content: "A subscription billing attempt would result in either success or failure. Webhooks were registered and handlers were developed for both cases."
        },
      ]
    },
    {
      type: "year",
      year: 2022,
      color: "black"
    },
    {
      type: "project",
      title: "Product shipping permutations",
      highlights: ["Developed a service for allocating product combinations to specific boxes for shipping. This was then used to generate shipping labels used for fulfillment."],
      color: "#1d4ed8",
      tech: [
        "Feathers.js", "MySQL"
      ],
      duration: "1 month"
    },
    {
      type: "project",
      title: "Ecommerce platform",
      highlights: ["Developed and maintained custom ecommerce platform for selling our baby food subscriptions, as well as other related products. This included a custom admin dashboard for managing orders, customers, and products. It also included a custom checkout flow for customers which integrated with Stripe."],
      color: "#1d4ed8",
      tech: [
        "Stripe", "Feathers.js", "Next.js", "MySQL", "AWS"

      ],
      duration: "2 years"
    },
    {
      type: "project",
      title: "Backend architecture remodel",
      highlights: ["Remodeled the backend database model for how we represented our products, orders, and subscriptions. Developed new services and cron jobs for managing these resources."],
      color: "#1d4ed8",
      tech: [
        "Stripe", "Feathers.js", "MySQL", "AWS"
      ],
      duration: "6 months"
    },
    {
      type: "project",
      title: "SSH command line tool",
      highlights: ["Developed a command line interface for finding and connecting to EC2 instances for our various environments. This enabled developers to easily connect to our servers without having to use the AWS console."],
      color: "#1d4ed8",
      tech: [
        "NPM", "Node.js", "AWS SDK"
      ],
      duration: "1 week"
    },
    {
      type: "job",
      company: "Acquia",
      position: "Associate Software Engineer",
      year: 2021,
      color: "black"
    },
    {
      type: "project",
      title: "Go Rest API",
      highlights: ["Designed and developed Rest API for managing Drupal project configuration settings known as `templates`.  "],
      color: "#1d4ed8",
      tech: [
        "Go", "MySQL", "Docker",
        "Swagger"
      ],
      duration: "3 months"
    },
    {
      type: "project",
      title: "Unified UI monorepo",
      highlights: ["Prototyped a unified UI for accessing various SASS offerings. This involved developing a monorepo for managing multiple React apps, as well as a GraphQL API for managing the data."],
      color: "#1d4ed8",
      tech: [
        "React", "NestJS", "Drupal", "MySQL", "GraphQL", "Nx", "AWS", "Kubernetes"
      ],
      duration: "3 months"
    },
    {
      type: "job",
      company: "Urspace",
      position: "Full Stack Software Engineer • Part-time",
      color: "black",
      year: 2020
    },
    // https://coderoflagos.hashnode.dev/introduction-to-urspaceio-cklasf03h001dois1cre2fma1
    {
      type: "project",
      title: "Portfolio site hosting",
      highlights: ["Developed a dynamically rendered portfolio website that included experience, projects, and blog posts. The site was hosted on AWS and was deployed using a CI/CD pipeline."],
      color: "#1d4ed8",
      tech: [
        "Next.js", "Express.js", "AWS"
      ],
      duration: "3 months",
      image: "portfolio-site-hosting.jpg"
    },
    {
      type: "project",
      title: "Dashboard editor",
      highlights: ["Developed a dashboard editor for creating and managing job experience, projects, blog posts, generating resumes, and connecting with recruiters."],
      color: "#1d4ed8",
      tech: [
        "Next.js", "Express.js", "AWS"
      ],
      image: "dashboard-editor.jpg",
      duration: "3 months"
    }
  ]
}

/**


2019

DASHBOARD EDITOR
3 months

Next.js, Express.js, AWS
"Next.js", "Express.js", "AWS"

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor. Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.

LEARN MORE


SRC
Software Engineer Intern

RADAR DATA MACHINE LEARNING
3 months

Python, Keras, Matplotlib, Pandas, Numpy

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor. Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.

LEARN MORE


Blueprint
Mobile App Developer • Side Project

RIT STUDENT ACCELERATOR
4 months

Customer Research, Business Model Canvas, Pitch Deck

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor. Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.

LEARN MORE


MOBILE APP
9 months

React Native, Express.js, MongoDB, AWS

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor. Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.

LEARN MORE


LenelS2
Software Engineer Co-op

2018

ACCESS CONTROL DASHBOARD
4 months

React, Redux, Express.js, Azure

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor. Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.

LEARN MORE


SRC
Software Engineer Intern

JIRA PLUGINS
3 months

Java, Spring, Jira API

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor. Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus pharetra 
 */
