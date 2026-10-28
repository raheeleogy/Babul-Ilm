import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId, AdmissionApplication } from '../types';
import { INSTITUTION_INFO } from '../data/content';
import { 
  GraduationCap, 
  Calendar, 
  Users, 
  CheckCircle2, 
  FileText, 
  Phone, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft,
  Building,
  ShieldCheck,
  Download,
  Printer
} from 'lucide-react';

interface AdmissionsPageProps {
  onNavigate: (page: PageId) => void;
  onSubmitApplication: (application: Omit<AdmissionApplication, 'id' | 'submittedAt' | 'status'>) => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({
  onNavigate,
  onSubmitApplication
}) => {
  const { language, dir, t } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  // Form State
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [appliedClass, setAppliedClass] = useState('Class 4 (چہارم)');
  const [dob, setDob] = useState('');
  const [pathway, setPathway] = useState<'school' | 'madrassa' | 'both'>('both');
  const [boarding, setBoarding] = useState<'yes' | 'no' | 'info'>('no');
  const [previousSchool, setPreviousSchool] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  // Status & Validation
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!studentName.trim() || !parentName.trim() || !phone.trim()) {
      setErrorMsg(
        language === 'ur' 
          ? 'برائے مہربانی طالب علم کا نام، سرپرست کا نام اور موبائل نمبر درج کریں۔'
          : 'Please provide student name, parent/guardian name, and contact phone number.'
      );
      return;
    }

    if (!consent) {
      setErrorMsg(
        language === 'ur'
          ? 'برائے مہربانی کوائف کے جائزے اور رازداری کے اقرار نامے کو منتخب کریں۔'
          : 'Please accept the privacy consent to proceed.'
      );
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      onSubmitApplication({
        studentName: studentName.trim(),
        parentName: parentName.trim(),
        phone: phone.trim(),
        email: email.trim() || undefined,
        appliedClass,
        dob: dob || undefined,
        pathway,
        boarding,
        previousSchool: previousSchool.trim() || undefined,
        message: message.trim() || undefined,
        consent,
      });

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handlePrintChecklist = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5" />
          <span>{language === 'ur' ? 'اعلانِ داخلہ سال 2026–2027' : 'Admission Announcement Session 2026–2027'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950">
          {language === 'ur' ? 'داخلہ برائے تعلیمی سال 2026–2027' : 'Admissions Open 2026–2027'}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {language === 'ur'
            ? 'تعلیمی سال 2026–2027 کے لیے جماعت چہارم، پنجم، ششم اور ہفتم میں داخلے جاری ہیں۔ امیدواروں کے لیے داخلہ ٹیسٹ پاس کرنا لازمی ہے۔ بورڈنگ کی سہولت دستیاب ہے۔'
            : 'Admissions are open for the 2026–2027 academic session for Classes 4, 5, 6, and 7. Applicants must pass the admission test. Boarding facilities are available.'}
        </p>
      </div>

      {/* Official Poster & Requirements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Poster Visual */}
        <div className="lg:col-span-5 bg-white p-4 rounded-3xl border border-navy-100 shadow-md">
          <div className="rounded-2xl overflow-hidden border border-slate-200">
            <img
   src={`${import.meta.env.BASE_URL}images/babul_ilm_admission_poster.jpg`}
              alt="Official Admission Poster 2026-2027 of Babul-Ilm Education System Islamabad"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 bg-ivory-50 rounded-xl mt-3 space-y-1 text-xs text-slate-700">
            <span className="font-bold text-navy-950 block">
              {language === 'ur' ? 'اہم ہدایات برائے داخلہ ٹیسٹ:' : 'Important Admission Test Instructions:'}
            </span>
            <p>
              {language === 'ur'
                ? 'داخلہ ٹیسٹ کے وقت سرپرست کا ساتھ ہونا، طالب علم کی 2 عدد تصویر اور نادرا ب فارم کا ہونا لازمی ہے۔'
                : 'Guardian presence, 2 student photos, and official B-Form are strictly mandatory at test time.'}
            </p>
          </div>
        </div>

        {/* Requirements & Checklist */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy-100 shadow-soft space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded">
                {language === 'ur' ? 'اہلیت و شرائط' : 'Eligibility & Criteria'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-950 mt-2">
                {language === 'ur' ? 'داخلے کے اہم قواعد و شرائط' : 'Admission Guidelines & Rules'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-ivory-50 border border-ivory-200 space-y-1.5">
                <span className="font-bold text-navy-900 block flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {language === 'ur' ? 'مخصوص نشستیں' : 'Intake Limit'}
                </span>
                <p className="text-slate-600">
                  {language === 'ur' ? 'اعلان کے مطابق صرف 10 مخصوص نشستیں دستیاب ہیں۔' : 'Strictly limited to 10 seats as stated in institutional notice.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-50 border border-ivory-200 space-y-1.5">
                <span className="font-bold text-navy-900 block flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {language === 'ur' ? 'داخلہ ٹیسٹ لازمی' : 'Mandatory Test'}
                </span>
                <p className="text-slate-600">
                  {language === 'ur' ? 'جماعت 4 تا 7 کے لیے تعلیمی اہلیت کا جائزہ ٹیسٹ۔' : 'Academic readiness assessment for Classes 4, 5, 6, and 7.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-50 border border-ivory-200 space-y-1.5">
                <span className="font-bold text-navy-900 block flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  {language === 'ur' ? 'لازمی دستاویزات' : 'Mandatory Documents'}
                </span>
                <p className="text-slate-600">
                  {language === 'ur' ? 'نادرا ب فارم کی نقل اور 2 عدد پاسپورٹ سائز تصاویر۔' : 'Official B-Form photocopy and 2 passport-size photographs.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-50 border border-ivory-200 space-y-1.5">
                <span className="font-bold text-navy-900 block flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  {language === 'ur' ? 'ہاسٹل کی سہولت' : 'Hostel Facility'}
                </span>
                <p className="text-slate-600">
                  {language === 'ur' ? 'اہل اور باصلاحیت طلباء کے لیے اقامتی ہاسٹل دستیاب ہے۔' : 'Boarding facility available for qualified & deserving students.'}
                </p>
              </div>
            </div>

            {/* Checklist Print / Save button */}
            <div className="pt-2 flex items-center justify-between bg-navy-50 p-4 rounded-2xl border border-navy-100">
              <div className="text-xs text-navy-900">
                <span className="font-bold block">{language === 'ur' ? 'داخلہ چیک لسٹ پرنٹ کریں' : 'Admission Requirements Checklist'}</span>
                <span className="text-slate-600">{language === 'ur' ? 'ٹیسٹ میں شمولیت کے وقت یہ کاغذات ہمراہ رکھیں' : 'Keep these documents ready for your campus visit'}</span>
              </div>
              <button
                onClick={handlePrintChecklist}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-xs font-semibold shadow transition"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{language === 'ur' ? 'پرنٹ / محفوظ کریں' : 'Print Checklist'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE ADMISSION APPLICATION FORM
          ========================================================================= */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-navy-100 shadow-elevated">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2 border-b border-slate-100 pb-6">
            <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
              {language === 'ur' ? 'آن لائن داخلہ درخواست' : 'Online Admission Form'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              {language === 'ur' ? 'داخلہ فارم سیشن 2026–2027' : 'Admission Application Form 2026–2027'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {language === 'ur' 
                ? 'درخواست فارم پر کرنے کے بعد انتظامیہ آپ سے داخلہ ٹیسٹ کی تاریخ اور وقت کے لیے رابطہ کرے گی۔'
                : 'Fill in the details below. Our admissions office will contact you with test schedule and appointment.'}
            </p>
          </div>

          {isSuccess ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950">
                {t.forms.successAdmissionTitle}
              </h3>
              <p className="text-sm text-slate-700 max-w-lg mx-auto leading-relaxed">
                {t.forms.successAdmissionMsg}
              </p>
              <div className="bg-white p-4 rounded-xl border border-emerald-200 inline-block text-xs text-slate-700 font-mono text-start">
                <p><strong>Student:</strong> {studentName}</p>
                <p><strong>Class:</strong> {appliedClass}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Campus:</strong> F-8/2, Irfan Abad, Tramri Chowk, Islamabad</p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setStudentName('');
                    setParentName('');
                    setPhone('');
                    setEmail('');
                    setMessage('');
                    setConsent(false);
                  }}
                  className="px-6 py-2.5 bg-navy-900 text-white rounded-xl text-xs font-semibold hover:bg-navy-800 transition shadow"
                >
                  {language === 'ur' ? 'ایک اور درخواست جمع کروائیں' : 'Submit Another Application'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs sm:text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Student Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy-950 block">
                    {t.forms.studentName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder={t.forms.studentNamePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-100 outline-none text-sm bg-ivory-50/50"
                  />
                </div>

                {/* Parent / Guardian Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy-950 block">
                    {t.forms.parentName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder={t.forms.parentNamePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-100 outline-none text-sm bg-ivory-50/50"
                  />
                </div>

                {/* Contact Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy-950 block">
                    {t.forms.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.forms.phonePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-100 outline-none text-sm bg-ivory-50/50 font-mono"
                  />
                </div>

                {/* Email (Optional) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy-950 block">
                    {t.forms.email}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.forms.emailPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-100 outline-none text-sm bg-ivory-50/50"
                  />
                </div>

                {/* Applying for Class */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy-950 block">
                    {t.forms.appliedClass} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={appliedClass}
                    onChange={(e) => setAppliedClass(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-100 outline-none text-sm bg-ivory-50/50 cursor-pointer font-medium"
                  >
                    <option value="Class 4 (چہارم)">Class 4 (جماعت چہارم)</option>
                    <option value="Class 5 (پنجم)">Class 5 (جماعت پنجم)</option>
                    <option value="Class 6 (ششم)">Class 6 (جماعت ششم)</option>
                    <option value="Class 7 (ہفتم)">Class 7 (جماعت ہفتم)</option>
                  </select>
                </div>

                {/* Date of Birth (Optional) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy-950 block">
                    {t.forms.dob}
                  </label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-100 outline-none text-sm bg-ivory-50/50"
                  />
                </div>
              </div>

              {/* Educational Pathway Selection */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-navy-950 block">
                  {t.forms.pathway}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className={`p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium flex items-center gap-2.5 transition ${
                    pathway === 'both' ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold' : 'border-slate-200 bg-white text-slate-700'
                  }`}>
                    <input
                      type="radio"
                      name="pathway"
                      value="both"
                      checked={pathway === 'both'}
                      onChange={() => setPathway('both')}
                      className="accent-emerald-700"
                    />
                    <span>{t.forms.pathwayBoth}</span>
                  </label>

                  <label className={`p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium flex items-center gap-2.5 transition ${
                    pathway === 'school' ? 'border-navy-900 bg-navy-50 text-navy-950 font-bold' : 'border-slate-200 bg-white text-slate-700'
                  }`}>
                    <input
                      type="radio"
                      name="pathway"
                      value="school"
                      checked={pathway === 'school'}
                      onChange={() => setPathway('school')}
                      className="accent-navy-900"
                    />
                    <span>{t.forms.pathwaySchool}</span>
                  </label>

                  <label className={`p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium flex items-center gap-2.5 transition ${
                    pathway === 'madrassa' ? 'border-gold-600 bg-gold-50 text-gold-950 font-bold' : 'border-slate-200 bg-white text-slate-700'
                  }`}>
                    <input
                      type="radio"
                      name="pathway"
                      value="madrassa"
                      checked={pathway === 'madrassa'}
                      onChange={() => setPathway('madrassa')}
                      className="accent-gold-600"
                    />
                    <span>{t.forms.pathwayMadrassa}</span>
                  </label>
                </div>
              </div>

              {/* Boarding / Hostel Requirement */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-950 block">
                  {t.forms.boarding}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className={`p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium flex items-center gap-2.5 transition ${
                    boarding === 'yes' ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold' : 'border-slate-200 bg-white text-slate-700'
                  }`}>
                    <input
                      type="radio"
                      name="boarding"
                      value="yes"
                      checked={boarding === 'yes'}
                      onChange={() => setBoarding('yes')}
                      className="accent-emerald-700"
                    />
                    <span>{t.forms.boardingYes}</span>
                  </label>

                  <label className={`p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium flex items-center gap-2.5 transition ${
                    boarding === 'no' ? 'border-navy-900 bg-navy-50 text-navy-950 font-bold' : 'border-slate-200 bg-white text-slate-700'
                  }`}>
                    <input
                      type="radio"
                      name="boarding"
                      value="no"
                      checked={boarding === 'no'}
                      onChange={() => setBoarding('no')}
                      className="accent-navy-900"
                    />
                    <span>{t.forms.boardingNo}</span>
                  </label>

                  <label className={`p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium flex items-center gap-2.5 transition ${
                    boarding === 'info' ? 'border-gold-600 bg-gold-50 text-gold-950 font-bold' : 'border-slate-200 bg-white text-slate-700'
                  }`}>
                    <input
                      type="radio"
                      name="boarding"
                      value="info"
                      checked={boarding === 'info'}
                      onChange={() => setBoarding('info')}
                      className="accent-gold-600"
                    />
                    <span>{t.forms.boardingInfo}</span>
                  </label>
                </div>
              </div>

              {/* Previous School */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-navy-950 block">
                  {t.forms.prevSchool}
                </label>
                <input
                  type="text"
                  value={previousSchool}
                  onChange={(e) => setPreviousSchool(e.target.value)}
                  placeholder={t.forms.prevSchoolPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 outline-none text-sm bg-ivory-50/50"
                />
              </div>

              {/* Message / Inquiry */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-navy-950 block">
                  {t.forms.message}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.forms.messagePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-navy-900 outline-none text-sm bg-ivory-50/50"
                />
              </div>

              {/* Privacy Consent */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-600">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>{t.forms.privacyConsent}</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-base rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-60"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>{isSubmitting ? t.common.submitting : t.forms.submitAdmission}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
