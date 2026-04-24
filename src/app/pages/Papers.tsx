import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Papers() {
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
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">论文 <span className="text-zinc-300">PAPERS</span></h1>
          <p className="text-xl text-zinc-500 leading-relaxed font-light">
            本实验室的研究成果持续发表于CHI、DIS、Ubicomp、IDC等国际顶级学术会议及顶级期刊。
          </p>
        </motion.div>
      </div>

      <section className="max-w-7xl mx-auto px-6">
        <div className="border-t border-zinc-200 pt-8">
          {papers.map((paper, idx) => (
            <PaperCard key={paper.id} paper={paper} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
