import { motion } from "motion/react";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../i18n/context";

export function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-dynamic-90 bg-zinc-950 text-white flex flex-col justify-center px-6 md:px-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-[url('/background.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-zinc-950/15 to-transparent z-10" />

        <div className="relative z-20 max-w-5xl 2xl:max-w-7xl mx-auto w-full pt-[40px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            <h2 className="text-sm tracking-[0.3em] text-zinc-400 font-medium uppercase">
              {t("home.labName")}
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black leading-[1.15] tracking-tight">
              {t("home.heroTitle1")}<br />
              <span className="text-zinc-500 text-2xl md:text-4xl lg:text-5xl block mt-6">{t("home.heroTitle2")}</span>
            </h1>
            <div className="flex flex-wrap justify-between gap-3 w-full max-w-5xl mt-28">
              <span className="text-xs md:text-sm lg:text-base text-zinc-500 font-light tracking-wide">{t("home.heroDesc1")}</span>
              <span className="text-xs md:text-sm lg:text-base text-zinc-500 font-light tracking-wide">{t("home.heroDesc2")}</span>
              <span className="text-xs md:text-sm lg:text-base text-zinc-500 font-light tracking-wide">{t("home.heroDesc3")}</span>
              <span className="text-xs md:text-sm lg:text-base text-zinc-500 font-light tracking-wide">{t("home.heroDesc4")}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Lab Highlight */}
      <section className="py-32 px-6 md:px-20 2xl:px-32 bg-white">
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative">
              <div className="aspect-[4/3] bg-zinc-100 overflow-hidden relative">
                <img
                  src="/jiang-ke.jpg"
                  alt="Professor Jiang Ke"
                  className="w-full h-full object-cover mix-blend-multiply transition-all duration-700 cursor-pointer"
                />
                {/* Top-right design accent - Keep inside relative container to overlap slightly if needed */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-zinc-300 z-0 pointer-events-none" />
              </div>
              
              {/* Unified Info Box - Below the image, left-aligned */}
              <div className="mt-8 md:mt-10">
                <div className="border-l-4 border-black pl-6 py-2">
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                    <p className="font-bold text-xl md:text-2xl leading-tight">{t("home.professorName")}</p>
                    <p className="text-sm md:text-base text-zinc-400 font-medium uppercase tracking-wider mt-1 md:mt-0">{t("home.professorEnName")}</p>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest mt-4 md:mt-5 font-bold">{t("home.director")}</p>
                  <p className="text-xs md:text-sm text-zinc-500 mt-1 font-light">{t("home.schoolTitle")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-8"
          >
            <div>
              <h2 className="text-4xl 2xl:text-5xl font-bold mb-4 tracking-tight">{t("home.missionTitle")}<br />{t("home.missionSubtitle")}</h2>
              <div className="w-12 h-1 bg-black mb-8" />
              <p className="text-zinc-600 leading-loose text-lg font-light mb-6">
                {t("home.missionDesc1")}
              </p>
              <p className="text-zinc-600 leading-loose text-lg font-light">
                {t("home.missionDesc2")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-4 pt-8 border-t border-zinc-100">
              <div>
                <Layers className="w-8 h-8 text-black mb-4" />
                <h3 className="font-bold text-lg mb-2">{t("home.crossField")}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {t("home.crossFieldDesc")}
                </p>
              </div>
              <div>
                <BookOpen className="w-8 h-8 text-black mb-4" />
                <h3 className="font-bold text-lg mb-2">{t("home.researchOriented")}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {t("home.researchOrientedDesc")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ticker / Scrolling text area */}
      <section className="bg-zinc-950 py-16 overflow-hidden flex whitespace-nowrap border-y border-zinc-800">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex gap-16 text-zinc-700 text-6xl font-black uppercase tracking-tighter"
        >
          <span>CUI Design Lab 三篇论文在 Cumulus 2026 国际设计学术会议上发表</span>
          <span>•</span>
          <span>CUI Design Lab 三篇论文在 Cumulus 2026 国际设计学术会议上发表</span>
          <span>•</span>
        </motion.div>
      </section>
    </div>
  );
}
