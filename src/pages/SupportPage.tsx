import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId, SupportInquiry } from '../types';
import { INSTITUTION_INFO } from '../data/content';
import { 
  Heart, 
  BookOpen, 
  GraduationCap, 
  Building, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Mail,
  Lock
} from 'lucide-react';

interface SupportPageProps {
  onNavigate: (page: PageId) => void;
  onSubmitSupport: (inquiry: Omit<SupportInquiry, 'id' | 'submittedAt'>) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onNavigate, onSubmitSupport }) => {
  const { language, dir, t } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [supportType, setSupportType] = useState<SupportInquiry['supportType']>('child_sponsorship');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim() || !contact.trim()) {
      setErrorMsg(language === 'ur' ? 'برائے مہربانی اپنا نام اور رابطہ نمبر درج کریں۔' : 'Please provide your name and contact phone/email.');
      return;
    }

    if (!consent) {
      setErrorMsg(language === 'ur' ? 'برائے مہربانی رازداری کے اقرار نامے کو منتخب کریں۔' : 'Please check the privacy acknowledgment.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      onSubmitSupport({
        name: name.trim(),
        contact: contact.trim(),
        supportType,
        message: message.trim() || undefined,
        consent
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-bold text-emerald-800 tracking-widest bg-emerald-100 px-3 py-1 rounded-full">
          {language === 'ur' ? 'تعلیمی کفالت اور خدمتِ خلق' : 'Compassion & Educational Support'}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950">
          {language === 'ur' ? 'ایک بچے کے روشن مستقبل میں اپنا حصہ ڈالیں' : 'Help a Child Build a Brighter Future'}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {language === 'ur'
            ? 'آپ کا تعاون بچوں کی تعلیم، تعلیمی وسائل اور فلاح و بہبود کے لیے مشعلِ راہ ثابت ہو سکتا ہے۔ مزید معلومات اور تصدیق کے لیے ادارے سے رابطہ کریں۔'
            : 'Your compassionate support can provide essential education, textbooks, clean uniforms, and boarding care to deserving children.'}
        </p>
      </div>

      {/* Support Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy-100 shadow-soft space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gold-100 text-gold-700 flex items-center justify-center font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-950">
              {language === 'ur' ? 'تعلیمی اخراجات کی کفالت' : 'Student Education Sponsorship'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'ur'
                ? 'معاشی تنگی کے شکار کسی طالب علم کے ماہانہ تدریسی اخراجات اور تعلیمی ضروریات کو پورا کرنے میں مدد کریں۔'
                : 'Sponsor the tuition and instructional expenses of a child facing economic hardship.'}
            </p>
          </div>
          <div className="pt-2 text-xs font-semibold text-gold-800 bg-gold-50 p-2.5 rounded-xl border border-gold-200">
            {language === 'ur' ? 'کفالت برائے سال 2026–2027' : 'Sponsorship for Session 2026–2027'}
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-200 shadow-soft space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-950">
              {language === 'ur' ? 'درسی کتب، بستہ اور یونیفارم' : 'Books, Stationery & Uniforms'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'ur'
                ? 'ضرورت مند طلباء کے لیے اسکول بیگز، درسی کتب، نوٹ بکس اور صاف ستھرے یونیفارم کی فراہمی میں معاون بنیں۔'
                : 'Equip young learners with essential notebooks, curriculum books, bags, and clean seasonal uniforms.'}
            </p>
          </div>
          <div className="pt-2 text-xs font-semibold text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
            {language === 'ur' ? 'تعلیمی سامان کی امداد' : 'Learning Supplies Support'}
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy-100 shadow-soft space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-navy-100 text-navy-800 flex items-center justify-center font-bold">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-950">
              {language === 'ur' ? 'ہاسٹل اور رہائشی فلاح' : 'Boarding & Residential Welfare'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'ur'
                ? 'بورڈنگ میں مقیم یتیم یا مستحق طلباء کے لیے معیاری خوراک، رہائش اور نگہداشت کے انتظامات میں حصہ لیں۔'
                : 'Contribute toward nutritious meals and residential care for boarding students living on campus.'}
            </p>
          </div>
          <div className="pt-2 text-xs font-semibold text-navy-800 bg-navy-50 p-2.5 rounded-xl border border-navy-200">
            {language === 'ur' ? 'رہائش و خوراک کا انتظام' : 'Dormitory & Meal Care'}
          </div>
        </div>
      </div>

      {/* Institutional Transparency & Ethical Protocol Notice */}
      <div className="bg-ivory-100 p-6 sm:p-8 rounded-3xl border-2 border-gold-300 shadow-sm space-y-3">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-700 flex-shrink-0" />
          <h3 className="text-lg font-bold text-navy-950">
            {language === 'ur' ? 'مالی شفافیت اور براہِ راست رابطہ کی پالیسی' : 'Strict Transparency & Direct Verification Policy'}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {language === 'ur'
            ? 'شرعی اور قانونی احتیاط کے پیشِ نظر، بابُ العلم ایجوکیشن سسٹم ویب سائٹ پر کوئی غیر تصدیق شدہ بینک اکاؤنٹ یا خودکار پیمنٹ گیٹ وے ظاہر نہیں کرتا۔ کفالت یا عطیات کے خواہشمند حضرات براہِ راست کیمپس تشریف لائیں یا پرنسپل اور انتظامیہ سے باضابطہ تصدیق کے لیے رابطہ فرمائیں۔'
            : 'To uphold total institutional transparency and ethical safeguarding, Babul-Ilm does not display unverified automated payment buttons. Donors and supporters are invited to contact the administrative office directly or visit our Islamabad campus for verified institutional account arrangements.'}
        </p>
        <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-navy-900 font-mono">
          <span>Phone: +92 332-5922372</span>
          <span>•</span>
          <span>Phone: +92 3340578714</span>
          <span>•</span>
          <span>Email: bies.edu444@gmail.com</span>
        </div>
      </div>

      {/* Support Inquiry Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-navy-100 shadow-elevated">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2 border-b border-slate-100 pb-5">
            <h2 className="text-2xl font-bold text-navy-950">
              {language === 'ur' ? 'تعاون و کفالت کے لیے رابطہ فارم' : 'Support & Sponsorship Inquiry Form'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {language === 'ur'
                ? 'اپنے کوائف اور تعاون کی نوعیت درج فرمائیں، انتظامیہ جلد آپ سے رابطہ کرے گی۔'
                : 'Submit your inquiry and our administration office will contact you directly.'}
            </p>
          </div>

          {isSuccess ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-center space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-emerald-950">
                {language === 'ur' ? 'آپ کا پیغام کامیابی سے موصول ہو گیا' : 'Inquiry Submitted Successfully'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto">
                {language === 'ur'
                  ? 'بچوں کے تعلیمی مستقبل کے لیے آپ کے جذبہِ خیر کا تہہ دل سے شکریہ۔ انتظامیہ جلد آپ سے رابطہ فرمائے گی۔'
                  : 'Thank you for your generous interest in supporting our students. Our administration team will contact you shortly.'}
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setName('');
                  setContact('');
                  setMessage('');
                  setConsent(false);
                }}
                className="px-5 py-2 bg-navy-900 text-white text-xs font-semibold rounded-xl hover:bg-navy-800 transition"
              >
                {language === 'ur' ? 'ایک اور استفسار بھیجیں' : 'Submit Another Inquiry'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-navy-950 block">
                  {language === 'ur' ? 'آپ کا مکمل نام' : 'Your Full Name'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'ur' ? 'مثلاً: سید رضا علی' : 'e.g. Syed Raza Ali'}
                  className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 outline-none text-sm bg-ivory-50/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-navy-950 block">
                  {language === 'ur' ? 'رابطہ فون نمبر یا ای میل' : 'Contact Phone Number or Email'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder={language === 'ur' ? 'مثلاً: 0332-1234567 یا email@domain.com' : 'e.g. 0332-1234567 or email@domain.com'}
                  className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 outline-none text-sm bg-ivory-50/50 font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-navy-950 block">
                  {language === 'ur' ? 'تعاون کی ترجیحی نوعیت' : 'Preferred Support Category'}
                </label>
                <select
                  value={supportType}
                  onChange={(e) => setSupportType(e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 outline-none text-sm bg-ivory-50/50 cursor-pointer font-medium"
                >
                  <option value="child_sponsorship">
                    {language === 'ur' ? 'کسی بچے کی تعلیمی کفالت' : 'Student Education Sponsorship'}
                  </option>
                  <option value="books_uniform">
                    {language === 'ur' ? 'درسی کتب، بستہ اور یونیفارم' : 'Books, Stationery & Uniforms'}
                  </option>
                  <option value="boarding_meals">
                    {language === 'ur' ? 'ہاسٹل اور رہائشی خوراک کی معاونت' : 'Boarding Meals & Hostel Care'}
                  </option>
                  <option value="facilities">
                    {language === 'ur' ? 'کلاس رومز و تعلیمی سہولیات کی بہتری' : 'Classroom & Learning Facilities'}
                  </option>
                  <option value="other">
                    {language === 'ur' ? 'دیگر عمومی تعاون' : 'Other Support'}
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-navy-950 block">
                  {language === 'ur' ? 'پیغام یا تفصیل (اختیاری)' : 'Message or Note (Optional)'}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={language === 'ur' ? 'تعاون سے متعلق کوئی خاص بات لکھیں...' : 'Any specific notes or preferences...'}
                  className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 outline-none text-sm bg-ivory-50/50"
                />
              </div>

              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>
                    {language === 'ur'
                      ? 'میں تصدیق کرتا/کرتی ہوں کہ یہ معلومات ادارے کے ساتھ تعلیمی تعاون کے مقصد سے فراہم کی جا رہی ہیں۔'
                      : 'I consent to providing these details to the administration for educational sponsorship communication.'}
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>{isSubmitting ? t.common.submitting : (language === 'ur' ? 'استفسار ارسال کریں' : 'Submit Support Inquiry')}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
