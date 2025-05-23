import React from 'react';
import BackButton from '../components/BackButton';

const Projects: React.FC = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes product management, shopping cart, payment processing, and order tracking.",
      image: "placeholder",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      demoLink: "https://example.com/demo1",
      codeLink: "https://github.com/username/project1",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Appointment System",
      description: "A web application for healthcare providers to manage patient appointments. Features include scheduling, reminders, and integration with electronic health records.",
      image: "placeholder",
      tags: ["React", "TypeScript", "Express", "PostgreSQL", "Twilio API"],
      demoLink: "https://example.com/demo2",
      codeLink: "https://github.com/username/project2",
      featured: true
    },
    {
      id: 3,
      title: "Personal Finance Dashboard",
      description: "A dashboard for tracking personal finances, including expense categorization, budget planning, and visualization of spending patterns.",
      image: "placeholder",
      tags: ["React", "D3.js", "Firebase", "Material UI"],
      demoLink: "https://example.com/demo3",
      codeLink: "https://github.com/username/project3",
      featured: false
    },
    {
      id: 4,
      title: "Real-time Chat Application",
      description: "A real-time messaging application with features like user authentication, private messaging, group chats, and file sharing.",
      image: "placeholder",
      tags: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
      demoLink: "https://example.com/demo4",
      codeLink: "https://github.com/username/project4",
      featured: false
    },
    {
      id: 5,
      title: "Task Management System",
      description: "A project management tool for teams to track tasks, assign responsibilities, set deadlines, and monitor progress.",
      image: "placeholder",
      tags: ["React", "Redux", "Node.js", "MongoDB", "Docker"],
      demoLink: "https://example.com/demo5",
      codeLink: "https://github.com/username/project5",
      featured: false
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "A weather application that provides current conditions and forecasts based on location. Includes interactive maps and severe weather alerts.",
      image: "placeholder",
      tags: ["React", "OpenWeather API", "Leaflet", "PWA"],
      demoLink: "https://example.com/demo6",
      codeLink: "https://github.com/username/project6",
      featured: false
    }
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn how to structure your React applications for scalability and maintainability as they grow in size and complexity.",
      date: "June 15, 2023",
      readTime: "8 min read",
      category: "React"
    },
    {
      id: 2,
      title: "TypeScript Best Practices for Frontend Developers",
      excerpt: "Discover the best practices for using TypeScript in your frontend projects to improve code quality and developer experience.",
      date: "May 22, 2023",
      readTime: "10 min read",
      category: "TypeScript"
    },
    {
      id: 3,
      title: "Optimizing Performance in React Applications",
      excerpt: "Practical techniques to improve the performance of your React applications, from code splitting to memoization.",
      date: "April 10, 2023",
      readTime: "12 min read",
      category: "Performance"
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <BackButton />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-blue-800">My Projects</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Here's a collection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-blue-700">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map(project => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500 italic">Project Image Placeholder</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoLink} 
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-blue-700">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map(project => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500 italic">Project Image Placeholder</p>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-blue-700">{project.title}</h3>
                  <p className="text-gray-700 mb-3 text-sm line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <a 
                      href={project.demoLink} 
                      className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="px-3 py-1 border border-blue-600 text-blue-600 text-sm rounded-md hover:bg-blue-50 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-blue-700">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">{post.category}</span>
                    <span className="text-gray-500 text-sm ml-3">{post.date}</span>
                    <span className="text-gray-500 text-sm ml-auto">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-700">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <a 
                    href={`/blog/${post.id}`} 
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a 
              href="/blog" 
              className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              View All Blog Posts
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
