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
            href="/CV_FAN_Sixing.pdf"
            download="CV_FAN_Sixing.pdf"
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
                <GraduationCap className="w-6 h-6 text-accent-500 mr-3" />
                <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-50">Education</h2>
              </div>
              
              <div className="space-y-6">
                <ExperienceItem
                  title="B.S. in Mathematics and Information Engineering"
                  company="The Chinese University of Hong Kong"
                  location="Hong Kong, China"
                  period="Sep 2023 - Present"
                >
                  <p>S.H.Ho College Master’s List Award 2025</p>
                  <p className="mt-2">S.H.Ho College Outstanding Student Scholarship 2025/2026</p>
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
                <Briefcase className="w-6 h-6 text-accent-500 mr-3" />
                <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-50">Research Experience</h2>
              </div>

              <div className="space-y-6">
                <ExperienceItem
                  title="Research Assistant"
                  company="AIoT Lab"
                  location="Hong Kong, China"
                  period="Jun 2025 - Feb 2026"
                >
                  <ul className="list-disc list-inside space-y-2">
                    <li>Formulated Static Scene Complexity Score (SSCS) to evaluate the indoor scene complexity</li>
                    <li>Developed a SSCS optimizer for generating indoor scenes of various scene complexity</li>
                    <li>Used interpolation sampling and Bayesian optimization to improve the efficiency of the system</li>
                    <li>Generated 50+ distinct scenes with customized objects with the system for indoor navigation test</li>
                  </ul>
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
                  title="Mathematics"
                  skills={['Calculus', 'Linear Algebra', 'Fourier Analysis', 'Complex Analysis', 'Algebraic Structures', 'Discrete Math', 'Probability Theory']}
                />
                
                <SkillCategory
                  title="Programming & Tools"
                  skills={['C', 'Java', 'Python', 'MATLAB', 'VS Code', 'Cursor', 'GitHub', 'Blender', 'Linux System ', 'Gazebo', 'Wireshark/tcpdump']}
                />
                
                <SkillCategory
                  title="Research Interest"
                  skills={['Positioning Systems', 'Network Systems', 'Control Theory', 'UAV Systems']}
                />

                <SkillCategory
                  title="Engineering Courses"
                  skills={['Numerical Optimization', 'Data Structures', 'Communication Systems', 'Computer Network']}
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
                  <h3 className="font-semibold text-primary-800 dark:text-primary-100">Research Assistant</h3>
                  <p className="text-secondary-500">AIoT Lab • 2025 - Present</p>
                </div>

                <div>
                  <h3 className="font-semibold text-primary-800 dark:text-primary-100">Academic Excellence</h3>
                  <p className="text-secondary-500">The Chinese University of Hong Kong</p>
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