import React from 'react';
import PageTitle from '../components/common/PageTitle';
import Card from '../components/common/Card';
import Section from '../components/common/Section';

import { Calendar, ChevronRight, Tag, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'C programming',
    description: 'This repository contains my exploration of C programming, organized into different branches based on complexity and purpose.',
    image: 'https://public.ysjf.com/product/preview/cT9mqPVWS6.jpg',
    technologies: ['C', 'Data Structures', 'Advanced Memory Management'],
    githubUrl: 'https://github.com/dynamics986/C-Basics',
    category: 'Logic Training'
  },
  {
    id: '2',
    title: 'SSCS Optimizer',
    description: 'A complexity-aware procedural generator built on top of Infinigen, enabling controlled generation of indoor scenes with quantifiable static complexity. ',
    image: 'https://public.ysjf.com/product/preview/JJWze1I5l6.jpg',
    technologies: ['Python', 'C', 'C Shell', 'Cuda', 'bpy'],
    githubUrl: 'https://github.com/dynamics986/SSCS-Optimizer',
    category: 'mobile computing'
  },
];

const Blog: React.FC = () => {
  return (
    <>
      <PageTitle 
        title="Blog" 
        subtitle="Thoughts, tutorials, and insights on web development and technology"
      />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </Section>
    </>
  );
};

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="h-48 overflow-hidden rounded-t-lg -mx-6 -mt-6 mb-4">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="flex items-center mb-3">
          <span className="flex items-center text-xs text-secondary-500 dark:text-secondary-400 mr-4">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </span>
          <span className="flex items-center text-xs text-secondary-500 dark:text-secondary-400">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-50 mb-2">
          {post.title}
        </h3>
        
        <p className="text-primary-600 dark:text-primary-300 mb-4 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-2">
          <span className="flex items-center text-xs bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 px-2 py-1 rounded">
            <Tag size={12} className="mr-1" />
            {post.category}
          </span>
          
          <a href="#" className="flex items-center text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-250">
            <span className="text-sm mr-1">Read more</span>
            <ChevronRight size={16} />
          </a>
        </div>
      </Card>
    </motion.div>
  );
};

export default Blog;