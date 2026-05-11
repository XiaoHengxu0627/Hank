import { Outlet, Link, useLocation, useNavigate, useNavigation } from "react-router";
import { Menu, X, Globe, Mail, MapPin, ChevronDown } from "lucide-react";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../i18n/context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = useNavigation();
  const { language, setLanguage, t } = useLanguage();
  const topRef = useRef<HTMLDivElement>(null);
  const prevPath = useRef(location.pathname);

  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (navigation.state !== 'idle') return;
    if (location.pathname === prevPath.current) return;
    prevPath.current = location.pathname;

    const doScroll = () => {
      topRef.current?.scrollIntoView(true);
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    doScroll();
    requestAnimationFrame(doScroll);
    const id = setTimeout(doScroll, 50);

    return () => clearTimeout(id);
  }, [navigation.state, location.pathname]);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.projects"), path: "/projects" },
    { 
      name: t("nav.papers"), 
      path: "/papers",
      children: [
        { name: t("nav.sub.paper"), path: "/papers" },
        { name: t("nav.sub.award"), path: "/awards" },
      ]
    },
    { name: t("nav.team"), path: "/team" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md backdrop-blur-md-safe border-b border-zinc-100" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-black rounded-sm overflow-hidden group-hover:bg-zinc-800 transition-colors">
              <img src="/icon.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none tracking-wide">CUI Design Lab</h1>
              <p className="text-[10px] text-zinc-500 tracking-widest mt-1 uppercase">具身智能设计实验室</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || link.children?.some(child => location.pathname === child.path);
              
              if (link.children) {
                return (
                  <DropdownMenu key={link.path}>
                    <DropdownMenuTrigger className={`text-sm tracking-wider font-medium relative transition-colors flex items-center gap-1 outline-none ${
                      isActive ? "text-black" : "text-zinc-500 hover:text-black"
                    }`}>
                      {link.name}
                      <ChevronDown size={14} className="opacity-70" />
                      {isActive && (
                        <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black" />
                      )}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-32 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-zinc-100 p-2">
                      {link.children.map((child) => (
                        <DropdownMenuItem key={child.path} asChild className="rounded-lg cursor-pointer hover:bg-zinc-50 transition-colors py-2 px-3 focus:bg-zinc-100 focus:text-black">
                          <Link to={child.path} className="w-full font-medium text-zinc-600">
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wider font-medium relative transition-colors ${
                    isActive ? "text-black" : "text-zinc-500 hover:text-black"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black" />
                  )}
                </Link>
              );
            })}
            {/* Language Toggle */}
            <div className="flex items-center gap-1 ml-4 border-l border-zinc-200 pl-6">
              <button
                onClick={() => setLanguage("zh")}
                className={`text-sm font-medium px-2 py-1 transition-colors ${
                  language === "zh" ? "text-black" : "text-zinc-400 hover:text-black"
                }`}
              >
                中文
              </button>
              <span className="text-zinc-300">/</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-medium px-2 py-1 transition-colors ${
                  language === "en" ? "text-black" : "text-zinc-400 hover:text-black"
                }`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-zinc-600 hover:text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-xl font-medium tracking-wide">
              {navLinks.map((link) => (
                <div key={link.path} className="flex flex-col gap-4 border-b border-zinc-100 pb-4">
                  {link.children ? (
                    <div className="flex flex-col gap-4">
                      <span className="text-zinc-900">{link.name}</span>
                      <div className="flex flex-col gap-3 pl-4 text-base text-zinc-500">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="hover:text-black transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-black transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* Language Toggle for Mobile */}
              <div className="flex items-center gap-2 pt-2 border-b border-zinc-100 pb-4">
                <button
                  onClick={() => { setLanguage("zh"); setMobileMenuOpen(false); }}
                  className={`text-base font-medium px-3 py-1.5 transition-colors ${
                    language === "zh" ? "bg-black text-white" : "text-zinc-500 hover:text-black"
                  }`}
                >
                  中文
                </button>
                <button
                  onClick={() => { setLanguage("en"); setMobileMenuOpen(false); }}
                  className={`text-base font-medium px-3 py-1.5 transition-colors ${
                    language === "en" ? "bg-black text-white" : "text-zinc-500 hover:text-black"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <div ref={topRef} />
        <Outlet key={location.pathname} />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-50 border-t border-zinc-200 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-black rounded-sm overflow-hidden">
                <img src="/icon.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-bold text-lg tracking-wide">{t("footer.labName")}</h2>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              {t("footer.desc")}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm tracking-wider mb-6">{t("footer.contact")}</h3>
            <ul className="space-y-4 text-sm text-zinc-600">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-zinc-400" />
                <a href="mailto:absolutecui@163.com" className="hover:text-black transition-colors">
                  absolutecui@163.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-zinc-400 mt-1" />
                <span className="leading-relaxed">
                  {t("footer.address")}<br />{t("footer.address2")}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-wider mb-6">{t("footer.followUs")}</h3>
            <p className="text-sm text-zinc-600">公众号：CUI Design Studio</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-200 text-xs text-zinc-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {t("footer.copyright")}</p>
          <p>{t("footer.designed")}</p>
        </div>
      </footer>
    </div>
  );
}
