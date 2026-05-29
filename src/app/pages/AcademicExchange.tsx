import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/context";
import { exchanges } from "../data/exchanges";

export function AcademicExchange() {
  const { t, language } = useLanguage();

  const ExchangeCard = ({ exchange, index }: { exchange: any; index: number }) => (
    <motion.a
      href={exchange.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row gap-6 md:gap-12 border-t border-zinc-200 py-12 cursor-pointer block"
    >
      <div className="w-full md:w-4/12 aspect-[16/8.5] relative overflow-hidden bg-zinc-100">
        <img
          src={exchange.image}
          alt={exchange.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>

      <div className="w-full md:w-8/12 flex flex-col justify-center px-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-zinc-600 transition-colors tracking-tight text-zinc-900">
          {language === "en" ? exchange.titleEn : exchange.title}
        </h2>

        <p className="text-sm text-zinc-500 mb-5 font-light">
          {language === "en" ? exchange.dateEn : exchange.date}
        </p>

        <p className="text-sm text-zinc-600 mb-5 font-light">
          {language === "en" ? exchange.keywordsEn : exchange.keywords}
        </p>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {language === "en" ? "View Details" : "查看详情"} <ArrowUpRight size={13} />
        </div>
      </div>
    </motion.a>
  );

  return (
    <div className="w-full bg-white pt-12 pb-32 min-h-screen">
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
        <div className="border-b border-zinc-200">
          {exchanges.map((exchange, index) => (
            <ExchangeCard key={exchange.id} exchange={exchange} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
