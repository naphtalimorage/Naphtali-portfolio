import React from 'react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-800">Welcome to Naphtali's Portfolio</h1>
        
        <p className="text-xl mb-8 text-gray-700">
          Explore my work, skills, and professional journey
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <Link to="/home" className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Home</h2>
            <p className="text-gray-600">Overview of my portfolio</p>
          </Link>
          
          <Link to="/about" className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">About</h2>
            <p className="text-gray-600">Learn more about me</p>
          </Link>
          
          <Link to="/services" className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Services</h2>
            <p className="text-gray-600">What I can offer</p>
          </Link>
          
          <Link to="/case-studies" className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Skills</h2>
            <p className="text-gray-600">My technical expertise</p>
          </Link>
          
          <Link to="/blog" className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Projects</h2>
            <p className="text-gray-600">Showcase of my work</p>
          </Link>
          
          <Link to="/contact" className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Contact</h2>
            <p className="text-gray-600">Get in touch with me</p>
          </Link>
        </div>
        
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" className="text-blue-600 hover:text-blue-800">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
          <a href="mailto:your-email@example.com" className="text-blue-600 hover:text-blue-800">Email</a>
        </div>
      </div>
    </div>
  );
};

export default Index;