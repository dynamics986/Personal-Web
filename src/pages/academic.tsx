import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteLinks } from '../config/site';

interface ProjectEntryProps {
  image: string;
  imageAlt: string;
  title: string;
  period: string;
  description: string;
  topics: string[];
  href?: string;
}

const ProjectEntry: React.FC<ProjectEntryProps> = ({
  image,
  imageAlt,
  title,
  period,
  description,
  topics,
  href,
}) => (
  <article className="academic-project-row">
    <div className="academic-project-visual">
      <img src={image} alt={imageAlt} />
    </div>
    <div className="academic-project-copy">
      <p className="academic-project-period">{period}</p>
      <h3>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {title}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ) : title}
      </h3>
      <p>{description}</p>
      <p className="academic-project-topics">{topics.join(' · ')}</p>
    </div>
  </article>
);

const Academic: React.FC = () => {
  useEffect(() => {
    document.title = 'FAN, Sixing';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        'FAN, Sixing is a CUHK undergraduate researcher interested in world models, autonomous systems, spatial intelligence, and prediction, planning, and control.',
      );
  }, []);

  return (
    <div className="academic-site">
      <main className="academic-shell">
        <header id="top" className="academic-title-block">
          <h1>FAN, Sixing</h1>
        </header>

        <section className="academic-profile" aria-label="Academic profile">
          <aside className="academic-profile-card">
            <div className="academic-portrait-frame">
              <img
                src="/images/sixing-fan-portrait.png"
                alt="Portrait of FAN, Sixing"
              />
            </div>
            <nav className="academic-profile-links" aria-label="Profile links">
              <a href={siteLinks.cv} target="_blank" rel="noopener noreferrer">CV</a>
              <a href={siteLinks.email}>Email</a>
              <a href={siteLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              {siteLinks.linkedin && (
                <a href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              )}
            </nav>
            <p className="academic-email">Email: dynamics986 [AT] gmail.com</p>
          </aside>

          <div className="academic-biography">
            <p className="academic-lead">
              I am an undergraduate student in Mathematics and Information Engineering at
              The Chinese University of Hong Kong. I study intelligent systems that perceive,
              predict, and act in complex spatial environments.
            </p>
            <p>
              My work connects mathematical modeling with modern AI, robotics and autonomous
              control. I have worked on controlled indoor-scene generation for robot navigation
              and am currently exploring coordination in multi-UAV systems.
            </p>

            <div className="academic-research-statements" id="research">
              <p>
                <strong>Research Interest:</strong> I am interested in modeling, predicting,
                and controlling complex dynamical systems, with a focus on world models,
                autonomous systems, and spatial intelligence.
              </p>
              <p>
                <strong>Research Question:</strong> How can world models and modern AI enable
                autonomous agents to understand spatial environments, anticipate future states,
                and plan robustly under uncertainty?
              </p>
              <p>
                <strong>Keywords:</strong> World Models · Autonomous Systems · Spatial Intelligence ·
                Prediction, Planning &amp; Control
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="academic-section" aria-labelledby="projects-title">
          <div className="academic-section-heading">
            <h2 id="projects-title">Research Projects</h2>
          </div>
          <div className="academic-project-list">
            <ProjectEntry
              image="/images/multi_uav.png"
              imageAlt="Multi-UAV simulation and control environment"
              title="Multi-UAV Control and Communication"
              period="Jun 2026 - Present"
              description="Investigating how multiple unmanned aerial vehicles can coordinate to complete shared missions. Current work focuses on collision avoidance and vision-based target detection and tracking, with an emphasis on how communication and control support safe, coordinated behavior across autonomous aerial agents."
              topics={['Multi-Agent Systems', 'Collision Avoidance', 'Target Tracking', 'Communication & Control']}
            />
            <ProjectEntry
              image="/images/navigation.png"
              imageAlt="Generated indoor scene used for robot navigation research"
              title="SSCS Optimizer"
              period="Jun 2025 - Feb 2026"
              description="Developed a complexity-aware procedural generation workflow for indoor navigation research. The project introduced the Static Scene Complexity Score to quantify indoor environments and used interpolation sampling and Bayesian optimization to generate scenes at controlled complexity levels."
              topics={['Procedural Generation', 'Bayesian Optimization', 'Indoor Navigation', 'Spatial Complexity']}
              href="https://github.com/dynamics986/SSCS-Optimizer"
            />
          </div>
        </section>

        <section id="experience" className="academic-section" aria-labelledby="experience-title">
          <div className="academic-section-heading">
            <h2 id="experience-title">Experience &amp; Education</h2>
          </div>
          <div className="academic-experience-list">
            <article>
              <p className="academic-entry-date">Jun 2025 - Feb 2026</p>
              <div>
                <h3>Research Assistant</h3>
                <p className="academic-entry-place">AIoT Lab · Hong Kong</p>
                <p>Research on robot navigation, controlled indoor-scene generation, and spatial complexity modeling.</p>
              </div>
            </article>
            <article>
              <p className="academic-entry-date">Sep 2023 - Present</p>
              <div>
                <h3>B.Sc. in Mathematics and Information Engineering</h3>
                <p className="academic-entry-place">The Chinese University of Hong Kong</p>
                <p>Interdisciplinary study in mathematics, information engineering, intelligent systems, and control.</p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="academic-footer">
        <div className="academic-shell">
          <p>© {new Date().getFullYear()} FAN, Sixing</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
};

export default Academic;
