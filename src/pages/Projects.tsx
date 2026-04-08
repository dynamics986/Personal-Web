import React, { useState } from 'react';
import PageTitle from '../components/common/PageTitle';
import Card from '../components/common/Card';
import Section from '../components/common/Section';
import { Github as GitHub, ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'other';
}

const projects: Project[] = [
  {
    id: '1',
    title: 'C programming',
    description: 'This repository contains my exploration of C programming, organized into different branches based on complexity and purpose.',
    image: 'https://public.ysjf.com/product/preview/cT9mqPVWS6.jpg',
    technologies: ['C', 'Data Structures', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    githubUrl: 'https://github.com/dynamics986/C-Basics',
    category: 'Logic Training'
  },
  {
    id: '2',
    title: 'Weather Application',
    description: 'A sleek mobile weather app with location-based forecasts, hourly updates, and beautiful visualizations of weather patterns.',
    image: 'https://public.ysjf.com/product/preview/JJWze1I5l6.jpg',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Weather API'],
    githubUrl: 'https://github.com',
    category: 'mobile'
  },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <>
      <PageTitle 
        title="Projects" 
        subtitle="A collection of my recent work and personal projects"
      />
      
      <Section>
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-primary-100 dark:bg-primary-800 p-1 rounded-lg">
            {['all', 'web', 'mobile', 'other'].map((filter) => (
              <button
                key={filter}
                className={clsx(
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-250',
                  activeFilter === filter
                    ? 'bg-white dark:bg-primary-700 text-primary-900 dark:text-primary-50 shadow-sm'
                    : 'text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-primary-50'
                )}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </Section>
    </>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
      }}
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="h-48 overflow-hidden rounded-t-lg -mx-6 -mt-6 mb-4 relative group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-4">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-accent-100 transition-colors duration-250"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GitHub size={20} className="text-primary-900" />
              </a>
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full hover:bg-accent-100 transition-colors duration-250"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink size={20} className="text-primary-900" />
                </a>
              )}
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-50 mb-2">
          {project.title}
        </h3>
        
        <p className="text-primary-600 dark:text-primary-300 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <Code size={16} className="text-accent-500 mr-1" />
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="text-xs bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Projects;