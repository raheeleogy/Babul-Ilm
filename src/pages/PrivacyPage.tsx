import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';
import { ShieldCheck, Lock, EyeOff, FileText, Phone, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/content';

interface PrivacyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  const { language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-xs uppercase font-bold text-emerald-800 tracking-widest bg-emerald-100 px-3 py-1 rounded-full">
          {language === 'ur' ? 'تحفظ و رازداری' : 'Safeguarding & Privacy'}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950">
          {language === 'ur' ? 'رازداری کی پالیسی (Privacy Policy)' : 'Child Protection & Privacy Policy'}
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          {language === 'ur'
            ? 'بابُ العلم ایجوکیشن سسٹم اسلام آباد میں طلباء اور والدین کے کوائف کے تحفظ کا ضابطہ۔'
            : 'How Babul-Ilm Education System safeguards applicant information, student privacy, and child dignity.'}
        </p>
      </div>

      {/* Main Notice Box */}
      <div className="bg-ivory-100 p-6 rounded-2xl border-2 border-gold-300 space-y-2">
        <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
          <ShieldCheck className="w-5 h-5 text-emerald-700" />
          <span>{language === 'ur' ? 'بچوں کے حقوق اور رازداری کا تحفظ' : 'Commitment to Child Privacy & Safeguarding'}</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {language === 'ur'
            ? 'ادارہ اس بات کا پابند ہے کہ داخلہ یا استفسار کے دوران جمع کیے گئے طلباء اور والدین کے کوائف کسی تیسرے فریق کو فروخت یا منتقل نہیں کیے جاتے۔ معاشی تنگی یا یتیمی کی بنیاد پر زیرِ کفالت بچوں کے ذاتی کوائف کو مکمل راز میں رکھا جاتا ہے تاکہ ان کی عزتِ نفس مجروح نہ ہو۔'
            : 'Babul-Ilm Education System strictly upholds child safeguarding. Data submitted during admissions or inquiries is never sold or disclosed to third parties. Sponsoring arrangements for underprivileged or orphan children are maintained with absolute discretion to preserve every student’s self-esteem.'}
        </p>
      </div>

      {/* Policy Sections */}
      <div className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-navy-100 shadow-soft text-sm sm:text-base text-slate-700 leading-relaxed">
        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center text-xs font-bold">1</span>
            <span>{language === 'ur' ? 'ہم کون سی معلومات حاصل کرتے ہیں؟' : '1. Information We Collect'}</span>
          </h2>
          <p>
            {language === 'ur'
              ? 'ویب سائٹ کے داخلہ فارم اور رابطہ فارم کے ذریعے صرف ضروری معلومات اکٹھی کی جاتی ہیں، جن میں: طالب علم کا پورا نام، والدین / سرپرست کا نام، رابطہ فون نمبر، ای میل (اختیاری)، مطلوبہ جماعت (جماعت 4 تا 7)، ہاسٹل کی ضرورت، اور والدین کا پیغام شامل ہیں۔'
              : 'Through our admission and contact forms, we collect strictly necessary details: student full name, parent/guardian name, contact telephone, optional email address, applied grade level (Classes 4–7), boarding preference, and educational background.'}
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center text-xs font-bold">2</span>
            <span>{language === 'ur' ? 'معلومات کا استعمال اور مقصد' : '2. Purpose of Data Use'}</span>
          </h2>
          <p>
            {language === 'ur'
              ? 'یہ معلومات صرف اور صرف داخلہ ٹیسٹ کے انتظامات، اہلیت کے جائزے، والدین کے ساتھ رابطہ، اور کیمپس کی تدریسی منصوبہ بندی کے لیے استعمال کی جاتی ہیں۔'
              : 'Collected information is used exclusively for evaluating admission test eligibility, scheduling test appointments, communicating with guardians, and planning classroom capacity.'}
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center text-xs font-bold">3</span>
            <span>{language === 'ur' ? 'کوائف تک رسائی اور سیکیورٹی' : '3. Access Control & Security'}</span>
          </h2>
          <p>
            {language === 'ur'
              ? 'داخلہ درخواستوں تک رسائی صرف ادارے کے مجاز انتظامی عملے کو حاصل ہوتی ہے۔ عوام الناس کے لیے کسی قسم کی طالب علم ڈائریکٹری یا ذاتی فہرستیں شائع نہیں کی جاتیں۔'
              : 'Access to submitted applications is restricted strictly to authorized institutional administrative personnel. We never maintain or publish public student rosters or identifiable private data.'}
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center text-xs font-bold">4</span>
            <span>{language === 'ur' ? 'تصاویر اور میڈیا کی پالیسی' : '4. Photography & Media Safeguards'}</span>
          </h2>
          <p>
            {language === 'ur'
              ? 'کیمپس تقریبات یا امتحانی جائزے کی تصاویر صرف معلوماتی اور تعلیمی مقاصد کے لیے شائع کی جاتی ہیں۔ کسی بھی طالب علم کی ذاتی یا خاندانی حساس تفصیلات میڈیا پر ظاہر نہیں کی جاتیں۔'
              : 'Campus photographs capturing educational sessions, prayers, and national day celebrations are shared purely for transparent institutional reporting with appropriate parental and guardian consent.'}
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center text-xs font-bold">5</span>
            <span>{language === 'ur' ? 'رازداری سے متعلق رابطہ' : '5. Contact for Privacy Matters'}</span>
          </h2>
          <p>
            {language === 'ur'
              ? 'اگر آپ اپنے فراہم کردہ کوائف میں تصحیح یا اخراج چاہتے ہیں تو براہِ راست پرنسپل سید محسن عباس نقوی یا ایڈمنسٹریشن سے فون نمبر 5922372-0332 پر رابطہ فرمائیں۔'
              : 'For any privacy inquiries or request to update submitted admission data, contact Principal Syed Mohsin Abbas Naqvi or administration at +92 332-5922372 or bies.edu444@gmail.com.'}
          </p>
        </div>
      </div>
    </div>
  );
};
