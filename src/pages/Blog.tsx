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

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn how to structure large-scale React applications using TypeScript to ensure type safety and better developer experience.',
    date: 'March 15, 2025',
    readTime: '8 min read',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    title: 'The Future of Frontend Development in 2025',
    excerpt: 'Exploring emerging trends and technologies that will shape the future of frontend development in the coming years.',
    date: 'February 28, 2025',
    readTime: '6 min read',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    title: 'Optimizing Performance in JavaScript Applications',
    excerpt: 'Practical techniques for improving the performance of your JavaScript applications and delivering better user experiences.',
    date: 'January 10, 2025',
    readTime: '10 min read',
    category: 'Performance',
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '4',
    title: 'Building Accessible Web Applications',
    excerpt: 'A comprehensive guide to ensuring your web applications are accessible to users with disabilities.',
    date: 'December 5, 2024',
    readTime: '12 min read',
    category: 'Accessibility',
    image: 'https://images.pexels.com/photos/7988087/pexels-photo-7988087.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
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