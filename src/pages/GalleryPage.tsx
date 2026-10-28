import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId, GalleryItem } from '../types';
import { GALLERY_ITEMS, INSTITUTION_INFO } from '../data/content';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Video, 
  ExternalLink, 
  Sparkles, 
  Maximize2,
  CheckCircle2
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const { language, dir } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'campus' | 'school' | 'madrassa' | 'events'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Media', labelUr: 'تمام تصاویر' },
    { id: 'campus', labelEn: 'Campus & Notices', labelUr: 'کیمپس اور اعلانات' },
    { id: 'school', labelEn: 'School Learning', labelUr: 'اسکول کلاس روم' },
    { id: 'madrassa', labelEn: 'Islamic Madrassa', labelUr: 'دینی مدرسہ و نماز' },
    { id: 'events', labelEn: 'Events & Celebrations', labelUr: 'قومی و ہم نصابی سرگرمیاں' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-bold text-navy-800 tracking-widest bg-navy-100 px-3 py-1 rounded-full">
          {language === 'ur' ? 'کیمپس تصویری البم' : 'Visual Records & Media'}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950">
          {language === 'ur' ? 'مستند تصویری گیلری اور ویڈیوز' : 'Authentic Gallery & Official Media'}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {language === 'ur'
            ? 'بابُ العلم ایجوکیشن سسٹم اسلام آباد کی اصل کیمپس عمارات، تدریسی جائزے، دینی تربیت اور طلباء کی سرگرمیوں کا تصدیق شدہ تصویری ریکارڈ۔'
            : 'Explore genuine photographs of our campus in Tramri Chowk, classroom examinations, congregational prayers, and national day festivities.'}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id as any)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === cat.id
                ? 'bg-navy-900 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-400'
            }`}
          >
            {language === 'ur' ? cat.labelUr : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group bg-white rounded-2xl overflow-hidden border border-navy-100 shadow-soft hover:shadow-elevated transition-all cursor-pointer flex flex-col"
          >
            <div className="relative h-64 overflow-hidden bg-navy-950">
              <img
                src={item.imageUrl}
                alt={language === 'ur' ? item.titleUr : item.titleEn}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="p-3 bg-white/90 text-navy-900 rounded-full shadow-lg transform group-hover:scale-110 transition">
                  <Maximize2 className="w-5 h-5" />
                </span>
              </div>
              <div className="absolute top-3 left-3 bg-navy-950/80 text-gold-300 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>{language === 'ur' ? 'اصل تصویر' : 'Verified Image'}</span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <h3 className="font-bold text-navy-950 text-base group-hover:text-emerald-700 transition">
                  {language === 'ur' ? item.titleUr : item.titleEn}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {language === 'ur' ? item.captionUr : item.captionEn}
                </p>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">
                {language === 'ur' ? 'مکمل سائز دیکھنے کے لیے کلک کریں' : 'Click to view high resolution'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Official YouTube Video Embed Section */}
      <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border-2 border-red-500/30 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-navy-800 pb-6">
          <div className="space-y-2 text-center md:text-start">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              <Video className="w-3.5 h-3.5" />
              <span>{language === 'ur' ? 'آفیشل یوٹیوب چینل' : 'Official YouTube Channel'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {language === 'ur' ? 'طلباء کے خطابات، تقاریر اور تلاوت' : 'Speeches, Recitations & Campus Highlights'}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              {language === 'ur'
                ? 'ہمارے یوٹیوب چینل پر طلباء کے تقاریر، قرآنی قرأت، اور مذہبی و قومی ایام کی ویڈیو ریکارڈنگز ملاحظہ فرمائیں۔'
                : 'Watch official educational speeches, Quranic recitations, and campus program videos on our channel.'}
            </p>
          </div>

          <a
            href={INSTITUTION_INFO.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl transition shadow flex-shrink-0 flex items-center gap-2"
          >
            <span>{language === 'ur' ? 'یوٹیوب چینل سبسکرائب کریں' : 'Visit Official YouTube Channel'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Video Embed Frame / Accessible Player Card */}
        <div className="relative rounded-2xl overflow-hidden bg-navy-900 border border-navy-800 aspect-video max-w-3xl mx-auto shadow-2xl flex items-center justify-center p-6 text-center">
          <div className="space-y-4 max-w-md">
            <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center mx-auto shadow-lg hover:scale-110 transition cursor-pointer">
              <Video className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">
              {language === 'ur' ? 'بابُ العلم ایجوکیشن سسٹم یوٹیوب نشریات' : 'Babul-Ilm Official YouTube Broadcasts'}
            </h4>
            <p className="text-xs text-slate-300">
              {language === 'ur'
                ? 'تازہ ترین تقاریر، سیرت النبی ﷺ کانفرنس اور ہم نصابی مقابلوں کی مکمل ویڈیوز کے لیے ہمارے آفیشل چینل پر جائیں۔'
                : 'Access student speech competitions, academic sessions, and annual events directly on YouTube.'}
            </p>
            <a
              href={INSTITUTION_INFO.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl transition shadow"
            >
              <span>{language === 'ur' ? 'ویڈیو دیکھیں' : 'Watch on YouTube'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
            title="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
            }}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
            title="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
            title="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            className="max-w-4xl w-full bg-navy-900 rounded-2xl overflow-hidden shadow-2xl border border-navy-700 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-black flex items-center justify-center overflow-hidden flex-1 max-h-[70vh]">
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={language === 'ur' ? filteredItems[lightboxIndex].titleUr : filteredItems[lightboxIndex].titleEn}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-5 bg-navy-900 text-white space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-lg text-white">
                  {language === 'ur' ? filteredItems[lightboxIndex].titleUr : filteredItems[lightboxIndex].titleEn}
                </h4>
                <span className="text-xs text-gold-400 font-mono">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {language === 'ur' ? filteredItems[lightboxIndex].captionUr : filteredItems[lightboxIndex].captionEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
