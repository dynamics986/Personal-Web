import React, { useState } from 'react';
import PageTitle from '../components/common/PageTitle';
import Card from '../components/common/Card';
import Section from '../components/common/Section';
import { Github as GitHub, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type ProjectCategory = 'TypeScript' | 'Python' | 'JavaScript';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  category: ProjectCategory;
}

type ProjectFilter = 'all' | ProjectCategory;

const projectFilters: ProjectFilter[] = ['all', 'Python', 'TypeScript', 'JavaScript'];

const projects: Project[] = [
  {
    id: '1',
    title: 'SSCS Optimizer',
    description: 'A complexity-aware procedural generator built on top of Infinigen, enabling controlled generation of indoor scenes with quantifiable static complexity. ',
    image: 'https://infinigen.org/img/random_sample.jpeg',
    technologies: ['Python', 'C', 'C Shell', 'Cuda', 'bpy'],
    githubUrl: 'https://github.com/dynamics986/SSCS-Optimizer',
    category: 'Python'
  },
  {
    id: '2',
    title: 'CUHK MailRoute',
    description: 'A bilingual opportunity recommendation system ranking CUHK mass emails.',
    image: '/images/projects/mailroute.png',
    technologies: ['React', 'TypeScript', 'PWA', 'Recommendation System'],
    githubUrl: 'https://dynamics986.github.io/Mass-Mail-Filter/',
    category: 'TypeScript'
  },
  {
    id: '3',
    title: 'TextPictures',
    description: 'An image-processing tool that uses adaptive HSV brightness tiers to generate high-resolution Chinese-character density mosaics.',
    image: '/images/projects/textpictures.jpg',
    technologies: ['OpenCV', 'Pillow', 'NumPy', 'Image Processing'],
    githubUrl: 'https://dynamics986.github.io/TextPictures/',
    category: 'Python'
  },
  {
    id: '4',
    title: 'Tetris Game',
    description: 'A responsive browser-based Tetris game with keyboard and touch controls, ghost and next-piece previews, scoring, levels, and a local high score.',
    image: '/images/projects/tetris-game.png',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Responsive Design'],
    githubUrl: 'https://dynamics986.github.io/Tetris-Game/',
    category: 'JavaScript'
  },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <>
      <PageTitle 
        title="Projects" 
        subtitle="A collection of Interesting Projects"
      />
      
      <Section>
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-primary-100 dark:bg-primary-800 p-1 rounded-lg">
            {projectFilters.map((filter) => (
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
        <div className="aspect-video overflow-hidden rounded-t-lg -mx-6 -mt-6 mb-4 relative group">
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
