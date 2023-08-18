import {
  AcademicCapIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { FaqType, StatType, ValueType } from "@utils/types/aboutPage";
import React from "react";

export const stats: StatType[] = [
  {
    label: "Transactions every 24 hours",
    value: (
      <>
        <span className="text-brand-main">44</span> million
      </>
    ),
  },
  {
    label: "Assets under holding",
    value: (
      <>
        <span className="text-brand-main">$119</span> trillion
      </>
    ),
  },
  {
    label: "New users annually",
    value: (
      <>
        <span className="text-brand-main">46,000</span>
      </>
    ),
  },
];

export const values: ValueType[] = [
  {
    name: "Be world-class.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Take responsibility.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem.",
    icon: HandRaisedIcon,
  },
  {
    name: "Be supportive.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.",
    icon: UserGroupIcon,
  },
  {
    name: "Always learning.",
    description:
      "Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.",
    icon: AcademicCapIcon,
  },
  {
    name: "Share everything you know.",
    description:
      "Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.",
    icon: SparklesIcon,
  },
  {
    name: "Enjoy downtime.",
    description:
      "Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.",
    icon: SunIcon,
  },
];

export const faqs: FaqType[] = [
  {
    question: "How long will the architectural design process take?",
    answer:
      "The duration of the design process depends on the complexity and scope of the project. It can vary from a few weeks for smaller projects to several months or more for larger and more intricate designs. Our architects will provide you with a timeline tailored to your specific project during the initial consultation.",
  },
  {
    question: "What is the estimated cost of the architectural project?",
    answer:
      "The cost of an architectural project is influenced by numerous factors, including the size, complexity, and desired level of finishes. During the design development phase, we can provide you with a detailed cost estimate based on the design and materials chosen. It's important to note that additional costs may arise during the construction phase due to unforeseen circumstances or changes in design.",
  },
  {
    question:
      "How do you incorporate sustainability into your architectural designs?",
    answer:
      "We strongly believe in sustainable design practices and aim to integrate environmentally friendly strategies into our projects. This includes selecting energy-efficient materials, incorporating passive design principles to maximize natural lighting and ventilation, and considering renewable energy options. We strive to create environmentally responsible and energy-efficient spaces that minimize our impact on the environment.",
  },
  {
    question: "What permits and approvals are needed for the project?",
    answer:
      "Navigating the permit and approval process can be complex, as it varies depending on the location and the specific project. As part of our architectural services, we handle the necessary permits and approvals required for your project. We have experience working with local authorities and understanding the regulations, ensuring that your project complies with all necessary codes and requirements.",
  },
  {
    question: "How involved will I need to be during the design process?",
    answer:
      "We value your input and believe in a collaborative design process. Your involvement can vary depending on your preferences and availability. We will work closely with you to gather your ideas, vision, and feedback throughout the design process. Regular meetings and communication will ensure that your needs and expectations are met.",
  },
  {
    question: "How do you ensure the project stays within the agreed budget?",
    answer:
      "We understand the importance of adhering to the project budget. During the design process, we provide cost estimates and work closely with you to make informed decisions about materials, finishes, and design elements that align with your budget. We also monitor the construction phase and provide ongoing cost management to mitigate any potential budget overruns.",
  },
  {
    question:
      "Do you collaborate with other professionals, such as engineers and contractors?",
    answer:
      "Yes, collaboration with other professionals is crucial for the success of the project. We have established relationships with reliable engineers, contractors, and consultants, and we coordinate closely with them throughout the design and construction phases. This collaborative approach ensures that all aspects of the project are well-integrated and executed to the highest standards.",
  },
  {
    question: "How do you handle project changes or modifications?",
    answer:
      "During the design process, we understand that changes or modifications may be necessary. We maintain open lines of communication and provide opportunities for feedback and revisions. We work with you to ensure that any changes align with your vision and are incorporated seamlessly into the design while considering the impact on the project timeline and budget.",
  },
  {
    question: "What post-construction services do you provide?",
    answer:
      "Once construction is complete, we offer post-construction services, which may include walkthroughs, addressing any concerns or issues that arise, and ensuring that the final result matches the design intent. We are committed to your satisfaction and providing ongoing support to ensure your project's success.",
  },
];
