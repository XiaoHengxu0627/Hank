import { motion } from "motion/react";
import { ChevronDown, X } from "lucide-react";
import { useState, useMemo } from "react";
import { useLanguage } from "../i18n/context";

export function Papers() {
  const { t, language } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);

  const papers = [
    {
      id: "paper-1",
      content: "Zi-Qiang He, Shi-Jie Ming, Hao Zhang,et al. Guiding Auditory AR: A VR-Based Evaluation of Visual and Tactile Cues for Sound Localization for Cochlear Implant Users[J]. IEEE transactions on visualization and computer graphics,2026,Vol.32(5): 4678-4687.（中科院top期刊，CCF-A,JCR Q1）",
      contentEn: "Zi-Qiang He, Shi-Jie Ming, Hao Zhang,et al. Guiding Auditory AR: A VR-Based Evaluation of Visual and Tactile Cues for Sound Localization for Cochlear Implant Users[J]. IEEE transactions on visualization and computer graphics, 2026, Vol.32(5): 4678-4687. (CAS Top Journal, CCF-A, JCR Q1)",
      type: "Journal Paper",
      year: "2026",
    },
    {
      id: "paper-3",
      content: "HE Z Q, JIANG K, MING S J, ZHAO N, YUAN H P. Reshaping the \"Roots\": A Physio-Based Study of Self-Other Cognition in VR Avatar-EIA Interaction[C]//Cumulus '26. 2026.（设计学A会）",
      contentEn: "HE Z Q, JIANG K, MING S J, ZHAO N, YUAN H P. Reshaping the \"Roots\": A Physio-Based Study of Self-Other Cognition in VR Avatar-EIA Interaction[C]//Cumulus '26. 2026. (Grade A Design Conference)",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-4",
      content: "ZHAO N, JIANG K, HE Z Q, MING S J, YUAN H P, SUN F R. From Hands-on to Embodied: A Participatory Prototyping Framework for Free-Roam VR Heritage in the Case of Yan'an[C]//Cumulus '26. 2026.（设计学A会）",
      contentEn: "ZHAO N, JIANG K, HE Z Q, MING S J, YUAN H P, SUN F R. From Hands-on to Embodied: A Participatory Prototyping Framework for Free-Roam VR Heritage in the Case of Yan'an[C]//Cumulus '26. 2026. (Grade A Design Conference)",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-5",
      content: "ZHAO N, JIANG K, HE Z Q, MING S J, YUAN H P, SUN F R. More Than a Container: Spatial Layout as a Cognitive Lever for Memory in Virtual Reality Heritage[C]//HCII '26. 2026.（设计学A会）",
      contentEn: "ZHAO N, JIANG K, HE Z Q, MING S J, YUAN H P, SUN F R. More Than a Container: Spatial Layout as a Cognitive Lever for Memory in Virtual Reality Heritage[C]//HCII '26. 2026. (Grade A Design Conference)",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-6",
      content: "ZHAO N, JIANG K, HE Z Q, MING S J, YUAN H P, SUN F R. The Memory Loom: Reweaving Curatorial Power Relations with Source Communities in Virtual Reality Cultural Heritage[C]//DRS '26. 2026.（设计学顶会）",
      contentEn: "ZHAO N, JIANG K, HE Z Q, MING S J, YUAN H P, SUN F R. The Memory Loom: Reweaving Curatorial Power Relations with Source Communities in Virtual Reality Cultural Heritage[C]//DRS '26. 2026. (Top Design Conference)",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-7",
      content: "MING S J, JIANG K, HE Z Q, ZHAO N, YUAN H P, SUN F R. Optimizing Gradient Vignetting for VR Visual Fatigue Reduction: An Empirical Study of Its Non-Linear Effects[C]//HCII '26. 2026.（设计学A会，EI检索）",
      contentEn: "MING S J, JIANG K, HE Z Q, ZHAO N, YUAN H P, SUN F R. Optimizing Gradient Vignetting for VR Visual Fatigue Reduction: An Empirical Study of Its Non-Linear Effects[C]//HCII '26. 2026. (Grade A Design Conference, EI Indexed)",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-8",
      content: "MING S J, JIANG K, HE Z Q, ZHAO N, WANG Z A, YUAN H P, SUN F R. Task-Driven Proxemics: Finding the Optimal Social Distance for Virtual Guides in Different Tasks[C]//HCII '26. 2026.（设计学A会，EI检索）",
      contentEn: "MING S J, JIANG K, HE Z Q, ZHAO N, WANG Z A, YUAN H P, SUN F R. Task-Driven Proxemics: Finding the Optimal Social Distance for Virtual Guides in Different Tasks[C]//HCII '26. 2026. (Grade A Design Conference, EI Indexed)",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-9",
      content: "MING S J, JIANG K, HE Z Q, ZHAO N, YAN Y P, YUAN H P, SUN F R. Beyond the Archive: Designing Routes for Living Heritage Encounters in Location-Based VR[C]//Cumulus '26. 2026.（设计学A会）",
      contentEn: "MING S J, JIANG K, HE Z Q, ZHAO N, YAN Y P, YUAN H P, SUN F R. Beyond the Archive: Designing Routes for Living Heritage Encounters in Location-Based VR[C]//Cumulus '26. 2026. (Grade A Design Conference)",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-10",
      content: "MING S J, HE Z Q, ZHAO N, YUAN H P, SUN F R, JIANG K. Making with Virtual Materials: Reframing \"Making as Knowing\" for Situated Narratives in Large-Scale VR[C]//DRS '26. 2026.（设计学顶会）",
      contentEn: "MING S J, HE Z Q, ZHAO N, YUAN H P, SUN F R, JIANG K. Making with Virtual Materials: Reframing \"Making as Knowing\" for Situated Narratives in Large-Scale VR[C]//DRS '26. 2026. (Top Design Conference)",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-11",
      content: "YUAN H P, JIANG K, HE Z Q, MING S J, ZHAO N, SUN F R. Embodied Cognition-Based Evaluation of Humanoid Robot Appearance in Virtual Reality Environment[C]//HCII '26. 2026.（设计学A会，EI检索）",
      contentEn: "YUAN H P, JIANG K, HE Z Q, MING S J, ZHAO N, SUN F R. Embodied Cognition-Based Evaluation of Humanoid Robot Appearance in Virtual Reality Environment[C]//HCII '26. 2026. (Grade A Design Conference, EI Indexed)",
      type: "Conference Paper",
      year: "2026",
    },
    {
      id: "paper-12",
      content: "颜羽鹏,姜可.多任务情境下指挥信息系统直感交互设计研究[J].包装工程,2026,47(4):53-64.（北大核心）",
      contentEn: "YAN Y P, JIANG K. Research on Intuitive Interaction Design of Command Information System in Multi-task Contexts[J]. Packaging Engineering, 2026, 47(4): 53-64. (PKU Core Journal)",
      type: "Journal Paper",
      year: "2026",
    },
    {
      id: "paper-13",
      content: "颜羽鹏,姜可,赵祎乾,等.面向多维情感体验的指挥训练舱色彩设计研究[J].机械设计,2026,43(2):234-240.（北大核心;CSCD）",
      contentEn: "YAN Y P, JIANG K, ZHAO Y Q, et al. Research on Color Design of Command Training Cabin for Multi-dimensional Emotional Experience[J]. Journal of Machine Design, 2026, 43(2): 234-240. (PKU Core Journal; CSCD)",
      type: "Journal Paper",
      year: "2026",
    },
    {
      id: "paper-14",
      content: "颜羽鹏,姜可.基于情境自适应的指挥信息系统交互设计研究[J].包装工程,2026,47(8):1-13+27.（北大核心）",
      contentEn: "YAN Y P, JIANG K. Research on Interaction Design of Command Information System Based on Context Adaptation[J]. Packaging Engineering, 2026, 47(8): 1-13+27. (PKU Core Journal)",
      type: "Journal Paper",
      year: "2026",
    },
    {
      id: "paper-patent-2026-1",
      content: "北京理工大学.一种稳固佩戴的VR头显装置:202520746543.1[P].2026-03-20.",
      contentEn: "Beijing Institute of Technology. A stable wearing VR head-mounted display device: 202520746543.1[P]. 2026-03-20.",
      type: "Patent",
      year: "2026",
    },
    {
      id: "paper-16",
      content: "HE Z, JIANG K, MING S J, et al. Icebreaking: Building Trust and Empathy with Virtual Museum Embodied Conversational Agents via Personalized Initial Interactions[C]//ISMAR '25. 2025.（CCF-B）",
      contentEn: "HE Z, JIANG K, MING S J, et al. Icebreaking: Building Trust and Empathy with Virtual Museum Embodied Conversational Agents via Personalized Initial Interactions[C]//ISMAR '25. 2025. (CCF-B)",
      type: "Conference Paper",
      year: "2025",
    },
    {
      id: "paper-17",
      content: "何自强,姜可,明世杰,等.基于自然交互的前臂截肢者虚拟现实手柄交互设计研究[J].包装工程,2025,46(22):36-50.（北大核心）",
      contentEn: "HE Z Q, JIANG K, MING S J, et al. Research on Virtual Reality Controller Interaction Design for Forearm Amputees Based on Natural Interaction[J]. Packaging Engineering, 2025, 46(22): 36-50. (PKU Core Journal)",
      type: "Journal Paper",
      year: "2025",
    },
    {
      id: "paper-18",
      content: "颜羽鹏,姜可,魏大彭,等.草方格铺设车操控台界面布局设计研究[J].机械设计,2025,42(12):189-196.（北大核心;CSCD）",
      contentEn: "YAN Y P, JIANG K, WEI D P, et al. Research on Interface Layout Design of Straw Checkerboard Laying Vehicle Console[J]. Journal of Machine Design, 2025, 42(12): 189-196. (PKU Core Journal; CSCD)",
      type: "Journal Paper",
      year: "2025",
    },
    {
      id: "paper-19",
      content: "颜羽鹏,姜可,石星辰,等.虚拟装配实训具身交互技术应用研究[J].包装工程,2025,46(18):84-95.（北大核心）",
      contentEn: "YAN Y P, JIANG K, SHI X C, et al. Research on the Application of Embodied Interaction Technology in Virtual Assembly Training[J]. Packaging Engineering, 2025, 46(18): 84-95. (PKU Core Journal)",
      type: "Journal Paper",
      year: "2025",
    },
    {
      id: "paper-20",
      content: "颜羽鹏,姜可,张靖宇,等.交通情报信息系统人机协同决策技术应用进展[J].包装工程,2025,46(14):23-35+45.（北大核心）",
      contentEn: "YAN Y P, JIANG K, ZHANG J Y, et al. Progress in the Application of Human-Machine Collaborative Decision-making Technology in Traffic Intelligence Information Systems[J]. Packaging Engineering, 2025, 46(14): 23-35+45. (PKU Core Journal)",
      type: "Journal Paper",
      year: "2025",
    },
    {
      id: "paper-21",
      content: "颜羽鹏,姜可.基于增强现实的指挥空间信息布局设计研究[J].现代防御技术,2026,54(1):51-60.（北大核心）",
      contentEn: "YAN Y P, JIANG K. Research on Information Layout Design of Command Space Based on Augmented Reality[J]. Modern Defence Technology, 2026, 54(1): 51-60. (PKU Core Journal)",
      type: "Journal Paper",
      year: "2025",
    },
    {
      id: "paper-patent-2025-1",
      content: "颜羽鹏.带数字空间教学实训的图形用户界面的电子设备:202430567811.4[P].2025-09-05.",
      contentEn: "YAN Y P. Electronic device with graphical user interface for digital space teaching and training: 202430567811.4[P]. 2025-09-05.",
      type: "Patent",
      year: "2025",
    },
    {
      id: "paper-22",
      content: "HE Z, JIANG K. Meta Arm: VR Control Device for Forearm Amputees[C]//HCI International '24. 2024.（设计学A会，EI检索）",
      contentEn: "HE Z, JIANG K. Meta Arm: VR Control Device for Forearm Amputees[C]//HCI International '24. 2024. (Grade A Design Conference, EI Indexed)",
      type: "Conference Paper",
      year: "2024",
    },
    {
      id: "paper-23",
      content: "姜可,张靖宇,颜羽鹏,等.扩展现实背景下的虚拟体验设计研究[J].包装工程,2024,45(20):43-48+57.（北大核心）",
      contentEn: "JIANG K, ZHANG J Y, YAN Y P, et al. Research on Virtual Experience Design in the Context of Extended Reality[J]. Packaging Engineering, 2024, 45(20): 43-48+57. (PKU Core Journal)",
      type: "Journal Paper",
      year: "2024",
    },
    {
      id: "paper-24",
      content: "颜羽鹏,姜可,程健鹏,等.作战筹划系统多模态人机交互技术应用进展[J].机械设计,2024,41(7):175-181.（北大核心;CSCD）",
      contentEn: "YAN Y P, JIANG K, CHENG J P, et al. Application Progress of Multimodal Human-Machine Interaction Technology in Combat Planning Systems[J]. Journal of Machine Design, 2024, 41(7): 175-181. (PKU Core Journal; CSCD)",
      type: "Journal Paper",
      year: "2024",
    },
    {
      id: "paper-25",
      content: "YAN Y P, JIANG K, CHENG J P. Design and Implementation of Traffic Big Data Super Correlation System[C]//ICBDIE '24. 2024.（重要会议）",
      contentEn: "YAN Y P, JIANG K, CHENG J P. Design and Implementation of Traffic Big Data Super Correlation System[C]//ICBDIE '24. 2024. (Important Conference)",
      type: "Conference Paper",
      year: "2024",
    },
    {
      id: "paper-27",
      content: "HE Z, JIANG K, ZHANG J, GAO Y, NA Z. Collaborative Design Based on Metaverse Technology: Case of Interactive Design of Children's Educational Products[C]//AHFE 2023. 2023.（设计学重要会议）",
      contentEn: "HE Z, JIANG K, ZHANG J, GAO Y, NA Z. Collaborative Design Based on Metaverse Technology: Case of Interactive Design of Children's Educational Products[C]//AHFE 2023. 2023. (Important Design Conference)",
      type: "Conference Paper",
      year: "2023",
    },
    {
      id: "paper-28",
      content: "ZHANG J Y, JIANG K, WANG S H, MING S J, WANG H D. Forestlight: A Virtual Reality Respiratory Biofeedback System Using Interactive Lighting for Pressure Relief[C]//SUI '23. 2023.（设计学重要会议）",
      contentEn: "ZHANG J Y, JIANG K, WANG S H, MING S J, WANG H D. Forestlight: A Virtual Reality Respiratory Biofeedback System Using Interactive Lighting for Pressure Relief[C]//SUI '23. 2023. (Important Design Conference)",
      type: "Conference Paper",
      year: "2023",
    },
    {
      id: "paper-30",
      content: "姜可. 数字交互空间设计研讨工作坊: 一带一路背景[C]//Cumulus CAFA '23. 2023.（设计学A会）",
      contentEn: "JIANG K. Digital Interaction Space Design Workshop: Belt and Road Context[C]//Cumulus CAFA '23. 2023. (Grade A Design Conference)",
      type: "Workshop",
      year: "2023",
    },
    {
      id: "paper-31",
      content: "林倩倩,何自强,王丹.“光”文字衍生落地灯[J].包装工程,2022,43(18):2.（北大核心）",
      contentEn: "LIN Q Q, HE Z Q, WANG D. \"Light\" Character Derivative Floor Lamp[J]. Packaging Engineering, 2022, 43(18): 2. (PKU Core Journal)",
      type: "Journal Paper",
      year: "2022",
    },
    {
      id: "paper-32",
      content: "JIANG K, HUGHES B. Imaginary Museums: A New Approach to the Learning and Assessment of Design History[C]//DRS Learn X Design '21. 2021.（设计学顶会）",
      contentEn: "JIANG K, HUGHES B. Imaginary Museums: A New Approach to the Learning and Assessment of Design History[C]//DRS Learn X Design '21. 2021. (Top Design Conference)",
      type: "Conference Paper",
      year: "2021",
    },
    {
      id: "paper-33",
      content: "姜可, 韩炎萃, 安晓颖. 工业设计奖项发展现状及趋势[M]//设计产业蓝皮书: 中国设计产业发展报告2019—2020. 2020.",
      contentEn: "JIANG K, HAN Y C, AN X Y. Development Status and Trends of Industrial Design Awards[M]//Blue Book of Design Industry: China Design Industry Development Report 2019-2020. 2020.",
      type: "Book",
      year: "2020",
    },
    {
      id: "paper-34",
      content: "姜可. 工业设计史: 新一版[M]. 上海: 上海人民美术出版社, 2016.",
      contentEn: "JIANG K. History of Industrial Design: New Edition[M]. Shanghai: Shanghai People's Fine Arts Publishing House, 2016.",
      type: "Book",
      year: "2016",
    },
    {
      id: "paper-35",
      content: "姜可. 光伏逆变机柜外观专利: ZL 2013 3 0039385.9[P]. 2013.",
      contentEn: "JIANG K. Appearance patent for photovoltaic inverter cabinet: ZL 2013 3 0039385.9[P]. 2013.",
      type: "Patent",
      year: "2013",
    },
    {
      id: "paper-36",
      content: "JIANG K. Cardinal on Style Image Cognition of Machine Center[J]. Journal of Grey System, 2012.",
      type: "Journal Paper",
      year: "2012",
    },
    {
      id: "paper-37",
      content: "姜可. 通用设计: 心理关爱的设计研究和实践[M]. 北京: 化学工业出版社, 2012.",
      contentEn: "JIANG K. Universal Design: Design Research and Practice for Psychological Care[M]. Beijing: Chemical Industry Press, 2012.",
      type: "Book",
      year: "2012",
    },
    {
      id: "paper-38",
      content: "姜可. 设计的真相[M]. 北京: 北京出版社, 2012.",
      contentEn: "JIANG K. The Truth of Design[M]. Beijing: Beijing Publishing House, 2012.",
      type: "Book",
      year: "2012",
    },
    {
      id: "paper-39",
      content: "Jiang Ke,Wang Jingjing. Research on the mathematical description of style image of machining centers[C]//The 2011 International Conference on Key Engineering Materials and Computer Science(KEMCS 2011). 2011-08-06.",
      type: "Conference Paper",
      year: "2011",
    },
    {
      id: "paper-40",
      content: "姜可. 数控装备的产品语意及人机工学在线数据库系统V1.0: 2011SRBJ0729[CP]. 2011.",
      contentEn: "JIANG K. Online database system for product semantics and ergonomics of CNC equipment V1.0: 2011SRBJ0729[CP]. 2011.",
      type: "Patent",
      year: "2011",
    },
    {
      id: "paper-41",
      content: "Jiang Ke,Wang Jing-jing. Web-based Image Scale dynamic partition[C]//IEEE International Conference on Computer-Aided Industrial Design & Conceptual Design (CAIDCD 2010). 2010.",
      type: "Conference Paper",
      year: "2010",
    },
    {
      id: "paper-42",
      content: "姜可. 手臂式体温测试仪外观专利: ZL 2010 3 0603659.9[P]. 2010.",
      contentEn: "JIANG K. Appearance patent for arm-type body temperature tester: ZL 2010 3 0603659.9[P]. 2010.",
      type: "Patent",
      year: "2010",
    },
    {
      id: "paper-43",
      content: "姜可. 中国工业设计年鉴[M]. 北京: 知识产权出版社, 2006.",
      contentEn: "JIANG K. China Industrial Design Yearbook[M]. Beijing: Intellectual Property Publishing House, 2006.",
      type: "Book",
      year: "2006",
    },
    {
      id: "paper-extra-44",
      content: "潘飞,姜可,王东琦.基于眼动追踪技术的购票网站可用性设计研究[J].包装工程,2020,41(24):243-247.（北大核心）",
      contentEn: "PAN F, JIANG K, WANG D Q. Research on Usability Design of Ticket-booking Website Based on Eye-tracking Technology[J]. Packaging Engineering, 2020, 41(24): 243-247. (PKU Core Journal)",
      type: "Journal Paper",
      year: "2020",
    },
    {
      id: "paper-extra-45",
      content: "姜可.机床工业设计创新中人的需求调研探讨[J].制造技术与机床,2013,(11):84-87.（北大核心）",
      contentEn: "JIANG K. Discussion on Human Needs Investigation in Machine Tool Industrial Design Innovation[J]. Manufacturing Technology & Machine Tool, 2013, (11): 84-87. (PKU Core Journal)",
      type: "Journal Paper",
      year: "2013",
    },
    {
      id: "paper-46",
      content: "姜可.创新思维培养方法研究[C]//中国机械工程学会工业设计分会.Proceedings of the 2007 International Conference on Industrial Design(Volume 1/2).机械工业出版社,2007:148-150.（设计学重要会议）",
      contentEn: "JIANG K. Research on Methods of Cultivating Innovative Thinking[C]//Industrial Design Branch of Chinese Mechanical Engineering Society. Proceedings of the 2007 International Conference on Industrial Design (Volume 1/2). Machine Industry Press, 2007: 148-150. (Important Design Conference)",
      type: "Conference Paper",
      year: "2007",
    },
    {
      id: "paper-47",
      content: "姜可,栾忠权.绿色服务设计观念和方法[C]//中国机械工程学会工业设计分会.Proceedings of the 2007 International Conference on Industrial Design(Volume 1/2).机械工业出版社,2007:594-596.（设计学重要会议）",
      contentEn: "JIANG K, LUAN Z Q. Concepts and Methods of Green Service Design[C]//Industrial Design Branch of Chinese Mechanical Engineering Society. Proceedings of the 2007 International Conference on Industrial Design (Volume 1/2). Machine Industry Press, 2007: 594-596. (Important Design Conference)",
      type: "Conference Paper",
      year: "2007",
    },
    {
      id: "paper-48",
      content: "姜可.老年人无障碍产品设计[J].包装工程,2006,(6):296-297+347.（北大核心）",
      contentEn: "JIANG K. Barrier-free Product Design for the Elderly[J]. Packaging Engineering, 2006, (6): 296-297+347. (PKU Core Journal)",
      type: "Journal Paper",
      year: "2006",
    },
    {
      id: "paper-49",
      content: "姜可,栾忠权,李洪海.The Application of Life Cycle Assessment in Electronic Product Design[C]//中国机械工程学会工业设计分会.Proceedings of the 2006 International Conference on Industrial Design & The 11th China Industrial Design Annual Meeting(Volume 1/2).机械工业出版社,2006:152-154.（设计学重要会议）",
      contentEn: "JIANG K, LUAN Z Q, LI H H. The Application of Life Cycle Assessment in Electronic Product Design[C]//Industrial Design Branch of Chinese Mechanical Engineering Society. Proceedings of the 2006 International Conference on Industrial Design & The 11th China Industrial Design Annual Meeting (Volume 1/2). Machine Industry Press, 2006: 152-154. (Important Design Conference)",
      type: "Conference Paper",
      year: "2006",
    },
    {
      id: "paper-50",
      content: "姜可.数控机床工业设计创新研究[J].机床与液压,2006,(7):100-101+104.（北大核心）",
      contentEn: "JIANG K. Research on Industrial Design Innovation of CNC Machine Tools[J]. Machine Tool & Hydraulics, 2006, (7): 100-101+104. (PKU Core Journal)",
      type: "Journal Paper",
      year: "2006",
    },
    {
      id: "paper-51",
      content: "姜可,杨庆东,杨海龙.加工中心自动换刀装置的虚拟设计[J].计算机辅助设计与制造,2001,(3):40-41.",
      contentEn: "JIANG K, YANG Q D, YANG H L. Virtual Design of Automatic Tool Changer for Machining Centers[J]. Computer Aided Design & Manufacturing, 2001, (3): 40-41.",
      type: "Journal Paper",
      year: "2001",
    },
    {
      id: "paper-52",
      content: "姜可,王东.车辆缓冲器的建模和有限元分析[J].哈尔滨理工大学学报,2001,(1):37-40.",
      contentEn: "JIANG K, WANG D. Modeling and Finite Element Analysis of Vehicle Buffers[J]. Journal of Harbin University of Science and Technology, 2001, (1): 37-40.",
      type: "Journal Paper",
      year: "2001",
    },
    {
      id: "paper-53",
      content: "姜可,高炳学.数控机床控制单元界面设计[C]//国际机械工程学会联合会.第一届国际机械工程学术会议论文集.机械工业出版社,2000:97-98.",
      contentEn: "JIANG K, GAO B X. Interface Design of CNC Machine Tool Control Unit[C]//International Federation for the Promotion of Mechanism and Machine Science. Proceedings of the 1st International Conference on Mechanical Engineering. Machine Industry Press, 2000: 97-98.",
      type: "Conference Paper",
      year: "2000",
    },
    {
      id: "paper-54",
      content: "姜可,高炳学,毕盛.加工中心造型设计[C]//国际机械工程学会联合会.第一届国际机械工程学术会议论文集.机械工业出版社,2000:98.",
      contentEn: "JIANG K, GAO B X, BI S. Styling Design of Machining Centers[C]//International Federation for the Promotion of Mechanism and Machine Science. Proceedings of the 1st International Conference on Mechanical Engineering. Machine Industry Press, 2000: 98.",
      type: "Conference Paper",
      year: "2000",
    },
  ];

  const years = useMemo(() => {
    const yearSet = new Set(papers.map(p => p.year));
    return Array.from(yearSet).sort((a, b) => parseInt(b) - parseInt(a));
  }, [papers]);

  const types = useMemo(() => {
    const typeSet = new Set(papers.map(p => p.type));
    return Array.from(typeSet).sort();
  }, [papers]);

  const filteredPapers = useMemo(() => {
    return papers.filter(paper => {
      const yearMatch = !selectedYear || paper.year === selectedYear;
      const typeMatch = !selectedType || paper.type === selectedType;
      return yearMatch && typeMatch;
    }).sort((a, b) => parseInt(b.year) - parseInt(a.year));
  }, [papers, selectedYear, selectedType]);

  const clearFilters = () => {
    setSelectedYear(null);
    setSelectedType(null);
  };

  const handleYearSelect = (year: string | null) => {
    setSelectedYear(year);
    setYearDropdownOpen(false);
  };

  const handleTypeSelect = (type: string | null) => {
    setSelectedType(type);
    setTypeDropdownOpen(false);
  };

  const FilterSelector = () => (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {/* Year Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setYearDropdownOpen(!yearDropdownOpen);
              setTypeDropdownOpen(false);
            }}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors min-w-[120px] justify-between"
          >
            <span>{selectedYear || t("papers.yearFilter")}</span>
            <ChevronDown 
              size={14} 
              className={`transition-transform ${yearDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
          {yearDropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setYearDropdownOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                className="absolute top-full left-0 mt-1 bg-white border border-zinc-200 rounded-lg shadow-lg z-50 min-w-[120px] overflow-hidden"
              >
                <button
                  onClick={() => handleYearSelect(null)}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-zinc-50 transition-colors ${
                    !selectedYear ? "bg-black text-white hover:bg-black" : "text-zinc-700"
                  }`}
                >
                  {t("papers.all")}
                </button>
                {years.map(year => (
                  <button
                    key={year}
                    onClick={() => handleYearSelect(year)}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-zinc-50 transition-colors ${
                      selectedYear === year ? "bg-black text-white hover:bg-black" : "text-zinc-700"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </div>

        {/* Type Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setTypeDropdownOpen(!typeDropdownOpen);
              setYearDropdownOpen(false);
            }}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors min-w-[140px] justify-between"
          >
            <span>{selectedType ? (t(`papers.types.${selectedType}`) || selectedType) : t("papers.typeFilter")}</span>
            <ChevronDown 
              size={14} 
              className={`transition-transform ${typeDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
          {typeDropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setTypeDropdownOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                className="absolute top-full left-0 mt-1 bg-white border border-zinc-200 rounded-lg shadow-lg z-50 min-w-[140px] overflow-hidden"
              >
                <button
                  onClick={() => handleTypeSelect(null)}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-zinc-50 transition-colors ${
                    !selectedType ? "bg-black text-white hover:bg-black" : "text-zinc-700"
                  }`}
                >
                  全部 All
                </button>
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => handleTypeSelect(type)}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-zinc-50 transition-colors ${
                      selectedType === type ? "bg-black text-white hover:bg-black" : "text-zinc-700"
                    }`}
                  >
                    {t(`papers.types.${type}`) || type}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </div>

        {/* Clear Button */}
        {(selectedYear || selectedType) && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 px-3 py-2.5 text-sm text-zinc-500 hover:text-black hover:bg-zinc-100 rounded-lg transition-colors"
          >
            <X size={14} />
{t("papers.clearFilter")}
          </button>
        )}
      </div>
    </div>
  );

  const PaperCard = ({ paper, index }: { paper: any; index: number }) => {
    const adjustedDelay = Math.min(index * 0.05, 0.5);
    return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: adjustedDelay, ease: "easeOut" }}
      className="group border-b border-zinc-100 py-6 cursor-pointer hover:bg-zinc-50 transition-colors px-4 -mx-4"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 text-right">
          <span className="text-sm font-mono text-zinc-400">[{index + 1}]</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-zinc-600 leading-relaxed break-words">
            {language === "en" ? (paper.contentEn || paper.content) : paper.content}
          </p>
        </div>
      </div>
    </motion.div>
    );
  };

  return (
    <div className="w-full bg-white pt-12 pb-32">
      <div className="max-w-7xl 2xl:max-w-9xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl 2xl:max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-black mb-4 tracking-tighter">{t("papers.title")} <span className="text-zinc-300">{t("papers.titleEn")}</span></h1>
          <p className="text-base md:text-lg 2xl:text-xl text-zinc-500 leading-relaxed font-light">
            {t("papers.subtitle")}
          </p>
        </motion.div>
      </div>

      <section className="max-w-7xl 2xl:max-w-9xl mx-auto px-6">
        <div className="border-t border-zinc-200 pt-8">
          <FilterSelector />
          
          {filteredPapers.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-zinc-500"
            >
              <p className="text-lg">{t("papers.noResults")}</p>
              <p className="text-sm mt-2">{t("papers.noResultsHint")}</p>
            </motion.div>
          ) : (
            <motion.div
              key={selectedYear || selectedType || "all"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filteredPapers.map((paper, idx) => (
                <PaperCard key={paper.id} paper={paper} index={idx} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
