import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';
import { 
  BookOpen, 
  Sparkles, 
  Heart, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  GraduationCap, 
  Users,
  Compass,
  Phone
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/content';

interface MadrassaPageProps {
  onNavigate: (page: PageId) => void;
}

export const MadrassaPage: React.FC<MadrassaPageProps> = ({ onNavigate }) => {
  const { language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-bold text-emerald-800 tracking-widest bg-emerald-100 px-3 py-1 rounded-full">
          {language === 'ur' ? 'شعبۂ دینیات و اخلاقیات' : 'Islamic Educational Stream'}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 font-urdu leading-tight">
          {language === 'ur' ? 'دینی تعلیم و تربیت' : 'Islamic Education and Character Development'}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {language === 'ur'
            ? 'قرآن مجید کی درست قرأت مع تجوید، فقہی و عقائدی رہنمائی، اور مکتبِ اہل بیتؑ کی روشنی میں اخلاقِ حسنہ کی تعمیر۔'
            : 'Nurturing Quranic recitation, religious understanding, and sublime moral character rooted in the noble tradition of the Holy Prophet (PBUH) & Ahl al-Bayt (AS).'}
        </p>
      </div>

      {/* Main Feature with Authentic Prayer Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-6 sm:p-10 rounded-3xl border border-emerald-200 shadow-soft">
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-2 bg-emerald-800 text-white px-3 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{language === 'ur' ? 'روحانی و اخلاقی نشوونما' : 'Spiritual & Moral Foundation'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            {language === 'ur' ? 'علم و عمل کا خوبصورت امتزاج' : 'Harmonizing Faith, Knowledge and Action'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'ur'
              ? 'بابُ العلم ایجوکیشن سسٹم کا مدرسہ شعبہ بچوں کے دلوں میں اللہ تعالیٰ اور اس کے رسولِ برحق ﷺ اور آئمہ معصومینؑ کی محبت کو پروان چڑھاتا ہے۔ ہم نظریاتی تعلیم کے ساتھ ساتھ عملی تربیت پر یقین رکھتے ہیں، جس کا مظہر روزانہ کی نمازِ باجماعت اور اخلاقی مجالس ہیں۔'
              : 'Our Islamic Madrassa department instills love for the Almighty, the Holy Prophet (PBUH), and the infallible Ahl al-Bayt (AS). We emphasize that religious learning must manifest in humble actions, truthful speech, and genuine kindness toward all humanity.'}
          </p>

          <div className="space-y-2.5 pt-1">
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'ur' ? 'قرآن مجید کی ناظرہ تعلیم اور مخارج و تجوید کی صحت پر خصوصی توجہ' : 'Nazra Quran with precise Tajweed, phonetics, and vocal articulation'}</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'ur' ? 'نماز، وضو، طہارت اور بنیادی فقہی و شرعی احکام کی عملی مشق' : 'Practical instruction in Taharah, Wudu, Salat, and fundamental jurisprudence'}</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'ur' ? 'سیرت النبی ﷺ اور ائمہ طاہرینؑ کے فرمودات پر مبنی اخلاقی دروس' : 'Moral ethics lessons drawing from the Seerah of the Prophet and the Imams'}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('admissions')}
              className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition flex items-center gap-2 shadow"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{language === 'ur' ? 'مدرسہ داخلہ کی معلومات لیں' : 'Apply / Inquire for Madrassa'}</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-emerald-300">
            <img
              src="/images/madrassa_prayer_guidance.jpg"
              alt="Students offering congregational prayer in Madrassa under religious guidance at Babul-Ilm"
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="p-4 bg-navy-950 text-white text-xs">
              <span className="text-gold-400 font-bold block mb-0.5">
                {language === 'ur' ? 'نمازِ باجماعت کی اصل تصویر' : 'Authentic Congregational Prayer'}
              </span>
              <span>{language === 'ur' ? 'دینی استاد اور عالم دین کی اقتدا میں نمازِ باجماعت کا باوقار منظر' : 'Students offering prayer in congregation under the guidance of our resident religious scholar.'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-navy-100 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-navy-950">
            {language === 'ur' ? '1. قرآنی تعلیم مع تجوید' : '1. Quranic Studies & Tajweed'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {language === 'ur'
              ? 'مخارج، صفاتِ حروف، اور تجوید کے مستند قواعد کے مطابق قرآن پاک کی باقاعدہ تدریس، نیز منتخب سورتوں کا حفظ۔'
              : 'Systematic instruction in accurate Arabic phonetics, Tajweed rules, and memorization of essential Surahs and daily Duas.'}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-navy-100 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center font-bold">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-navy-950">
            {language === 'ur' ? '2. عقائد و احکام (فقہ)' : '2. Aqaid & Practical Jurisprudence'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {language === 'ur'
              ? 'توحید، عدل، نبوت، امامت اور قیامت کی تفہیم، روزمرہ مسائلِ شرعیہ، نماز کے واجبات و ارکان کی جامع وضاحت۔'
              : 'Understanding Tawheed, Adl, Prophethood, Imamate, and Qiyamah, alongside daily practical Fiqh obligations and ethical boundaries.'}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-navy-100 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-800 flex items-center justify-center font-bold">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-navy-950">
            {language === 'ur' ? '3. اخلاق و سیرت سازی' : '3. Moral Ethics & Character Building'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {language === 'ur'
              ? 'سچائی، امانت، والدین و اساتذہ کا احترام، غریبوں سے ہمدردی اور باہمی اخوت کی عملی عادات بچوں میں راسخ کرنا۔'
              : 'Cultivating honesty, trustworthiness, humility, respect for parents and teachers, and civic compassion for all individuals.'}
          </p>
        </div>
      </div>

      {/* Integrated Dual Approach Notice */}
      <div className="bg-ivory-100 p-8 rounded-3xl border border-gold-300 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-start">
          <h3 className="text-xl font-bold text-navy-950">
            {language === 'ur' ? 'عصری اسکول اور مدرسہ کا حسین امتزاج' : 'Integrated Dual Pathway Available'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            {language === 'ur'
              ? 'والدین اپنے بچوں کے لیے اسکول کے باضابطہ مضامین کے ساتھ ساتھ مدرسے کی دینی تعلیم دونوں کا بیک وقت انتخاب کر سکتے ہیں تاکہ بچہ دنیا اور آخرت دونوں میں کامیاب ہو۔'
              : 'Parents can enroll their children to study both structured academic school subjects and Islamic Madrassa curriculum simultaneously.'}
          </p>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm rounded-xl transition shadow flex-shrink-0 flex items-center gap-2"
        >
          <Phone className="w-4 h-4 text-gold-400" />
          <span>{language === 'ur' ? 'انتظامیہ سے مشاورت کریں' : 'Consult Administration'}</span>
        </button>
      </div>
    </div>
  );
};
