import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';
import { 
  School, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  Calendar, 
  Users, 
  FileText, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  HelpCircle
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/content';

interface SchoolPageProps {
  onNavigate: (page: PageId) => void;
}

export const SchoolPage: React.FC<SchoolPageProps> = ({ onNavigate }) => {
  const { language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-bold text-navy-800 tracking-widest bg-navy-100 px-3 py-1 rounded-full">
          {language === 'ur' ? 'عصری تدریسی شعبہ' : 'Academic Stream'}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950">
          {language === 'ur' ? 'اسکول کی باضابطہ تعلیم' : 'School Education Program'}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {language === 'ur'
            ? 'بنیادی تعلیمی مضامین، سائنسی و فکری سوچ، اور معیاری تدریس کے ذریعے بچوں کی فکری و تعلیمی بنیاد کو مضبوط بنانا۔'
            : 'Fostering academic excellence, analytical thinking, and disciplined study habits through structured classroom learning.'}
        </p>
      </div>

      {/* Hero card with authentic classroom photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-6 sm:p-10 rounded-3xl border border-navy-100 shadow-soft">
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
            <Calendar className="w-3.5 h-3.5" />
            <span>{language === 'ur' ? 'سیشن 2026–2027: جماعت 4، 5، 6 اور 7' : 'Session 2026–2027: Classes 4, 5, 6 & 7'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            {language === 'ur' ? 'نظم و ضبط اور انفرادی توجہ کا حامل تدریسی نظام' : 'Disciplined Learning with Individual Attention'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'ur'
              ? 'بابُ العلم ایجوکیشن سسٹم کا اسکول شعبہ بچوں میں بنیادی تعلیمی قابلیت، ریاضیاتی فہم، اور زبان دانی (اردو و انگریزی) پر بھرپور توجہ دیتا ہے۔ ہمارا مقصد صرف نصاب کی تکمیل نہیں بلکہ طالب علم کی ذہنی نشوونما اور خود اعتمادی کو پروان چڑھانا ہے۔'
              : 'Our school academic program prioritizes core literacy, mathematical foundations, scientific observation, and bilingual proficiency (English and Urdu). With small classroom cohorts, teachers can provide attentive guidance to each child.'}
          </p>

          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{language === 'ur' ? 'باقاعدہ امتحانات اور تعلیمی کارکردگی کا جائزہ' : 'Periodic written assessments and progress tracking'}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{language === 'ur' ? 'والدین کے ساتھ مسلسل رابطہ اور تعلیمی رہنمائی' : 'Regular parent communication regarding progress'}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{language === 'ur' ? 'شفیق، بااخلاق اور سرشار اساتذہ کی زیر نگرانی تدریس' : 'Dedicated faculty focusing on positive character and intellect'}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('admissions')}
              className="px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl transition flex items-center gap-2 shadow"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{language === 'ur' ? 'اسکول میں داخلہ فارم پر کریں' : 'Apply for School Admission'}</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-navy-100">
            <img
              src="/images/classroom_exam_learning.jpg"
              alt="Classroom study session and written evaluation at Babul-Ilm"
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="p-4 bg-navy-950 text-white text-xs">
              <span className="text-gold-400 font-bold block mb-0.5">
                {language === 'ur' ? 'اصل کلاس روم جائزہ' : 'Authentic Classroom Photo'}
              </span>
              <span>{language === 'ur' ? 'طالبات منظم اور باوقار تعلیمی ماحول میں تحریری جائزہ دیتے ہوئے' : 'Students engaged in focused written evaluation in a disciplined learning space.'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Currently Offered Classes (Verified: 4–7) */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl font-bold text-navy-950">
            {language === 'ur' ? 'تعلیمی سال 2026–2027 کے لیے باضابطہ جماعتیں' : 'Announced Classes for Session 2026–2027'}
          </h3>
          <p className="text-slate-600 text-sm">
            {language === 'ur'
              ? 'ادارے کے باضابطہ اعلان کے مطابق فی الوقت ان درجات کے لیے داخلے کھلے ہیں:'
              : 'As confirmed in the institutional announcement, admissions are strictly open for:'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { gradeEn: 'Class 4', gradeUr: 'جماعت چہارم', focusEn: 'Core Literacy & Mathematics', focusUr: 'بنیادی حساب، اردو و انگلش زبان دانی' },
            { gradeEn: 'Class 5', gradeUr: 'جماعت پنجم', focusEn: 'Science & Analytical Thinking', focusUr: 'جنرل سائنس اور سائنسی فہم' },
            { gradeEn: 'Class 6', gradeUr: 'جماعت ششم', focusEn: 'Secondary Foundations & Ethics', focusUr: 'مڈل اسکول کی تعلیمی و فکری بنیاد' },
            { gradeEn: 'Class 7', gradeUr: 'جماعت ہفتم', focusEn: 'Advanced Coursework & Preparation', focusUr: 'جامع تدریس اور تحریری مہارت' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-navy-100 shadow-sm hover:border-emerald-500 transition-all text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold text-lg">
                {idx + 4}
              </div>
              <h4 className="font-bold text-lg text-navy-950">
                {language === 'ur' ? item.gradeUr : item.gradeEn}
              </h4>
              <p className="text-xs text-slate-500">
                {language === 'ur' ? item.focusUr : item.focusEn}
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-700 bg-emerald-50 py-1 rounded-lg">
                {language === 'ur' ? 'داخلہ ٹیسٹ لازمی' : 'Admission Test Required'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Admission Requirements Card */}
      <div className="bg-ivory-100 p-8 rounded-3xl border border-navy-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-start">
            <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
              {language === 'ur' ? 'اسکول داخلہ ٹیسٹ کے ضروری لوازمات' : 'Mandatory School Admission Criteria'}
            </h3>
            <p className="text-sm text-slate-600 max-w-xl">
              {language === 'ur'
                ? 'داخلہ ٹیسٹ کے وقت سرپرست کا ساتھ ہونا لازمی ہے۔ طالب علم کی 2 عدد پاسپورٹ سائز تصاویر اور نادرا ب فارم ہمراہ لانا ضروری ہے۔'
                : 'Applicants must appear for an admission test accompanied by a parent/guardian, with 2 passport photographs and official B-Form.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('admissions')}
            className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition shadow flex-shrink-0 flex items-center gap-2"
          >
            <span>{language === 'ur' ? 'آن لائن داخلہ فارم پر جائیں' : 'Proceed to Admission Form'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
