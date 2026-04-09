import React from 'react';
import PageTitle from '../components/common/PageTitle';
import Card from '../components/common/Card';
import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Tag, Clock, FileText, Download, Eye } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  pdfPath: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Francis CV - Academic Portfolio',
    excerpt: 'My comprehensive curriculum vitae detailing research experience in robotics, machine learning, and 3D scene generation. Includes publications, projects, and technical skills.',
    date: 'Apr 9, 2026',
    readTime: '3 min read',
    category: 'CV / Resume',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    pdfPath: '/pdfs/CV_Francis.pdf',
  },
  {
    id: '2',
    title: 'Indoor Navigation with SSCS: A New Metric',
    excerpt: 'Introducing the Static Scene Complexity Score (SSCS) — a quantitative metric for evaluating indoor scene complexity in robot navigation benchmarks.',
    date: 'Jan 15, 2026',
    readTime: '6 min read',
    category: 'Research',
    image: 'https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=800',
    pdfPath: '/pdfs/CV_Francis.pdf', // 暂时复用同一个PDF，你可以替换成对应的
  },
  {
    id: '3',
    title: 'Bayesian Optimization for Scene Generation',
    excerpt: 'How I used Bayesian optimization to reduce computational cost of generating diverse indoor scenes by 70%.',
    date: 'Dec 10, 2025',
    readTime: '8 min read',
    category: 'Machine Learning',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    pdfPath: '/pdfs/CV_Francis.pdf',
  },
  {
    id: '4',
    title: 'Blender Python (bpy) for 3D Scene Generation',
    excerpt: 'A practical guide to using the Blender Python API for procedural 3D scene generation, covering object placement and rendering automation.',
    date: 'Oct 22, 2025',
    readTime: '10 min read',
    category: 'Tutorial',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    pdfPath: '/pdfs/CV_Francis.pdf',
  },
  {
    id: '5',
    title: 'Fourier Analysis in Signal Processing',
    excerpt: 'A mathematical walkthrough of Fourier transforms and their applications in communication systems.',
    date: 'Sep 5, 2025',
    readTime: '7 min read',
    category: 'Mathematics',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
    pdfPath: '/pdfs/CV_Francis.pdf',
  },
];

const Blog: React.FC = () => {
  return (
    <>
      <PageTitle 
        title="Blog & Publications" 
        subtitle="Research insights, technical tutorials, and my academic portfolio"
      />
      
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
  const openPDF = () => {
    window.open(post.pdfPath, '_blank');
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = post.pdfPath;
    link.download = `${post.title.replace(/[^a-z0-9]/gi, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          
          <div className="flex items-center gap-3">
            <button
              onClick={openPDF}
              className="flex items-center text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-250"
              title="View PDF"
            >
              <Eye size={14} className="mr-1" />
              <span className="text-sm">View</span>
            </button>
            
            <button
              onClick={downloadPDF}
              className="flex items-center text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-250"
              title="Download PDF"
            >
              <Download size={14} className="mr-1" />
              <span className="text-sm">Download</span>
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Blog;