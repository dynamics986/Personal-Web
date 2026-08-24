import React, { useEffect } from 'react';
import { Link as LinkIcon } from 'lucide-react';
import PageTitle from '../components/common/PageTitle';

type LinkItem = {
  title: string;
  href: string;
};

type LinkGroup = {
  title?: string;
  items?: LinkItem[];
  groups?: LinkGroup[];
};

const links: LinkGroup[] = [
  {
    title: 'Research',
    groups: [
      { title: 'Collections', items: [{ title: 'ToolKits ! ! !', href: 'https://www.yanweb.top' }] },
      {
        title: 'Research Map',
        items: [
          { title: 'Research Map', href: 'https://o-datamap.oall.com' },
          { title: 'Connected Papers', href: 'https://www.connectedpapers.com/main/' },
          { title: 'ResearchRabbit', href: 'https://www.researchrabbit.ai/' },
          { title: 'Consensus', href: 'https://consensus.app/' },
        ],
      },
      { title: 'LLM',
        items: [
          { title: 'DeepSeek', href: 'https://chat.deepseek.com/' },
          { title: 'Gemini', href: 'https://gemini.google.com/' },
          { title: 'Gemma', href: 'https://gemmaai.online/chat' },
          { title: 'ScienceOne', href: 'https://www.scienceone.ai/portal/' },
          { title: 'GLM 4.5', href: 'https://www.glm45.com/chat' },
          { title: 'ChatGLM', href: 'https://chatglm.cn/' },
          { title: '字节豆包', href: 'https://www.doubao.com/' },
          { title: '文心一言', href: 'https://wenxin.baidu.com/' },
          { title: '腾讯元宝', href: 'https://yuanbao.tencent.com/' },
        ] 
      },
      {
        title: 'Paper Search',
        items: [
          { title: 'Google Scholar', href: 'https://scholar.google.com/' },
          { title: 'Semantic Scholar', href: 'https://www.semanticscholar.org/' },
          { title: 'BASE Academic Search', href: 'https://www.base-search.net/' },
        ],
      },
      {
        title: 'Reading & Understanding',
        items: [
          { title: 'https://deepwiki.com', href: 'https://deepwiki.com' },
          { title: 'https://thetawave.ai/', href: 'https://thetawave.ai/' },
          { title: 'https://www.explainpaper.com/', href: 'https://www.explainpaper.com/' },
          { title: 'Translate Your PDF', href: 'https://smallpdf.com/cn/translate-pdf' },
        ],
      },
      {
        title: 'Writing',
        items: [
          { title: 'Aminer: research agent', href: 'https://www.aminer.cn/' } ,
          { title: 'Overleaf', href: 'https://www.overleaf.com/project' },
          { title: 'Zotero', href: 'https://www.zotero.org/download/' },
          { title: 'Grammarly', href: 'https://www.grammarly.com/grammar-check' },
        ],
      },
      { title: 'Tools',
        items: [
          { title: 'https://www.ilovepdf.com', href: 'https://www.ilovepdf.com' },
          { title: 'https://www.markdowntopdf.com', href: 'https://www.markdowntopdf.com' },
          { title: 'qrcode-generator.com', href: 'https://www.the-qrcode-generator.com' },
        ],
      }
    ],
  },
  {
    title: 'Learning',
    groups: [
      {
        title: 'Visualization',
        items: [
          { title: '3Blue1Brown', href: 'https://www.3blue1brown.com' },
          { title: 'Neural Network', href: 'https://alexlenail.me/NN-SVG/' },
          { title: 'Transformer Explainer', href: 'https://poloclub.github.io/transformer-explainer/' },
          { title: 'Visualizing CNNs', href: 'https://poloclub.github.io/cnn-explainer/' },
          { title: 'TensorFlow Playground', href: 'https://playground.tensorflow.org' },
          { title: 'Word2Vec', href: 'https://projector.tensorflow.org' },
        ],
      },
      {
        title: 'Notebooks',
        groups: [
          {
            title: 'Machine Learning',
            items: [
              { title: 'AI Infra', href: 'https://caomaolufei.github.io/AIInfraGuide/' },
              { title: 'DL Notebooks', href: 'https://uvadlc-notebooks.readthedocs.io/en/latest/index.html' },
              { title: 'Traditional ML', href: 'https://cs.nyu.edu/~mohri/ml18/' },
              { title: 'LLM Course', href: 'https://github.com/mlabonne/llm-course' },
              { title: 'Transformers', href: 'https://transformers.run/c1/nlp/' },
              { title: 'UVA DL Course', href: 'https://github.com/phlippe/uvadlc_notebooks' },
              { title: 'Li Yu DL', href: 'https://fym0503.github.io/AIST-2025-Fall/' },
            ],
          },
          { title: 'Programming', items: [
            { title: 'Java', href: 'https://xiaoxiami.gitbook.io/java' },
            { title: 'React', href: 'https://react.dev/learn' },
            { title: 'Web Programming', href: 'https://staff.ie.cuhk.edu.hk/~smchow/4210/' },
            { title: 'Applied Cryptography', href: 'https://toc.cryptobook.us' },
            { title: 'Coding', href: 'https://www.freecodecamp.org/learn' },
            { title: 'Data Structures', href: 'https://www.cs.usfca.edu/~galles/visualization/Algorithms.html' },
            { title: 'Algorithms', href: 'https://www.cse.cuhk.edu.hk/~taoyf/course/3160/24-fall/' },
          ] },
          { title: 'Dive into Deep Learning', items: [
            { title: 'Berkeley STAT 157', href: 'https://courses.d2l.ai/berkeley-stat-157/syllabus.html' },
            { title: 'Stanford CS329P', href: 'https://c.d2l.ai/stanford-cs329p/' },
            { title: 'Dive into Deep Learning', href: 'https://d2l.ai/chapter_introduction/index.html' },
          ] },
        ],
      },
      { title: 'Blogs', items: [
        { title: 'Lilian Weng', href: 'https://lilianweng.github.io' },
        { title: 'Google Research', href: 'https://research.google/blog/' },
        { title: 'Math Blog', href: 'https://www.cnblogs.com/edward-bian' },
      ] },
      { title: 'Archive', items: [
        { title: 'Deep Learning Resources', href: 'https://pan.baidu.com/s/18AzuzlOxylEngtNsZIAuuA?pwd=iaib#list/path=%2F' },
        { title: 'Mathematics Resources', href: 'https://drive.google.com/drive/u/0/folders/14J5ILtlWI4e3hqcI2ASRqLR-N7NEgpBu' },
        { title: 'Wu Jun Math', href: 'https://cdn.jsdelivr.net/gh/wangding/info-theory-lab-manual@master/beauty-of-mathematics.pdf' },
      ] },
    ],
  },
  {
    title: 'Office Kit',
    groups: [
      { title: 'Excel', items: [
        
        { title: 'ChatExcel', href: 'https://www.chatexcel.com/workspace/workbenches' },
      ] },
      {
        title: 'PPT',
        groups: [
          { items: [
            { title: 'Qwen', href: 'https://tongyi.aliyun.com/qianwen/' },
            { title: 'https://www.iconfont.cn', href: 'https://www.iconfont.cn' },
            { title: 'https://www.weiciyun.com', href: 'https://www.weiciyun.com' },
          ] },
          { title: 'Image Search', items: [
            { title: 'https://www.ysjf.com/material', href: 'https://www.ysjf.com/material' },
            { title: 'https://www.pexels.com/', href: 'https://www.pexels.com/zh-cn/' },
            { title: 'https://unsplash.com', href: 'https://unsplash.com' },
            { title: 'https://pixabay.com', href: 'https://pixabay.com' },
          ] },
          { title: 'Design Inspiration', items: [
            { title: 'BrandCrowd — Logo Design', href: 'https://www.brandcrowd.com' },
            { title: 'Dribbble — UI Design', href: 'https://dribbble.com/' },
          ] },
      ],},
      { title: 'Data Search', items: [
        { title: 'Our World in Data', href: 'https://ourworldindata.org' },
        { title: 'Hong Kong Gov Data', href: 'https://data.gov.hk/en/' },
        { title: 'Dataset in Google', href: 'https://datasetsearch.research.google.com/' },
      ] },
      { title: 'Image Processing', items: [
        { title: 'https://www.remove.bg', href: 'https://www.remove.bg' },
        { title: 'https://www.chuangkit.com/koutu', href: 'https://www.chuangkit.com/koutu' },
      ] },
      { title: 'Productivity', items: [
        { title: 'Calendar', href: 'https://www.timeanddate.com/calendar/create.html' },
        { title: 'JustDo', href: 'https://justdo.com' },
      ] },
      { title: 'Technical Tools', items: [
        { title: 'https://www.ip138.com', href: 'https://www.ip138.com' },
        { title: 'https://hoppscotch.io', href: 'https://hoppscotch.io' },
        { title: 'WolframAlpha', href: 'https://www.wolframalpha.com' },
        { title: 'FP32 Converter', href: 'https://www.h-schmidt.net/FloatConverter/IEEE754.html' },
      ] },
      { title: 'Fun', items: [
        { title: 'https://ewishwell.com', href: 'https://ewishwell.com' },
        { title: 'Firework Show', href: 'https://nianbroken.github.io/Firework_Simulator/' },
        { title: 'Firework Code', href: 'https://codepen.io/MillerTime/pen/XgpNwb' },
        { title: 'PrettyMap', href: 'https://prettymapp.streamlit.app' },
        { title: 'Piano', href: 'https://www.qupu123.com' },
      ]}
    ],
  },
  { title: 'Inspiration', items: [
    { title: 'Gapminder', href: 'https://www.gapminder.org/about/about-gapminder/' },
    { title: 'GitHub Trends', href: 'https://github.com/trending' },
    { title: 'Developer Roadmap', href: 'https://github.com/nilbuild/developer-roadmap' },
  ] },
];

const LinkList: React.FC<{ items: LinkItem[] }> = ({ items }) => (
  <ul className="web-link-list">
    {items.map((item) => (
      <li key={item.title}>
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          <LinkIcon size={15} aria-hidden="true" />
          <span>{item.title}</span>
        </a>
      </li>
    ))}
  </ul>
);

const categoryThemes = [
  'web-category-theme-0',
  'web-category-theme-1',
  'web-category-theme-2',
  'web-category-theme-3',
  'web-category-theme-4',
  'web-category-theme-5',
];

const LinkGroupView: React.FC<{ group: LinkGroup; depth: number; themeIndex?: number }> = ({ group, depth, themeIndex }) => {
  const Heading = `h${Math.min(depth + 1, 6)}` as keyof JSX.IntrinsicElements;
  const isCategory = depth === 1;
  const depthClass = depth === 1
    ? 'web-link-group-depth-1'
    : depth === 2
      ? 'web-link-group-depth-2'
      : 'web-link-group-depth-3';
  const themeClass = isCategory && themeIndex !== undefined ? categoryThemes[themeIndex] : '';

  return (
    <section className={`web-link-group ${depthClass}${isCategory ? ` web-category-card ${themeClass}` : ''}`}>
      {group.title && <Heading>{group.title}</Heading>}
      {group.items && <LinkList items={group.items} />}
      {group.groups?.map((child, index) => (
        <LinkGroupView key={`${child.title ?? 'group'}-${index}`} group={child} depth={depth + 1} />
      ))}
    </section>
  );
};

const Web: React.FC = () => {
  useEffect(() => {
    document.title = 'Web — FAN, Sixing';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 'A curated collection of research, learning, productivity, and creative resources used by FAN, Sixing.',
    );
  }, []);

  return (
    <div className="web-page">
      <div className="web-page-shell">
        <PageTitle
          title="Web"
        />
        <main className="web-directory">
          {links.map((group, index) => (
            <LinkGroupView key={`${group.title}-${index}`} group={group} depth={1} themeIndex={index} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Web;
