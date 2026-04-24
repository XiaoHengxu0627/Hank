import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function Research() {
  const [activeTab, setActiveTab] = useState<"projects" | "papers">("projects");

  const projects = [
    {
      id: "p1",
      title: "智能座舱多模态交互研究",
      category: "Human-Computer Interaction",
      date: "2024",
      description: "探索在未来自动驾驶场景下，驾驶员与智能座舱之间的语音、手势、眼动等多模态交互模式的设计与评估。",
      image: "https://images.unsplash.com/photo-1761311984594-3f38e73c83b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: "p2",
      title: "生成式AI在工业设计中的创新应用",
      category: "Artificial Intelligence",
      date: "2023",
      description: "基于大语言模型（LLM）与扩散模型，开发了一种辅助工业设计师在概念发散阶段的智能创意工具。",
      image: "https://images.unsplash.com/photo-1774538524376-5a9ea326c816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: "p3",
      title: "无障碍文化遗产数字体验空间",
      category: "Digital Media",
      date: "2023",
      description: "利用空间计算技术，重构了博物馆内不可触碰文物的数字体验，通过多感官反馈为视障人群提供平等的文化获取方式。",
      image: "https://images.unsplash.com/photo-1764530926841-4ffd875b97c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
    },
    {
      id: "paper-2",
      title: "Generative AI-Assisted Industrial Design: A User Study",
      authors: "Jiang Ke, Wang Xiaoxuan",
      venue: "DIS 2023",
      year: "2023",
      type: "Conference Paper",
      description: "基于大语言模型与扩散模型的智能创意工具研究。",
    },
    {
      id: "paper-3",
      title: "Accessible Digital Heritage Experience through Spatial Computing",
      authors: "Jiang Ke, Mingjie Ming",
      venue: "Ubicomp 2023",
      year: "2023",
      type: "Journal Article",
      description: "利用空间计算技术为视障人群提供文化遗产数字体验。",
    },
    {
      id: "paper-4",
      title: "Human-Robot Interaction in Industrial Design Context",
      authors: "He Zhiqiang, Jiang Ke",
      venue: "IDC 2024",
      year: "2024",
      type: "Conference Paper",
      description: "工业设计场景下的人机交互研究。",
    },
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row gap-8 md:gap-16 border-t border-zinc-200 py-16 cursor-pointer"
    >
      <div className="w-full md:w-5/12 aspect-[4/3] relative overflow-hidden bg-zinc-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="w-full md:w-7/12 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 bg-zinc-100 px-3 py-1">
            {project.category}
          </span>
          <span className="text-xs font-mono text-zinc-400">{project.date}</span>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-zinc-600 transition-colors tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mb-8 font-light">
          {project.description}
        </p>

        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          查看详情 View Case <ArrowUpRight size={16} />
        </div>
      </div>
    </motion.div>
  );

  const PaperCard = ({ paper, index }: { paper: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group border-b border-zinc-100 py-8 cursor-pointer hover:bg-zinc-50 transition-colors px-4 -mx-4"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
        <div className="flex-shrink-0">
          <span className="text-xs font-mono text-zinc-400 bg-zinc-100 px-3 py-1 rounded">
            {paper.year}
          </span>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              {paper.type}
            </span>
            <span className="text-xs text-zinc-400">•</span>
            <span className="text-xs text-zinc-500">{paper.venue}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-zinc-600 transition-colors">
            {paper.title}
          </h3>
          
          <p className="text-sm text-zinc-500 mb-2">{paper.authors}</p>
          <p className="text-sm text-zinc-400 leading-relaxed">{paper.description}</p>
        </div>

        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={20} className="text-zinc-400" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full bg-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">研究项目 <span className="text-zinc-300">RESEARCH</span></h1>
          <div className="w-16 h-1 bg-black mb-8" />
          <p className="text-xl text-zinc-500 leading-relaxed font-light">
            通过深度交叉学科研究，探索设计与科技融合的无限可能。
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg w-fit">
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
            学术成果
          </button>
        </div>
      </div>

      {activeTab === "projects" && (
        <section className="max-w-7xl mx-auto px-6">
          <div className="border-b border-zinc-200">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </section>
      )}

      {activeTab === "papers" && (
        <section className="max-w-7xl mx-auto px-6">
          <div className="border-t border-zinc-200 pt-8">
            {papers.map((paper, idx) => (
              <PaperCard key={paper.id} paper={paper} index={idx} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
