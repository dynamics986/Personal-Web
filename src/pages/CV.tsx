import React from 'react';
import PageTitle from '../components/common/PageTitle';
import Card from '../components/common/Card';
import Section from '../components/common/Section';
import { Download, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const CV: React.FC = () => {
  return (
    <>
      <PageTitle 
        title="Curriculum Vitae" 
        subtitle="My professional experience, education, and skills"
      >
        <div className="mt-6">
          <a 
            href="#" 
            className="inline-flex items-center px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-md transition-colors duration-250"
          >
            <Download size={18} className="mr-2" />
            Download CV
          </a>
        </div>
      </PageTitle>
      
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="mb-8">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-accent-500 mr-3" />
                <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-50">Professional Experience</h2>
              </div>
              
              <div className="space-y-6">
                <ExperienceItem 
                  title="Senior Software Engineer"
                  company="TechCorp Inc."
                  location="San Francisco, CA"
                  period="2022 - Present"
                >
                  <ul className="list-disc list-inside space-y-2">
                    <li>Led the development of a real-time analytics dashboard using React and WebSockets that increased client engagement by 35%</li>
                    <li>Improved API performance by 40% through implementing Redis caching and query optimization</li>
                    <li>Mentored junior developers and conducted technical interviews for frontend and full-stack positions</li>
                    <li>Architected and implemented a microservices-based system using Node.js, Docker, and Kubernetes</li>
                  </ul>
                </ExperienceItem>
                
                <ExperienceItem 
                  title="Software Engineer"
                  company="InnovateSoft"
                  location="San Jose, CA"
                  period="2019 - 2022"
                >
                  <ul className="list-disc list-inside space-y-2">
                    <li>Developed and maintained multiple client-facing applications using React, Redux, and TypeScript</li>
                    <li>Implemented CI/CD pipelines with GitHub Actions that reduced deployment time by 60%</li>
                    <li>Collaborated with design team to create responsive and accessible interfaces following WCAG guidelines</li>
                    <li>Reduced bundle size by 30% through code splitting and lazy loading techniques</li>
                  </ul>
                </ExperienceItem>
                
                <ExperienceItem 
                  title="Junior Developer"
                  company="StartupX"
                  location="Palo Alto, CA"
                  period="2017 - 2019"
                >
                  <ul className="list-disc list-inside space-y-2">
                    <li>Built frontend components using React and Redux for a SaaS product with 10,000+ users</li>
                    <li>Created RESTful APIs using Node.js and Express with MongoDB for data persistence</li>
                    <li>Participated in agile development processes, including daily standups and sprint planning</li>
                    <li>Implemented automated testing using Jest and React Testing Library, achieving 80% code coverage</li>
                  </ul>
                </ExperienceItem>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="mb-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-accent-500 mr-3" />
                <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-50">Education</h2>
              </div>
              
              <div className="space-y-6">
                <ExperienceItem 
                  title="M.S. in Computer Science"
                  company="Stanford University"
                  location="Stanford, CA"
                  period="2015 - 2017"
                >
                  <p>Specialized in Artificial Intelligence and Machine Learning. Thesis on "Optimizing Neural Networks for Edge Computing Devices."</p>
                  <p className="mt-2">Relevant coursework: Advanced Algorithms, Machine Learning, Computer Vision, Distributed Systems</p>
                </ExperienceItem>
                
                <ExperienceItem 
                  title="B.S. in Computer Science"
                  company="University of California, Berkeley"
                  location="Berkeley, CA"
                  period="2011 - 2015"
                >
                  <p>Graduated with honors (GPA: 3.8/4.0). Active member of the Coding Club and AI Research Group.</p>
                  <p className="mt-2">Relevant coursework: Data Structures, Algorithms, Database Systems, Operating Systems</p>
                </ExperienceItem>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Card className="mb-8">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-accent-500 mr-3" />
                <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-50">Skills</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                <SkillCategory 
                  title="Frontend Development"
                  skills={['React', 'TypeScript', 'Next.js', 'Vue.js', 'HTML/CSS', 'JavaScript', 'Redux', 'Tailwind CSS']}
                />
                
                <SkillCategory 
                  title="Backend Development"
                  skills={['Node.js', 'Express', 'NestJS', 'Django', 'RESTful APIs', 'GraphQL', 'WebSockets']}
                />
                
                <SkillCategory 
                  title="Databases"
                  skills={['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']}
                />
                
                <SkillCategory 
                  title="DevOps & Tools"
                  skills={['Git', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux', 'Webpack']}
                />
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Card>
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-accent-500 mr-3" />
                <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-50">Certifications & Awards</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary-800 dark:text-primary-100">AWS Certified Solutions Architect</h3>
                  <p className="text-secondary-500">Amazon Web Services • 2023</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-primary-800 dark:text-primary-100">Google Cloud Professional Developer</h3>
                  <p className="text-secondary-500">Google Cloud • 2022</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-primary-800 dark:text-primary-100">Hackathon Winner - Best Use of AI</h3>
                  <p className="text-secondary-500">TechCrunch Disrupt • 2021</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-primary-800 dark:text-primary-100">Outstanding Contribution Award</h3>
                  <p className="text-secondary-500">InnovateSoft • 2020</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  children: React.ReactNode;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  children
}) => {
  return (
    <div className="border-l-2 border-accent-200 dark:border-accent-800 pl-4 ml-2">
      <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-50">{title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <p className="text-accent-600 dark:text-accent-400">{company} • {location}</p>
        <p className="text-sm text-secondary-500 dark:text-secondary-400">{period}</p>
      </div>
      <div className="text-primary-700 dark:text-primary-300 mt-2">
        {children}
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-100 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="px-2 py-1 text-sm bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CV;