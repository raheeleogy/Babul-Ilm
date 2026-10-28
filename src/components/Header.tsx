import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';
import { 
  Menu, 
  X, 
  Phone, 
  Search, 
  Globe, 
  GraduationCap, 
  BookOpen, 
  ChevronDown,
  ShieldCheck,
  ClipboardList
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/content';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
  onOpenAdmin: () => void;
  applicationsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenAdmin,
  applicationsCount
}) => {
  const { language, setLanguage, dir, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [educationDropdownOpen, setEducationDropdownOpen] = useState(false);

  const navLinks: { id: PageId; label: string; isSub?: boolean }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'school', label: t.nav.school },
    { id: 'madrassa', label: t.nav.madrassa },
    { id: 'admissions', label: t.nav.admissions },
    { id: 'student-life', label: t.nav.studentLife },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'support', label: t.nav.support },
    { id: 'contact', label: t.nav.contact },
    { id: 'faq', label: t.nav.faq },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setEducationDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-navy-100 shadow-sm transition-all">
      {/* Top Utility Bar */}
      <div className="bg-navy-900 text-white text-xs sm:text-sm py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left / Start: Location & Phone */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-navy-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {language === 'ur' ? 'ایف 8/2، عرفان آباد، ترامڑی چوک، اسلام آباد' : 'F-8/2, Irfan Abad, Tramri Chowk, Islamabad'}
            </span>
            <a 
              href={`tel:${INSTITUTION_INFO.phones[0]}`} 
              className="inline-flex items-center gap-1 text-gold-300 hover:text-gold-200 transition-colors font-medium dir-ltr"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{INSTITUTION_INFO.phones[0]}</span>
            </a>
          </div>

          {/* Right / End: Notice & Admin Link */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-block bg-emerald-700/80 text-emerald-100 px-2.5 py-0.5 rounded-full text-xs font-medium">
              {language === 'ur' ? 'تعلیمی سال 2026–2027: جماعت 4 تا 7 میں داخلے جاری ہیں' : 'Admissions Open: Classes 4–7 (2026–2027)'}
            </span>

            {/* Admin Submissions Portal launcher */}
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 text-xs text-navy-200 hover:text-white bg-navy-800/80 px-2 py-0.5 rounded border border-navy-700 transition"
              title="Admin Inquiries & Applications Review"
            >
              <ClipboardList className="w-3.5 h-3.5 text-gold-400" />
              <span>{t.nav.adminPortal}</span>
              {applicationsCount > 0 && (
                <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold ml-1">
                  {applicationsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          >


<div className="w-16 h-16 sm:w-19.5 sm:h-19.5 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-slate-200/80 group-hover:shadow-lg group-hover:ring-emerald-500/40 group-hover:scale-105 transition-all duration-300">
  <img
    src="/babul-ilm-logo.jpeg"
    alt="Babul-Ilm Education System Logo"
    className="w-full h-full object-contain"
  />
</div>


            <div className="flex flex-col">
              <span className="font-urdu text-base sm:text-lg font-bold text-navy-900 leading-tight">
                بابُ العلم ایجوکیشن سسٹم
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-700 uppercase">
                Babul-Ilm Education System
              </span>
              <span className="text-[10px] text-emerald-700 font-medium">
                {language === 'ur' ? 'عصری اسکول اور دینی مدرسہ • اسلام آباد' : 'School & Islamic Madrassa • Islamabad'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'text-slate-700 hover:text-navy-900 hover:bg-navy-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-navy-900 hover:bg-navy-50 rounded-lg transition"
              title={t.nav.search}
              aria-label={t.nav.search}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language Switcher Button (English | اردو) */}
            <div className="flex items-center bg-ivory-200/80 p-1 rounded-xl border border-navy-100 shadow-inner">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-navy-900 text-white shadow'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ur')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg font-urdu transition-all ${
                  language === 'ur'
                    ? 'bg-emerald-700 text-white shadow'
                    : 'text-slate-600 hover:text-emerald-800'
                }`}
              >
                اردو
              </button>
            </div>

            {/* Primary Action Button: Apply Now */}
            <button
              onClick={() => handleNavClick('admissions')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.nav.applyNow}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-navy-900 hover:bg-navy-50 rounded-xl transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[110px] bg-white/98 backdrop-blur-xl border-b border-navy-100 shadow-2xl p-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-start px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                    isActive
                      ? 'bg-navy-900 text-white'
                      : 'text-slate-800 hover:bg-navy-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-4 border-t border-navy-100 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('admissions')}
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white font-semibold rounded-xl shadow"
              >
                <GraduationCap className="w-5 h-5" />
                <span>{t.nav.applyNow}</span>
              </button>

              <div className="flex items-center justify-between p-3 bg-ivory-100 rounded-xl">
                <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-navy-700" />
                  Language / زبان:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                      language === 'en' ? 'bg-navy-900 text-white' : 'bg-white text-slate-700'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('ur')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-urdu ${
                      language === 'ur' ? 'bg-emerald-700 text-white' : 'bg-white text-slate-700'
                    }`}
                  >
                    اردو
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
