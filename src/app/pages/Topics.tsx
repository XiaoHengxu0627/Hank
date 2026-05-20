import { motion } from "motion/react";
import { useLanguage } from "../i18n/context";

const teacherTopics = [
  {
    id: "t-1",
    content: "国家科技部外专项目 DL2023178004L，\"虚拟交互设计与设计思维视域下的一带一路\"，2023-2024，负责人 - 姜可",
  },
  {
    id: "t-2",
    content: "参与国家社科基金重大项目 12&ZD234，\"世界记忆遗产\"东巴经典传承体系数字化国际共享平台建设研究，从事其中东巴文化信息与交互设计研究，2013-2018 - 姜可",
  },
  {
    id: "t-3",
    content: "参与国家社科基金一般项目 10BF055，\"20世纪以来的西方艺术设计理论体系研究\"，从事设计研究，2011-2013 - 姜可",
  },
  {
    id: "t-4",
    content: "参与国家重大专项\"高精度数控闭式静压转台立式圆台磨床研制\"（课题编号：2011ZX04002-062），从事其中工业设计，2010-2015 - 姜可",
  },
  {
    id: "t-5",
    content: "北京市科技计划项目\"ZH5120立式钻铣加工中心外观造型研究和开发设计\"(Z11111005490000)，负责人，2011-2012 - 姜可",
  },
  {
    id: "t-6",
    content: "北京市教委人才强教项目\"工业设计提升数控装备竞争力的关键技术研究\"(PHR201008427)，负责人，2010-2012 - 姜可",
  },
];

export function Topics() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white pt-12 pb-32">
      <div className="max-w-7xl 2xl:max-w-9xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl 2xl:max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-black mb-4 tracking-tighter">{t("topics.title")} <span className="text-zinc-300">{t("topics.titleEn")}</span></h1>
          <p className="text-base md:text-lg 2xl:text-xl text-zinc-500 leading-relaxed font-light">
            {t("topics.subtitle")}
          </p>
        </motion.div>
      </div>

      <section className="max-w-7xl 2xl:max-w-9xl mx-auto px-6">
        <div className="border-t border-zinc-200">
          {teacherTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5), ease: "easeOut" }}
              className="group border-b border-zinc-100 py-5 cursor-pointer hover:bg-zinc-50 transition-colors px-4 -mx-4"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 text-right">
                  <span className="text-sm font-mono text-zinc-400">[{index + 1}]</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-zinc-600 leading-relaxed break-words">
                    {topic.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border-t border-zinc-200">
          <div className="py-16">
            <p className="text-zinc-400 text-center">...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
