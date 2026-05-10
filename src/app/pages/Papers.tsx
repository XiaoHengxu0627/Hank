import { motion } from "motion/react";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { useState, useMemo } from "react";
import { useLanguage } from "../i18n/context";

export function Papers() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"year" | "type">("year");
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

  const papers = [
    {
      id: "paper-1",
      title: "Guiding Auditory AR: A VR-Based Evaluation of Visual and Tactile Cues for Sound Localization for Cochlear Implant Users",
      authors: "Z. Q. He, S. J. Ming, H. Zhang, Y. Yupeng, H. P. Yuan, K. Jiang",
      venue: "IEEE Transactions on Visualization and Computer Graphics",
      year: "2026",
      type: "Journal Paper",
      description: "引导听觉增强现实：基于VR的耳蜗植入用户声音定位视觉和触觉提示评估。",
    },
    {
      id: "paper-2",
      title: "From Embodied Ritual to Cultural Pride: A Framework for Fostering Cultural Identity through a VR Experience of the Twenty-Four Solar Terms",
      authors: "Pengfei Liu, Ziqiang He, Hao Zhang",
      venue: "ICHEC '25",
      year: "2026",
      type: "Conference Paper",
      description: "从具身仪式到文化认同：通过二十四节气VR体验培养文化身份的框架。",
    },
    {
      id: "paper-3",
      title: "Icebreaking: Building Trust and Empathy with Virtual Museum Embodied Conversational Agents via Personalized Initial Interactions",
      authors: "Z. Q. He, K. Jiang, S. J. Ming, X. F. Huang, H. Z. Lou, J. B. Liu",
      venue: "ISMAR 2025",
      year: "2025",
      type: "Conference Paper",
      description: "破冰：通过个性化初始交互与虚拟博物馆具身对话代理建立信任和共情。",
    },
    {
      id: "paper-4",
      title: "Meta Arm—VR Control Device for Forearm Amputees",
      authors: "He, Z., Jiang, K.",
      venue: "HCI International 2024",
      year: "2024",
      type: "Conference Paper",
      description: "Meta Arm——前臂截肢者的VR控制装置。",
    },
    {
      id: "paper-5",
      title: "基于自然交互的前臂截肢者虚拟现实手柄交互设计研究",
      authors: "何自强, 姜可, 明世杰, 等",
      venue: "包装工程",
      year: "2025",
      type: "Journal Paper",
    },
    {
      id: "paper-6",
      title: "Collaborative design based on Metaverse technology: Case of interactive design of children's educational products",
      authors: "He, Z., Jiang, K., Zhang, J., Gao, Y., Na, Z.",
      venue: "AHFE 2023",
      year: "2023",
      type: "Conference Paper",
      description: "基于元宇宙技术的协作设计：儿童教育产品交互设计案例。",
    },
    {
      id: "paper-7",
      title: "“光”文字衍生落地灯",
      authors: "林倩倩, 何自强, 王丹",
      venue: "包装工程",
      year: "2022",
      type: "Journal Paper",
    },
    {
      id: "paper-8",
      title: "Reshaping the 'Roots': A Physio-Based Study of Self-Other Cognition in VR Avatar-EIA Interaction",
      authors: "Ziqiang He, Ke Jiang, Shijie Ming, Ning Zhao, Haopeng Yuan",
      venue: "Cumulus 2026",
      year: "2026",
      type: "Conference Paper",
      description: "重塑'根源'：VR化身具身交互中自我-他人认知的生理基础研究。",
    },
    {
      id: "paper-9",
      title: "Optimizing Gradient Vignetting for VR Visual Fatigue Reduction: An Empirical Study of Its Non-Linear Effects",
      authors: "Shijie Ming, Ke Jiang, Ziqiang He, Ning Zhao, Haopeng Yuan, Furui Sun",
      venue: "HCII 2026",
      year: "2026",
      type: "Conference Paper",
      description: "优化梯度渐晕以减轻VR视觉疲劳：非线性效应的实证研究。",
    },
    {
      id: "paper-10",
      title: "Task-Driven Proxemics: Finding the Optimal Social Distance for Virtual Guides in Different Tasks",
      authors: "Shijie Ming, Ke Jiang, Ziqiang He, Ning Zhao, Ziang Wang, Haopeng Yuan, Furui Sun",
      venue: "HCII 2026",
      year: "2026",
      type: "Conference Paper",
      description: "任务驱动的空间关系学：不同任务中虚拟向导的最佳社交距离研究。",
    },
    {
      id: "paper-11",
      title: "BEYOND THE ARCHIVE: DESIGNING ROUTES FOR LIVING HERITAGE ENCOUNTERS IN LOCATION-BASED VR",
      authors: "Shijie Ming, Ke Jiang, Ziqiang He, Ning Zhao, Yupeng Yan, Haopeng Yuan, Furui Sun",
      venue: "Cumulus 2026",
      year: "2026",
      type: "Conference Paper",
      description: "超越档案：基于位置的VR中活态遗产体验路线设计。",
    },
    {
      id: "paper-12",
      title: "Making with virtual materials: Reframing 'making as knowing' for situated narratives in large-scale VR",
      authors: "Shijie Ming, Ziqiang He, Ning Zhao, Haopeng Yuan, Furui Sun, Ke Jiang",
      venue: "DRS 2026",
      year: "2026",
      type: "Conference Paper",
      description: "虚拟材料制作：为大规模VR中的情境叙事重构'做中学'。",
    },
    {
      id: "paper-13",
      title: "Embodied Cognition-Based Evaluation of Humanoid Robot Appearance in Virtual Reality Environment",
      authors: "Haopeng Yuan, Ke Jiang, Ziqiang He, Shijie Ming, Ning Zhao, Furui Sun",
      venue: "HCII 2026",
      year: "2026",
      type: "Conference Paper",
      description: "基于具身认知的虚拟现实环境中人形机器人外观评价研究。",
    },
    {
      id: "paper-14",
      title: "Forestlight: A Virtual Reality Respiratory Biofeedback System Using Interactive Lighting for Pressure Relief",
      authors: "Jingyu Zhang, Ke Jiang, Suhan Wang, Shijie Ming, Huidi Wang",
      venue: "SUI '23",
      year: "2023",
      type: "Conference Paper",
      description: "Forestlight：基于交互式照明的VR呼吸生物反馈减压系统。",
    },
    {
      id: "paper-15",
      title: "扩展现实背景下的虚拟体验设计研究",
      authors: "姜可, 张靖宇, 颜羽鹏, 何自强, 明世杰",
      venue: "包装工程",
      year: "2024",
      type: "Journal Paper",
    },
    {
      id: "paper-16",
      title: "多任务情境下指挥信息系统直感交互设计研究",
      authors: "颜羽鹏, 姜可",
      venue: "包装工程",
      year: "2026",
      type: "Journal Paper",
    },
    {
      id: "paper-17",
      title: "面向多维情感体验的指挥训练舱色彩设计研究",
      authors: "颜羽鹏, 姜可, 赵祎乾, 吴天宇, 孙博文",
      venue: "机械设计",
      year: "2026",
      type: "Journal Paper",
    },
    {
      id: "paper-18",
      title: "草方格铺设车操控台界面布局设计研究",
      authors: "颜羽鹏, 姜可, 魏大彭, 石星辰, 赵祎乾",
      venue: "机械设计",
      year: "2025",
      type: "Journal Paper",
    },
    {
      id: "paper-19",
      title: "虚拟装配实训具身交互技术应用研究",
      authors: "颜羽鹏, 姜可, 石星辰, 张靖宇, 明世杰, 何自强",
      venue: "包装工程",
      year: "2025",
      type: "Journal Paper",
    },
    {
      id: "paper-20",
      title: "交通情报信息系统人机协同决策技术应用进展",
      authors: "颜羽鹏, 姜可, 张靖宇, 明世杰, 何自强, 石星辰",
      venue: "包装工程",
      year: "2025",
      type: "Journal Paper",
    },
    {
      id: "paper-21",
      title: "作战筹划系统多模态人机交互技术应用进展",
      authors: "颜羽鹏, 姜可, 程健鹏, 李冠呈, 石鹏飞, 刘颖",
      venue: "机械设计",
      year: "2024",
      type: "Journal Paper",
    },
    {
      id: "paper-22",
      title: "基于增强现实的指挥空间信息布局设计研究",
      authors: "颜羽鹏, 姜可",
      venue: "现代防御技术",
      year: "2025",
      type: "Journal Paper",
    },
    {
      id: "paper-23",
      title: "基于情境自适应的指挥信息系统交互设计研究",
      authors: "颜羽鹏, 姜可",
      venue: "包装工程",
      year: "2026",
      type: "Journal Paper",
    },
    {
      id: "paper-24",
      title: "Design and Implementation of Traffic Big Data Super Correlation System",
      authors: "Yan Yupeng, Ke Jiang, Cheng Jianpeng",
      venue: "ICBDIE 2024",
      year: "2024",
      type: "Conference Paper",
    },
    {
      id: "paper-25",
      title: "Imaginary Museums: A New Approach to the Learning and Assessment of Design History",
      authors: "Jiang Ke, Ben Hughes",
      venue: "DRS LEARNxDESIGN 2021",
      year: "2021",
      type: "Conference Paper",
      description: "想象博物馆：设计史学习与评估的新方法。",
    },
    {
      id: "paper-26",
      title: "Cardinal on Style Image Cognition of Machine Center",
      authors: "Ke Jiang",
      venue: "Journal of Grey System",
      year: "2012",
      type: "Journal Paper",
    },
    {
      id: "paper-27",
      title: "Research on the Mathematical Description of Style Image of Machining Centers",
      authors: "Ke Jiang, Jing Jing Wang",
      venue: "Advanced Materials Research",
      year: "2011",
      type: "Conference Paper",
    },
    {
      id: "paper-28",
      title: "Web-based Image Scale dynamic partition",
      authors: "Jiang Ke, Wang Jing-jing",
      venue: "CAIDCD 2010",
      year: "2010",
      type: "Conference Paper",
    },
    {
      id: "paper-29",
      title: "基于元宇宙技术的协作设计：儿童教育产品交互设计案例",
      authors: "何自强, 姜可, 张靖宇, 高宇, 那卓",
      venue: "AHFE 2023",
      year: "2023",
      type: "Conference Paper",
    },
    {
      id: "paper-30",
      title: "面向前臂截肢者的VR控制设备设计研究",
      authors: "何自强, 姜可",
      venue: "HCI International 2024",
      year: "2024",
      type: "Conference Paper",
    },
    {
      id: "paper-31",
      title: "人机协同决策中的多模态交互机制研究",
      authors: "颜羽鹏, 姜可",
      venue: "包装工程",
      year: "2026",
      type: "Journal Paper",
    },
    {
      id: "paper-32",
      title: "数字交互空间设计中的叙事性体验构建",
      authors: "明世杰, 姜可, 何自强",
      venue: "Cumulus 2026",
      year: "2026",
      type: "Conference Paper",
      description: "探索大规模VR环境中情境叙事的设计方法。",
    },
    {
      id: "paper-33",
      title: "数字交互空间设计研讨工作坊（一带一路背景）",
      authors: "姜可",
      venue: "Cumulus CAFA2023",
      year: "2023",
      type: "Workshop",
      description: "国际艺术与设计院校设计联盟Cumulus CAFA2023工作坊。",
    },
    {
      id: "paper-34",
      title: "工业设计奖项发展现状及趋势",
      authors: "姜可, 韩炎萃, 安晓颖",
      venue: "设计产业蓝皮书-中国设计产业发展报告2019-2020",
      year: "2020",
      type: "Book Chapter",
      description: "社会科学文献出版社。",
    },
    {
      id: "paper-35",
      title: "通用设计-心理关爱的设计研究和实践",
      authors: "姜可",
      venue: "化学工业出版社",
      year: "2012",
      type: "Book",
    },
    {
      id: "paper-36",
      title: "工业设计史 新一版",
      authors: "姜可（参编）",
      venue: "上海美术出版社",
      year: "2016",
      type: "Book",
    },
    {
      id: "paper-37",
      title: "设计的真相",
      authors: "姜可（参编）",
      venue: "北京出版社",
      year: "2012",
      type: "Book",
    },
    {
      id: "paper-38",
      title: "中国工业设计年鉴",
      authors: "姜可（参编）",
      venue: "知识产权出版社",
      year: "2006",
      type: "Book",
    },
  ];

  const years = useMemo(() => {
    const yearSet = new Set(papers.map(p => p.year));
    return Array.from(yearSet).sort((a, b) => parseInt(b) - parseInt(a));
  }, [papers]);

  const types = useMemo(() => {
    const typeSet = new Set(papers.map(p => p.type));
    return Array.from(typeSet).sort();
  }, [papers]);

  const filteredPapers = useMemo(() => {
    return papers.filter(paper => {
      const yearMatch = !selectedYear || paper.year === selectedYear;
      const typeMatch = !selectedType || paper.type === selectedType;
      return yearMatch && typeMatch;
    }).sort((a, b) => parseInt(b.year) - parseInt(a.year));
  }, [papers, selectedYear, selectedType]);

  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);

  const clearFilters = () => {
    setSelectedYear(null);
    setSelectedType(null);
  };

  const handleYearSelect = (year: string | null) => {
    setSelectedYear(year);
    setYearDropdownOpen(false);
  };

  const handleTypeSelect = (type: string | null) => {
    setSelectedType(type);
    setTypeDropdownOpen(false);
  };

  const FilterSelector = () => (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {/* Year Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setYearDropdownOpen(!yearDropdownOpen);
              setTypeDropdownOpen(false);
            }}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors min-w-[120px] justify-between"
          >
            <span>{selectedYear || "年份 Year"}</span>
            <ChevronDown 
              size={14} 
              className={`transition-transform ${yearDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
          {yearDropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setYearDropdownOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                className="absolute top-full left-0 mt-1 bg-white border border-zinc-200 rounded-lg shadow-lg z-50 min-w-[120px] overflow-hidden"
              >
                <button
                  onClick={() => handleYearSelect(null)}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-zinc-50 transition-colors ${
                    !selectedYear ? "bg-black text-white hover:bg-black" : "text-zinc-700"
                  }`}
                >
                  全部 All
                </button>
                {years.map(year => (
                  <button
                    key={year}
                    onClick={() => handleYearSelect(year)}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-zinc-50 transition-colors ${
                      selectedYear === year ? "bg-black text-white hover:bg-black" : "text-zinc-700"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </div>

        {/* Type Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setTypeDropdownOpen(!typeDropdownOpen);
              setYearDropdownOpen(false);
            }}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors min-w-[140px] justify-between"
          >
            <span>{selectedType ? (t(`papers.types.${selectedType}`) || selectedType) : t("类型 Type") || "类型 Type"}</span>
            <ChevronDown 
              size={14} 
              className={`transition-transform ${typeDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
          {typeDropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setTypeDropdownOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                className="absolute top-full left-0 mt-1 bg-white border border-zinc-200 rounded-lg shadow-lg z-50 min-w-[140px] overflow-hidden"
              >
                <button
                  onClick={() => handleTypeSelect(null)}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-zinc-50 transition-colors ${
                    !selectedType ? "bg-black text-white hover:bg-black" : "text-zinc-700"
                  }`}
                >
                  全部 All
                </button>
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => handleTypeSelect(type)}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-zinc-50 transition-colors ${
                      selectedType === type ? "bg-black text-white hover:bg-black" : "text-zinc-700"
                    }`}
                  >
                    {t(`papers.types.${type}`) || type}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </div>

        {/* Clear Button */}
        {(selectedYear || selectedType) && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 px-3 py-2.5 text-sm text-zinc-500 hover:text-black hover:bg-zinc-100 rounded-lg transition-colors"
          >
            <X size={14} />
            清除筛选
          </button>
        )}
      </div>
    </div>
  );

  const PaperCard = ({ paper, index }: { paper: any; index: number }) => {
    const adjustedDelay = Math.min(index * 0.05, 0.5);
    return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      transition={{ duration: 0.4, delay: adjustedDelay, ease: "easeOut" }}
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
          {paper.description && (
            <p className="text-sm text-zinc-400 leading-relaxed">{paper.description}</p>
          )}
        </div>
      </div>
    </motion.div>
    );
  };

  return (
    <div className="w-full bg-white pt-12 pb-32">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter">论文 <span className="text-zinc-300">PAPERS</span></h1>
          <p className="text-base md:text-lg text-zinc-500 leading-relaxed font-light">
            本实验室的研究成果持续发表于CHI、DIS、Ubicomp、IDC等国际顶级学术会议及顶级期刊。
          </p>
        </motion.div>
      </div>

      <section className="max-w-7xl mx-auto px-6">
        <div className="border-t border-zinc-200 pt-8">
          <FilterSelector />
          
          {filteredPapers.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-zinc-500"
            >
              <p className="text-lg">暂无符合条件的论文</p>
              <p className="text-sm mt-2">请尝试调整筛选条件</p>
            </motion.div>
          ) : (
            <motion.div
              key={selectedYear || selectedType || "all"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filteredPapers.map((paper, idx) => (
                <PaperCard key={paper.id} paper={paper} index={idx} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
