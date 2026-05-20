import { motion } from "motion/react";
import { useLanguage } from "../i18n/context";

export function AcademicExchange() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white pt-12 pb-32">
      <div className="max-w-7xl 2xl:max-w-9xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl 2xl:max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-black mb-4 tracking-tighter">{t("academicExchange.title")} <span className="text-zinc-300">{t("academicExchange.titleEn")}</span></h1>
          <p className="text-base md:text-lg 2xl:text-xl text-zinc-500 leading-relaxed font-light">
            {t("academicExchange.subtitle")}
          </p>
        </motion.div>
      </div>

      <section className="max-w-7xl 2xl:max-w-9xl mx-auto px-6">
        <div className="border-t border-zinc-200 pt-12">
          <p className="text-zinc-400 text-center py-16">内容更新中...</p>
        </div>
      </section>
    </div>
  );
}