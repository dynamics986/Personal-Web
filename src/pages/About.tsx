import React from 'react';
import PageTitle from '../components/common/PageTitle';
import Card from '../components/common/Card';
import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Mail, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <PageTitle 
        title="About Me" 
        subtitle="Software Engineer & Problem Solver"
      />
      
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <div className="flex flex-col items-center">
                <img 
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Francis Fan" 
                  className="w-40 h-40 object-cover rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold text-primary-900 dark:text-primary-50">Francis Fan</h2>
                <p className="text-secondary-500 dark:text-secondary-400 mb-4">范思行</p>
                
                <div className="w-full space-y-3 mt-2">
                  <div className="flex items-center text-primary-700 dark:text-primary-300">
                    <Briefcase size={16} className="mr-2 text-accent-500" />
                    <span>Senior Software Engineer</span>
                  </div>
                  <div className="flex items-center text-primary-700 dark:text-primary-300">
                    <MapPin size={16} className="mr-2 text-accent-500" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center text-primary-700 dark:text-primary-300">
                    <Mail size={16} className="mr-2 text-accent-500" />
                    <span>contact@francisfan.com</span>
                  </div>
                </div>
                
                <div className="flex mt-6 space-x-3">
                  <a 
                    href="#" 
                    className="px-4 py-2 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors duration-250"
                  >
                    Download CV
                  </a>
                  <a 
                    href="mailto:contact@francisfan.com" 
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-200 rounded-md hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors duration-250"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-50 mb-4">Biography</h2>
              <div className="space-y-4 text-primary-700 dark:text-primary-300">
                <p>
                  Hello! I'm Francis Fan, a passionate software engineer with over 8 years of experience building web applications and distributed systems. I specialize in JavaScript/TypeScript, React, Node.js, and cloud infrastructure.
                </p>
                <p>
                  My journey in technology began when I was 12 years old, tinkering with basic programming on my first computer. That curiosity evolved into a career where I've had the privilege of working with startups and established companies to solve complex problems and create intuitive user experiences.
                </p>
                <p>
                  When I'm not coding, you can find me hiking in the mountains, experimenting with new cooking recipes, or reading about emerging technologies. I believe in continuous learning and giving back to the tech community through open source contributions and mentorship.
                </p>
              </div>
            </Card>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-50 mt-12 mb-6">Experience</h2>
              
              <div className="space-y-6">
                <TimelineItem 
                  icon={<Briefcase size={18} />}
                  title="Senior Software Engineer"
                  company="TechCorp Inc."
                  period="2022 - Present"
                >
                  <ul className="list-disc list-inside space-y-1 text-primary-700 dark:text-primary-300">
                    <li>Led the development of a real-time analytics dashboard using React and WebSockets</li>
                    <li>Improved API performance by 40% through implementing caching strategies</li>
                    <li>Mentored junior developers and conducted technical interviews</li>
                  </ul>
                </TimelineItem>
                
                <TimelineItem 
                  icon={<Briefcase size={18} />}
                  title="Software Engineer"
                  company="InnovateSoft"
                  period="2019 - 2022"
                >
                  <ul className="list-disc list-inside space-y-1 text-primary-700 dark:text-primary-300">
                    <li>Developed and maintained multiple client-facing applications</li>
                    <li>Implemented CI/CD pipelines that reduced deployment time by 60%</li>
                    <li>Collaborated with design team to create responsive and accessible interfaces</li>
                  </ul>
                </TimelineItem>
                
                <TimelineItem 
                  icon={<Briefcase size={18} />}
                  title="Junior Developer"
                  company="StartupX"
                  period="2017 - 2019"
                >
                  <ul className="list-disc list-inside space-y-1 text-primary-700 dark:text-primary-300">
                    <li>Built frontend components using React and Redux</li>
                    <li>Created RESTful APIs using Node.js and Express</li>
                    <li>Participated in agile development processes and sprint planning</li>
                  </ul>
                </TimelineItem>
              </div>
              
              <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-50 mt-12 mb-6">Education</h2>
              
              <div className="space-y-6">
                <TimelineItem 
                  icon={<GraduationCap size={18} />}
                  title="M.S. in Computer Science"
                  company="Stanford University"
                  period="2015 - 2017"
                >
                  <p className="text-primary-700 dark:text-primary-300">
                    Specialized in Artificial Intelligence and Machine Learning. Thesis on "Optimizing Neural Networks for Edge Computing Devices."
                  </p>
                </TimelineItem>
                
                <TimelineItem 
                  icon={<GraduationCap size={18} />}
                  title="B.S. in Computer Science"
                  company="University of California, Berkeley"
                  period="2011 - 2015"
                >
                  <p className="text-primary-700 dark:text-primary-300">
                    Graduated with honors. Active member of the Coding Club and AI Research Group.
                  </p>
                </TimelineItem>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  company: string;
  period: string;
  children: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  icon, 
  title, 
  company, 
  period, 
  children 
}) => {
  return (
    <Card className="relative">
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900 flex items-center justify-center mb-4 md:mb-0 md:mr-4 text-accent-600 dark:text-accent-400">
          {icon}
        </div>
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-50">{title}</h3>
            <div className="flex items-center mt-1 md:mt-0">
              <Calendar size={14} className="text-secondary-500 mr-1" />
              <span className="text-sm text-secondary-500 dark:text-secondary-400">{period}</span>
            </div>
          </div>
          <p className="text-accent-600 dark:text-accent-400 mb-3">{company}</p>
          <div className="mt-2">
            {children}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default About;