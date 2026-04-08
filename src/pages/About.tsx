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
        subtitle="Mathematics & Information Engineering Student"
      />
      
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <div className="flex flex-col items-center">
                <img 
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="FAN, Sixing" 
                  className="w-40 h-40 object-cover rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold text-primary-900 dark:text-primary-50">FAN, Sixing</h2>
                <p className="text-secondary-500 dark:text-secondary-400 mb-4">范思行</p>

                <div className="w-full space-y-3 mt-2">
                  <div className="flex items-center text-primary-700 dark:text-primary-300">
                    <Briefcase size={16} className="mr-2 text-accent-500" />
                    <span>Undergraduate Student</span>
                  </div>
                  <div className="flex items-center text-primary-700 dark:text-primary-300">
                    <MapPin size={16} className="mr-2 text-accent-500" />
                    <span>Hong Kong, China</span>
                  </div>
                  <div className="flex items-center text-primary-700 dark:text-primary-300">
                    <Mail size={16} className="mr-2 text-accent-500" />
                    <span>dynamics986@gmail.com</span>
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
                    href="mailto:dynamics986@gmail.com"
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
                  Hello! I'm FAN, Sixing, an undergraduate student majoring in Mathematics and Information Engineering. I choose my major because the useful theories and logical thinking I developed in math help me go further in engineering topics like artificial intelligence and engineering systems. With tools like probability theory and linear algebra, I self-learned various machine learning algorithms in my spare time, like K-Means algorithms, CNN and RNN. 
                </p>
                <p>
                  Continuous learning, engineering innovation and academic connection never fail to fascinate me. I have been in AIoT Lab as an undergraduate student since June 2025. My passion is on spatial engineering topics such as positioning systems, network systems and control theory. I had research on robot indoor navigation and UAV control and communication. My current research is in an interdisciplinary field at the intersection of human-centered AI and robotics.
                </p>
              </div>
            </Card>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-50 mt-12 mb-6">Research Experience</h2>

              <div className="space-y-6">
                <TimelineItem
                  icon={<Briefcase size={18} />}
                  title="Undergraduate Research Assistant"
                  company="AIoT Lab"
                  period="June 2025 - "
                >
                  <ul className="list-disc list-inside space-y-1 text-primary-700 dark:text-primary-300">
                    <li>Conducting research on robot indoor navigation systems and positioning algorithms</li>
                    <li>Working on UAV control systems and communication protocols</li>
                    <li>Exploring interdisciplinary topics at the intersection of human-centered AI and robotics</li>
                  </ul>
                </TimelineItem>
              </div>
              
              <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-50 mt-12 mb-6">Education</h2>

              <div className="space-y-6">
                <TimelineItem
                  icon={<GraduationCap size={18} />}
                  title="BSc. in Mathematics and Information Engineering"
                  company="The Chinese University of Hong Kong"
                  period="Sep 2023 - Present"
                >
                  <p className="text-primary-700 dark:text-primary-300">
                
                  <ul className="list-disc list-inside space-y-1 text-primary-700 dark:text-primary-300">
                    <li>Programming Language: C, Java, Python, Matlab</li>
                    <li>Tools: VS Code, Cursor, GitHub, Blender, Linux System and Wireshark/tcpdump</li>
                  </ul>
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