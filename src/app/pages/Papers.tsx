import { motion } from "motion/react";
import { ChevronDown, X } from "lucide-react";
import { useState, useMemo } from "react";
import { useLanguage } from "../i18n/context";
import { papers } from "../data/papers";

export function Papers() {
  const { t, language } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);

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
