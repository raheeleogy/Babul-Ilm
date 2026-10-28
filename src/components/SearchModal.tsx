import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';
import { Search, X, ArrowRight, ArrowLeft, BookOpen, GraduationCap, MapPin, Phone, HelpCircle } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

interface SearchEntry {
  pageId: PageId;
  titleEn: string;
  titleUr: string;
  descriptionEn: string;
  descriptionUr: string;
  keywords: string[];
  icon: any;
}

const SEARCH_DATABASE: SearchEntry[] = [
  {
    pageId: 'admissions',
    titleEn: 'Admissions 2026–2027 (Classes 4–7)',
    titleUr: 'داخلہ سال 2026–2027 (جماعت چہارم تا ہفتم)',
    descriptionEn: 'Admission announcement, test requirements, B-Form, photographs, 10 limited seats, and online application form.',
    descriptionUr: 'اعلانِ داخلہ، ٹیسٹ کے کوائف، ب فارم، تصاویر، 10 مخصوص نشستیں اور آن لائن داخلہ فارم۔',
    keywords: ['admission', 'apply', 'seats', 'class 4', 'class 5', 'class 6', 'class 7', 'hostel', 'boarding', 'داخلہ', 'نشستیں', 'ٹیسٹ', 'فارم'],
    icon: GraduationCap,
  },
  {
    pageId: 'school',
    titleEn: 'School Education & Academic Subjects',
    titleUr: 'اسکول کی تعلیم اور عصری مضامین',
    descriptionEn: 'Academic curriculum, English, Urdu, Mathematics, Science, classroom discipline, and progressive learning.',
    descriptionUr: 'عصری نصاب تعلیم، سائنسی و فکری سوچ، کلاس روم ماحول اور امتحانات۔',
    keywords: ['school', 'academics', 'curriculum', 'classes', 'study', 'subjects', 'اسکول', 'تعلیم', 'مضامین', 'کلاس روم'],
    icon: BookOpen,
  },
  {
    pageId: 'madrassa',
    titleEn: 'Islamic Madrassa & Character Building',
    titleUr: 'دینی مدرسہ اور اخلاقی تربیت',
    descriptionEn: 'Quranic education, Tajweed, Islamic teachings, Fiqh, ethics, congregational prayers, and Shia Islamic identity.',
    descriptionUr: 'قرآنی تعلیم مع تجوید، فقہ و اخلاقیات، نماز باجماعت اور دینی تربیت۔',
    keywords: ['madrassa', 'islamic', 'quran', 'tajweed', 'shia', 'prayer', 'namaz', 'مدرسہ', 'قرآن', 'دینی', 'نماز', 'تجوید', 'اخلاق'],
    icon: BookOpen,
  },
  {
    pageId: 'student-life',
    titleEn: 'Student Life, Boarding & Hostel Facilities',
    titleUr: 'طلباء کی زندگی اور ہاسٹل و رہائشی سہولیات',
    descriptionEn: 'Hostel facilities for eligible students, national day celebrations, extracurricular activities, and student safeguarding.',
    descriptionUr: 'طلباء کے لیے ہاسٹل سہولت، یوم آزادی کی تقریبات، ہم نصابی سرگرمیاں اور فلاحی ماحول۔',
    keywords: ['student life', 'hostel', 'boarding', 'facilities', 'activities', 'dormitory', 'ہاسٹل', 'بورڈنگ', 'رہائش', 'سرگرمیاں'],
    icon: GraduationCap,
  },
  {
    pageId: 'gallery',
    titleEn: 'Authentic Campus Photo Gallery & Videos',
    titleUr: 'کیمپس تصویری گیلری اور ویڈیوز',
    descriptionEn: 'Photographs of the campus exterior, Principal Syed Mohsin Abbas Naqvi, classrooms, prayers, and student events.',
    descriptionUr: 'کیمپس عمارت، پرنسپل صاحب، کلاس روم، نماز باجماعت اور تقریبات کی اصل تصاویر۔',
    keywords: ['gallery', 'photos', 'pictures', 'campus', 'video', 'youtube', 'گیلری', 'تصاویر', 'ویڈیو'],
    icon: BookOpen,
  },
  {
    pageId: 'support',
    titleEn: 'Support a Child & Sponsorship Program',
    titleUr: 'ایک بچے کی تعلیمی کفالت اور تعاون',
    descriptionEn: 'Help needy students with tuition fees, textbooks, bags, uniforms, and boarding meals.',
    descriptionUr: 'مستحق طلباء کی فیس، کتابوں، بستہ اور ہاسٹل کے اخراجات میں مالی تعاون کی تفصیلات۔',
    keywords: ['support', 'sponsor', 'donate', 'donation', 'welfare', 'charity', 'کفالت', 'تعاون', 'امداد', 'فلاح'],
    icon: BookOpen,
  },
  {
    pageId: 'contact',
    titleEn: 'Campus Location, Phones & Map',
    titleUr: 'کیمپس کا پتہ، رابطہ نمبرز اور نقشہ',
    descriptionEn: 'F-8/2 Irfan Abad, Tramri Chowk, Islamabad. Phones: +92 332-5922372, +92 3340578714. bies.edu444@gmail.com.',
    descriptionUr: 'ایف 8/2 عرفان آباد، ترامڑی چوک، اسلام آباد۔ فون: 5922372-0332۔',
    keywords: ['contact', 'address', 'phone', 'location', 'map', 'tramri', 'islamabad', 'رابطہ', 'پتہ', 'فون', 'نقشہ'],
    icon: MapPin,
  },
  {
    pageId: 'faq',
    titleEn: 'Frequently Asked Questions (FAQ)',
    titleUr: 'اکثر پوچھے جانے والے سوالات',
    descriptionEn: 'Common questions about admission eligibility, tests, boarding arrangements, and dual education pathways.',
    descriptionUr: 'داخلے کے ضوابط، ہاسٹل سہولیات اور تعلیمی نظام کے بارے میں ضروری سوالات و جوابات۔',
    keywords: ['faq', 'questions', 'answers', 'help', 'info', 'سوالات', 'جوابات', 'رہنمائی'],
    icon: HelpCircle,
  },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const { language, dir, t } = useLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const normalizedQuery = query.trim().toLowerCase();

  const filteredResults = normalizedQuery
    ? SEARCH_DATABASE.filter(item => {
        const matchesEn = item.titleEn.toLowerCase().includes(normalizedQuery) ||
                          item.descriptionEn.toLowerCase().includes(normalizedQuery);
        const matchesUr = item.titleUr.includes(query.trim()) ||
                          item.descriptionUr.includes(query.trim());
        const matchesKeyword = item.keywords.some(k => k.toLowerCase().includes(normalizedQuery));
        return matchesEn || matchesUr || matchesKeyword;
      })
    : SEARCH_DATABASE.slice(0, 5);

  const handleSelect = (pageId: PageId) => {
    onNavigate(pageId);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-navy-100 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-navy-100 flex items-center gap-3 bg-ivory-50">
          <Search className="w-5 h-5 text-navy-600 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'ur' ? 'داخلہ، فیس، مضامین، ہاسٹل یا رابطہ تلاش کریں...' : 'Search admissions, subjects, boarding, campus, contact...'}
            className="w-full bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 text-sm sm:text-base font-medium"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="text-xs bg-navy-100 hover:bg-navy-200 text-navy-800 px-2 py-1 rounded font-medium ml-2"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-2 flex-1">
          {filteredResults.length === 0 ? (
            <div className="text-center py-10 text-slate-500">
              <Search className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-medium">
                {language === 'ur' ? 'کوئی نتیجہ نہیں ملا۔ برائے مہربانی کوئی دوسرا لفظ تلاش کریں۔' : 'No results found. Try searching for admissions, school, or contact.'}
              </p>
            </div>
          ) : (
            filteredResults.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.pageId}
                  onClick={() => handleSelect(item.pageId)}
                  className="w-full text-start p-3.5 rounded-xl hover:bg-navy-50/80 border border-transparent hover:border-navy-100 transition-all flex items-start gap-3 group"
                >
                  <div className="p-2.5 rounded-lg bg-navy-100 text-navy-800 group-hover:bg-navy-900 group-hover:text-white transition flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-navy-950 group-hover:text-emerald-700 transition">
                        {language === 'ur' ? item.titleUr : item.titleEn}
                      </h4>
                      {dir === 'rtl' ? (
                        <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition group-hover:-translate-x-1" />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition group-hover:translate-x-1" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {language === 'ur' ? item.descriptionUr : item.descriptionEn}
                    </p>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Search Footer */}
        <div className="px-4 py-2.5 bg-ivory-100 border-t border-navy-100 text-[11px] text-slate-500 flex items-center justify-between">
          <span>{language === 'ur' ? 'فوری تلاش برائے بابُ العلم ایجوکیشن سسٹم' : 'Quick search for Babul-Ilm Education System'}</span>
          <span>{language === 'ur' ? 'انتخاب کے لیے کلک کریں' : 'Click result to navigate'}</span>
        </div>
      </div>
    </div>
  );
};
