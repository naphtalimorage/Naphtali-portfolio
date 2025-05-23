# Naphtali's Portfolio

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![Vite](https://img.shields.io/badge/Vite-6.3-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, responsive portfolio website built with React 19, TypeScript, and Tailwind CSS to showcase professional work, skills, and experience.

## Overview
This is my personal portfolio website built with modern web technologies to showcase my skills, projects, and professional experience. The site is designed to be responsive, fast, and visually appealing while highlighting my work and capabilities.

## Technologies Used
- **React 19** - Frontend library for building the user interface
- **TypeScript** - For type safety and better developer experience
- **Vite** - Fast build tool and development server
- **React Router v7** - For navigation between different sections
- **Tailwind CSS v4** - For styling and responsive design
- **Radix UI** - For accessible UI components

## Features
- Responsive design that works on all devices
- Modern UI with Tailwind CSS and Radix UI components
- Project showcase with descriptions and links
- Skills and technologies section
- About me and contact information
- Interactive UI elements
- Fast performance with Vite and React 19

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository
   ```
   git clone https://github.com/Naphtali/naphtali-portfolio.git
   cd naphtali-portfolio
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production
```
npm run build
# or
yarn build
```

## Deployment
This portfolio can be deployed to various hosting platforms:

### Vercel or Netlify (Recommended)
1. Connect your GitHub repository to Vercel or Netlify
2. Configure the build settings:
   - Build command: `npm run build` or `yarn build`
   - Output directory: `dist`
3. Deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## Project Structure
- `src/` - Source code
  - `components/` - Reusable UI components
  - `pages/` - Main page components
  - `assets/` - Static assets like images
  - `lib/` - Utility functions and shared code
  - `index.css` - Main stylesheet with Tailwind CSS

## Future Enhancements
- Blog section
- Dark/Light theme toggle
- Animations and transitions
- Integration with a CMS for easier content updates

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a Pull Request

Please make sure your code follows the project's coding standards and includes appropriate tests.

## License
This project is open source and available under the [MIT License](LICENSE).

## Contact
Feel free to reach out to me at [naphtali@example.com](mailto:naphtali@example.com) or connect with me on [LinkedIn](https://linkedin.com/in/naphtali).

<!-- 
Note to repository owner: 
Please update the contact information above with your actual email and LinkedIn profile URL before publishing.
-->
