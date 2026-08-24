import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 mt-12 border-t border-primary-200 dark:border-primary-800">
      <div className="container-custom">
        <div className="flex justify-center text-center">
          <p className="text-primary-600 dark:text-primary-400 text-sm">
            © {currentYear} FAN, Sixing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
