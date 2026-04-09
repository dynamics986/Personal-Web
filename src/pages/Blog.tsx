import React from 'react';
import PageTitle from '../components/common/PageTitle';
import Card from '../components/common/Card';
import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, Eye, Download } from 'lucide-react';

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
    title: 'FAN, Sixing - Academic Portfolio',
    excerpt: 'My curriculum vitae detailing academic achievements and research experience. Includes projects, and technical skills.',
    date: 'Apr 9, 2026',
    readTime: '1 min read',
    category: 'CV / Resume',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    pdfPath: '/pdfs/CV_Francis.pdf',
  },
  {
    id: '2',
    title: 'IERG3310 Chapter 6',
    excerpt: 'Local Area Networks, Medium Access Control protocols, random access mechanisms (CSMA/CD, CSMA/CA).',
    date: 'Mar 15, 2026',
    readTime: '3 min read',
    category: 'Networking',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmU0YvmukmvjVQwl-qtmzbHUq3ti1kKizYQg&s',
    pdfPath: '/pdfs/Essence_Chapter6.pdf',
  },
  {
    id: '3',
    title: 'IERG3310 Chapter 7',
    excerpt: 'Network layer functions, routing algorithms, and TCP congestion control mechanisms.',
    date: 'Mar 10, 2026',
    readTime: '3 min read',
    category: 'Networking',
    image: 'https://www.pynetlabs.com/wp-content/uploads/Types-of-Routing-Algorithm-in-Computer-Networks-1024x451.webp',
    pdfPath: '/pdfs/Essence_Chapter7.pdf',
  },
  {
    id: '4',
    title: 'The beauty of Mathematics',
    excerpt: 'Some of my reflections on university mathematics using natural language.',
    date: 'Jan 31, 2026',
    readTime: '10 min read',
    category: 'Tutorial',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
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
  const handleView = () => {
    window.open(post.pdfPath, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = post.pdfPath;
    link.setAttribute('download', `${post.title.replace(/[^a-z0-9]/gi, '_')}.pdf`);
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
      <Card className="h-full flex flex-col overflow-hidden border border-primary-100 dark:border-primary-800 hover:shadow-lg transition-shadow duration-300">
        <div className="h-48 overflow-hidden rounded-t-lg -mx-6 -mt-6 mb-4">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="flex items-center mb-3 space-x-4">
          <span className="flex items-center text-xs text-secondary-500 dark:text-secondary-400">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </span>
          <span className="flex items-center text-xs text-secondary-500 dark:text-secondary-400">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-primary-900 dark:text-primary-50 mb-2 leading-snug">
          {post.title}
        </h3>
        
        <p className="text-primary-600 dark:text-primary-300 mb-6 flex-grow text-sm line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary-50 dark:border-primary-800">
          <span className="flex items-center text-[10px] uppercase tracking-wider font-bold bg-accent-100 dark:bg-accent-900/40 text-accent-700 dark:text-accent-400 px-2 py-1 rounded">
            <Tag size={12} className="mr-1" />
            {post.category}
          </span>
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleView}
              className="flex items-center text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
              aria-label="View PDF"
            >
              <Eye size={18} className="mr-1 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">View</span>
            </button>
            
            <button
              onClick={handleDownload}
              className="flex items-center text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
              aria-label="Download PDF"
            >
              <Download size={18} className="mr-1 group-hover:translate-y-0.5 transition-transform" />
              <span className="text-sm font-semibold">Download</span>
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Blog;