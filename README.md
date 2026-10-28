# Babul-Ilm Education System Islamabad (بابُ العلم ایجوکیشن سسٹم)
## Official Bilingual Educational Website (English & اردو)

A complete, modern, attractive, and accessible bilingual web portal developed for **Babul-Ilm Education System**, located in **F-8/2, Irfan Abad, Tramri Chowk, Islamabad, Pakistan**.

The platform is designed to serve parents, students, scholars, supporters, and visitors, communicating the institution's commitment to academic excellence, Islamic Madrassa education, character development, and student welfare under the leadership of **Principal Syed Mohsin Abbas Naqvi**.

---

## 🏛️ Verified Institutional Details

| Attribute | Verified Information |
| :--- | :--- |
| **Institution Name** | Babul-Ilm Education System |
| **Urdu Name** | بابُ العلم ایجوکیشن سسٹم |
| **Principal / Leadership** | Syed Mohsin Abbas Naqvi (سید محسن عباس نقوی) |
| **Campus Location** | F-8/2, Irfan Abad, Tramri Chowk, Islamabad, Pakistan |
| **Urdu Address** | ایف 8/2، عرفان آباد، ترامڑی چوک، اسلام آباد، پاکستان |
| **Contact Telephones** | `+92 332-5922372` • `+92 3340578714` |
| **Official Email** | `bies.edu444@gmail.com` |
| **Academic Session** | **2026–2027** |
| **Active Admission Classes** | **Classes 4, 5, 6, and 7** |
| **Announced Seats** | Strictly limited to **10 seats** |
| **Hostel / Boarding** | Available for qualified & deserving students |
| **Admission Requirements** | Admission Test mandatory; guardian must accompany; 2 passport photos & Nadra B-Form required |

### Official Social Channels
- **WhatsApp Channel:** [Join WhatsApp Channel](https://whatsapp.com/channel/0029Vb7kYuv3AzNQSXgstB0H)
- **Facebook Page:** [Visit Facebook Page](https://www.facebook.com/share/1L7zWFrZqb/)
- **YouTube Channel:** [Subscribe on YouTube](https://youtube.com/@babul-ilmeducationsystembabul?si=jTRqfeKrn0o-Pfbj)

---

## 🌟 Key Features

1. **Dual Educational Pathways:**
   - **School Education (اسکول کی تعلیم):** Rigorous core curriculum (Math, English, Urdu, Science), periodic assessments, and disciplined learning.
   - **Islamic Madrassa (اسلامی مدرسہ):** Quranic studies with Tajweed, practical Fiqh, Taharah, daily congregational prayer, and moral character building in the Shia Islamic educational tradition.

2. **Complete Bilingual Experience:**
   - Instant language switching between **English** (LTR) and **Urdu** (RTL).
   - Tailored Urdu typography powered by Google's *Noto Nastaliq Urdu* with proper line-height and ligature shaping.
   - Synchronized `dir="rtl"` and `lang="ur"` attributes on `<html>`.

3. **12 Comprehensive Pages / Views:**
   1. `Home` — Full hero with authentic campus photography, pathways, admissions banner, mission/vision, features, student life preview, social links, support CTA, and footer.
   2. `About Us` — Institutional background, Principal's role, educational philosophy, Shia Islamic identity, campus environment, and future goals.
   3. `School Education` — Structured syllabus, Classes 4–7 breakdown, classroom evaluation, parent communication.
   4. `Islamic Madrassa` — Quran recitation, Tajweed, Ahkam, congregational prayer, and ethics.
   5. `Admissions 2026–2027` — Verified announcement, test criteria, checklist print feature, and **Interactive Admission Application Form** with validation and duplicate protection.
   6. `Student Life & Facilities` — Authentic Pakistan Day celebrations, extracurricular crafts, boarding/hostel amenities, and child safeguarding.
   7. `Gallery & Official Media` — Responsive photo grid with category filters (Campus, School, Madrassa, Events), high-resolution lightbox modal with keyboard navigation, and official YouTube embed.
   8. `Support Us / Sponsor a Child` — Transparent sponsorship options (tuition, books, boarding care), with direct verification protocol.
   9. `Contact Us` — Official numbers with click-to-call, copy button, contact form, and interactive Google Map embed for Tramri Chowk Islamabad.
   10. `FAQ` — Interactive bilingual accordion addressing 8+ crucial queries.
   11. `Privacy Policy` — Strict child safeguarding, applicant data protection, and privacy terms.
   12. `Terms of Use` — Intellectual property rights, admissions test regulations, and code of conduct.

4. **Internal Administration Review Portal:**
   - Accessible via the top utility bar (`Admin Portal`).
   - Allows school administrators to view, review, update status (`Pending`, `Under Review`, `Contacted`), and export submitted admission applications and inquiry messages directly in JSON format.

5. **Instant Site Search:**
   - Modal search dialog accessible with `Esc` or the Search icon, indexing admissions, classes, boarding, subjects, and campus queries in both English and Urdu.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Build Tool:** Vite 8
- **Styling:** Tailwind CSS with custom Islamic color palette:
  - Deep Navy (`#0F1D36` to `#1A3E76`)
  - Islamic Emerald Green (`#0B6D4F` to `#108560`)
  - Warm Ivory (`#FAF9F5` to `#F3EFE3`)
  - Soft Gold Accents (`#D4AF37` to `#CFA834`)
- **Icons:** Lucide React
- **Typography:**
  - English: Plus Jakarta Sans / Inter
  - Urdu: Noto Nastaliq Urdu / Gulzar
- **State & Storage:** React Context API + LocalStorage persistence

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended, tested on v24.19.0)
- npm (v9 or higher, tested on v11.17.0)

### Installation
```powershell
# Navigate to the project root directory
cd "c:\Users\MY PC\Desktop\Babul-Ilm"

# Install dependencies (already installed)
npm install
```

### Development Server
```powershell
npm run dev
# Server will start on http://localhost:5173
```

### Production Build & Preview
```powershell
# Build for production
npm run build

# Preview production build locally
npm run preview -- --port 5173 --host
```

---

## 📁 Project Structure

```
Babul-Ilm/
├── public/
│   ├── favicon.svg             # Institutional emblem favicon
│   ├── robots.txt              # Search engine crawler instructions
│   ├── sitemap.xml             # Bilingual XML sitemap
│   └── images/                 # Authentic institution photos
│       ├── babul_ilm_admission_poster.jpg
│       ├── campus_exterior_principal_students.jpg
│       ├── classroom_exam_learning.jpg
│       ├── madrassa_prayer_guidance.jpg
│       └── student_event_pakistan_day.jpg
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Sticky navigation, language switch & search
│   │   ├── Footer.tsx           # Comprehensive footer with links & social
│   │   ├── SearchModal.tsx      # Bilingual keyword search dialog
│   │   └── AdminPortalModal.tsx # Application review drawer
│   ├── context/
│   │   └── LanguageContext.tsx  # RTL/LTR and translation state
│   ├── data/
│   │   └── content.ts           # Verified contacts, gallery data, FAQs
│   ├── i18n/
│   │   └── translations.ts      # Complete English and Urdu dictionaries
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── SchoolPage.tsx
│   │   ├── MadrassaPage.tsx
│   │   ├── AdmissionsPage.tsx
│   │   ├── StudentLifePage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── SupportPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FaqPage.tsx
│   │   ├── PrivacyPage.tsx
│   │   └── TermsPage.tsx
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── App.tsx                  # Root router & layout coordinator
│   ├── index.css                # Tailwind directives & Urdu typography
│   └── main.tsx                 # React entry point
├── tailwind.config.js           # Custom Islamic theme tokens
├── tsconfig.json                # TypeScript project configuration
├── vite.config.ts               # Vite configuration
└── README.md
```

---

## 🔒 Child Protection & Privacy

Because this platform represents young learners:
- No student's private contact information, CNIC/B-Form numbers, or confidential background details are made public.
- Photographs depict educational and cultural activities in full public school uniform and respectful Islamic attire.
- Admission submissions are stored locally in the administration portal and transmitted only through secure channels.

---

## 🌐 Production Deployment Guide

The website is fully static and compiled into the `dist/` directory, making it deployable on any modern hosting platform:

1. **Vercel / Netlify:** Connect the Git repository and set the build command to `npm run build` with output directory `dist`.
2. **Cloudflare Pages / GitHub Pages:** Point deployment to the `dist` directory.
3. **Firebase Hosting:** Run `firebase init hosting` and set public directory to `dist`.

---

© 2026 Babul-Ilm Education System Islamabad. All Rights Reserved.
