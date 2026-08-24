import React from 'react';
import {
  Award,
  Briefcase,
  Code,
  Lightbulb,
  Mail,
  MapPin,
} from 'lucide-react';

interface SectionHeadingProps {
  icon: React.ReactNode;
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ icon, title }) => (
  <div className="mb-5 flex items-center gap-3 border-b border-primary-100 pb-3 dark:border-primary-700">
    <span className="text-accent-600 dark:text-accent-400">{icon}</span>
    <h2 className="text-xl font-semibold text-primary-900 dark:text-primary-50">{title}</h2>
  </div>
);

interface SkillGroupProps {
  title: string;
  skills: string[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills }) => (
  <div>
    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-200">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-md bg-primary-100 px-2.5 py-1 text-sm text-primary-700 dark:bg-primary-700 dark:text-primary-200"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <section className="card p-0 overflow-hidden">
        <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.6fr)]">
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-primary-900 dark:text-primary-50 md:text-3xl">
              About Me
            </h1>
            <p className="mt-3 text-lg text-primary-600 dark:text-primary-300">
              Mathematics and Information Engineering undergraduate at CUHK
            </p>

            <div className="mt-6 space-y-3 text-primary-700 dark:text-primary-300">
              <p>
                I am interested in applying mathematical reasoning to engineering problems in
                artificial intelligence, robotics and autonomous systems. My background in
                probability, linear algebra, and optimization supports my work on
                spatial intelligence and intelligent control.
              </p>
            </div>
          </div>

          <aside className="border-t border-primary-100 bg-primary-50 p-6 dark:border-primary-700 dark:bg-primary-800/60 sm:p-8 lg:border-l lg:border-t-0">
            <div className="space-y-4 text-sm text-primary-700 dark:text-primary-300">
              <p className="flex items-start gap-3">
                <Briefcase size={17} className="mt-0.5 shrink-0 text-accent-500" />
                <span>Researcher</span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-accent-500" />
                <span>Sha Tin, Hong Kong, China</span>
              </p>
              <a
                href="mailto:dynamics986@gmail.com"
                className="flex items-start gap-3 hover:text-accent-600 dark:hover:text-accent-400"
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-accent-500" />
                <span>dynamics986@gmail.com</span>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1V707LI_Rk58xLKw9rky1KogXVur6A7FU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-accent-600 dark:hover:text-accent-400"
              >
                <Lightbulb size={17} className="mt-0.5 shrink-0 text-accent-500" />
                <span>Recent insights</span>
              </a>
            </div>

          </aside>
        </div>
      </section>


      <section className="card">
        <SectionHeading icon={<Code size={21} />} title="Skills &amp; Coursework" />
        <div className="grid gap-6 sm:grid-cols-2">
          <SkillGroup
            title="Mathematics"
            skills={['Calculus', 'Linear Algebra', 'Fourier Analysis', 'Complex Analysis', 'Probability', 'Discrete Mathematics']}
          />
          <SkillGroup
            title="Programming & Tools"
            skills={['Python', 'C', 'Java', 'TypeScript', 'MATLAB', 'Linux', 'Hugging Face', 'GitHub', 'Blender', 'Gazebo', 'Wireshark']}
          />
          <SkillGroup
            title="Research Interests"
            skills={['World Models', 'Autonomous Systems', 'Spatial Intelligence', 'Prediction and Decision-Making','Reinforcement Learning', ]}
          />
          <SkillGroup
            title="Engineering"
            skills={['Numerical Optimization', 'Data Structures', 'Computer Networks', 'Software Development']}
          />
        </div>
      </section>

      <section className="card">
        <SectionHeading icon={<Award size={21} />} title="Certifications &amp; Awards" />
        <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-primary-800 dark:text-primary-100">
              Standard Chartered Hong Kong Marathon 2026 Half Marathon Finisher
            </h3>
            <p className="mt-1 text-sm text-secondary-500 dark:text-secondary-400">HKAAA · 2026</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary-800 dark:text-primary-100">
              Attendance Certificate for Course of Communication Challenges: Vision, Hearing and Speech
            </h3>
            <p className="mt-1 text-sm text-secondary-500 dark:text-secondary-400">
              CUHK Jockey Club Institute of Ageing · 2025
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary-800 dark:text-primary-100">
              Certificate of Recognition for the LEAD 1001 Program
            </h3>
            <p className="mt-1 text-sm text-secondary-500 dark:text-secondary-400">
              Learning and Cultural Enhancement Section, CUHK · 2023
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary-800 dark:text-primary-100">
              Attendance Certificate for Course of Caregiver Stress
            </h3>
            <p className="mt-1 text-sm text-secondary-500 dark:text-secondary-400">
              CUHK Jockey Club Institute of Ageing · 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
