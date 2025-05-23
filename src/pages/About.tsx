import React from 'react';
import BackButton from '../components/BackButton';

const About: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <BackButton />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-800">About Me</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Who I Am</h2>
          <p className="mb-4 text-gray-700">
            Hello! I'm Naphtali, a passionate developer with a strong background in web development and software engineering.
            I specialize in creating modern, responsive, and user-friendly web applications using the latest technologies.
          </p>
          <p className="mb-4 text-gray-700">
            With several years of experience in the industry, I've had the opportunity to work on a variety of projects,
            from small business websites to complex enterprise applications. My goal is always to deliver high-quality,
            maintainable code that solves real-world problems.
          </p>
          <p className="text-gray-700">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or sharing my knowledge through blog posts and community events.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Education & Certifications</h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium text-blue-600">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">University Name, 2015-2019</p>
            <p className="text-gray-700 mt-2">
              Focused on software engineering, web development, and data structures & algorithms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-blue-600">Certifications</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>AWS Certified Developer - Associate</li>
              <li>Microsoft Certified: Azure Developer Associate</li>
              <li>React Developer Certification</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Professional Experience</h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-blue-600">Senior Frontend Developer</h3>
            <p className="text-gray-600">Company Name, 2021-Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Lead the development of the company's flagship web application using React and TypeScript</li>
              <li>Implemented responsive design principles to ensure optimal user experience across all devices</li>
              <li>Collaborated with UX/UI designers to create intuitive and accessible interfaces</li>
              <li>Mentored junior developers and conducted code reviews to maintain code quality</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-blue-600">Web Developer</h3>
            <p className="text-gray-600">Previous Company, 2019-2021</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Developed and maintained multiple client websites using modern JavaScript frameworks</li>
              <li>Integrated third-party APIs and services to enhance website functionality</li>
              <li>Optimized website performance and implemented SEO best practices</li>
              <li>Participated in agile development processes, including daily stand-ups and sprint planning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
