import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-6">Naphtali's Portfolio</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            Hello! I'm a passionate developer with expertise in modern web technologies.
            This portfolio showcases my projects and skills.
          </p>
          <p>
            Feel free to explore my work and get in touch if you'd like to collaborate!
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-3 border rounded">React</div>
            <div className="p-3 border rounded">TypeScript</div>
            <div className="p-3 border rounded">JavaScript</div>
            <div className="p-3 border rounded">HTML/CSS</div>
            <div className="p-3 border rounded">Tailwind CSS</div>
            <div className="p-3 border rounded">Node.js</div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="space-y-6">
            <div className="p-4 border rounded">
              <h3 className="text-xl font-medium mb-2">Project 1</h3>
              <p className="mb-2">Description of your first project goes here.</p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded">View Demo</button>
                <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded">GitHub</button>
              </div>
            </div>
            
            <div className="p-4 border rounded">
              <h3 className="text-xl font-medium mb-2">Project 2</h3>
              <p className="mb-2">Description of your second project goes here.</p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded">View Demo</button>
                <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded">GitHub</button>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <p className="mb-4">
            I'm always open to new opportunities and collaborations.
          </p>
          <div className="flex space-x-4">
            <a href="mailto:your-email@example.com" className="px-4 py-2 bg-blue-500 text-white rounded">Email Me</a>
            <a href="https://linkedin.com/in/yourprofile" className="px-4 py-2 border border-blue-500 text-blue-500 rounded">LinkedIn</a>
            <a href="https://github.com/yourusername" className="px-4 py-2 border border-blue-500 text-blue-500 rounded">GitHub</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;