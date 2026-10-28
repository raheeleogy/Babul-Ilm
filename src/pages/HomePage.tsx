import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';
import { INSTITUTION_INFO, GALLERY_ITEMS } from '../data/content';
import { 
  GraduationCap, 
  BookOpen, 
  Heart, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Video, 
  ExternalLink,
  ChevronRight,
  School,
  Building,
  Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { language, dir, t } = useLanguage();

  const isRtl = dir === 'rtl';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* =========================================================================
          HERO SECTION: Authentic Campus Imagery, High Contrast & Compelling CTAs
          ========================================================================= */}
      <section className="relative overflow-hidden bg-navy-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b-4 border-gold-500">
        {/* Subtle Islamic Geometric Pattern Background Accent */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Announcement Alert Pill */}
          <div className="flex justify-center sm:justify-start mb-6">
            <div 
              onClick={() => onNavigate('admissions')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/80 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm font-semibold hover:bg-emerald-800 transition cursor-pointer shadow-lg hover:shadow-emerald-900/40"
            >
              <Sparkles className="w-4 h-4 text-gold-400 animate-spin" />
              <span>{t.hero.announcementPill}</span>
              <ArrowIcon className="w-3.5 h-3.5 text-gold-300" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 space-y-6 text-center sm:text-start">
              <div className="inline-block">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold border-b border-gold-500/40 pb-1">
                  {language === 'ur' ? 'اسلام آباد میں دینی و عصری تعلیم کا امتزاج' : 'Islamic & Academic Excellence in Islamabad'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight sm:leading-snug">
                {t.hero.headline}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {t.hero.subheadline}
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => onNavigate('school')}
                  className="px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-xl shadow-lg hover:shadow-gold-500/20 transition-all flex items-center gap-2 transform active:scale-95"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{t.hero.exploreEducation}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('admissions')}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-600/30 transition-all flex items-center gap-2 border border-emerald-400/40 transform active:scale-95"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>{t.hero.admissionsBtn}</span>
                </button>

                <button
                  onClick={() => onNavigate('support')}
                  className="px-5 py-3.5 bg-navy-800/90 hover:bg-navy-700 text-slate-200 hover:text-white font-semibold rounded-xl border border-navy-700 transition flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>{t.hero.supportBtn}</span>
                </button>
              </div>

              {/* Verified Key Indicators */}
              <div className="pt-6 border-t border-navy-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{language === 'ur' ? 'جماعت چہارم تا ہفتم' : 'Classes 4 to 7'}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>{language === 'ur' ? 'ہاسٹل سہولت دستیاب' : 'Boarding Facility'}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{language === 'ur' ? 'داخلہ ٹیسٹ لازمی' : 'Admission Test'}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Campus Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 bg-gradient-to-r from-gold-500 to-emerald-600 rounded-3xl opacity-30 blur-sm transform rotate-1"></div>
                
                <div className="relative rounded-2xl overflow-hidden bg-navy-900 border-2 border-gold-400/50 shadow-2xl">
                  <img
src={`${import.meta.env.BASE_URL}images/campus_exterior_principal_students.jpg`}
                    alt="Babul-Ilm Education System Campus Exterior with Principal Syed Mohsin Abbas Naqvi and students"
                    className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Caption Card */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950 via-navy-950/90 to-transparent p-4 sm:p-5 text-start">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 bg-navy-900/80 px-2 py-0.5 rounded border border-gold-500/40 inline-block mb-1">
                      {language === 'ur' ? 'اصل کیمپس ریکارڈ' : 'Authentic Campus Photo'}
                    </span>
                    <h3 className="font-urdu text-sm sm:text-base font-bold text-white leading-tight">
                      {language === 'ur' 
                        ? 'پرنسپل سید محسن عباس نقوی کیمپس کے سامنے طلباء کے ہمراہ'
                        : 'Principal Syed Mohsin Abbas Naqvi with Students outside Campus Gate'}
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {language === 'ur' ? 'ایف 8/2، عرفان آباد، ترامڑی چوک، اسلام آباد' : 'F-8/2, Irfan Abad, Tramri Chowk, Islamabad'}
                    </p>
                  </div>
                </div>

                {/* Sub-badge: Principal & Identity */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-emerald-800 text-white px-4 py-2 rounded-xl shadow-xl border border-emerald-500 flex items-center gap-2 text-xs font-semibold">
                  <Award className="w-4 h-4 text-gold-300" />
                  <span>{language === 'ur' ? 'پرنسپل: سید محسن عباس نقوی' : 'Principal: Syed Mohsin Abbas Naqvi'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          TWO EDUCATIONAL PATHWAYS: School Education & Islamic Madrassa
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
            {language === 'ur' ? 'ہمہ جہت تعلیمی نظام' : 'Holistic Education'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950">
            {t.pathways.sectionTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.pathways.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: School Education */}
          <div className="bg-white rounded-2xl overflow-hidden border border-navy-100 shadow-soft hover:shadow-elevated transition-all flex flex-col group">
            <div className="relative h-64 overflow-hidden bg-navy-100">
              <img
  src={`${import.meta.env.BASE_URL}images/classroom_exam_learning.jpg`}
                alt="School classroom examination and structured academic learning at Babul-Ilm"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-navy-900/90 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                {language === 'ur' ? 'عصری تعلیمی شعبہ' : 'Academic Stream'}
              </div>
              <div className="absolute bottom-3 right-3 bg-white/95 text-navy-900 px-2.5 py-1 rounded-md text-xs font-semibold shadow">
                {language === 'ur' ? 'جماعت 4 تا 7' : 'Classes 4 – 7'}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center font-bold">
                  <School className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                  {t.pathways.schoolTitle}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {t.pathways.schoolDesc}
                </p>

                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{language === 'ur' ? 'بنیادی سائنسی اور لسانی مضامین کی تدریس' : 'Structured core subjects: English, Urdu, Math, Science'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{language === 'ur' ? 'کلاس روم میں باقاعدہ امتحانات اور جائزہ' : 'Periodic classroom assessments and individual guidance'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{language === 'ur' ? 'منظم اور محفوظ تعلیمی ماحول' : 'Disciplined, respectful learning atmosphere'}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('school')}
                  className="w-full py-3 px-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>{t.pathways.schoolBtn}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Islamic Madrassa */}
          <div className="bg-white rounded-2xl overflow-hidden border border-emerald-200/80 shadow-soft hover:shadow-elevated transition-all flex flex-col group">
            <div className="relative h-64 overflow-hidden bg-emerald-950">
              <img
  src={`${import.meta.env.BASE_URL}images/madrassa_prayer_guidance.jpg`}
                alt="Students in congregational prayer in Madrassa under religious guidance"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-emerald-800/90 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                {language === 'ur' ? 'دینی و اخلاقی شعبہ' : 'Religious Stream'}
              </div>
              <div className="absolute bottom-3 right-3 bg-white/95 text-emerald-900 px-2.5 py-1 rounded-md text-xs font-semibold shadow">
                {language === 'ur' ? 'قرآن، فقہ و اخلاقیات' : 'Quran & Ethics'}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                  {t.pathways.madrassaTitle}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {t.pathways.madrassaDesc}
                </p>

                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{language === 'ur' ? 'تلاوتِ قرآن مجید مع تجوید و حفظ کے ابتدائی اصول' : 'Quranic recitation with Tajweed and proper pronunciation'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{language === 'ur' ? 'روزانہ باجماعت نماز اور عملی اسلامی تربیت' : 'Daily congregational prayers and practical spiritual training'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{language === 'ur' ? 'سیرتِ ائمہ معصومینؑ کی روشنی میں اخلاق سازی' : 'Character building inspired by the teachings of Ahl al-Bayt (AS)'}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('madrassa')}
                  className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>{t.pathways.madrassaBtn}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          ADMISSIONS BANNER: Session 2026–2027 (Classes 4–7, Limited 10 Seats)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white p-8 sm:p-12 overflow-hidden shadow-2xl border-2 border-gold-400/40">
          {/* Subtle gold badge in corner */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4 text-center sm:text-start">
              <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-300 border border-gold-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>{t.admissionsBanner.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {t.admissionsBanner.title}
              </h2>

              <p className="text-gold-200 text-base sm:text-lg font-semibold">
                {t.admissionsBanner.classes} • {t.admissionsBanner.seats}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="bg-navy-950/60 p-3 rounded-xl border border-navy-700 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{t.admissionsBanner.req1}</span>
                </div>
                <div className="bg-navy-950/60 p-3 rounded-xl border border-navy-700 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{t.admissionsBanner.req2}</span>
                </div>
                <div className="bg-navy-950/60 p-3 rounded-xl border border-navy-700 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>{t.admissionsBanner.req3}</span>
                </div>
                <div className="bg-navy-950/60 p-3 rounded-xl border border-navy-700 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>{t.admissionsBanner.req4}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <button
                onClick={() => onNavigate('admissions')}
                className="w-full py-4 px-6 bg-gold-500 hover:bg-gold-600 text-navy-950 text-base font-bold rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                <GraduationCap className="w-5 h-5" />
                <span>{t.admissionsBanner.applyBtn}</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-2xl border border-white/20 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-300" />
                <span>{t.admissionsBanner.inquireBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          ABOUT & MISSION / VISION: Authentic Institutional Purpose
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left / Text column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-navy-700 uppercase tracking-widest bg-navy-100 px-3 py-1 rounded-full">
                {t.aboutSection.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950">
                {t.aboutSection.title}
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              {t.aboutSection.p1}
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              {t.aboutSection.p2}
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-ivory-100 p-5 rounded-2xl border border-ivory-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-navy-950 text-base">
                  {t.aboutSection.missionTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.aboutSection.missionText}
                </p>
              </div>

              <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-navy-950 text-base">
                  {t.aboutSection.visionTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.aboutSection.visionText}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-emerald-700 transition"
              >
                <span>{t.aboutSection.learnMoreBtn}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Poster & Campus Visual */}
          <div className="lg:col-span-5">
            <div className="bg-white p-3 sm:p-4 rounded-3xl border border-navy-100 shadow-xl space-y-3">
              <div className="rounded-2xl overflow-hidden border border-slate-100">
                <img
  src={`${import.meta.env.BASE_URL}images/babul_ilm_admission_poster.jpg`}
                  alt="Official Admission poster 2026-2027 of Babul-Ilm Education System Islamabad"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-3 bg-ivory-50 rounded-xl text-xs text-slate-600 flex items-center justify-between">
                <span>{language === 'ur' ? 'باضابطہ اعلانِ داخلہ سیشن 2026-2027' : 'Official Notice • Session 2026–2027'}</span>
                <span className="font-semibold text-emerald-700">{language === 'ur' ? 'اسلام آباد' : 'Islamabad'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          WHY CHOOSE BABUL-ILM? Verified Feature Grid
          ========================================================================= */}
      <section className="bg-white py-16 border-y border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {language === 'ur' ? 'امتیازی خصوصیات' : 'Institutional Hallmarks'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950">
              {t.features.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.features.items.map((item, index) => (
              <div
                key={index}
                className="bg-ivory-50 p-6 rounded-2xl border border-navy-100/80 hover:border-gold-400 hover:bg-white hover:shadow-soft transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center font-bold group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 group-hover:text-navy-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          STUDENT LIFE & GALLERY PREVIEW
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-navy-700 uppercase tracking-widest bg-navy-100 px-3 py-1 rounded-full">
              {language === 'ur' ? 'کیمپس اور سرگرمیاں' : 'Campus Activities'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
              {language === 'ur' ? 'طلباء کی تعلیمی و تربیتی جھلکیاں' : 'Student Life & Campus Gallery'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold rounded-xl transition flex items-center gap-2 shadow"
          >
            <span>{t.common.viewFullGallery}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.slice(0, 3).map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden border border-navy-100 shadow-soft group hover:shadow-elevated transition-all"
            >
              <div className="h-60 overflow-hidden bg-navy-950 relative">
                <img
                  src={item.imageUrl}
                  alt={language === 'ur' ? item.titleUr : item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-navy-950/80 text-gold-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  {language === 'ur' ? 'مستند تصویر' : 'Verified Photo'}
                </div>
              </div>
              <div className="p-5 space-y-1.5">
                <h4 className="font-bold text-navy-950 text-base group-hover:text-emerald-700 transition">
                  {language === 'ur' ? item.titleUr : item.titleEn}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {language === 'ur' ? item.captionUr : item.captionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          STAY CONNECTED: Official Social Media Links & YouTube Embed
          ========================================================================= */}
      <section className="bg-navy-950 text-white py-16 border-t-2 border-b-2 border-gold-500/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              {language === 'ur' ? 'آفیشل چینلز' : 'Official Channels'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              {t.socialSection.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {t.socialSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <div className="bg-navy-900/90 rounded-2xl p-6 border border-emerald-500/30 shadow-lg flex flex-col justify-between space-y-4 hover:border-emerald-400 transition">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white">
                  {t.socialSection.whatsappTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.socialSection.whatsappDesc}
                </p>
              </div>

              <a
                href={INSTITUTION_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center justify-center gap-2"
              >
                <span>{t.socialSection.whatsappBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Facebook */}
            <div className="bg-navy-900/90 rounded-2xl p-6 border border-blue-500/30 shadow-lg flex flex-col justify-between space-y-4 hover:border-blue-400 transition">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-white">
                  {t.socialSection.facebookTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.socialSection.facebookDesc}
                </p>
              </div>

              <a
                href={INSTITUTION_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center justify-center gap-2"
              >
                <span>{t.socialSection.facebookBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* YouTube */}
            <div className="bg-navy-900/90 rounded-2xl p-6 border border-red-500/30 shadow-lg flex flex-col justify-between space-y-4 hover:border-red-400 transition">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shadow">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white">
                  {t.socialSection.youtubeTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.socialSection.youtubeDesc}
                </p>
              </div>

              <a
                href={INSTITUTION_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center justify-center gap-2"
              >
                <span>{t.socialSection.youtubeBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SUPPORT A CHILD / DONATION SECTION: Compassionate & Transparent
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory-100 rounded-3xl p-8 sm:p-12 border border-gold-300 shadow-soft">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-200/60 px-3 py-1 rounded-full">
              {language === 'ur' ? 'کفالتِ یتامیٰ و مستحقین' : 'Student Sponsorship & Welfare'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950">
              {t.supportSection.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {t.supportSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-navy-100 shadow-sm space-y-2 text-center sm:text-start">
              <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center mx-auto sm:mx-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-navy-950 text-base">
                {t.supportSection.card1Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.supportSection.card1Desc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-navy-100 shadow-sm space-y-2 text-center sm:text-start">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto sm:mx-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-navy-950 text-base">
                {t.supportSection.card2Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.supportSection.card2Desc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-navy-100 shadow-sm space-y-2 text-center sm:text-start">
              <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-700 flex items-center justify-center mx-auto sm:mx-0">
                <Heart className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-bold text-navy-950 text-base">
                {t.supportSection.card3Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.supportSection.card3Desc}
              </p>
            </div>
          </div>

          {/* Transparency note & Direct Contact */}
          <div className="bg-white p-6 rounded-2xl border border-gold-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.supportSection.contactInfoNote}
              </p>
            </div>

            <button
              onClick={() => onNavigate('support')}
              className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition shadow flex-shrink-0 flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              <span>{t.supportSection.sponsorBtn}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
