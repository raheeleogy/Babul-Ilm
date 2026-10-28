import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { PageId, AdmissionApplication, ContactInquiry, SupportInquiry } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SchoolPage } from './pages/SchoolPage';
import { MadrassaPage } from './pages/MadrassaPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { StudentLifePage } from './pages/StudentLifePage';
import { GalleryPage } from './pages/GalleryPage';
import { SupportPage } from './pages/SupportPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CheckCircle2, X } from 'lucide-react';

const INITIAL_PAGE_FROM_HASH = (): PageId => {
  const hash = window.location.hash.replace('#', '') as PageId;
  const validPages: PageId[] = [
    'home', 'about', 'school', 'madrassa', 'admissions',
    'student-life', 'gallery', 'support', 'contact', 'faq', 'privacy', 'terms'
  ];
  return validPages.includes(hash) ? hash : 'home';
};

const MainContent: React.FC = () => {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState<PageId>(INITIAL_PAGE_FROM_HASH);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Application & Inquiries Persistent State (Stored in localStorage)
  const [applications, setApplications] = useState<AdmissionApplication[]>(() => {
    try {
      const saved = localStorage.getItem('babul_admissions');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load saved applications', e);
    }
    // Seed initial demo applicant for verification
    return [
      {
        id: 'app-seed-1',
        studentName: 'Ali Haider',
        parentName: 'Syed Zeeshan Haider',
        phone: '0332-5922372',
        appliedClass: 'Class 5 (پنجم)',
        pathway: 'both',
        boarding: 'yes',
        previousSchool: 'Completed Class 4',
        message: 'Interested in dual school academics and Quran recitation with hostel accommodation.',
        consent: true,
        submittedAt: new Date(Date.now() - 3600000 * 24).toISOString(),
        status: 'Pending'
      }
    ];
  });

  const [contactInquiries, setContactInquiries] = useState<ContactInquiry[]>(() => {
    try {
      const saved = localStorage.getItem('babul_contacts');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
  });

  const [supportInquiries, setSupportInquiries] = useState<SupportInquiry[]>(() => {
    try {
      const saved = localStorage.getItem('babul_supports');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
  });

  // Sync Hash in URL for smooth back/forward navigation
  useEffect(() => {
    window.location.hash = currentPage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home', 'about', 'school', 'madrassa', 'admissions',
        'student-life', 'gallery', 'support', 'contact', 'faq', 'privacy', 'terms'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('babul_admissions', JSON.stringify(applications));
    } catch (e) {}
  }, [applications]);

  useEffect(() => {
    try {
      localStorage.setItem('babul_contacts', JSON.stringify(contactInquiries));
    } catch (e) {}
  }, [contactInquiries]);

  useEffect(() => {
    try {
      localStorage.setItem('babul_supports', JSON.stringify(supportInquiries));
    } catch (e) {}
  }, [supportInquiries]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleAddApplication = (data: Omit<AdmissionApplication, 'id' | 'submittedAt' | 'status'>) => {
    const newApp: AdmissionApplication = {
      ...data,
      id: `app-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: 'Pending'
    };

    setApplications(prev => [newApp, ...prev]);
    showToast(
      language === 'ur'
        ? 'داخلہ درخواست کامیابی سے محفوظ ہو گئی۔ انتظامیہ رابطہ کرے گی۔'
        : 'Admission application recorded in institutional records.'
    );
  };

  const handleUpdateApplicationStatus = (id: string, newStatus: 'Pending' | 'Under Review' | 'Contacted') => {
    setApplications(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
  };

  const handleDeleteApplication = (id: string) => {
    setApplications(prev => prev.filter(a => a.id !== id));
  };

  const handleAddContact = (data: Omit<ContactInquiry, 'id' | 'submittedAt'>) => {
    const newInquiry: ContactInquiry = {
      ...data,
      id: `contact-${Date.now()}`,
      submittedAt: new Date().toISOString()
    };
    setContactInquiries(prev => [newInquiry, ...prev]);
    showToast(language === 'ur' ? 'آپ کا پیغام انتظامیہ کو ارسال کر دیا گیا۔' : 'Your message has been sent to the administration.');
  };

  const handleAddSupport = (data: Omit<SupportInquiry, 'id' | 'submittedAt'>) => {
    const newSupport: SupportInquiry = {
      ...data,
      id: `support-${Date.now()}`,
      submittedAt: new Date().toISOString()
    };
    setSupportInquiries(prev => [newSupport, ...prev]);
    showToast(language === 'ur' ? 'تعاون کا استفسار موصول ہو گیا۔ جزاک اللہ خیر!' : 'Sponsorship inquiry received. Thank you for your support!');
  };

  return (
    <div className="flex flex-col min-h-screen bg-ivory-50 text-slate-800">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-navy-950 text-white px-4 py-3 rounded-2xl shadow-2xl border border-gold-400 flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="p-1 text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Shared Sticky Header */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenAdmin={() => setAdminModalOpen(true)}
        applicationsCount={applications.length}
      />

      {/* Main View Container */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage onNavigate={setCurrentPage} />}
        {currentPage === 'school' && <SchoolPage onNavigate={setCurrentPage} />}
        {currentPage === 'madrassa' && <MadrassaPage onNavigate={setCurrentPage} />}
        {currentPage === 'admissions' && (
          <AdmissionsPage 
            onNavigate={setCurrentPage} 
            onSubmitApplication={handleAddApplication} 
          />
        )}
        {currentPage === 'student-life' && <StudentLifePage onNavigate={setCurrentPage} />}
        {currentPage === 'gallery' && <GalleryPage onNavigate={setCurrentPage} />}
        {currentPage === 'support' && (
          <SupportPage 
            onNavigate={setCurrentPage} 
            onSubmitSupport={handleAddSupport} 
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={setCurrentPage} 
            onSubmitContact={handleAddContact} 
          />
        )}
        {currentPage === 'faq' && <FaqPage onNavigate={setCurrentPage} />}
        {currentPage === 'privacy' && <PrivacyPage onNavigate={setCurrentPage} />}
        {currentPage === 'terms' && <TermsPage onNavigate={setCurrentPage} />}
      </main>

      {/* Shared Footer */}
      <Footer onNavigate={setCurrentPage} />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={setCurrentPage}
      />

      {/* Admin Portal Modal */}
      <AdminPortalModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        applications={applications}
        onUpdateStatus={handleUpdateApplicationStatus}
        onDeleteApplication={handleDeleteApplication}
        contactInquiries={contactInquiries}
        supportInquiries={supportInquiries}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
