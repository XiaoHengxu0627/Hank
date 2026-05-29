import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import { projects } from "../data/projects";
import { papers } from "../data/papers";
import { awards } from "../data/awards";
import { teacherTopics } from "../data/topics";
import { exchanges } from "../data/exchanges";

export const exportToWord = async () => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: "CUI Design Lab - 系统条目汇总",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
          }),

          // 1. 项目 (Projects)
          new Paragraph({
            text: "一、项目 (Projects)",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),
          ...projects.flatMap((p) => [
            new Paragraph({
              children: [
                new TextRun({ text: `【${p.date}】${p.title}`, bold: true }),
              ],
              spacing: { before: 120 },
            }),
            new Paragraph({
              text: p.titleEn,
              spacing: { after: 80 },
            }),
            new Paragraph({
              text: `分类: ${p.category}`,
              spacing: { after: 80 },
            }),
            new Paragraph({
              text: `简介: ${p.description}`,
              spacing: { after: 80 },
            }),
            new Paragraph({
              text: `Description: ${p.descriptionEn}`,
              spacing: { after: 200 },
            }),
          ]),

          // 2. 论文 (Papers)
          new Paragraph({
            text: "二、论文 (Papers)",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),
          ...papers.flatMap((p) => [
            new Paragraph({
              children: [
                new TextRun({ text: `[${p.year}] ${p.content}`, bold: true }),
              ],
              spacing: { before: 120 },
            }),
            ...(p.contentEn ? [
              new Paragraph({
                text: p.contentEn,
                spacing: { after: 120 },
              })
            ] : []),
          ]),

          // 3. 奖项 (Awards)
          new Paragraph({
            text: "三、奖项 (Awards)",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),
          ...awards.flatMap((a) => [
            new Paragraph({
              children: [
                new TextRun({ text: a.workTitle, bold: true }),
              ],
              spacing: { before: 120 },
            }),
            new Paragraph({
              text: `${a.title} / ${a.titleEn}`,
              spacing: { after: 80 },
            }),
            new Paragraph({
              text: `获奖者: ${a.authors} (${a.authorsEn})`,
              spacing: { after: 200 },
            }),
          ]),

          // 4. 课题 (Topics)
          new Paragraph({
            text: "四、课题 (Topics)",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),
          ...teacherTopics.flatMap((t) => [
            new Paragraph({
              text: t.content,
              spacing: { before: 120, after: 120 },
            }),
          ]),

          // 5. 学术交流 (Academic Exchanges)
          new Paragraph({
            text: "五、学术交流 (Academic Exchanges)",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),
          ...exchanges.flatMap((e) => [
            new Paragraph({
              children: [
                new TextRun({ text: `【${e.date}】${e.title}`, bold: true }),
              ],
              spacing: { before: 120 },
            }),
            new Paragraph({
              text: e.titleEn,
              spacing: { after: 80 },
            }),
            new Paragraph({
              text: `关键词: ${e.keywords}`,
              spacing: { after: 80 },
            }),
            new Paragraph({
              text: `Keywords: ${e.keywordsEn}`,
              spacing: { after: 200 },
            }),
          ]),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `CUI_Design_Lab_Entries_${new Date().toISOString().split('T')[0]}.docx`);
};
