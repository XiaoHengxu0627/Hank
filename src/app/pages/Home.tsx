import { motion } from "motion/react";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../i18n/context";

export function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] bg-zinc-950 text-white flex flex-col justify-center px-6 md:px-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1764530926841-4ffd875b97c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGxpZ2h0fGVufDF8fHx8MTc3NTk5OTcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/50 to-transparent z-10" />

        <div className="relative z-20 max-w-5xl mx-auto w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-sm tracking-[0.3em] text-zinc-400 font-medium uppercase">
              {t("home.labName")}
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
              {t("home.heroTitle1")}<br />
              <span className="text-zinc-500">{t("home.heroTitle2")}</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-zinc-300 font-light mt-6 leading-relaxed">
              {t("home.heroDesc1")}<br />
              {t("home.heroDesc2")}<br />
              {t("home.heroDesc3")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About the Lab Highlight */}
      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            <div className="aspect-[4/3] bg-zinc-100 overflow-hidden relative">
              <img
                src="/jiang-ke.jpg"
                alt="Professor Jiang Ke"
                className="w-full h-full object-cover mix-blend-multiply transition-all duration-700 cursor-pointer"
              />
              <div className="absolute bottom-6 left-6 bg-white px-6 py-4 shadow-xl">
                <p className="font-bold text-lg leading-tight">{t("home.professorName")} / {t("home.professorEnName")}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{t("home.director")}</p>
              </div>
            </div>
            {/* Design accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-zinc-300 z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-zinc-300 z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">{t("home.missionTitle")}<br />{t("home.missionSubtitle")}</h2>
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
          <span>INTERACTION DESIGN</span>
          <span>•</span>
          <span>ARTIFICIAL INTELLIGENCE</span>
          <span>•</span>
          <span>HUMAN-COMPUTER INTERACTION</span>
          <span>•</span>
          <span>USER EXPERIENCE</span>
          <span>•</span>
          <span>DIGITAL MEDIA</span>
          <span>•</span>
          <span>INTERACTION DESIGN</span>
          <span>•</span>
          <span>ARTIFICIAL INTELLIGENCE</span>
          <span>•</span>
          <span>HUMAN-COMPUTER INTERACTION</span>
          <span>•</span>
          <span>USER EXPERIENCE</span>
          <span>•</span>
          <span>DIGITAL MEDIA</span>
          <span>•</span>
        </motion.div>
      </section>
    </div>
  );
}
