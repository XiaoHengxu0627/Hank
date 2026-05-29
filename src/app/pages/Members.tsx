import { motion } from "motion/react";
import { useLanguage } from "../i18n/context";

export function Members() {
  const { t, language } = useLanguage();

  const advisors = [
    {
      id: "prof-jiang",
      name: "姜可",
      enName: "Prof. Jiang Ke",
      role: "实验室主任",
      roleEn: "Director",
      schoolEn: "Professor, School of Design and Art, BIT",
      bio: "专注于设计学研究、人工智能与设计体验交叉领域。",
      bioEn: "Focus on human-computer interaction, design cognition and AI intersection.",
      image: "/jiang-ke.jpg",
    },
  ];

  const phdStudents = [
    {
      id: "phd-1",
      name: "何自强",
      enName: "Zhiqiang He",
      role: "2022级 博士生",
      roleEn: "Ph.D. Student, 2022",
      research: "虚拟现实｜具身代理交互｜无障碍设计",
      researchEn: "Virtual Reality | Embodied Agent Interaction | Accessibility Design",
      image: "/zhiqiang-he.jpg",
    },
    {
      id: "phd-2",
      name: "赵凝",
      enName: "Ning Zhao",
      role: "2025级 博士生",
      roleEn: "Ph.D. Student, 2025",
      research: "虚拟现实｜人机交互｜虚拟博物馆",
      researchEn: "Virtual Reality | HCI | Virtual Museum",
      image: "/zhaoning.jpg",
    },
    {
      id: "phd-3",
      name: "明世杰",
      enName: "Shijie Ming",
      role: "2023级 博士生",
      roleEn: "Ph.D. Student, 2023",
      research: "虚拟体验｜人机交互",
      researchEn: "Virtual Experience | HCI",
      image: "/mingshijie.jpg",
    },
    {
      id: "phd-4",
      name: "颜羽鹏",
      enName: "Yupeng Yan",
      role: "2023级 博士生",
      roleEn: "Ph.D. Student, 2023",
      research: "虚拟现实｜人机交互",
      researchEn: "Virtual Reality | HCI",
      image: "/yanyupeng.jpg",
    },
    {
      id: "phd-5",
      name: "张靖宇",
      enName: "Jingyu Zhang",
      role: "2021级 博士生",
      roleEn: "Ph.D. Student, 2021",
      research: "人机交互",
      researchEn: "Human-Computer Interaction",
      image: "/zhangjingyu.jpg",
    },
  ];

  const masterStudents = [
    {
      id: "ms-1",
      name: "孙福瑞",
      enName: "Furui Sun",
      role: "2025级 硕士生",
      roleEn: "Master Student, 2025",
      image: "/sunfurui.jpg",
    },
    {
      id: "ms-2",
      name: "肖蘅栩",
      enName: "Hengxu Xiao",
      role: "2025级 硕士生",
      roleEn: "Master Student, 2025",
      image: "/xiaohengxu.jpg",
    },
    {
      id: "ms-3",
      name: "王资婷",
      enName: "Ziting Wang",
      role: "2025级 硕士生",
      roleEn: "Master Student, 2025",
      image: "/wangziting.jpg",
    },
    {
      id: "ms-4",
      name: "王天乐",
      enName: "Tianle Wang",
      role: "2025级 硕士生",
      roleEn: "Master Student, 2025",
      image: "/wangtianle.jpg",
    },
    {
      id: "ms-5",
      name: "张远",
      enName: "Yuan Zhang",
      role: "2025级 硕士生",
      roleEn: "Master Student, 2025",
      image: "/zhangyuan.jpg",
    },
    {
      id: "ms-6",
      name: "宋忠诚",
      enName: "Zhongcheng Song",
      role: "2025级 硕士生",
      roleEn: "Master Student, 2025",
      image: "/songzhongcheng.jpg",
    },
    {
      id: "ms-7",
      name: "苑浩鹏",
      enName: "Haopeng Yuan",
      role: "2024级 硕士生",
      roleEn: "Master Student, 2024",
      image: "/yuanhaopeng.jpg",
    },
    {
      id: "ms-8",
      name: "刘耘彤",
      enName: "Yuntong Liu",
      role: "2024级 硕士生",
      roleEn: "Master Student, 2024",
      image: "/liuyuntong.jpg",
    },
    {
      id: "ms-9",
      name: "刘俊博",
      enName: "Junbo Liu",
      role: "2024级 硕士生",
      roleEn: "Master Student, 2024",
      image: "/liujunbo.jpg",
    },
    {
      id: "ms-10",
      name: "赵叶予",
      enName: "Yeyu Zhao",
      role: "2024级 硕士生",
      roleEn: "Master Student, 2024",
      image: "/zhaoyeyu.jpg",
    },
    {
      id: "ms-11",
      name: "黎思颖",
      enName: "Siying Li",
      role: "2024级 硕士生",
      roleEn: "Master Student, 2024",
      image: "/lisiying.jpg",
    },
    {
      id: "ms-12",
      name: "魏涵芮",
      enName: "Hanrui Wei",
      role: "2024级 硕士生",
      roleEn: "Master Student, 2024",
      image: "/weihanrui.jpg",
    },
    {
      id: "ms-13",
      name: "王佳颖",
      enName: "Jiaying Wang",
      role: "2024级 硕士生",
      roleEn: "Master Student, 2024",
      image: "/wangjiaying.jpg",
    },
    {
      id: "ms-14",
      name: "徐玉珍",
      enName: "Yuzhen Xu",
      role: "2024级 硕士生",
      roleEn: "Master Student, 2024",
      image: "/xuyuzhen.jpg",
    },
  ];

  const MemberCard = ({ member, large = false }: { member: any; large?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group flex flex-col cursor-pointer"
    >
      <div className="relative overflow-hidden mb-3 sm:mb-4 flex-shrink-0" style={{ aspectRatio: '3/4', minHeight: '160px' }}>
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 200'%3E%3Crect fill='%23f3f4f6' width='150' height='200'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='10' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(member.name)}%3C/text%3E%3C/svg%3E`;
          }}
          className="w-full h-full object-cover transition-all duration-500"
        />
        
      </div>
      
      <div className="flex flex-col gap-1.5 px-1">
        <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide">
          {language === 'en' ? member.enName : member.name}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal">{language === 'en' ? member.name : member.enName}</p>
        <p className="text-xs sm:text-sm font-medium text-black uppercase tracking-widest mt-0.5 sm:mt-1">
          {language === 'en' ? member.roleEn ?? member.role : member.role}
        </p>
        {member.school && (
          <p className="text-xs sm:text-sm text-zinc-500 tracking-wide">
            {language === 'en' ? (member.schoolEn ?? member.school) : member.school}
          </p>
        )}
        <p className="text-xs sm:text-sm text-zinc-500 mt-0.5 sm:mt-1 leading-relaxed hidden sm:block">
          {language === 'en' ? (member.researchEn ?? member.bioEn ?? member.research ?? member.bio) : (member.bio ?? member.research)}
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full bg-white pt-12 pb-32">
      {/* Header */}
      <div className="max-w-7xl 2xl:max-w-9xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl 2xl:max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-black mb-4 tracking-tighter">{t("members.title")} <span className="text-zinc-300">{t("members.titleEn")}</span></h1>
          <p className="text-base md:text-lg 2xl:text-xl text-zinc-500 leading-relaxed font-light">
            {t("members.subtitle")}<br />
            {t("members.subtitle2")}
          </p>
        </motion.div>
      </div>

      {/* Advisors Section */}
      <section className="max-w-7xl 2xl:max-w-9xl mx-auto px-3 sm:px-4 md:px-6 mb-20 sm:mb-32">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12 border-b border-zinc-200 pb-3 sm:pb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest uppercase">{t("members.advisors")}</h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-8 sm:gap-y-10">
          {advisors.map((advisor) => (
            <MemberCard key={advisor.id} member={advisor} large={true} />
          ))}
        </div>
      </section>

      {/* PhD Section */}
      <section className="max-w-7xl 2xl:max-w-9xl mx-auto px-3 sm:px-4 md:px-6 mb-16 sm:mb-24">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10 border-b border-zinc-200 pb-3 sm:pb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest uppercase">{t("members.phdStudents")}</h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-8 sm:gap-y-10">
          {phdStudents.map((student) => (
            <MemberCard key={student.id} member={student} />
          ))}
        </div>
      </section>

      {/* Master Section */}
      <section className="max-w-7xl 2xl:max-w-9xl mx-auto px-3 sm:px-4 md:px-6 mb-16 sm:mb-24">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10 border-b border-zinc-200 pb-3 sm:pb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest uppercase">{t("members.masterStudents")}</h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-8 sm:gap-y-10">
          {masterStudents.map((student) => (
            <MemberCard key={student.id} member={student} />
          ))}
        </div>
      </section>

      {/* Join Us Banner */}
      <section className="max-w-7xl 2xl:max-w-9xl mx-auto px-6">
        <div className="bg-zinc-50 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 border border-zinc-100">
          <div>
            <h3 className="text-3xl font-bold mb-4">{t("members.joinTitle")} <span className="text-zinc-300">{t("members.joinTitleEn")}</span></h3>
            <p className="text-zinc-600 max-w-xl leading-relaxed">
              {t("members.joinDesc")}
            </p>
          </div>
          <a href="mailto:absolutecui@163.com" className="bg-black text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-zinc-800 transition-colors whitespace-nowrap inline-flex items-center justify-center">
            {t("members.contactBtn")}
          </a>
        </div>
      </section>
    </div>
  );
}
