import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 mt-12 border-t border-primary-200 dark:border-primary-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-600 dark:text-primary-400 text-sm">
            © {currentYear} FAN, Sixing
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-250"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-250"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;