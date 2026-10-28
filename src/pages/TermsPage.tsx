import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';
import { FileText, ShieldAlert, CheckCircle2, Phone, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/content';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  const { language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-xs uppercase font-bold text-navy-800 tracking-widest bg-navy-100 px-3 py-1 rounded-full">
          {language === 'ur' ? 'ضوابطِ استعمال' : 'Legal & Guidelines'}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950">
          {language === 'ur' ? 'ویب سائٹ کے شرائط و ضوابط' : 'Terms of Use'}
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          {language === 'ur'
            ? 'بابُ العلم ایجوکیشن سسٹم اسلام آباد کی ویب سائٹ اور آن لائن پورٹل کے استعمال کی شرائط۔'
            : 'Terms governing website access, online admission inquiries, and institutional media usage.'}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-navy-100 shadow-soft text-sm sm:text-base text-slate-700 leading-relaxed">
        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center text-xs font-bold">1</span>
            <span>{language === 'ur' ? 'ویب سائٹ کا استعمال اور مقصد' : '1. Acceptable Use'}</span>
          </h2>
          <p>
            {language === 'ur'
              ? 'یہ ویب سائٹ بابُ العلم ایجوکیشن سسٹم کے تعلیمی پروگرامز، دینی مدرسہ، اور سیشن 2026–2027 کے داخلوں کی معلومات اور استفسار کے لیے بنائی گئی ہے۔ اس ویب سائٹ کا غیر اخلاقی، نقصان دہ، یا خلافِ قانون استعمال سختی سے ممنوع ہے۔'
              : 'This website is dedicated solely to providing authentic information regarding Babul-Ilm Education System’s school curriculum, Islamic Madrassa stream, and session 2026–2027 admissions. Unauthorized scraping, abusive submissions, or misuse is strictly prohibited.'}
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center text-xs font-bold">2</span>
            <span>{language === 'ur' ? 'داخلہ درخواستوں کی حیثیت' : '2. Nature of Admission Inquiries'}</span>
          </h2>
          <p>
            {language === 'ur'
              ? 'آن لائن داخلہ فارم جمع کروانا حتمی داخلے کی ضمانت نہیں۔ ہر امیدوار کے لیے مقررہ داخلہ ٹیسٹ میں شریک ہونا اور مطلوبہ تعلیمی معیار پر پورا اترنا لازمی ہے۔ نشستیں محدود ہیں اور حتمی فیصلہ ادارے کی انتظامیہ کا ہوگا۔'
              : 'Submitting an online admission inquiry form does not constitute a confirmed admission guarantee. Applicants must appear for the mandatory admission test and satisfy verified academic and documentation standards (guardian presence, 2 photos, B-Form). Seats are limited to 10 as announced.'}
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center text-xs font-bold">3</span>
            <span>{language === 'ur' ? 'حقوقِ ملکیت و تصاویر (Intellectual Property)' : '3. Intellectual Property & Media Rights'}</span>
          </h2>
          <p>
            {language === 'ur'
              ? 'ویب سائٹ پر موجود تمام کیمپس تصاویر، پوسٹرز، تعلیمی تحریریں اور لوگو بابُ العلم ایجوکیشن سسٹم کی ملکیت ہیں۔ انتظامیہ کی تحریری اجازت کے بغیر کسی بھی تصویر یا مواد کا تجارتی یا گمراہ کن استعمال ممنوع ہے۔'
              : 'All photographs, official posters, textual profiles, and emblems featured on this website are the property of Babul-Ilm Education System. Reproduction, modification, or re-publishing of campus photographs without prior written consent is strictly prohibited.'}
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center text-xs font-bold">4</span>
            <span>{language === 'ur' ? 'سوشل میڈیا اور بیرونی روابط' : '4. Official External Links'}</span>
          </h2>
          <p>
            {language === 'ur'
              ? 'ویب سائٹ پر ادارے کے آفیشل واٹس ایپ چینل، فیس بک پیج اور یوٹیوب چینل کے تصدیق شدہ روابط دیے گئے ہیں۔ ان پلیٹ فارمز پر ادارہ کے منظور شدہ اعلانات ہی مستند تصور کیے جائیں گے۔'
              : 'We provide direct links to the official WhatsApp Channel, Facebook Page, and YouTube Channel of the institution. Users are advised to rely strictly on official institutional broadcasts.'}
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center text-xs font-bold">5</span>
            <span>{language === 'ur' ? 'رابطہ برائے قانونی سوالات' : '5. Contact for Questions'}</span>
          </h2>
          <p>
            {language === 'ur'
              ? 'ویب سائٹ کے ضوابط سے متعلق کسی بھی سوال کے لیے انتظامیہ سے فون نمبرز 5922372-0332 یا 03340578714 پر رابطہ کیا جا سکتا ہے۔'
              : 'For inquiries regarding website terms or institutional guidelines, please reach out via phone (+92 332-5922372 / +92 3340578714) or email at bies.edu444@gmail.com.'}
          </p>
        </div>
      </div>
    </div>
  );
};
