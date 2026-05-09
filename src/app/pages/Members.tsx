import { motion } from "motion/react";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { useLanguage } from "../i18n/context";

export function Members() {
  const { t } = useLanguage();

  const advisors = [
    {
      id: "prof-jiang",
      name: "姜可",
      enName: "Prof. Jiang Ke",
      role: "实验室主任 / Director",
      bio: "专注于人机交互、设计认知与人工智能交叉领域。",
      image: "/jiang-ke.jpg",
    },
  ];

  const phdStudents = [
    {
      id: "phd-1",
      name: "何自强",
      enName: "Zhiqiang He",
      role: "2022级 博士生",
      research: "虚拟现实｜具身代理交互｜无障碍设计",
      image: "/zhiqiang-he.jpg",
    },
    {
      id: "phd-2",
      name: "赵凝",
      enName: "Ning Zhao",
      role: "2025级 博士生",
      research: "虚拟现实｜人机交互｜虚拟博物馆",
      image: "/zhaoning.jpg",
    },
    {
      id: "phd-3",
      name: "明世杰",
      enName: "Shijie Ming",
      role: "2023级 博士生",
      research: "虚拟现实｜人机交互",
      image: "/mingshijie.jpg",
    },
    {
      id: "phd-4",
      name: "颜羽鹏",
      enName: "Yupeng Yan",
      role: "2023级 博士生",
      research: "虚拟现实｜人机交互",
      image: "/yanyupeng.jpg",
    },
    {
      id: "phd-5",
      name: "张靖宇",
      enName: "Jingyu Zhang",
      role: "2021级 博士生",
      research: "人机交互",
      image: "/zhangjingyu.jpg",
    },
  ];

  const masterStudents = [
    {
      id: "ms-1",
      name: "孙福瑞",
      enName: "Furui Sun",
      role: "2025级 硕士生",
      image: "/sunfurui.jpg", // Asian male student placeholder
    },
    {
      id: "ms-2",
      name: "肖蘅栩",
      enName: "Hengxu Xiao",
      role: "2025级 硕士生",
      image: "/xiaohengxu.jpg", // Female student placeholder
    },
    {
      id: "ms-3",
      name: "王资婷",
      enName: "Ziting Wang",
      role: "2025级 硕士生",
      image: "/wangziting.jpg", // Female student placeholder
    },
    {
      id: "ms-4",
      name: "王天乐",
      enName: "Tianle Wang",
      role: "2025级 硕士生",
      image: "/wangtianle.jpg", // Female student placeholder
    },
    {
      id: "ms-5",
      name: "张远",
      enName: "Yuan Zhang",
      role: "2025级 硕士生",
      image: "/zhangyuan.jpg", // Female student placeholder
    },
    {
      id: "ms-6",
      name: "宋忠诚",
      enName: "Zhongcheng Song",
      role: "2025级 硕士生",
      image: "/songzhongcheng.jpg", // Female student placeholder
    },
    {
      id: "ms-7",
      name: "苑浩鹏",
      enName: "HaoPeng Yuan",
      role: "2024级 硕士生",
      image: "/yuanhaopeng.jpg", // Female student placeholder
    },
    {
      id: "ms-8",
      name: "刘耘彤",
      enName: "YunTong Liu",
      role: "2024级 硕士生",
      image: "/liuyuntong.jpg", // Female student placeholder
    },
    {
      id: "ms-9",
      name: "刘俊博",
      enName: "Junbo Liu",
      role: "2024级 硕士生",
      image: "/liujunbo.jpg", // Female student placeholder
    },
    {
      id: "ms-10",
      name: "赵叶予",
      enName: "Yeyu Zhao",
      role: "2024级 硕士生",
      image: "/zhaoyeyu.jpg", // Female student placeholder
    },
    {
      id: "ms-11",
      name: "黎思颖",
      enName: "Siying Li",
      role: "2024级 硕士生",
      image: "/lisiying.jpg", // Female student placeholder
    },
    {
      id: "ms-12",
      name: "魏涵芮",
      enName: "Hanrui Wei",
      role: "2024级 硕士生",
      image: "/weihanrui.jpg", // Female student placeholder
    },
    {
      id: "ms-13",
      name: "王佳颖",
      enName: "Jiaying wang",
      role: "2024级 硕士生",
      image: "/wangjiaying.jpg", // Female student placeholder
    },
  ];

  const MemberCard = ({ member, large = false }: { member: any; large?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group flex flex-col cursor-pointer"
    >
      <div className={`relative overflow-hidden mb-4 sm:mb-6 ${large ? "aspect-[3/4] sm:aspect-[2/3]" : "aspect-[3/4] sm:aspect-[2/3]"}`}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-all duration-700"
        />
        
        {/* Social Links on Hover */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col gap-1.5 sm:gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <button className="w-7 sm:w-10 h-7 sm:h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
            <Mail size={12} />
          </button>
          <button className="w-7 sm:w-10 h-7 sm:h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
            <ExternalLink size={12} />
          </button>
        </div>
      </div>
      
      <div className="flex flex-col gap-1.5 px-1">
        <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide">
          {member.name}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal">{member.enName}</p>
        <p className="text-xs sm:text-sm font-medium text-black uppercase tracking-widest mt-0.5 sm:mt-1">{member.role}</p>
        <p className="text-xs sm:text-sm text-zinc-500 mt-0.5 sm:mt-1 leading-relaxed hidden sm:block">{member.bio || member.research}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full bg-white pt-24 pb-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">{t("members.title")} <span className="text-zinc-300">{t("members.titleEn")}</span></h1>
          <p className="text-lg text-zinc-500 leading-relaxed font-light">
            {t("members.subtitle")}<br />
            {t("members.subtitle2")}
          </p>
        </motion.div>
      </div>

      {/* Advisors Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 mb-20 sm:mb-32">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12 border-b border-zinc-200 pb-3 sm:pb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest uppercase">{t("members.advisors")}</h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-x-3 sm:gap-x-6 md:gap-x-12 gap-y-8 sm:gap-y-16">
          {advisors.map((advisor) => (
            <MemberCard key={advisor.id} member={advisor} large={true} />
          ))}
        </div>
      </section>

      {/* PhD Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 mb-20 sm:mb-32">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12 border-b border-zinc-200 pb-3 sm:pb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest uppercase">{t("members.phdStudents")}</h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 sm:gap-x-4 md:gap-x-8 gap-y-8 sm:gap-y-16">
          {phdStudents.map((student) => (
            <MemberCard key={student.id} member={student} />
          ))}
        </div>
      </section>

      {/* Master Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 mb-20 sm:mb-32">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12 border-b border-zinc-200 pb-3 sm:pb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest uppercase">{t("members.masterStudents")}</h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 sm:gap-x-4 md:gap-x-8 gap-y-8 sm:gap-y-16">
          {masterStudents.map((student) => (
            <MemberCard key={student.id} member={student} />
          ))}
        </div>
      </section>

      {/* Join Us Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-zinc-50 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 border border-zinc-100">
          <div>
            <h3 className="text-3xl font-bold mb-4">加入我们 Join the Lab</h3>
            <p className="text-zinc-600 max-w-xl leading-relaxed">
              我们常年招收具有设计、计算机、心理学等专业背景的优秀硕士、博士研究生。
              如果你对科技与艺术的交汇点充满热情，欢迎发送简历与作品集至我们的邮箱。
            </p>
          </div>
          <button className="bg-black text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-zinc-800 transition-colors whitespace-nowrap">
            联系我们 Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
