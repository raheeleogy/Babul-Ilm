import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';
import { INSTITUTION_INFO } from '../data/content';
import { 
  Building, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Heart, 
  ShieldCheck, 
  Target, 
  Compass, 
  Award,
  ArrowRight,
  ArrowLeft,
  Users,
  CheckCircle2
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { language, dir, t } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-bold text-navy-800 tracking-widest bg-navy-100 px-3 py-1 rounded-full">
          {language === 'ur' ? 'ہمارا ادارہ' : 'Institutional Profile'}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950">
          {language === 'ur' ? 'بابُ العلم ایجوکیشن سسٹم کا تعارف' : 'About Babul-Ilm Education System'}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {language === 'ur' 
            ? 'اسلام آباد میں دینی اقدار، عصری تعلیم اور اخلاقی تربیت کا ایک قابلِ اعتماد اور سرشار مرکز۔'
            : 'A dedicated center in Islamabad fostering academic competence, religious understanding, and moral character in a caring environment.'}
        </p>
      </div>

      {/* Main Story & Authentic Campus Imagery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5 text-slate-700 leading-relaxed text-base">
          <div className="border-l-4 border-gold-500 pl-4 py-1 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-950">
              {language === 'ur' ? 'قیام، پس منظر اور تعلیمی عزم' : 'Background & Educational Mission'}
            </h2>
          </div>

          <p>
            {language === 'ur' 
              ? 'بابُ العلم ایجوکیشن سسٹم، ایف 8/2، عرفان آباد، ترامڑی چوک، اسلام آباد میں واقع ایک منفرد تعلیمی ادارہ ہے۔ اس ادارے کی بنیاد اس سوچ کے ساتھ رکھی گئی کہ مسلم بچوں، خصوصاً شیعیانِ علیؑ کے نونہالوں کے لیے ایک ایسا تعلیمی پلیٹ فارم مہیا کیا جائے جہاں جدید اسکول کی تعلیم اور اسلامی مدرسے کی دینی تربیت بیک وقت ایک ہی چھت تلے ممکن ہو سکے۔'
              : 'Babul-Ilm Education System is situated in F-8/2, Irfan Abad, Tramri Chowk, Islamabad. The institution was established with the clear objective of providing Muslim children—with a caring focus on Shia Muslim youth—a balanced educational home where standard school academics and sacred Islamic Madrassa training complement each other.'}
          </p>

          <p>
            {language === 'ur'
              ? 'ادارے کے فاضل پرنسپل سید محسن عباس نقوی کی زیر قیادت اساتذہ کا عملہ اس بات کو یقینی بنانے کے لیے ہمہ وقت کوشاں رہتا ہے کہ ہر طالب علم کو نہ صرف درسی کتب میں ممتاز بنایا جائے بلکہ اس کے اخلاق، طہارتِ فکر، اور سیرت میں اسلامی اقدار کی جھلک نظر آئے۔'
              : 'Led by Principal Syed Mohsin Abbas Naqvi, our dedicated educational team focuses on ensuring students build both strong cognitive capabilities and deeply rooted ethical values reflecting modesty, civic responsibility, and kindness.'}
          </p>

          <div className="bg-ivory-100 p-4 rounded-xl border border-navy-100 flex items-center gap-3">
            <Award className="w-8 h-8 text-gold-600 flex-shrink-0" />
            <div className="text-xs sm:text-sm">
              <span className="font-bold text-navy-900 block">
                {language === 'ur' ? 'پرنسپل: سید محسن عباس نقوی' : 'Leadership: Syed Mohsin Abbas Naqvi'}
              </span>
              <span className="text-slate-600">
                {language === 'ur' ? 'کیمپس لوکیشن: عرفان آباد، ترامڑی چوک، اسلام آباد' : 'Campus: F-8/2, Irfan Abad, Tramri Chowk, Islamabad'}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-400">
            <img
              src="/images/campus_exterior_principal_students.jpg"
              alt="Principal Syed Mohsin Abbas Naqvi with students at Babul-Ilm Education System Islamabad"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-navy-950 text-white text-xs">
              <span className="text-gold-400 font-semibold block mb-0.5">
                {language === 'ur' ? 'کیمپس اور طلباء' : 'Campus & Students'}
              </span>
              <span>{language === 'ur' ? 'پرنسپل سید محسن عباس نقوی طلباء کے ہمراہ' : 'Principal Syed Mohsin Abbas Naqvi with students outside the campus gate.'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Detailed Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-navy-100 shadow-soft space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center font-bold">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-navy-950">
            {language === 'ur' ? 'ہمارا مشن (Mission)' : 'Our Mission'}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            {language === 'ur'
              ? 'بچوں کو معیاری تعلیم، قرآنی تعلیم، اخلاقی تربیت اور عملی مہارتوں کے مواقع فراہم کرنا، تاکہ وہ اپنی صلاحیتوں کو پہچان سکیں اور ایک بہتر، پراعتماد اور خود کفیل مستقبل کی طرف بڑھ سکیں۔'
              : 'To provide accessible, quality education and meaningful personal development opportunities for children, combining academic learning, Quranic education, moral guidance, and practical skills according to the institution’s available programs.'}
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-emerald-200 shadow-soft space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-bold">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-navy-950">
            {language === 'ur' ? 'ہمارا ویژن (Vision)' : 'Our Vision'}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            {language === 'ur'
              ? 'ایسا معاشرہ تشکیل دینا جہاں مالی مشکلات یا وسائل کی کمی کسی بچے کی تعلیم اور صلاحیتوں کی ترقی میں رکاوٹ نہ بنے۔ ہر بچہ علم کی روشنی سے بہرہ مند ہو کر معاشرے کا فعال اور باوقار شہری بنے۔'
              : 'To help build a society in which children can pursue education, develop their abilities, and work toward a brighter, more independent future regardless of financial hardship.'}
          </p>
        </div>
      </div>

      {/* Shia Islamic Educational Identity & Character Development */}
      <div className="bg-gradient-to-br from-navy-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gold-400/30">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 text-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>{language === 'ur' ? 'دینی و اخلاقی تشخص' : 'Spiritual & Moral Identity'}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {language === 'ur' ? 'مکتبِ اہل بیتؑ اور قرآنی اصولوں پر مبنی تربیت' : 'Our Shia Islamic Educational Identity'}
          </h3>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            {language === 'ur'
              ? 'بابُ العلم ایجوکیشن سسٹم کا دینی تشخص قرآن مجید، سنتِ نبوی ﷺ اور مکتبِ اہل بیت علیہم السلام کی پاکیزہ تعلیمات سے ماخوذ ہے۔ یہاں بچوں کو باجماعت نماز کی پابندی، عقائدِ حقہ، حلال و حرام کی تمیز، اور والدین و اساتذہ کے ادب و احترام کی عملی مشق کروائی جاتی ہے۔ ہم باہمی احترام، مذہبی ہم آہنگی اور باوقار اخلاقی اقدار کو فروغ دیتے ہیں۔'
              : 'Our religious orientation is firmly anchored in the teachings of the Holy Quran, the Sunnah of Prophet Muhammad (PBUH), and the noble household of the Ahl al-Bayt (AS). Students are guided in daily congregational prayers, accurate Tajweed, Islamic jurisprudence (Fiqh), and moral excellence, fostering deep spiritual tranquility without divisive acrimony.'}
          </p>

          <div className="pt-4 flex flex-wrap gap-4 text-xs sm:text-sm text-gold-200">
            <span className="flex items-center gap-1.5 bg-navy-800/80 px-3 py-1.5 rounded-lg border border-navy-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {language === 'ur' ? 'نمازِ باجماعت کی باقاعدگی' : 'Daily Congregational Prayers'}
            </span>
            <span className="flex items-center gap-1.5 bg-navy-800/80 px-3 py-1.5 rounded-lg border border-navy-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {language === 'ur' ? 'قرآن مجید مع تجوید و احکام' : 'Quran with Tajweed & Ahkam'}
            </span>
            <span className="flex items-center gap-1.5 bg-navy-800/80 px-3 py-1.5 rounded-lg border border-navy-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {language === 'ur' ? 'کردار سازی اور احترامِ انسانیت' : 'Character Building & Universal Respect'}
            </span>
          </div>
        </div>
      </div>

      {/* Future Goals (Clearly stated as goals, not fabricated achievements) */}
      <div className="bg-ivory-100 p-8 rounded-3xl border border-navy-100 space-y-6">
        <div className="border-l-4 border-navy-700 pl-4 py-1 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4">
          <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
            {language === 'ur' ? 'ہمارے مستقبل کے تعلیمی اہداف (Future Goals)' : 'Our Future Institutional Goals'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {language === 'ur' ? 'یہ اہداف ادارے کی مستقبل کی منصوبہ بندی ہیں جن کے حصول کے لیے ہم کوشاں ہیں۔' : 'These represent our aspirational roadmap and development goals.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">Goal 1</span>
            <h4 className="font-bold text-navy-950 text-base">
              {language === 'ur' ? 'کلاس رومز اور لائبریری کی توسیع' : 'Classroom & Library Expansion'}
            </h4>
            <p className="text-xs text-slate-600">
              {language === 'ur' 
                ? 'کیمپس میں طلباء کے لیے کتب خانے اور سائنسی و تدریسی وسائل کو بتدریج وسعت دینا۔'
                : 'Gradually expanding instructional classrooms and building a dedicated reading and reference library.'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">Goal 2</span>
            <h4 className="font-bold text-navy-950 text-base">
              {language === 'ur' ? 'کمپیوٹر و عملی مہارتوں کا فروغ' : 'Computer Lab & Digital Skills'}
            </h4>
            <p className="text-xs text-slate-600">
              {language === 'ur' 
                ? 'جدید دور کے تقاضوں کے مطابق کمپیوٹر لٹریسی اور عملی ہنر مندی کے شعبے کو مستحکم بنانا۔'
                : 'Establishing modern computer training and practical technology literacy for developing young minds.'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">Goal 3</span>
            <h4 className="font-bold text-navy-950 text-base">
              {language === 'ur' ? 'مستحق طلباء کے ہاسٹل میں بہتری' : 'Enhanced Residential Facilities'}
            </h4>
            <p className="text-xs text-slate-600">
              {language === 'ur' 
                ? 'دور دراز کے ضرورت مند طلباء کے لیے ہاسٹل کی اقامتی و غذائی سہولیات کو مزید آرام دہ بنانا۔'
                : 'Upgrading boarding accommodations and nutritional support for out-of-station deserving students.'}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => onNavigate('admissions')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base rounded-2xl shadow-xl transition"
        >
          <GraduationCap className="w-5 h-5" />
          <span>{language === 'ur' ? 'داخلہ 2026–2027 کی تفصیلات دیکھیں' : 'View Admissions 2026–2027'}</span>
          <ArrowIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
