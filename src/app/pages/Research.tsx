import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function Research() {
  const [activeTab, setActiveTab] = useState<"projects" | "papers">("projects");

  const projects = [
    {
      id: "p1",
      title: "矢志强国、坚韧无我\"专题展览\"梦回杜甫川\"VR大空间沉浸式体验",
      category: "VR / Cultural Heritage",
      date: "2025",
      description: "全国高校首个自主研发的校史类VR大空间项目，为专题展览提供沉浸式校史体验。",
      image: "/vr-dream-project.jpg",
    },
    {
      id: "p2",
      title: "世界人形机器人运动会奖牌与足球比赛奖杯工业设计",
      category: "Industrial Design",
      date: "2025",
      description: "为世界人形机器人运动会设计赛事奖牌及足球比赛奖杯。",
      image: "/robot-sports-design.jpg",
    },
    {
      id: "p3",
      title: "航天某院外骨骼工业设计",
      category: "Industrial Design",
      date: "2025",
      description: "为航天某院设计外骨骼装备工业外观及人机交互方案。",
      image: "/exoskeleton-project.jpg",
    },
    {
      id: "p4",
      title: "航天某院人形机器人工业设计",
      category: "Industrial Design",
      date: "2025",
      description: "为航天某院设计人形机器人整体工业外观与交互界面。",
      image: "/humanoid-robot-project.jpg",
    },
    {
      id: "p5",
      title: "VR《版画中轴》文化遗产数字传承实践",
      category: "VR / Cultural Heritage",
      date: "2024",
      description: "用于北京城市图书馆首展，后亮相2024北京文化论坛、第21届深圳文博会等国家级文化平台，成为文化科技融合创新最佳实践案例。",
      image: "/banhua-zhongzhou.jpg",
    },
    {
      id: "p6",
      title: "\"元起安亭\"第二届世界元宇宙大会虚拟制片",
      category: "Virtual Production",
      date: "2023",
      description: "作为第二届世界元宇宙大会虚拟制片及安亭汽车工业宣传片。",
      image: "/yuanqi-anting.jpg",
    },
    {
      id: "p7",
      title: "YUAN 虚拟交互艺术设计教学成果展",
      category: "Exhibition Design",
      date: "2023",
      description: "主持虚拟交互艺术设计教学成果展览策划与呈现。",
      image: "/yuan-exhibition.jpg",
    },
    {
      id: "p8",
      title: "微电影《路》虚拟影片制作",
      category: "Virtual Film",
      date: "2023",
      description: "参与制作虚拟微电影，获评百部精品网络正能量动漫音视频作品。",
      image: "/road-film.jpg",
      link:"http://mp.weixin.qq.com/s?search_click_id=5084543811429122995-1780026450072-8099497799&__biz=MzUyMzYxNjE0Mg==&mid=2247585913&idx=1&sn=1539605b6f289ec85cb2a51291d6f228&chksm=fb58e9c493da8072000daf6db4566e84083723d41f54caaa5bb5e31807fa4b0a4a65f15a425a&scene=7#rd"
    },
    {
      id: "p9",
      title: "团中央\"青春心向党 奋进新征程\"云展览数字展馆设计",
      category: "Digital Exhibition",
      date: "2023",
      description: "项目上线半个月点击人数突破200万，登录体验人数超40万，成为元宇宙技术在思政教育领域的首次全国性应用，获央视《新闻联播》报道。",
      image: "/youth-exhibition.jpg",
    },
    {
      id: "p10",
      title: "延安自然科学院数字交互空间设计",
      category: "Digital Space Design",
      date: "2023",
      description: "主持延安自然科学院历史场景的数字交互空间设计与开发。",
      image: "/yanan-academy.jpg",
    },
    {
      id: "p11",
      title: "第十三届\"挑战杯\"中国大学生创业计划竞赛大型沉浸式元宇宙游戏",
      category: "Metaverse / Game",
      date: "2022-2023",
      description: "主参与大型沉浸式元宇宙游戏开发，获2023\"The most users to an exhibition visiting virtual hangout\"吉尼斯世界纪录。",
      image: "/challenge-cup-metaverse.jpg",
    },
    {
      id: "p12",
      title: "央视\"三星堆奇幻之旅\"大型沉浸式元宇宙游戏",
      category: "Metaverse / Game",
      date: "2022",
      description: "主参与央视大型沉浸式元宇宙游戏开发，获Epic 2022唯一最佳应用奖。",
      image: "/sanxingdui-metaverse.jpg",
    },
    {
      id: "p13",
      title: "北京2022年冬奥会和冬残奥会开闭幕式仿真",
      category: "Simulation",
      date: "2022",
      description: "参与冬奥会及冬残奥会开闭幕式的仿真技术支持。",
      image: "/winter-olympics-sim.jpg",
    },
    {
      id: "p14",
      title: "庆祝中华人民共和国成立70周年群众游行及联欢晚会仿真",
      category: "Simulation",
      date: "2019",
      description: "参与国庆70周年群众游行及联欢晚会的仿真技术工作。",
      image: "/national-day-sim.jpg",
    },
  ];

  const papers = [
    {
      id: "paper-1",
      title: "Multimodal Interaction Design for Autonomous Vehicle Cockpits",
      authors: "Jiang Ke, He Zhiqiang, Zhao Ning",
      venue: "CHI 2024",
      year: "2024",
      type: "Conference Paper",
      description: "探索在未来自动驾驶场景下，驾驶员与智能座舱之间的多模态交互模式。",
      image: "/chi2024.jpg",
    },
    {
      id: "paper-2",
      title: "Generative AI-Assisted Industrial Design: A User Study",
      authors: "Jiang Ke, Wang Xiaoxuan",
      venue: "DIS 2023",
      year: "2023",
      type: "Conference Paper",
      description: "基于大语言模型与扩散模型的智能创意工具研究。",
      image: "/dis2023.jpg",
    },
    {
      id: "paper-3",
      title: "Accessible Digital Heritage Experience through Spatial Computing",
      authors: "Jiang Ke, Mingjie Ming",
      venue: "Ubicomp 2023",
      year: "2023",
      type: "Journal Article",
      description: "利用空间计算技术为视障人群提供文化遗产数字体验。",
      image: "/ubicomp2023.jpg",
    },
    {
      id: "paper-4",
      title: "Human-Robot Interaction in Industrial Design Context",
      authors: "He Zhiqiang, Jiang Ke",
      venue: "IDC 2024",
      year: "2024",
      type: "Conference Paper",
      description: "工业设计场景下的人机交互研究。",
      image: "/idc2024.jpg",
    },
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const CardWrapper = project.link ? "a" : "div";
    return (
    <CardWrapper
      {...(project.link ? {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer"
      } : {})}
      className="group flex flex-col md:flex-row gap-6 md:gap-12 border-t border-zinc-200 py-12 cursor-pointer block"
    >
      <div className="w-full md:w-5/12 aspect-[16/8.5] relative overflow-hidden bg-zinc-100">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${project.id === "p4" ? "blur-[6px]" : ""}`}
        />
        {project.id === "p4" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 bg-white/80 px-3 py-1 rounded">保密</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="w-full md:w-7/12 flex flex-col justify-center px-6">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 bg-zinc-100 px-4 py-1.5">
            {project.category}
          </span>
          <span className="text-sm font-mono text-zinc-400">{project.date}</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold mb-3.5 group-hover:text-zinc-600 transition-colors tracking-tight text-zinc-900">
          {project.title}
        </h3>
        
        <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl mb-5 font-light">
          {project.description}
        </p>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          查看详情 View Case <ArrowUpRight size={13} />
        </div>
      </div>
    </CardWrapper>
    );
  };

  const PaperCard = ({ paper, index }: { paper: any; index: number }) => (
    <div
      className="group flex flex-col md:flex-row gap-6 md:gap-12 border-t border-zinc-200 py-12 cursor-pointer"
    >
      <div className="w-full md:w-7/12 flex flex-col justify-center px-6">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 bg-zinc-100 px-4 py-1.5">
            {paper.type}
          </span>
          <span className="text-sm font-mono text-zinc-400">{paper.year}</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold mb-3.5 group-hover:text-zinc-600 transition-colors tracking-tight">
          {paper.title}
        </h3>
        
        <p className="text-sm text-zinc-500 mb-2">{paper.authors}</p>
        <p className="text-sm text-zinc-400">{paper.venue}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white pt-12 pb-32" style={{ minHeight: '100vh' }}>
      <div className="max-w-7xl 2xl:max-w-9xl mx-auto px-6 mb-12">
        <div className="max-w-3xl 2xl:max-w-4xl">
          <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-black mb-6 tracking-tighter">研究项目 <span className="text-zinc-300">RESEARCH</span></h1>
          <div className="w-16 h-1 bg-black mb-8" />
          <p className="text-xl text-zinc-500 leading-relaxed font-light">
            通过深度交叉学科研究，探索设计与科技融合的无限可能。
          </p>
        </div>
      </div>

      <div className="max-w-7xl 2xl:max-w-9xl mx-auto px-6 mb-12">
        <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg w-fit min-w-[200px]">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all rounded-md ${
              activeTab === "projects"
                ? "bg-white text-black shadow-sm"
                : "text-zinc-500 hover:text-black"
            }`}
          >
            研究项目 Projects
          </button>
          <button
            onClick={() => setActiveTab("papers")}
            className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all rounded-md ${
              activeTab === "papers"
                ? "bg-white text-black shadow-sm"
                : "text-zinc-500 hover:text-black"
            }`}
          >
            成果
          </button>
        </div>
      </div>

      <div className="max-w-7xl 2xl:max-w-9xl mx-auto px-6">
        <div className="border-t border-zinc-200">
          <div style={{ display: activeTab === "projects" ? 'block' : 'none' }}>
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
          <div style={{ display: activeTab === "papers" ? 'block' : 'none' }}>
            {papers.map((paper, idx) => (
              <PaperCard key={paper.id} paper={paper} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
