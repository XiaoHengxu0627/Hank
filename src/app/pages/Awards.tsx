import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/context";

export function Awards() {
  const { t, language } = useLanguage();

  // 奖项数据，包含链接占位符
  const awards = [
    {
      id: "award-1",
      workTitle: "Musipple",
      title: "红点设计概念奖",
      titleEn: "Red Dot Award: Design Concept",
      authors: "何自强",
      authorsEn: "Zhiqiang He",
      image: "/heziqiang.reddot.jpg",
      workLink: "#",
      titleLink: "#",
      authorsLink: "#",
      imageLink: "#"
    },
    {
      id: "award-2",
      workTitle: "Holding hands while the walls come tumbling down",
      title: "2024年iF设计奖",
      titleEn: "iF Design Award 2024",
      authors: "户润恺",
      authorsEn: "Runkai Hu",
      image: "/hurunkai.if.jpg",
      workLink: "#",
      titleLink: "#",
      authorsLink: "#",
      imageLink: "#"
    },
    {
      id: "award-3",
      workTitle: "智能一体化草方格铺设车",
      workTitleEn: "Integrated Intelligent Grass Grid Laying Vehicle",
      title: "2024好设计金奖",
      titleEn: "Good Design Gold Award 2024",
      authors: "颜羽鹏、何自强、明世杰",
      authorsEn: "Yupeng Yan, Zhiqiang He, Shijie Ming",
      image: "/haosheji.jpg",
      workLink: "#",
      titleLink: "#",
      authorsLink: "#",
      imageLink: "#"
    }
  ];

  // 奖项条目组件
  const AwardCard = ({ award, index }: { award: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row gap-6 md:gap-12 border-t border-zinc-200 py-12 cursor-pointer"
    >
      {/* 主图部分 */}
      <div className="w-full md:w-4/12 aspect-[16/8.5] relative overflow-hidden bg-zinc-100">
        <a href={award.imageLink} className="block w-full h-full">
          <img
            src={award.image}
            alt={award.workTitle}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </a>
      </div>

      {/* 文字内容部分 */}
      <div className="w-full md:w-8/12 flex flex-col justify-center px-6">
        {/* 作品名称 - 最大字号 */}
        <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-zinc-600 transition-colors tracking-tight">
          <a href={award.workLink} className="text-zinc-900 hover:text-zinc-600 transition-colors">
            {language === 'en' ? (award.workTitleEn || award.workTitle) : award.workTitle}
          </a>
        </h2>

        {/* 奖项名称 - 次一级字号 */}
        <h3 className="text-base md:text-lg font-semibold mb-3 text-zinc-700">
          <a href={award.titleLink} className="text-zinc-700 hover:text-zinc-900 transition-colors">
            {language === 'en' ? award.titleEn : award.title}
          </a>
        </h3>

        {/* 作者名称 */}
        <p className="text-sm text-zinc-500 mb-5 font-light">
          <a href={award.authorsLink} className="text-zinc-500 hover:text-zinc-900 transition-colors">
            {language === 'en' ? award.authorsEn : award.authors}
          </a>
        </p>

        {/* 链接指示器 */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {language === 'en' ? 'View Details' : '查看详情'} <ArrowUpRight size={13} />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full bg-white pt-12 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter">{t("awards.title")} <span className="text-zinc-300">{t("awards.titleEn")}</span></h1>
          <p className="text-base md:text-lg text-zinc-500 leading-relaxed font-light">
            {t("awards.subtitle")}
          </p>
        </motion.div>
      </div>

      <section className="max-w-7xl mx-auto px-6">
        <div className="border-b border-zinc-200">
          {awards.map((award, idx) => (
            <AwardCard key={award.id} award={award} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}