import { motion } from "motion/react";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { useState, useMemo } from "react";
import { useLanguage } from "../i18n/context";

export function Papers() {
  const { t } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);

  const papers = [
    {
      id: "paper-1",
      content: "HE Z Q, MING S J, ZHANG H, et al. Guiding Auditory AR: A VR-Based Evaluation of Visual and Tactile Cues for Sound Localization for Cochlear Implant Users[J]. IEEE Transactions on Visualization and Computer Graphics, 2026.（中科院top期刊，CCF-A,JCR Q1）",
      type: "Journal Paper",
      year: "2026",
    },
    {
      id: "paper-3",
      content: "HE Z Q, JIANG K, MING S J, ZHAO N, YUAN H P. Reshaping the \"Roots\": A Physio-Based Study of Self-Other Cognition in VR Avatar-EIA Interaction[C]//Cumulus '26. 2026.（设计学A会）",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-4",
      content: "ZHAO N, JIANG K, HE Z Q, MING S J, YUAN H P, SUN F R. From Hands-on to Embodied: A Participatory Prototyping Framework for Free-Roam VR Heritage in the Case of Yan'an[C]//Cumulus '26. 2026.（设计学A会）",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-5",
      content: "ZHAO N, JIANG K, HE Z Q, MING S J, YUAN H P, SUN F R. More Than a Container: Spatial Layout as a Cognitive Lever for Memory in Virtual Reality Heritage[C]//HCII '26. 2026.（设计学A会）",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-6",
      content: "ZHAO N, JIANG K, HE Z Q, MING S J, YUAN H P, SUN F R. The Memory Loom: Reweaving Curatorial Power Relations with Source Communities in Virtual Reality Cultural Heritage[C]//DRS '26. 2026.（设计学顶会）",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-7",
      content: "MING S J, JIANG K, HE Z Q, ZHAO N, YUAN H P, SUN F R. Optimizing Gradient Vignetting for VR Visual Fatigue Reduction: An Empirical Study of Its Non-Linear Effects[C]//HCII '26. 2026.（设计学A会，EI检索）",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-8",
      content: "MING S J, JIANG K, HE Z Q, ZHAO N, WANG Z A, YUAN H P, SUN F R. Task-Driven Proxemics: Finding the Optimal Social Distance for Virtual Guides in Different Tasks[C]//HCII '26. 2026.（设计学A会，EI检索）",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-9",
      content: "MING S J, JIANG K, HE Z Q, ZHAO N, YAN Y P, YUAN H P, SUN F R. Beyond the Archive: Designing Routes for Living Heritage Encounters in Location-Based VR[C]//Cumulus '26. 2026.（设计学A会）",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-10",
      content: "MING S J, HE Z Q, ZHAO N, YUAN H P, SUN F R, JIANG K. Making with Virtual Materials: Reframing \"Making as Knowing\" for Situated Narratives in Large-Scale VR[C]//DRS '26. 2026.（设计学顶会）",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-11",
      content: "YUAN H P, JIANG K, HE Z Q, MING S J, ZHAO N, SUN F R. Embodied Cognition-Based Evaluation of Humanoid Robot Appearance in Virtual Reality Environment[C]//HCII '26. 2026.（设计学A会，EI检索）",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-12",
      content: "颜羽鹏,姜可.多任务情境下指挥信息系统直感交互设计研究[J].包装工程,2026,47(4):53-64.（北大核心）",
      type: "Journal Paper",
      year: "2026",
    },
    {
      id: "paper-13",
      content: "颜羽鹏,姜可,赵祎乾,等.面向多维情感体验的指挥训练舱色彩设计研究[J].机械设计,2026,43(2):234-240.（CSCD）",
      type: "Journal Paper",
      year: "2026",
    },
    {
      id: "paper-14",
      content: "颜羽鹏,姜可.基于情境自适应的指挥信息系统交互设计研究[J].包装工程,2026,47(8):1-13+27.（北大核心）",
      type: "Journal Paper",
      year: "2026",
    },
    {
      id: "paper-16",
      content: "HE Z, JIANG K, MING S J, et al. Icebreaking: Building Trust and Empathy with Virtual Museum Embodied Conversational Agents via Personalized Initial Interactions[C]//ISMAR '25. 2025.（CCF-B）",
      type: "Conference Paper",
      year: "2025",
    },
    {
      id: "paper-17",
      content: "何自强,姜可,明世杰,等.基于自然交互的前臂截肢者虚拟现实手柄交互设计研究[J].包装工程,2025,46(22):36-50.（北大核心）",
      type: "Journal Paper",
      year: "2025",
    },
    {
      id: "paper-18",
      content: "颜羽鹏,姜可,魏大彭,等.草方格铺设车操控台界面布局设计研究[J].机械设计,2025,42(12):189-196.（CSCD）",
      type: "Journal Paper",
      year: "2025",
    },
    {
      id: "paper-19",
      content: "颜羽鹏,姜可,石星辰,等.虚拟装配实训具身交互技术应用研究[J].包装工程,2025,46(18):84-95.（北大核心）",
      type: "Journal Paper",
      year: "2025",
    },
    {
      id: "paper-20",
      content: "颜羽鹏,姜可,张靖宇,等.交通情报信息系统人机协同决策技术应用进展[J].包装工程,2025,46(14):23-35+45.（北大核心）",
      type: "Journal Paper",
      year: "2025",
    },
    {
      id: "paper-21",
      content: "颜羽鹏,姜可.基于增强现实的指挥空间信息布局设计研究[J].现代防御技术,2026,54(1):51-60.（北大核心）",
      type: "Journal Paper",
      year: "2025",
    },
    {
      id: "paper-22",
      content: "HE Z, JIANG K. Meta Arm: VR Control Device for Forearm Amputees[C]//HCI International '24. 2024.（设计学A会，EI检索）",
      type: "Conference Paper",
      year: "2024",
    },
    {
      id: "paper-23",
      content: "姜可,张靖宇,颜羽鹏,等.扩展现实背景下的虚拟体验设计研究[J].包装工程,2024,45(20):43-48+57.（北大核心）",
      type: "Journal Paper",
      year: "2024",
    },
    {
      id: "paper-24",
      content: "颜羽鹏,姜可,程健鹏,等.作战筹划系统多模态人机交互技术应用进展[J].机械设计,2024,41(7):175-181.（CSCD）",
      type: "Journal Paper",
      year: "2024",
    },
    {
      id: "paper-25",
      content: "YAN Y P, JIANG K, CHENG J P. Design and Implementation of Traffic Big Data Super Correlation System[C]//ICBDIE '24. 2024.（重要会议）",
      type: "Conference Paper",
      year: "2024",
    },
    {
      id: "paper-27",
      content: "HE Z, JIANG K, ZHANG J, GAO Y, NA Z. Collaborative Design Based on Metaverse Technology: Case of Interactive Design of Children's Educational Products[C]//AHFE 2023. 2023.（设计学重要会议）",
      type: "Conference Paper",
      year: "2023",
    },
    {
      id: "paper-28",
      content: "ZHANG J Y, JIANG K, WANG S H, MING S J, WANG H D. Forestlight: A Virtual Reality Respiratory Biofeedback System Using Interactive Lighting for Pressure Relief[C]//SUI '23. 2023.（设计学重要会议）",
      type: "Conference Paper",
      year: "2023",
    },
    {
      id: "paper-30",
      content: "姜可. 数字交互空间设计研讨工作坊: 一带一路背景[C]//Cumulus CAFA '23. 2023.（设计学A会）",
      type: "Workshop",
      year: "2023",
    },
    {
      id: "paper-31",
      content: "[1]林倩倩,何自强,王丹.“光”文字衍生落地灯[J].包装工程,2022,43(18):2.（北大核心）",
      type: "Journal Paper",
      year: "2022",
    },
    {
      id: "paper-32",
      content: "JIANG K, HUGHES B. Imaginary Museums: A New Approach to the Learning and Assessment of Design History[C]//DRS Learn X Design '21. 2021.（设计学顶会）",
      type: "Conference Paper",
      year: "2021",
    },
    {
      id: "paper-33",
      content: "姜可, 韩炎萃, 安晓颖. 工业设计奖项发展现状及趋势[M]//设计产业蓝皮书: 中国设计产业发展报告2019—2020. 2020.",
      type: "Book Chapter",
      year: "2020",
    },
    {
      id: "paper-34",
      content: "姜可. 工业设计史: 新一版[M]. 上海: 上海人民美术出版社, 2016.",
      type: "Book",
      year: "2016",
    },
    {
      id: "paper-35",
      content: "姜可. 光伏逆变机柜外观专利: ZL 2013 3 0039385.9[P]. 2013.",
      type: "Patent",
      year: "2013",
    },
    {
      id: "paper-36",
      content: "JIANG K. Cardinal on Style Image Cognition of Machine Center[J]. Journal of Grey System, 2012.",
      type: "Journal Paper",
      year: "2012",
    },
    {
      id: "paper-37",
      content: "姜可. 通用设计: 心理关爱的设计研究和实践[M]. 北京: 化学工业出版社, 2012.",
      type: "Book",
      year: "2012",
    },
    {
      id: "paper-38",
      content: "姜可. 设计的真相[M]. 北京: 北京出版社, 2012.",
      type: "Book",
      year: "2012",
    },
    {
      id: "paper-39",
      content: "JIANG K, WANG J J. Research on the Mathematical Description of Style Image of Machining Centers[J]. Advanced Materials Research, 2011.",
      type: "Conference Paper",
      year: "2011",
    },
    {
      id: "paper-40",
      content: "姜可. 数控装备的产品语意及人机工学在线数据库系统V1.0: 2011SRBJ0729[CP]. 2011.",
      type: "Patent",
      year: "2011",
    },
    {
      id: "paper-41",
      content: "JIANG K, WANG J J. Web-Based Image Scale Dynamic Partition[C]//CAIDCD '10. 2010.",
      type: "Conference Paper",
      year: "2010",
    },
    {
      id: "paper-42",
      content: "姜可. 手臂式体温测试仪外观专利: ZL 2010 3 0603659.9[P]. 2010.",
      type: "Patent",
      year: "2010",
    },
    {
      id: "paper-43",
      content: "姜可. 中国工业设计年鉴[M]. 北京: 知识产权出版社, 2006.",
      type: "Book",
      year: "2006",
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
            <span>{selectedYear || t("papers.yearFilter")}</span>
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
                  {t("papers.all")}
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
            <span>{selectedType ? (t(`papers.types.${selectedType}`) || selectedType) : t("papers.typeFilter")}</span>
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
{t("papers.clearFilter")}
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
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: adjustedDelay, ease: "easeOut" }}
      className="group border-b border-zinc-100 py-6 cursor-pointer hover:bg-zinc-50 transition-colors px-4 -mx-4"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 text-right">
          <span className="text-sm font-mono text-zinc-400">[{index + 1}]</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-zinc-600 leading-relaxed break-words">
            {paper.content}
          </p>
        </div>
      </div>
    </motion.div>
    );
  };

  return (
    <div className="w-full bg-white pt-12 pb-32">
      <div className="max-w-7xl 2xl:max-w-9xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl 2xl:max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-black mb-4 tracking-tighter">{t("papers.title")} <span className="text-zinc-300">{t("papers.titleEn")}</span></h1>
          <p className="text-base md:text-lg 2xl:text-xl text-zinc-500 leading-relaxed font-light">
            {t("papers.subtitle")}
          </p>
        </motion.div>
      </div>

      <section className="max-w-7xl 2xl:max-w-9xl mx-auto px-6">
        <div className="border-t border-zinc-200 pt-8">
          <FilterSelector />
          
          {filteredPapers.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-zinc-500"
            >
              <p className="text-lg">{t("papers.noResults")}</p>
              <p className="text-sm mt-2">{t("papers.noResultsHint")}</p>
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
