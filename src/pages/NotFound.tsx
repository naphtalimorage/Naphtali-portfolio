import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <BackButton />
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-blue-800">404</h1>
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link 
            to="/" 
            className="block w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Go to Home Page
          </Link>
          <Link 
            to="/contact" 
            className="block w-full py-3 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
