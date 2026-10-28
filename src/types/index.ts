export type Language = 'en' | 'ur';

export type PageId = 
  | 'home'
  | 'about'
  | 'school'
  | 'madrassa'
  | 'admissions'
  | 'student-life'
  | 'gallery'
  | 'support'
  | 'contact'
  | 'faq'
  | 'privacy'
  | 'terms';

export interface AdmissionApplication {
  id: string;
  studentName: string;
  parentName: string;
  phone: string;
  email?: string;
  appliedClass: string;
  dob?: string;
  pathway: 'school' | 'madrassa' | 'both';
  boarding: 'yes' | 'no' | 'info';
  previousSchool?: string;
  message?: string;
  consent: boolean;
  submittedAt: string;
  status: 'Pending' | 'Under Review' | 'Contacted';
}

export interface ContactInquiry {
  id: string;
  name: string;
  phoneOrEmail: string;
  inquiryType: 'general' | 'admission' | 'support' | 'madrassa' | 'boarding';
  message: string;
  consent: boolean;
  submittedAt: string;
}

export interface SupportInquiry {
  id: string;
  name: string;
  contact: string;
  supportType: 'child_sponsorship' | 'books_uniform' | 'boarding_meals' | 'facilities' | 'other';
  message?: string;
  consent: boolean;
  submittedAt: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleUr: string;
  category: 'campus' | 'school' | 'madrassa' | 'events';
  imageUrl: string;
  captionEn: string;
  captionUr: string;
  isAuthentic: boolean;
}

export interface FaqItem {
  id: string;
  questionEn: string;
  questionUr: string;
  answerEn: string;
  answerUr: string;
  category: 'admissions' | 'academics' | 'madrassa' | 'support';
}
