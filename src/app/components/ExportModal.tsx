import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Circle, Download, SortAsc, SortDesc, Settings2 } from "lucide-react";
import { ExportConfig, DEFAULT_CONFIG, performExport } from "../utils/exportUtils";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: "zh" | "en";
}

export const ExportModal = ({ isOpen, onClose, language }: ExportModalProps) => {
  const [config, setConfig] = useState<ExportConfig>(DEFAULT_CONFIG);
  const [isExporting, setIsExporting] = useState(false);

  // Load saved config on mount
  useEffect(() => {
    const saved = localStorage.getItem("cui_export_config");
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load export config", e);
      }
    }
  }, []);

  // Save config on change
  const updateConfig = (newConfig: Partial<ExportConfig>) => {
    const updated = { ...config, ...newConfig };
    setConfig(updated);
    localStorage.setItem("cui_export_config", JSON.stringify(updated));
  };

  const toggleSection = (section: keyof ExportConfig["sections"]) => {
    const newSections = { ...config.sections, [section]: !config.sections[section] };
    updateConfig({ sections: newSections });
  };

  const setAllSections = (value: boolean) => {
    const newSections = Object.keys(config.sections).reduce((acc, key) => {
      acc[key as keyof ExportConfig["sections"]] = value;
      return acc;
    }, {} as ExportConfig["sections"]);
    updateConfig({ sections: newSections });
  };

  const invertSections = () => {
    const newSections = Object.keys(config.sections).reduce((acc, key) => {
      acc[key as keyof ExportConfig["sections"]] = !config.sections[key as keyof ExportConfig["sections"]];
      return acc;
    }, {} as ExportConfig["sections"]);
    updateConfig({ sections: newSections });
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await performExport(config, language);
      onClose();
    } catch (error) {
      console.error("Export failed", error);
    } finally {
      setIsExporting(false);
    }
  };

  const t = (zh: string, en: string) => (language === "zh" ? zh : en);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <Settings2 size={20} className="text-zinc-900" />
                <h2 className="text-lg font-bold text-zinc-900">
                  {t("导出配置", "Export Configuration")}
                </h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-500">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Section 1: Content Selection */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                    {t("内容选择", "Content Selection")}
                  </h3>
                  <div className="flex gap-4 text-xs font-medium text-zinc-500">
                    <button onClick={() => setAllSections(true)} className="hover:text-black transition-colors">{t("全选", "All")}</button>
                    <button onClick={() => setAllSections(false)} className="hover:text-black transition-colors">{t("清空", "None")}</button>
                    <button onClick={() => invertSections()} className="hover:text-black transition-colors">{t("反选", "Invert")}</button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(config.sections).map(([key, value]) => {
                    const labels: Record<string, [string, string]> = {
                      projects: ["项目", "Projects"],
                      papers: ["论文", "Papers"],
                      awards: ["奖项", "Awards"],
                      topics: ["课题", "Topics"],
                      exchanges: ["学术交流", "Exchanges"],
                    };
                    return (
                      <button
                        key={key}
                        onClick={() => toggleSection(key as keyof ExportConfig["sections"])}
                        className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                          value ? "bg-black border-black text-white shadow-md" : "bg-zinc-50 border-zinc-100 text-zinc-600 hover:border-zinc-300"
                        }`}
                      >
                        {value ? <CheckCircle size={18} /> : <Circle size={18} />}
                        <span className="font-medium">{t(labels[key][0], labels[key][1])}</span>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Section 2: Format & Sorting */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">
                    {t("文件格式", "File Format")}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {(["word", "excel"] as const).map((f) => (
                      <button
                        key={f}
                        onClick={() => updateConfig({ format: f })}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all ${
                          config.format === f ? "border-black bg-black/5 text-black font-bold" : "border-zinc-100 text-zinc-500 hover:border-zinc-200"
                        }`}
                      >
                        <span className="capitalize">{f === "word" ? "Word (.docx)" : "Excel (.xlsx)"}</span>
                        {config.format === f && <div className="w-2 h-2 rounded-full bg-black" />}
                      </button>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">
                    {t("排序方式", "Sorting")}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => updateConfig({ sortBy: "date" })}
                        className={`flex-1 py-2 rounded-lg border text-sm transition-all ${
                          config.sortBy === "date" ? "bg-black text-white" : "text-zinc-500 border-zinc-100"
                        }`}
                      >
                        {t("按时间", "By Date")}
                      </button>
                      <button
                        onClick={() => updateConfig({ sortBy: "name" })}
                        className={`flex-1 py-2 rounded-lg border text-sm transition-all ${
                          config.sortBy === "name" ? "bg-black text-white" : "text-zinc-500 border-zinc-100"
                        }`}
                      >
                        {t("按名称", "By Name")}
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => updateConfig({ sortOrder: "desc" })}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border text-sm transition-all ${
                          config.sortOrder === "desc" ? "bg-zinc-100 text-black border-zinc-300" : "text-zinc-400 border-zinc-100"
                        }`}
                      >
                        <SortDesc size={14} /> {t("降序", "Desc")}
                      </button>
                      <button
                        onClick={() => updateConfig({ sortOrder: "asc" })}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border text-sm transition-all ${
                          config.sortOrder === "asc" ? "bg-zinc-100 text-black border-zinc-300" : "text-zinc-400 border-zinc-100"
                        }`}
                      >
                        <SortAsc size={14} /> {t("升序", "Asc")}
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-zinc-50 border-t border-zinc-100">
              <button
                onClick={handleExport}
                disabled={isExporting || !Object.values(config.sections).some(v => v)}
                className="w-full flex items-center justify-center gap-3 py-4 bg-black text-white rounded-xl font-bold hover:bg-zinc-800 transition-all disabled:opacity-30 shadow-xl disabled:cursor-not-allowed"
              >
                <Download size={20} />
                {isExporting ? t("生成中...", "Generating...") : t("确认导出", "Export Now")}
              </button>
              <p className="text-center text-[10px] text-zinc-400 mt-4">
                {t("配置已自动保存，下次将沿用当前选择", "Settings saved automatically for your next visit")}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
