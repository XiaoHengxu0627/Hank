import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/context";
import { projects } from "../data/projects";

export function Projects() {
  const { t, language } = useLanguage();

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const adjustedDelay = Math.min(index * 0.06, 0.4);
    const CardWrapper = project.link ? motion.a : motion.div;
    
    return (
    <CardWrapper
      {...(project.link ? {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer"
      } : {})}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.5, delay: adjustedDelay, ease: "easeOut" }}
      className="group flex flex-col md:flex-row gap-6 md:gap-12 border-t border-zinc-200 py-12 cursor-pointer block"
    >
      <div className="w-full md:w-5/12 aspect-[16/8.5] relative overflow-hidden bg-zinc-100">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.id === "p4" ? "blur-[14px]" : ""}`}
        />
        {project.id === "p4" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 bg-white/80 px-3 py-1 rounded">保密</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="w-full md:w-7/12 flex flex-col justify-center px-6">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 bg-zinc-100 px-4 py-1.5">
            {project.category}
          </span>
          <span className="text-sm font-mono text-zinc-400">{project.date}</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold mb-3.5 group-hover:text-zinc-600 transition-colors tracking-tight text-zinc-900">
          {language === 'en' ? project.titleEn : project.title}
        </h3>
        
        <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl mb-5 font-light">
          {language === 'en' ? project.descriptionEn : project.description}
        </p>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {language === 'en' ? "View Details" : "查看详情"} <ArrowUpRight size={13} />
        </div>
      </div>
    </CardWrapper>
    );
  };

  return (
    <div className="w-full bg-white pt-12 pb-32">
      <div className="max-w-7xl 2xl:max-w-9xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl 2xl:max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-black mb-4 tracking-tighter">{t("projects.title")} <span className="text-zinc-300">{t("projects.titleEn")}</span></h1>
          <p className="text-base md:text-lg 2xl:text-xl text-zinc-500 leading-relaxed font-light">
            {t("projects.subtitle")}<br />
            {t("projects.subtitle2")}
          </p>
        </motion.div>
      </div>

      <section className="max-w-7xl 2xl:max-w-9xl mx-auto px-6">
        <div className="border-b border-zinc-200">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
