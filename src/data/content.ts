import { GalleryItem, FaqItem } from '../types';

export const INSTITUTION_INFO = {
  nameEn: 'Babul-Ilm Education System',
  nameUr: 'بابُ العلم ایجوکیشن سسٹم',
  taglineEn: 'Nurturing Academic Excellence, Islamic Teachings & Moral Character',
  taglineUr: 'معیاری عصری تعلیم اور دینی و اخلاقی تربیت کا معتبر ادارہ',
  principalEn: 'Syed Mohsin Abbas Naqvi',
  principalUr: 'سید محسن عباس نقوی',
  addressEn: 'F-8/2, Irfan Abad, Tramri Chowk, Islamabad, Pakistan',
  addressUr: 'ایف 8/2، عرفان آباد، ترامڑی چوک، اسلام آباد، پاکستان',
  phones: ['+92 332-5922372', '+92 3340578714'],
  email: 'bies.edu444@gmail.com',
  session: '2026–2027',
  admissionClasses: ['Class 4 (چہارم)', 'Class 5 (پنجم)', 'Class 6 (ششم)', 'Class 7 (ہفتم)'],
  limitedSeats: 10,
  socialLinks: {
    whatsapp: 'https://whatsapp.com/channel/0029Vb7kYuv3AzNQSXgstB0H',
    facebook: 'https://www.facebook.com/share/1L7zWFrZqb/',
    youtube: 'https://youtube.com/@babul-ilmeducationsystembabul?si=jTRqfeKrn0o-Pfbj',
  },
  youtubeFeaturedVideoId: 'babul-intro' // fallback video embed ID or placeholder
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'campus-facade',
    titleEn: 'Campus Exterior & Administration',
    titleUr: 'کیمپس عمارت اور انتظامیہ',
    category: 'campus',
    
imageUrl: `${import.meta.env.BASE_URL}images/campus_exterior_principal_students.jpg`,

    captionEn: 'Principal Syed Mohsin Abbas Naqvi with students outside the Babul-Ilm campus entrance in Irfan Abad, Tramri Chowk, Islamabad.',
    captionUr: 'پرنسپل سید محسن عباس نقوی کیمپس کے سامنے طلباء کے ہمراہ، عرفان آباد، ترامڑی چوک اسلام آباد۔',
    isAuthentic: true
  },
  {
    id: 'madrassa-prayer',
    titleEn: 'Congregational Prayer & Religious Education',
    titleUr: 'نماز باجماعت اور دینی تربیت',
    category: 'madrassa',
   
imageUrl: `${import.meta.env.BASE_URL}images/madrassa_prayer_guidance.jpg`,

    captionEn: 'Students offering prayers in congregation under the spiritual guidance and leadership of our resident Islamic scholar.',
    captionUr: 'دینی استاد اور عالم دین کی زیر نگرانی نمازِ باجماعت اور عملی اسلامی تربیت کا روح پرور منظر۔',
    isAuthentic: true
  },
  {
    id: 'classroom-exam',
    titleEn: 'Academic Assessment & Classroom Learning',
    titleUr: 'کلاس روم میں تدریس اور امتحانی جائزہ',
    category: 'school',
  
imageUrl: `${import.meta.env.BASE_URL}images/classroom_exam_learning.jpg`,

    captionEn: 'Female students engaged in focused academic examination and coursework in a disciplined, supportive classroom environment.',
    captionUr: 'معاون اور باوقار تعلیمی ماحول میں طالبات امتحان اور تحریری جائزہ دیتے ہوئے۔',
    isAuthentic: true
  },
  {
    id: 'national-celebration',
    titleEn: 'Creative Activities & Pakistan Day Celebrations',
    titleUr: 'تخلیقی سرگرمیاں اور یوم آزادی کی تقریب',
    category: 'events',

imageUrl: `${import.meta.env.BASE_URL}images/student_event_pakistan_day.jpg`,

    captionEn: 'Students participating in national day celebrations, exhibiting patriotic art, crafts, and teamwork.',
    captionUr: 'طلباء و طالبات یوم آزادی کی تقریب میں تخلیقی سرگرمیوں اور قومی جذبے کا مظاہرہ کرتے ہوئے۔',
    isAuthentic: true
  },
  {
    id: 'admission-announcement',
    titleEn: 'Official Admission Announcement 2026–2027',
    titleUr: 'سرکاری اعلانِ داخلہ 2026–2027',
    category: 'campus',

imageUrl: `${import.meta.env.BASE_URL}images/babul_ilm_admission_poster.jpg`,

    captionEn: 'Official banner for admissions in session 2026–2027 highlighting requirements, boarding facility, and administration contacts.',
    captionUr: 'تعلیمی سال 2026-2027 کا باضابطہ اعلانِ داخلہ جس میں ٹیسٹ، کوائف اور ہاسٹل سہولت کی تفصیلات درج ہیں۔',
    isAuthentic: true
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'admissions',
    questionEn: 'Which classes are currently accepting admissions for the 2026–2027 academic session?',
    questionUr: 'تعلیمی سال 2026–2027 کے لیے کن جماعتوں میں داخلے کھلے ہیں؟',
    answerEn: 'For the academic session 2026–2027, admissions are announced specifically for Classes 4, 5, 6, and 7. The institution has announced 10 limited seats for this session.',
    answerUr: 'تعلیمی سال 2026–2027 کے لیے باضابطہ طور پر جماعت چہارم (Class 4)، پنجم (Class 5)، ششم (Class 6) اور ہفتم (Class 7) میں داخلے جاری ہیں۔ اس سیشن کے لیے 10 مخصوص نشستیں مختص کی گئی ہیں۔'
  },
  {
    id: 'faq-2',
    category: 'admissions',
    questionEn: 'Is an admission test mandatory for all applicants?',
    questionUr: 'کیا داخلے کے لیے ایڈمیشن ٹیسٹ پاس کرنا لازمی ہے؟',
    answerEn: 'Yes. An admission test is mandatory for candidates applying for Classes 4 to 7 to assess their academic readiness and placement. At the time of the test, the parent or guardian must be present with 2 passport-sized photographs and the child’s official B-Form.',
    answerUr: 'جی ہاں، جماعت چہارم تا ہفتم کے امیدواروں کے لیے داخلہ ٹیسٹ پاس کرنا لازمی ہے۔ ٹیسٹ کے وقت سرپرست کا ہمراہ ہونا، طالب علم کی 2 عدد پاسپورٹ سائز تصاویر اور نادرا ب فارم (B-Form) کا ہونا لازمی ہے۔'
  },
  {
    id: 'faq-3',
    category: 'academics',
    questionEn: 'Are boarding and hostel facilities available for students?',
    questionUr: 'کیا طلباء کے لیے ہاسٹل / بورڈنگ کی سہولت دستیاب ہے؟',
    answerEn: 'Yes, boarding facilities are available for capable and deserving students. For specific hostel accommodation details, arrangements, and guidelines, parents are advised to contact the administration directly.',
    answerUr: 'جی ہاں، اہل اور مستحق طلباء کے لیے ہاسٹل اور رہائشی سہولت دستیاب ہے۔ ہاسٹل کی رہائش، ضوابط اور سہولیات کی تفصیلی معلومات کے لیے والدین براہِ راست انتظامیہ سے رابطہ فرما سکتے ہیں۔'
  },
  {
    id: 'faq-4',
    category: 'admissions',
    questionEn: 'How can parents submit an admission inquiry or application?',
    questionUr: 'والدین داخلے کے لیے درخواست یا استفسار کیسے جمع کروا سکتے ہیں؟',
    answerEn: 'Parents can fill out the interactive Admission Application form right on this website, or visit the campus at F-8/2, Irfan Abad, Tramri Chowk, Islamabad. You may also call the administration directly at +92 332-5922372 or +92 3340578714.',
    answerUr: 'والدین اسی ویب سائٹ پر موجود آن لائن داخلہ فارم کے ذریعے باآسانی درخواست دے سکتے ہیں، یا ترامڑی چوک، عرفان آباد میں واقع کیمپس تشریف لا سکتے ہیں۔ اس کے علاوہ فون نمبرز 5922372-0332 یا 03340578714 پر رابطہ کیا جا سکتا ہے۔'
  },
  {
    id: 'faq-5',
    category: 'madrassa',
    questionEn: 'Can students pursue both School Education and Islamic Madrassa Education together?',
    questionUr: 'کیا بچے اسکول کی عصری تعلیم اور دینی مدرسہ کی تعلیم دونوں بیک وقت حاصل کر سکتے ہیں؟',
    answerEn: 'Yes. Babul-Ilm Education System uniquely integrates structured modern school academics with authentic Islamic Madrassa education (Quranic studies, Tajweed, Islamic jurisprudence, and ethical character training), allowing children to excel in both spheres.',
    answerUr: 'جی ہاں، بابُ العلم ایجوکیشن سسٹم کا امتیازی وصف یہی ہے کہ یہاں اسکول کی باضابطہ عصری تعلیم کے ساتھ ساتھ اسلامی مدرسہ (قرآن کریم مع تجوید، فقہ و عقائد، سیرت و اخلاقیات) کی متوازن اور جامع تعلیم فراہم کی جاتی ہے۔'
  },
  {
    id: 'faq-6',
    category: 'madrassa',
    questionEn: 'What is the Shia Islamic educational identity of the institution?',
    questionUr: 'ادارے کی شیعہ اسلامی تعلیمی شناخت کا دائرہ کار کیا ہے؟',
    answerEn: 'Babul-Ilm Education System provides an educational and moral environment tailored to Muslim children, with special religious instruction rooted in the teachings of the Quran, the Prophet Muhammad (PBUH), and the Ahl al-Bayt (AS), fostering deep moral character, mutual respect, and community service without sectarian acrimony.',
    answerUr: 'بابُ العلم ایجوکیشن سسٹم قرآنی تعلیمات اور سیرتِ رسولِ اکرم ﷺ و اہل بیتِ اطہارؑ کی روشنی میں بچوں کی دینی و اخلاقی نشوونما کرتا ہے، جہاں باہمی احترام، تقویٰ، اور باکردار انسان بننے کی تربیت دی جاتی ہے۔'
  },
  {
    id: 'faq-7',
    category: 'support',
    questionEn: 'How can donors, volunteers, or supporters help a child at Babul-Ilm?',
    questionUr: 'مخیر حضرات اور ہمدردانِ علم کسی بچے کے تعلیمی اخراجات کی کفالت کیسے کر سکتے ہیں؟',
    answerEn: 'Supporters can sponsor a deserving student’s educational expenses, provide books and educational materials, or support boarding and welfare facilities. Please submit the Support Inquiry form on our Support page or contact the administration directly to receive verified institutional sponsorship details.',
    answerUr: 'ہمدرد افراد مستحق بچوں کی تعلیمی کفالت، درسی کتب و یونیفارم، یا ہاسٹل کے اخراجات میں معاونت کر سکتے ہیں۔ تفصیلی اور تصدیق شدہ معلومات کے لیے سپورٹ پیج پر فارم پر کریں یا براہِ راست ادارے سے رابطہ فرمائیں۔'
  },
  {
    id: 'faq-8',
    category: 'academics',
    questionEn: 'Where is the institution located and what are the campus contact numbers?',
    questionUr: 'ادارہ کہاں واقع ہے اور رابطہ کے مستند نمبرز کیا ہیں؟',
    answerEn: 'The campus is located at F-8/2, Irfan Abad, Tramri Chowk, Islamabad, Pakistan. Official phone numbers are +92 332-5922372 and +92 3340578714. Official email is bies.edu444@gmail.com.',
    answerUr: 'کیمپس ایف 8/2، عرفان آباد، ترامڑی چوک، اسلام آباد میں واقع ہے۔ سرکاری رابطہ نمبرز 5922372-0332 اور 03340578714 ہیں۔ ای میل bies.edu444@gmail.com ہے۔'
  }
];
