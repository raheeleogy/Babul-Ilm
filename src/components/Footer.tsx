import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';
import { INSTITUTION_INFO } from '../data/content';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  ExternalLink, 
  ShieldCheck, 
  BookOpen, 
  GraduationCap,
  MessageCircle,
  Video
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, setLanguage, t } = useLanguage();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-8 border-t-4 border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Institution Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-navy-900 border border-gold-400/30 flex items-center justify-center p-1.5 shadow">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <path d="M50 16L18 32L50 48L82 32L50 16Z" fill="#D4AF37"/>
                  <path d="M26 42V62C26 62 36 72 50 72C64 72 74 62 74 62V42L50 54L26 42Z" fill="#108560"/>
                  <circle cx="50" cy="80" r="4" fill="#D4AF37"/>
                </svg>
              </div>
              <div>
                <h3 className="font-urdu text-lg font-bold text-white leading-tight">
                  بابُ العلم ایجوکیشن سسٹم
                </h3>
                <p className="text-xs font-semibold text-gold-400 tracking-wider uppercase">
                  Babul-Ilm Education System
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.footer.aboutText}
            </p>

            {/* Principal reference */}
            <div className="bg-navy-900/80 p-3 rounded-xl border border-navy-800 text-xs text-slate-300">
              <span className="text-gold-400 font-semibold block mb-0.5">
                {language === 'ur' ? 'پرنسپل / سرپرست:' : 'Principal & Patron:'}
              </span>
              <span>{language === 'ur' ? INSTITUTION_INFO.principalUr : INSTITUTION_INFO.principalEn}</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                {language === 'ur' ? 'آفیشل سوشل لنکس:' : 'Official Social Channels:'}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={INSTITUTION_INFO.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-emerald-800/60 hover:bg-emerald-600 text-white flex items-center justify-center transition shadow"
                  title="WhatsApp Channel"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={INSTITUTION_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-blue-900/60 hover:bg-blue-600 text-white flex items-center justify-center transition shadow"
                  title="Facebook Page"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={INSTITUTION_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-red-900/60 hover:bg-red-600 text-white flex items-center justify-center transition shadow"
                  title="YouTube Channel"
                >
                  <Video className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-navy-800 pb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-gold-400" />
              <span>{t.footer.quickLinks}</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-gold-300 transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-gold-300 transition-colors">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admissions')} className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span>{t.nav.admissions}</span>
                  <span className="text-[10px] bg-emerald-800 text-emerald-200 px-1.5 py-0.2 rounded font-semibold">2026-27</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('student-life')} className="hover:text-gold-300 transition-colors">
                  {t.nav.studentLife}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-gold-300 transition-colors">
                  {t.nav.gallery}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('support')} className="hover:text-gold-300 transition-colors">
                  {t.nav.support}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-gold-300 transition-colors">
                  {t.nav.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Educational Pathways & Admissions */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-navy-800 pb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>{t.footer.academicPrograms}</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNav('school')} className="text-start group">
                  <span className="block font-semibold text-slate-200 group-hover:text-gold-300 transition">
                    {language === 'ur' ? 'اسکول کی تعلیم' : 'School Education'}
                  </span>
                  <span className="text-xs text-slate-400 block">
                    {language === 'ur' ? 'جماعت چہارم تا ہفتم • عصری مضامین' : 'Classes 4 to 7 • Core Academic Subjects'}
                  </span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('madrassa')} className="text-start group">
                  <span className="block font-semibold text-slate-200 group-hover:text-gold-300 transition">
                    {language === 'ur' ? 'اسلامی مدرسہ و دینی تربیت' : 'Islamic Madrassa & Character Building'}
                  </span>
                  <span className="text-xs text-slate-400 block">
                    {language === 'ur' ? 'قرآن مجید مع تجوید، فقہ و اخلاق' : 'Quranic studies, Tajweed, Islamic jurisprudence'}
                  </span>
                </button>
              </li>
              <li className="pt-2">
                <div className="bg-emerald-950/70 p-3 rounded-xl border border-emerald-800/60 text-xs">
                  <span className="font-semibold text-emerald-300 block mb-1">
                    {language === 'ur' ? 'ہاسٹل کی سہولت:' : 'Boarding Facility:'}
                  </span>
                  <p className="text-slate-300">
                    {language === 'ur' 
                      ? 'قابل اور باصلاحیت طلباء کے لیے اقامتی ہاسٹل کی سہولت دستیاب ہے۔' 
                      : 'Boarding facilities available for capable and qualifying students.'}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-navy-800 pb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>{t.footer.contactInfo}</span>
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{language === 'ur' ? INSTITUTION_INFO.addressUr : INSTITUTION_INFO.addressEn}</span>
              </div>

              <div className="space-y-1">
                {INSTITUTION_INFO.phones.map((phone, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <a href={`tel:${phone}`} className="hover:text-gold-300 dir-ltr font-mono">
                      {phone}
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-navy-300 flex-shrink-0" />
                <a href={`mailto:${INSTITUTION_INFO.email}`} className="hover:text-gold-300 truncate">
                  {INSTITUTION_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full py-2 px-3 bg-navy-800 hover:bg-navy-700 text-gold-300 text-xs font-semibold rounded-lg border border-navy-700 transition flex items-center justify-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{language === 'ur' ? 'کیمپس لوکیشن اور رابطہ' : 'View Campus Map & Contact'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Language */}
        <div className="pt-8 border-t border-navy-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-center md:text-start">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{t.footer.copyright}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => handleNav('privacy')} 
              className="hover:text-white transition"
            >
              {t.nav.privacy}
            </button>
            <span>•</span>
            <button 
              onClick={() => handleNav('terms')} 
              className="hover:text-white transition"
            >
              {t.nav.terms}
            </button>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setLanguage('en')}
                className={`hover:underline ${language === 'en' ? 'text-gold-400 font-bold' : ''}`}
              >
                English
              </button>
              <span>/</span>
              <button
                onClick={() => setLanguage('ur')}
                className={`hover:underline font-urdu ${language === 'ur' ? 'text-emerald-400 font-bold' : ''}`}
              >
                اردو
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
