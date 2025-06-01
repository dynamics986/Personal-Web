import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, children }) => {
  return (
    <motion.div 
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-primary-50 mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-secondary-500 dark:text-secondary-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
};

export default PageTitle;