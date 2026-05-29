import { createContext, useContext, useState, ReactNode } from "react";

type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh");

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

const translations: Record<Language, any> = {
  zh: {
    nav: {
      home: "首页",
      research: "研究",
      team: "团队",
      projects: "项目",
      papers: "成果",
      sub: {
        paper: "论文",
        award: "奖项",
        topic: "课题",
        academic: "学术交流",
      },
    },
    home: {
      labName: "CUI Design Lab",
      labSubtitle: "CUI智能设计实验室",
      heroTitle1: "破屏 · 入境 · 重构",
      heroTitle2: "设计与科技的虚实融合",
      heroDesc1: "大空间沉浸体验",
      heroDesc2: "虚实融合技术",
      heroDesc3: "具身机器人设计",
      heroDesc4: "前瞻概念设计",
      exploreBtn: "探索研究 Explore",
      missionTitle: "我们的使命",
      missionSubtitle: "OUR MISSION",
      missionDesc1: "通过多学科的深度交叉，我们旨在解决由于快速技术演进而带来的新兴人本设计挑战。实验室秉承「严谨、创新、开放」的理念，为每一位热爱设计的青年学者提供成长沃土。",
      missionDesc2: "不仅关注视觉体验的优雅，更强调交互背后强大的逻辑支撑与文化内涵。我们与顶尖科技企业和学术机构保持紧密合作，推动学术成果的产业转化。",
      crossField: "多领域交叉",
      crossFieldDesc: "涵盖工业设计、AI应用与交互技术。",
      researchOriented: "研究导向",
      researchOrientedDesc: "注重理论模型构建与实证评估。",
      professorName: "姜可 教授",
      professorEnName: "Prof. Jiang Ke",
      director: "实验室主任 Director",
      schoolTitle: "北京理工大学设计与艺术学院教授",
      schoolTitleEn: "Professor, School of Design and Art, BIT",
    },
    members: {
      title: "团队成员",
      titleEn: "TEAM",
      subtitle: "我们是一个多元、包容的跨学科研究群体。",
      subtitle2: "致力于探索前沿科技背景下的创新设计路径。",
      advisors: "指导教师 / Advisors",
      phdStudents: "博士研究生 / Ph.D. Students",
      masterStudents: "硕士研究生 / Master Students",
      notableAlumni: "杰出校友 / Distinguished Alumni",
      notableAlumniComingSoon: "Coming soon",
      joinTitle: "加入我们",
      joinTitleEn: "Join the Lab",
      joinDesc: "我们常年招收具有设计、计算机、心理学等专业背景的优秀硕士、博士研究生。如果你对科技与艺术的交汇点充满热情，欢迎发送简历与作品集至我们的邮箱。",
      contactBtn: "联系我们 Contact Us",
    },
    research: {
      title: "研究方向",
      titleEn: "RESEARCH",
      subtitle: "探索前沿科技与设计的交汇点",
      subtitle2: "致力于解决复杂的人机交互问题",
    },
    footer: {
      labName: "CUI Design Lab",
      desc: "我们致力于通过创新设计与前沿技术解决复杂的现实问题。探索人机交互、数字媒体与人工智能设计的交汇点。",
      contact: "联系方式 CONTACT",
      followUs: "关注我们 FOLLOW US",
      address: "北京理工大学（良乡校区）",
      address2: "设计与艺术学院",
      copyright: "CUI Design Lab. All rights reserved.",
      designed: "Designed with minimalism & logic.",
    },
    papers: {
      title: "论文",
      titleEn: "PAPERS",
      subtitle: "本实验室的研究成果持续发表于DRS、Cumulus、IEEE VR、ISMAR、北大核心等国内与国际顶级学术会议及顶级期刊。",
      yearFilter: "年份 Year",
      typeFilter: "类型 Type",
      clearFilter: "清除筛选",
      noResults: "暂无符合条件的论文",
      noResultsHint: "请尝试调整筛选条件",
      all: "全部 All",
      types: {
        "Conference Paper": "会议论文",
        "Journal Paper": "期刊论文",
        "Book": "著作",
        "Workshop": "工作坊",
        "Patent": "专利",
      },
    },
    topics: {
      title: "课题",
      titleEn: "TOPICS",
      subtitle: "实验室承担的主要科研课题。",
    },
    academicExchange: {
      title: "学术交流",
      titleEn: "ACADEMIC EXCHANGE",
      subtitle: "实验室参与的国内外学术交流活动。",
    },
    projects: {
      title: "项目",
      titleEn: "PROJECTS",
      subtitle: "通过深度交叉学科研究，探索设计与科技融合的无限可能。",
      subtitle2: "以下为实验室近期的核心研究项目。",
    },
    awards: {
      title: "奖项",
      titleEn: "AWARDS",
      subtitle: "实验室在各类国际与国内竞赛中获得的奖项荣誉。",
    },
  },
  en: {
    nav: {
      home: "HOME",
      research: "RESEARCH",
      team: "TEAM",
      projects: "PROJECTS",
      papers: "PUBLICATIONS",
      sub: {
        paper: "Papers",
        award: "Awards",
        topic: "Topics",
        academic: "Academic Exchange",
      },
    },
    home: {
      labName: "CUI Design Lab",
      labSubtitle: "Design for care, Universal, Integration",
      heroTitle1: "Boundless Fusion of",
      heroTitle2: "Design & Technology",
      heroDesc1: "Large-Space Immersive Experience",
      heroDesc2: "Virtual-Real Fusion Technology",
      heroDesc3: "Embodied Robot Design",
      heroDesc4: "Forward-Looking Concept Design",
      exploreBtn: "Explore Research",
      missionTitle: "Our Mission",
      missionSubtitle: "OUR MISSION",
      missionDesc1: "Through deep interdisciplinary collaboration, we aim to address emerging human-centered design challenges brought by rapid technological evolution. The lab upholds the principles of rigor, innovation, and openness, providing fertile ground for young scholars passionate about design.",
      missionDesc2: "We focus not only on the elegance of visual experience but also emphasize the strong logical support and cultural connotations behind interactions. We maintain close cooperation with top technology enterprises and academic institutions to promote the industrial transformation of academic achievements.",
      crossField: "Multi-disciplinary",
      crossFieldDesc: "Covering industrial design, AI applications, and interaction technology.",
      researchOriented: "Research-Oriented",
      researchOrientedDesc: "Emphasizing theoretical model construction and empirical evaluation.",
      professorName: "Prof. Jiang Ke",
      professorEnName: "姜可 教授",
      director: "Director",
      schoolTitle: "Professor, School of Design and Art, BIT",
    },
    members: {
      title: "Team Members",
      titleEn: "TEAM",
      subtitle: "We are a diverse and inclusive interdisciplinary research group.",
      subtitle2: "Committed to exploring innovative design paths in the context of cutting-edge technology.",
      advisors: "Advisors",
      phdStudents: "Ph.D. Students",
      masterStudents: "Master Students",
      notableAlumni: "Distinguished Alumni",
      notableAlumniComingSoon: "Coming soon",
      joinTitle: "Join Us",
      joinTitleEn: "Join the Lab",
      joinDesc: "We welcome outstanding master's and doctoral students with backgrounds in design, computer science, and psychology. If you are passionate about the intersection of technology and art, please send your resume and portfolio to our email.",
      contactBtn: "Contact Us",
    },
    research: {
      title: "Research",
      titleEn: "RESEARCH",
      subtitle: "Exploring the intersection of cutting-edge technology and design",
      subtitle2: "Committed to solving complex human-computer interaction problems",
    },
    footer: {
      labName: "CUI DESIGN LAB",
      desc: "We are committed to solving complex real-world problems through innovative design and cutting-edge technology. Exploring the intersection of human-computer interaction, digital media, and AI design.",
      contact: "CONTACT",
      followUs: "FOLLOW US",
      address: "Haidian District, Beijing",
      address2: "School of Design & Innovation, Room 402",
      copyright: "CUI Design Lab. All rights reserved.",
      designed: "Designed with minimalism & logic.",
    },
    papers: {
      title: "Papers",
      titleEn: "PAPERS",
      subtitle: "Our research findings are consistently published in top-tier international academic conferences and journals such as CHI, DIS, Ubicomp, and IDC.",
      yearFilter: "Year",
      typeFilter: "Type",
      clearFilter: "Clear Filters",
      noResults: "No papers found",
      noResultsHint: "Please try adjusting your filter criteria",
      all: "All",
      types: {
        "Conference Paper": "Conference Paper",
        "Journal Paper": "Journal Paper",
        "Book": "Book",
        "Workshop": "Workshop",
        "Patent": "Patent",
      },
    },
    topics: {
      title: "Topics",
      titleEn: "TOPICS",
      subtitle: "Major research projects undertaken by the lab.",
    },
    academicExchange: {
      title: "Academic Exchange",
      titleEn: "ACADEMIC EXCHANGE",
      subtitle: "Academic exchange activities participated by the lab.",
    },
    projects: {
      title: "Projects",
      titleEn: "PROJECTS",
      subtitle: "Through interdisciplinary research, we explore the boundless possibilities of design and technology integration.",
      subtitle2: "Below are the lab's recent core research projects.",
    },
    awards: {
      title: "Awards",
      titleEn: "AWARDS",
      subtitle: "Awards and honors received by the lab in various international and domestic competitions.",
    },
  },
};
