import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section id={id} className={clsx('py-12', className)}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;