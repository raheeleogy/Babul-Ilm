import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';
import { 
  Heart, 
  Sparkles, 
  Flag, 
  Building, 
  ShieldCheck, 
  Smile, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';

interface StudentLifePageProps {
  onNavigate: (page: PageId) => void;
}

export const StudentLifePage: React.FC<StudentLifePageProps> = ({ onNavigate }) => {
  const { language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-bold text-navy-800 tracking-widest bg-navy-100 px-3 py-1 rounded-full">
          {language === 'ur' ? 'کیمپس اور طلباء کی سرگرمیاں' : 'Campus Atmosphere & Growth'}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950">
          {language === 'ur' ? 'طلباء کی زندگی اور کیمپس سہولیات' : 'Student Life & Facilities'}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {language === 'ur'
            ? 'تعلیم، اخلاقی تربیت، ہم نصابی سرگرمیوں اور باحفاظت رہائشی ماحول کی تصدیق شدہ تفصیلات۔'
            : 'A wholesome, caring environment encouraging intellectual curiosity, patriotic events, and character refinement.'}
        </p>
      </div>

      {/* Feature 1: National Celebrations & Creative Activities (with Pakistan Day Photo) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-6 sm:p-10 rounded-3xl border border-navy-100 shadow-soft">
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
            <Flag className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === 'ur' ? 'قومی تقریبات اور تخلیقی سرگرمیاں' : 'National Celebrations & Creative Arts'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            {language === 'ur' ? 'یومِ آزادی اور ہم نصابی تقاریب' : 'Patriotic Celebrations & Student Art'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'ur'
              ? 'بابُ العلم ایجوکیشن سسٹم میں طلباء کو صرف درسی کتابوں تک محدود نہیں رکھا جاتا بلکہ یومِ آزادی پاکستان اور دیگر اہم قومی و دینی ایام پر تخلیقی سرگرمیاں، تقاریر اور دستکاری کے مقابلے منعقد کیے جاتے ہیں۔ اس سے بچوں میں حب الوطنی، باہمی تعاون اور اظہارِ خیال کا اعتماد پیدا ہوتا ہے۔'
              : 'At Babul-Ilm Education System, students enthusiastically participate in national days such as Pakistan Independence Day celebrations, speech sessions, and creative arts. These activities foster patriotism, collaboration, and self-confidence.'}
          </p>

          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{language === 'ur' ? 'قومی و دینی شعور کی بیداری' : 'Instilling civic pride and patriotic awareness'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{language === 'ur' ? 'تخلیقی اور فنکارانہ صلاحیتوں کا نکھار' : 'Creative crafts, chart presentations, and stage confidence'}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-emerald-400">
            <img
  src={`${import.meta.env.BASE_URL}images/student_event_pakistan_day.jpg`}
              alt="Students celebrating Pakistan Day with flag and creative crafts at Babul-Ilm"
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="p-4 bg-navy-950 text-white text-xs">
              <span className="text-gold-400 font-bold block mb-0.5">
                {language === 'ur' ? 'اصل تقریب کی تصویر' : 'Authentic Event Photo'}
              </span>
              <span>{language === 'ur' ? 'یوم آزادی کے موقع پر طلباء و طالبات سبز ہلالی پرچم کے سامنے تقریب میں شریک' : 'Students commemorating national celebration in traditional attire with national flag and crafts.'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2: Boarding & Hostel Facilities (Verified Details) */}
      <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-gold-400/40 shadow-xl">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-300 px-3 py-1 rounded-full text-xs font-bold border border-gold-500/30">
            <Building className="w-3.5 h-3.5" />
            <span>{language === 'ur' ? 'اقامتی ہاسٹل' : 'Supervised Boarding'}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {language === 'ur' ? 'قابل طلباء کے لیے ہاسٹل کی سہولت' : 'Boarding Facilities for Eligible Students'}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'ur'
              ? 'دور دراز کے علاقوں یا معاشی تنگی کا شکار باصلاحیت طلباء کے لیے ادارے میں باحفاظت اور نگرانی میں ہاسٹل کی رہائشی سہولت دستیاب ہے۔ ہاسٹل میں مقیم طلباء کے لیے منظم اوقات، باجماعت نماز، اور رات کے مطالعے کا خصوصی اہتمام کیا جاتا ہے۔'
              : 'For capable students traveling from distant areas or those requiring residential support, Babul-Ilm offers supervised boarding facilities. Boarders follow a disciplined daily routine encompassing prayer times, focused evening study hours, and communal brotherhood.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm">
            <div className="bg-navy-900/90 p-4 rounded-xl border border-navy-800 space-y-1">
              <span className="font-bold text-gold-300 block">{language === 'ur' ? 'محفوظ ماحول' : 'Safe Sanctuary'}</span>
              <p className="text-slate-400">{language === 'ur' ? 'اساتذہ کی زیر نگرانی محفوظ رہائش' : 'Supervised residential environment'}</p>
            </div>
            <div className="bg-navy-900/90 p-4 rounded-xl border border-navy-800 space-y-1">
              <span className="font-bold text-gold-300 block">{language === 'ur' ? 'دینی نظام الاوقات' : 'Spiritual Routine'}</span>
              <p className="text-slate-400">{language === 'ur' ? 'پنجگانہ نماز اور تلاوت کی پابندی' : 'Structured prayer and recitation hours'}</p>
            </div>
            <div className="bg-navy-900/90 p-4 rounded-xl border border-navy-800 space-y-1">
              <span className="font-bold text-gold-300 block">{language === 'ur' ? 'تعلیمی معاونت' : 'Academic Guidance'}</span>
              <p className="text-slate-400">{language === 'ur' ? 'شام کے اوقات میں اسباق کی مشق' : 'Evening supervised homework sessions'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 3: Safeguarding & Child Welfare */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl border border-navy-100 shadow-soft space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy-950">
              {language === 'ur' ? 'بچوں کا تحفظ اور عزتِ نفس (Safeguarding & Welfare)' : 'Child Welfare, Privacy & Safeguarding'}
            </h3>
            <span className="text-xs text-slate-500">
              {language === 'ur' ? 'طالب علم کی عزت، تحفظ اور خود اعتمادی ہماری اولین ترجیح ہے' : 'Every child deserves dignity, safety, and encouragement.'}
            </span>
          </div>
        </div>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {language === 'ur'
            ? 'بابُ العلم ایجوکیشن سسٹم بچوں کے جسمانی، ذہنی اور جذباتی تحفظ کے سخت ضوابط پر عمل پیرا ہے۔ کسی بھی بچے کی ذاتی یا مالی مجبوری کو ظاہر نہیں کیا جاتا، اور نہ ہی طلباء کے ساتھ کسی قسم کی بدسلوکی کو برداشت کیا جاتا ہے۔ ہمارا ماحول ہر بچے کو مساوی محبت اور احترام دیتا ہے۔'
            : 'We adhere to uncompromising child safeguarding standards. Students from disadvantaged backgrounds are treated with complete dignity and anonymity regarding sponsorships, ensuring that emotional well-being and self-respect are safeguarded across all institutional activities.'}
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('admissions')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl text-sm transition shadow"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{language === 'ur' ? 'داخلہ کے لیے رجوع کریں' : 'Apply for Session 2026–2027'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
