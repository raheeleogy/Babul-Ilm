import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId, ContactInquiry } from '../types';
import { INSTITUTION_INFO } from '../data/content';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  ExternalLink,
  Clock,
  ShieldCheck,
  Copy,
  Check
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onSubmitContact: (inquiry: Omit<ContactInquiry, 'id' | 'submittedAt'>) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onSubmitContact }) => {
  const { language, t } = useLanguage();

  const [name, setName] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [inquiryType, setInquiryType] = useState<ContactInquiry['inquiryType']>('general');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim() || !phoneOrEmail.trim() || !message.trim()) {
      setErrorMsg(language === 'ur' ? 'برائے مہربانی تمام لازمی خانے پر فرمائیں۔' : 'Please fill in all mandatory fields.');
      return;
    }

    if (!consent) {
      setErrorMsg(language === 'ur' ? 'برائے مہربانی رازداری کے اقرار نامے کو منتخب کریں۔' : 'Please accept the privacy consent.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      onSubmitContact({
        name: name.trim(),
        phoneOrEmail: phoneOrEmail.trim(),
        inquiryType,
        message: message.trim(),
        consent
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-bold text-navy-800 tracking-widest bg-navy-100 px-3 py-1 rounded-full">
          {language === 'ur' ? 'براہِ راست رابطہ' : 'Get in Touch'}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950">
          {language === 'ur' ? 'ادارے سے رابطہ فرمائیں' : 'Contact Babul-Ilm Education System'}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {language === 'ur'
            ? 'داخلہ، تعلیمی مشاورت یا کیمپس کے دورے کے لیے ہماری انتظامیہ سے رابطہ کریں۔'
            : 'We welcome your questions regarding admissions, academics, boarding facilities, or visiting our campus.'}
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Address Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy-100 shadow-soft space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-navy-950">
            {language === 'ur' ? 'کیمپس کا پتہ' : 'Campus Location'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {language === 'ur' ? INSTITUTION_INFO.addressUr : INSTITUTION_INFO.addressEn}
          </p>
          <div className="pt-2 text-xs text-emerald-800 font-semibold">
            {language === 'ur' ? 'ترامڑی چوک، اسلام آباد' : 'Tramri Chowk, Islamabad, Pakistan'}
          </div>
        </div>

        {/* Phone Numbers Card with Click-to-call & Copy */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy-100 shadow-soft space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-gold-100 text-gold-700 flex items-center justify-center font-bold">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-navy-950">
            {language === 'ur' ? 'رابطہ فون نمبرز' : 'Official Telephone'}
          </h3>
          <div className="space-y-2 text-xs sm:text-sm font-mono">
            {INSTITUTION_INFO.phones.map((phone, idx) => (
              <div key={idx} className="flex items-center justify-between bg-ivory-50 p-2.5 rounded-xl border border-ivory-200">
                <a href={`tel:${phone}`} className="text-navy-950 hover:text-emerald-700 font-bold dir-ltr">
                  {phone}
                </a>
                <button
                  onClick={() => handleCopy(phone)}
                  className="p-1 text-slate-400 hover:text-navy-800 transition"
                  title="Copy number"
                >
                  {copiedPhone === phone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
          <span className="text-[11px] text-slate-500 block">
            {language === 'ur' ? 'کال کے لیے کلک کریں' : 'Click number to call directly'}
          </span>
        </div>

        {/* Email & Administration */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy-100 shadow-soft space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-navy-100 text-navy-800 flex items-center justify-center font-bold">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-navy-950">
            {language === 'ur' ? 'سرکاری ای میل اور خط و کتابت' : 'Official Email & Inquiries'}
          </h3>
          <a
            href={`mailto:${INSTITUTION_INFO.email}`}
            className="text-xs sm:text-sm text-emerald-700 hover:underline font-mono block truncate"
          >
            {INSTITUTION_INFO.email}
          </a>
          <div className="pt-2">
            <div className="bg-navy-50 p-3 rounded-xl border border-navy-100 text-xs text-navy-900">
              <span className="font-bold block mb-0.5">
                {language === 'ur' ? 'پرنسپل / سربراہ:' : 'Principal:'}
              </span>
              <span>{language === 'ur' ? INSTITUTION_INFO.principalUr : INSTITUTION_INFO.principalEn}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & Google Map Embed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Inquiry Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-navy-100 shadow-elevated">
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-2xl font-bold text-navy-950">
                {language === 'ur' ? 'پیغام یا استفسار ارسال کریں' : 'Send an Inquiry to Administration'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {language === 'ur'
                  ? 'داخلہ یا تعلیمی نظام کے متعلق سوالات کے لیے فارم پر کریں۔'
                  : 'We will respond promptly with official guidance and schedule details.'}
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">
                  {language === 'ur' ? 'پیغام موصول ہو گیا' : 'Message Sent Successfully'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                  {language === 'ur'
                    ? 'آپ کا پیغام کامیابی سے موصول ہو چکا ہے۔ ادارہ جلد آپ کے فراہم کردہ نمبر یا ای میل پر رابطہ کرے گا۔'
                    : 'Thank you for reaching out. Our administration office will respond as soon as possible.'}
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setName('');
                    setPhoneOrEmail('');
                    setMessage('');
                    setConsent(false);
                  }}
                  className="px-5 py-2 bg-navy-900 text-white text-xs font-semibold rounded-xl hover:bg-navy-800 transition"
                >
                  {language === 'ur' ? 'ایک اور پیغام بھیجیں' : 'Send Another Message'}
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
                    placeholder={language === 'ur' ? 'مثلاً: محمد رضا' : 'e.g. Muhammad Raza'}
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 outline-none text-sm bg-ivory-50/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy-950 block">
                    {language === 'ur' ? 'رابطہ فون نمبر یا ای میل' : 'Phone Number or Email'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    placeholder={language === 'ur' ? 'مثلاً: 0332-5922372' : 'e.g. 0332-5922372'}
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 outline-none text-sm bg-ivory-50/50 font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy-950 block">
                    {language === 'ur' ? 'استفسار کی نوعیت' : 'Inquiry Category'}
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 outline-none text-sm bg-ivory-50/50 cursor-pointer font-medium"
                  >
                    <option value="general">{language === 'ur' ? 'عمومی استفسار' : 'General Inquiry'}</option>
                    <option value="admission">{language === 'ur' ? 'داخلہ 2026–2027 (جماعت 4 تا 7)' : 'Admissions 2026–2027 (Classes 4–7)'}</option>
                    <option value="boarding">{language === 'ur' ? 'ہاسٹل اور رہائشی سہولیات' : 'Boarding & Hostel Facilities'}</option>
                    <option value="madrassa">{language === 'ur' ? 'دینی مدرسہ و قرآنی تعلیم' : 'Islamic Madrassa Education'}</option>
                    <option value="support">{language === 'ur' ? 'کفالت و تعاون کی معلومات' : 'Student Sponsorship Inquiry'}</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy-950 block">
                    {language === 'ur' ? 'پیغام' : 'Message'} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={language === 'ur' ? 'اپنا سوال یا پیغام لکھیے...' : 'Write your question or request here...'}
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
                        ? 'میں تصدیق کرتا/کرتی ہوں کہ یہ کوائف انتظامیہ کے جواب کے لیے دیے جا رہے ہیں۔'
                        : 'I consent to the collection of these details for institutional communication.'}
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t.common.submitting : (language === 'ur' ? 'پیغام ارسال کریں' : 'Send Message')}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Google Map & Directions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-4 sm:p-6 rounded-3xl border border-navy-100 shadow-soft space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-navy-950 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span>{language === 'ur' ? 'کیمپس لوکیشن میپ' : 'Campus Map & Directions'}</span>
              </h3>
              <span className="text-xs text-slate-500">Islamabad</span>
            </div>

            {/* Embedded Interactive Map for Tramri Chowk Islamabad */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-72 w-full bg-slate-100 relative">
              <iframe
                title="Babul-Ilm Education System Location Tramri Chowk Islamabad"
                src="https://maps.google.com/maps?q=Taramari%20Chowk%20Islamabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-navy-900">
                {language === 'ur' ? 'پتہ کی تفصیل:' : 'Address Details:'}
              </p>
              <p>{language === 'ur' ? INSTITUTION_INFO.addressUr : INSTITUTION_INFO.addressEn}</p>
              <p className="text-slate-500 text-[11px] pt-1">
                {language === 'ur' ? 'ترامڑی چوک سے عرفان آباد کی جانب قریب ترین مقام۔' : 'Accessible via main Lehtrar Road at Tramri Chowk, Irfan Abad, Islamabad.'}
              </p>
            </div>
          </div>

          {/* Social Channels Quick Connect */}
          <div className="bg-ivory-100 p-6 rounded-3xl border border-navy-100 space-y-3">
            <h4 className="font-bold text-sm text-navy-950">
              {language === 'ur' ? 'براہِ راست سوشل چینلز پر رابطہ کریں:' : 'Direct Digital Channels:'}
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={INSTITUTION_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-emerald-200 text-emerald-800 font-semibold hover:bg-emerald-50 transition"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'ur' ? 'آفیشل واٹس ایپ چینل' : 'Official WhatsApp Channel'}</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={INSTITUTION_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-blue-200 text-blue-800 font-semibold hover:bg-blue-50 transition"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>{language === 'ur' ? 'آفیشل فیس بک پیج' : 'Official Facebook Page'}</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
