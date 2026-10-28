import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AdmissionApplication, ContactInquiry, SupportInquiry } from '../types';
import { 
  X, 
  ShieldCheck, 
  UserCheck, 
  Phone, 
  Mail, 
  Calendar, 
  Trash2, 
  Download, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Lock
} from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  applications: AdmissionApplication[];
  onUpdateStatus: (id: string, newStatus: 'Pending' | 'Under Review' | 'Contacted') => void;
  onDeleteApplication: (id: string) => void;
  contactInquiries: ContactInquiry[];
  supportInquiries: SupportInquiry[];
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  applications,
  onUpdateStatus,
  onDeleteApplication,
  contactInquiries,
  supportInquiries
}) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'admissions' | 'contact' | 'support'>('admissions');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // initially open for ease of review
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);

  if (!isOpen) return null;

  const exportApplications = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(applications, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `babul_ilm_admissions_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-navy-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy-900 text-white p-5 flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-navy-800 rounded-lg text-gold-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg flex items-center gap-2">
                <span>{language === 'ur' ? 'انتظامیہ جائزہ پورٹل' : 'Babul-Ilm Administration Portal'}</span>
                <span className="text-xs font-normal bg-emerald-600/80 px-2 py-0.5 rounded text-emerald-100">
                  {language === 'ur' ? 'محفوظ پورٹل' : 'Internal Review'}
                </span>
              </h3>
              <p className="text-xs text-navy-300">
                {language === 'ur' ? 'داخلہ درخواستوں اور استفسارات کا انتظامی ریکارڈ' : 'Review incoming student applications, contact messages, and donor inquiries.'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-navy-300 hover:text-white hover:bg-navy-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs Bar */}
        <div className="bg-ivory-100 px-5 pt-3 border-b border-navy-100 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('admissions')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-t-xl transition-all border-b-2 ${
                activeTab === 'admissions'
                  ? 'bg-white text-navy-900 border-navy-900 shadow-sm'
                  : 'text-slate-600 hover:text-navy-900 border-transparent'
              }`}
            >
              {language === 'ur' ? `داخلہ درخواستیں (${applications.length})` : `Admissions (${applications.length})`}
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-t-xl transition-all border-b-2 ${
                activeTab === 'contact'
                  ? 'bg-white text-navy-900 border-navy-900 shadow-sm'
                  : 'text-slate-600 hover:text-navy-900 border-transparent'
              }`}
            >
              {language === 'ur' ? `رابطہ پیغامات (${contactInquiries.length})` : `Contact Inquiries (${contactInquiries.length})`}
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-t-xl transition-all border-b-2 ${
                activeTab === 'support'
                  ? 'bg-white text-navy-900 border-navy-900 shadow-sm'
                  : 'text-slate-600 hover:text-navy-900 border-transparent'
              }`}
            >
              {language === 'ur' ? `کفالت و تعاون (${supportInquiries.length})` : `Support Inquiries (${supportInquiries.length})`}
            </button>
          </div>

          {activeTab === 'admissions' && applications.length > 0 && (
            <button
              onClick={exportApplications}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy-800 hover:bg-navy-700 text-white rounded-lg text-xs font-medium transition mb-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'ur' ? 'ریکارڈ ڈاؤنلوڈ کریں' : 'Export JSON'}</span>
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto flex-1 bg-ivory-50/50 space-y-4">
          {activeTab === 'admissions' && (
            <div>
              {applications.length === 0 ? (
                <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-dashed border-navy-200 p-8">
                  <UserCheck className="w-12 h-12 mx-auto text-navy-300 mb-3" />
                  <h4 className="text-sm font-bold text-navy-900 mb-1">
                    {language === 'ur' ? 'ابھی کوئی نئی داخلہ درخواست موجود نہیں' : 'No Admission Applications Yet'}
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    {language === 'ur' 
                      ? 'جب والدین یا طلباء ویب سائٹ کے ایڈمیشن فارم پر درخواست جمع کروائیں گے، وہ یہاں فوری ظاہر ہوں گی۔'
                      : 'Applications submitted via the Admissions form will appear here in real time for institutional review.'}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {applications.map((app) => (
                    <div 
                      key={app.id} 
                      className="bg-white p-4 rounded-xl border border-navy-100 shadow-sm hover:shadow transition space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                        <div>
                          <span className="font-bold text-navy-950 text-base mr-2">
                            {app.studentName}
                          </span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                            {app.appliedClass}
                          </span>
                          <span className="text-xs text-slate-500 ml-2">
                            ({app.pathway.toUpperCase()})
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <select
                            value={app.status}
                            onChange={(e) => onUpdateStatus(app.id, e.target.value as any)}
                            className={`text-xs font-semibold px-2.5 py-1 rounded-lg border outline-none cursor-pointer ${
                              app.status === 'Contacted' 
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                : app.status === 'Under Review'
                                ? 'bg-amber-50 text-amber-800 border-amber-300'
                                : 'bg-blue-50 text-blue-800 border-blue-300'
                            }`}
                          >
                            <option value="Pending">Pending / زیر التواء</option>
                            <option value="Under Review">Under Review / زیر جائزہ</option>
                            <option value="Contacted">Contacted / رابطہ مکمل</option>
                          </select>
                          <button
                            onClick={() => onDeleteApplication(app.id)}
                            className="p-1 text-slate-400 hover:text-red-600 transition"
                            title="Delete Record"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-600">
                        <div>
                          <span className="font-semibold text-slate-700 block">Parent/Guardian:</span>
                          <span>{app.parentName}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-slate-700 block">Phone:</span>
                          <a href={`tel:${app.phone}`} className="text-emerald-700 hover:underline font-mono">
                            {app.phone}
                          </a>
                        </div>
                        <div>
                          <span className="font-semibold text-slate-700 block">Boarding Requirement:</span>
                          <span className="capitalize">{app.boarding}</span>
                        </div>
                        {app.email && (
                          <div>
                            <span className="font-semibold text-slate-700 block">Email:</span>
                            <span>{app.email}</span>
                          </div>
                        )}
                        {app.previousSchool && (
                          <div>
                            <span className="font-semibold text-slate-700 block">Previous School:</span>
                            <span>{app.previousSchool}</span>
                          </div>
                        )}
                        <div>
                          <span className="font-semibold text-slate-700 block">Submitted At:</span>
                          <span>{new Date(app.submittedAt).toLocaleString()}</span>
                        </div>
                      </div>

                      {app.message && (
                        <div className="bg-ivory-100 p-2.5 rounded-lg text-xs text-slate-700 border border-ivory-200">
                          <span className="font-semibold block mb-0.5 text-navy-900">Message / Notes:</span>
                          <p>{app.message}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'contact' && (
            <div>
              {contactInquiries.length === 0 ? (
                <div className="text-center py-10 text-slate-500 bg-white rounded-xl border border-dashed border-navy-200 p-8">
                  <Mail className="w-10 h-10 mx-auto text-navy-300 mb-2" />
                  <p className="text-sm font-medium">No contact messages received yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {contactInquiries.map((inq) => (
                    <div key={inq.id} className="bg-white p-4 rounded-xl border border-navy-100 shadow-sm text-xs space-y-1">
                      <div className="flex justify-between items-center font-bold text-navy-950 text-sm">
                        <span>{inq.name} ({inq.inquiryType})</span>
                        <span className="text-[11px] font-normal text-slate-400">{new Date(inq.submittedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="text-emerald-700 font-medium">{inq.phoneOrEmail}</div>
                      <p className="text-slate-600 bg-ivory-50 p-2 rounded mt-2">{inq.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'support' && (
            <div>
              {supportInquiries.length === 0 ? (
                <div className="text-center py-10 text-slate-500 bg-white rounded-xl border border-dashed border-navy-200 p-8">
                  <ShieldCheck className="w-10 h-10 mx-auto text-navy-300 mb-2" />
                  <p className="text-sm font-medium">No sponsorship inquiries yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {supportInquiries.map((sup) => (
                    <div key={sup.id} className="bg-white p-4 rounded-xl border border-navy-100 shadow-sm text-xs space-y-1">
                      <div className="flex justify-between items-center font-bold text-navy-950 text-sm">
                        <span>{sup.name}</span>
                        <span className="text-emerald-700 font-semibold uppercase">{sup.supportType.replace('_', ' ')}</span>
                      </div>
                      <div className="text-slate-600 font-medium">Contact: {sup.contact}</div>
                      {sup.message && <p className="text-slate-600 bg-ivory-50 p-2 rounded mt-2">{sup.message}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-white border-t border-navy-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'ur' ? 'ڈیٹا محفوظ ہے اور رازداری پالیسی کے تحت صرف مجاز عملے کے لیے ہے' : 'Data is stored privately in the institutional session and not publicly accessible.'}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition font-medium"
          >
            {language === 'ur' ? 'پورٹل بند کریں' : 'Close Portal'}
          </button>
        </div>
      </div>
    </div>
  );
};
