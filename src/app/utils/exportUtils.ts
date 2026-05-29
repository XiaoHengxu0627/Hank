import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { projects } from "../data/projects";
import { papers } from "../data/papers";
import { awards } from "../data/awards";
import { teacherTopics } from "../data/topics";
import { exchanges } from "../data/exchanges";

export type ExportFormat = "word" | "excel";
export type SortDimension = "date" | "name";
export type SortOrder = "asc" | "desc";

export interface ExportConfig {
  sections: {
    projects: boolean;
    papers: boolean;
    awards: boolean;
    topics: boolean;
    exchanges: boolean;
  };
  format: ExportFormat;
  sortBy: SortDimension;
  sortOrder: SortOrder;
  includeEn: boolean;
}

export const DEFAULT_CONFIG: ExportConfig = {
  sections: {
    projects: true,
    papers: true,
    awards: true,
    topics: true,
    exchanges: true,
  },
  format: "word",
  sortBy: "date",
  sortOrder: "desc",
  includeEn: true,
};

const sortData = (data: any[], dimension: SortDimension, order: SortOrder, language: string) => {
  return [...data].sort((a, b) => {
    let valA = "";
    let valB = "";

    if (dimension === "date") {
      valA = a.date || a.year || "0";
      valB = b.date || b.year || "0";
    } else {
      // name
      valA = language === "en" ? (a.titleEn || a.workTitleEn || a.title || "") : (a.title || a.workTitle || "");
      valB = language === "en" ? (b.titleEn || b.workTitleEn || b.title || "") : (b.title || b.workTitle || "");
    }

    const comparison = valA.localeCompare(valB, undefined, { numeric: true, sensitivity: 'base' });
    return order === "asc" ? comparison : -comparison;
  });
};

export const performExport = async (config: ExportConfig, language: "zh" | "en") => {
  const isEn = language === "en";
  const { sections, format, sortBy, sortOrder } = config;

  const data = {
    projects: sections.projects ? sortData(projects, sortBy, sortOrder, language) : [],
    papers: sections.papers ? sortData(papers, sortBy, sortOrder, language) : [],
    awards: sections.awards ? sortData(awards, sortBy, sortOrder, language) : [],
    topics: sections.topics ? teacherTopics : [], // Topics don't have dates in current structure
    exchanges: sections.exchanges ? sortData(exchanges, sortBy, sortOrder, language) : [],
  };

  switch (format) {
    case "word":
      await exportWord(data, isEn);
      break;
    case "excel":
      exportExcel(data, isEn);
      break;
  }
};

const exportWord = async (data: any, isEn: boolean) => {
  const children: any[] = [
    new Paragraph({
      text: isEn ? "CUI Design Lab - Entries Summary" : "CUI Design Lab - 系统条目汇总",
      heading: HeadingLevel.HEADING_1,
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
    }),
  ];

  if (data.projects.length > 0) {
    children.push(new Paragraph({ text: isEn ? "I. Projects" : "一、项目 (Projects)", heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }));
    data.projects.forEach((p: any) => {
      children.push(new Paragraph({ children: [new TextRun({ text: `【${p.date}】${isEn ? (p.titleEn || p.title) : p.title}`, bold: true })], spacing: { before: 120 } }));
      children.push(new Paragraph({ text: isEn ? `Category: ${p.category}` : `分类: ${p.category}`, spacing: { after: 80 } }));
      children.push(new Paragraph({ text: isEn ? `Description: ${p.descriptionEn || p.description}` : `简介: ${p.description}`, spacing: { after: 200 } }));
    });
  }

  if (data.papers.length > 0) {
    children.push(new Paragraph({ text: isEn ? "II. Papers" : "二、论文 (Papers)", heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }));
    data.papers.forEach((p: any, index: number) => {
      children.push(new Paragraph({ text: `[${index + 1}] ${isEn ? (p.contentEn || p.content) : p.content}`, spacing: { before: 120, after: 120 } }));
    });
  }

  if (data.awards.length > 0) {
    children.push(new Paragraph({ text: isEn ? "III. Awards" : "三、奖项 (Awards)", heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }));
    data.awards.forEach((a: any) => {
      children.push(new Paragraph({ children: [new TextRun({ text: isEn ? (a.workTitleEn || a.workTitle) : a.workTitle, bold: true })], spacing: { before: 120 } }));
      children.push(new Paragraph({ text: isEn ? (a.titleEn || a.title) : a.title, spacing: { after: 80 } }));
      children.push(new Paragraph({ text: isEn ? `Authors: ${a.authorsEn || a.authors}` : `获奖者: ${a.authors}`, spacing: { after: 200 } }));
    });
  }

  if (data.topics.length > 0) {
    children.push(new Paragraph({ text: isEn ? "IV. Topics" : "四、课题 (Topics)", heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }));
    data.topics.forEach((t: any) => {
      children.push(new Paragraph({ text: t.content, spacing: { before: 120, after: 120 } }));
    });
  }

  if (data.exchanges.length > 0) {
    children.push(new Paragraph({ text: isEn ? "V. Academic Exchanges" : "五、学术交流 (Academic Exchanges)", heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }));
    data.exchanges.forEach((e: any) => {
      children.push(new Paragraph({ children: [new TextRun({ text: `【${e.date}】${isEn ? (e.titleEn || e.title) : e.title}`, bold: true })], spacing: { before: 120 } }));
      children.push(new Paragraph({ text: isEn ? `Keywords: ${e.keywordsEn || e.keywords}` : `关键词: ${e.keywords}`, spacing: { after: 200 } }));
    });
  }

  const doc = new Document({ sections: [{ children }] });
  const blob = await Packer.toBlob(doc);
  saveAs(blob, `CUI_Lab_Export_${new Date().toISOString().split('T')[0]}.docx`);
};

const exportExcel = (data: any, isEn: boolean) => {
  const wb = XLSX.utils.book_new();

  if (data.projects.length > 0) {
    const ws = XLSX.utils.json_to_sheet(data.projects.map((p: any) => ({
      [isEn ? "Date" : "日期"]: p.date,
      [isEn ? "Title" : "标题"]: isEn ? (p.titleEn || p.title) : p.title,
      [isEn ? "Category" : "分类"]: p.category,
      [isEn ? "Description" : "描述"]: isEn ? (p.descriptionEn || p.description) : p.description,
      [isEn ? "Link" : "链接"]: p.link || ""
    })));
    XLSX.utils.book_append_sheet(wb, ws, isEn ? "Projects" : "项目");
  }

  if (data.papers.length > 0) {
    const ws = XLSX.utils.json_to_sheet(data.papers.map((p: any, index: number) => ({
      [isEn ? "No." : "序号"]: index + 1,
      [isEn ? "Content" : "内容"]: isEn ? (p.contentEn || p.content) : p.content,
      [isEn ? "Year" : "年份"]: p.year,
      [isEn ? "Type" : "类型"]: p.type
    })));
    XLSX.utils.book_append_sheet(wb, ws, isEn ? "Papers" : "论文");
  }

  if (data.awards.length > 0) {
    const ws = XLSX.utils.json_to_sheet(data.awards.map((a: any) => ({
      [isEn ? "Work Title" : "作品名称"]: isEn ? (a.workTitleEn || a.workTitle) : a.workTitle,
      [isEn ? "Award" : "奖项"]: isEn ? (a.titleEn || a.title) : a.title,
      [isEn ? "Authors" : "获奖者"]: isEn ? (a.authorsEn || a.authors) : a.authors
    })));
    XLSX.utils.book_append_sheet(wb, ws, isEn ? "Awards" : "奖项");
  }

  if (data.topics.length > 0) {
    const ws = XLSX.utils.json_to_sheet(data.topics.map((t: any) => ({
      [isEn ? "Content" : "内容"]: t.content
    })));
    XLSX.utils.book_append_sheet(wb, ws, isEn ? "Topics" : "课题");
  }

  if (data.exchanges.length > 0) {
    const ws = XLSX.utils.json_to_sheet(data.exchanges.map((e: any) => ({
      [isEn ? "Date" : "日期"]: e.date,
      [isEn ? "Title" : "标题"]: isEn ? (e.titleEn || e.title) : e.title,
      [isEn ? "Keywords" : "关键词"]: isEn ? (e.keywordsEn || e.keywords) : e.keywords,
      [isEn ? "Link" : "链接"]: e.link || ""
    })));
    XLSX.utils.book_append_sheet(wb, ws, isEn ? "Exchanges" : "学术交流");
  }

  XLSX.writeFile(wb, `CUI_Lab_Export_${new Date().toISOString().split('T')[0]}.xlsx`);
};
