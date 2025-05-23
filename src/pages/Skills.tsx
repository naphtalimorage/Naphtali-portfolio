import React from 'react';

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
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Redux", level: 80 },
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
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "Django", level: 70 },
        { name: "GraphQL", level: 75 },
        { name: "RESTful APIs", level: 90 },
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
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 70 },
        { name: "Git", level: 90 },
      ]
    },
    {
      name: "Mobile Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 60 },
        { name: "iOS Development", level: 50 },
        { name: "Android Development", level: 55 },
        { name: "Mobile UI Design", level: 75 },
      ]
    }
  ];

  // Function to render skill bar
  const renderSkillBar = (name: string, level: number) => (
    <div key={name} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-blue-600" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-800 text-center">My Skills & Expertise</h1>
        <p className="text-xl text-gray-700 text-center mb-12">
          I've developed a diverse set of skills throughout my career. Here's an overview of my technical expertise.
        </p>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold text-blue-700">{category.name}</h2>
              </div>
              <div>
                {category.skills.map(skill => renderSkillBar(skill.name, skill.level))}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">Case Studies</h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          Here are some examples of how I've applied my skills to solve real-world problems.
        </p>

        <div className="space-y-12">
          {/* Case Study 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">E-commerce Platform Redesign</h3>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 pr-0 md:pr-6 mb-6 md:mb-0">
                <p className="text-gray-700 mb-4">
                  Redesigned and rebuilt an e-commerce platform for a retail client, resulting in a 40% increase in conversion rate and 25% reduction in cart abandonment.
                </p>
                <h4 className="font-semibold text-blue-600 mb-2">Challenges:</h4>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Outdated user interface with poor mobile experience</li>
                  <li>Slow page load times affecting SEO and user experience</li>
                  <li>Complex checkout process leading to cart abandonment</li>
                </ul>
                <h4 className="font-semibold text-blue-600 mb-2">Solutions:</h4>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Implemented responsive design with Tailwind CSS</li>
                  <li>Rebuilt frontend with React for improved performance</li>
                  <li>Simplified checkout to a 3-step process</li>
                  <li>Added real-time inventory and shipping calculations</li>
                </ul>
                <h4 className="font-semibold text-blue-600 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Stripe API</span>
                </div>
              </div>
              <div className="md:w-1/3 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-gray-500 italic">Project Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Healthcare Appointment System</h3>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 pr-0 md:pr-6 mb-6 md:mb-0">
                <p className="text-gray-700 mb-4">
                  Developed a healthcare appointment scheduling system that reduced administrative workload by 60% and improved patient satisfaction scores by 35%.
                </p>
                <h4 className="font-semibold text-blue-600 mb-2">Challenges:</h4>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Manual appointment booking process prone to errors</li>
                  <li>No integration with existing patient records system</li>
                  <li>Limited visibility of doctor availability</li>
                </ul>
                <h4 className="font-semibold text-blue-600 mb-2">Solutions:</h4>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Created an intuitive booking interface for patients and staff</li>
                  <li>Implemented real-time calendar synchronization</li>
                  <li>Built secure API integration with electronic health records</li>
                  <li>Added automated reminders via email and SMS</li>
                </ul>
                <h4 className="font-semibold text-blue-600 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Express.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Twilio API</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">OAuth 2.0</span>
                </div>
              </div>
              <div className="md:w-1/3 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-gray-500 italic">Project Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;