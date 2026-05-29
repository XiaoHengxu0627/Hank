import { motion } from "motion/react";
import { useLanguage } from "../i18n/context";
import { teacherTopics } from "../data/topics";

export function Topics() {
  const { t, language } = useLanguage();

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
                    {language === "en" ? (topic.contentEn || topic.content) : topic.content}
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
