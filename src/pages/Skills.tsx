import { RiVerifiedBadgeLine } from "react-icons/ri";
import AnimatedSection from "@/components/AnimatedSection.tsx";
// import BackButton from '../components/BackButton';

const Skills: React.FC = () => {
  // Define skill categories and their items
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { icon: <RiVerifiedBadgeLine/>, name: "React", level: "Advenced" },
        { icon: <RiVerifiedBadgeLine/>,name: "TypeScript",  level: "Intermediate" },
        { icon: <RiVerifiedBadgeLine/>,name: "JavaScript", level: "Advanced"  },
        { icon: <RiVerifiedBadgeLine/>,name: "HTML/CSS", level: "Advance" },
        { icon: <RiVerifiedBadgeLine/>,name: "Tailwind CSS", level: "Intermediate"  },
        { icon: <RiVerifiedBadgeLine/>,name: "Redux", level: "Intermediate"  },
      ]
    },
    {
      name: "Backend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        { icon: <RiVerifiedBadgeLine/>,name: "Node.js", level: "Intermediate"  },
        { icon: <RiVerifiedBadgeLine/>,name: "Express", level: "Intermediate" },
        { icon: <RiVerifiedBadgeLine/>,name: "Python", level: "Basic" },
        { icon: <RiVerifiedBadgeLine/>,name: "Django",level: "Basic" },
        { icon: <RiVerifiedBadgeLine/>,name: "GraphQL", level: "Basic" },
        { icon: <RiVerifiedBadgeLine/>,name: "RESTful APIs", level: "Intermediate" },
      ]
    },
    {
      name: "Database & DevOps",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: [
        { icon: <RiVerifiedBadgeLine/>,name: "MongoDB", level: "Basic" },
        { icon: <RiVerifiedBadgeLine/>,name: "PostgreSQL", level: "Basic" },
        {icon: <RiVerifiedBadgeLine/>, name: "AWS", level: "Basic" },
        { icon: <RiVerifiedBadgeLine/>,name: "CI/CD", level: "Intermediate" },
        { icon: <RiVerifiedBadgeLine/>,name: "Git", level: "Intermediate" },
      ]
    },
  ];

  // Function to render skill bar
  const renderSkillBar = (name: string, icon: React.ReactNode, level: string ) => (
    <div key={name} className="flex flex-col mb-1">
      <div className="flex flex-row items-center gap-3 ">
        <span className="text-base font-medium text-gray-700">{name}</span>
        <span>{icon}</span>
      </div>
      <span className="text-gray-700 text-sm pl-7">{level}</span>
    </div>
  );

  return (
    <section id={ "skills"}>
      <div className="min-h-screen py-10 bg-gray-50 ">
        <div className="max-w-5xl mx-auto  items-center justify-center ">
          <AnimatedSection animation={"slideUp"} delay={100}>
            <h1 className=" text-center text-3xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb- sm:mb-2">
              Skills & Expertise
            </h1>
            <p className="text-sm text-gray-700 text-center mb-12">
              My Technical Level
            </p>
          </AnimatedSection>

          {/* Skills Categories */}
          <AnimatedSection animation="slideUp" delay={200}>
            <div className="flex gap-10 mb-16 justify-center items-center ">
              {skillCategories.map((category) => (
                  <div key={category.name} className="bg-white p-6 rounded-2xl shadow-md w-full">
                    <div className="flex flex-col items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        {category.icon}
                      </div>
                      <h2 className="text-lg font-semibold ">{category.name}</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
                      {category.skills.map(skill =>
                          renderSkillBar(skill.icon,skill.name, skill.level))}
                    </div>
                  </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

    </section>
  );
};

export default Skills;

//
