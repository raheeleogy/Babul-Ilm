import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId, FaqItem } from '../types';
import { FAQS_DATA } from '../data/content';
import { 
  ChevronDown, 
  HelpCircle, 
  GraduationCap, 
  Phone, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const { language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelEn: 'All Questions', labelUr: 'تمام سوالات' },
    { id: 'admissions', labelEn: 'Admissions 2026–2027', labelUr: 'داخلہ سال 2026–2027' },
    { id: 'academics', labelEn: 'School & Facilities', labelUr: 'اسکول اور سہولیات' },
    { id: 'madrassa', labelEn: 'Islamic Madrassa', labelUr: 'دینی مدرسہ' },
    { id: 'support', labelEn: 'Sponsorship & Welfare', labelUr: 'کفالت و فلاح' },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? FAQS_DATA
    : FAQS_DATA.filter(f => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-xs uppercase font-bold text-navy-800 tracking-widest bg-navy-100 px-3 py-1 rounded-full">
          {language === 'ur' ? 'رہنمائی اور وضاحت' : 'Questions & Clarifications'}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950">
          {language === 'ur' ? 'اکثر پوچھے جانے والے سوالات' : 'Frequently Asked Questions'}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {language === 'ur'
            ? 'داخلہ، تعلیمی شعبہ جات، ہاسٹل سہولیات اور کفالت سے متعلق ضروری سوالات کے تصدیق شدہ جوابات۔'
            : 'Find verified institutional answers regarding admission criteria, test requirements, boarding, and dual education.'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === cat.id
                ? 'bg-navy-900 text-white shadow'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-300'
            }`}
          >
            {language === 'ur' ? cat.labelUr : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'bg-white border-navy-900 shadow-md ring-1 ring-navy-900' 
                  : 'bg-white border-navy-100 hover:border-navy-300'
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-navy-950"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs ${
                    isOpen ? 'bg-navy-900 text-white' : 'bg-navy-50 text-navy-700'
                  }`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span>{language === 'ur' ? faq.questionUr : faq.questionEn}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'transform rotate-180 text-navy-900' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                  <div className="bg-ivory-50 p-4 rounded-xl border border-ivory-200">
                    <p>{language === 'ur' ? faq.answerUr : faq.answerEn}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions CTA */}
      <div className="bg-gradient-to-r from-navy-900 to-emerald-900 text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-start">
          <h3 className="text-xl font-bold">
            {language === 'ur' ? 'مزید معلومات یا استفسار کے لیے' : 'Have More Specific Questions?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            {language === 'ur'
              ? 'ہماری انتظامیہ آپ کے سوالات کا تسلی بخش جواب دینے کے لیے حاضر ہے۔'
              : 'Our administration team is available to assist you via phone or campus visit.'}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-xl text-xs sm:text-sm transition flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>{language === 'ur' ? 'رابطہ کریں' : 'Contact Us'}</span>
          </button>
          <button
            onClick={() => onNavigate('admissions')}
            className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs sm:text-sm border border-white/20 transition flex items-center gap-2"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{language === 'ur' ? 'داخلہ لیں' : 'Apply Now'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
