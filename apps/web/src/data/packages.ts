import { placeholderImage } from './images';

export interface TreatmentPackage {
  slug: string;
  name: string;
  categorySlug: string;
  image: string;
  description: string;
  treatmentsIncluded: string[];
  sessions: string;
  duration: string;
  originalPrice: number;
  offerPrice: number;
  benefits: string[];
  doctorSlug: string;
  clinicSlugs: string[];
  faqs: { question: string; answer: string }[];
}

export const packages: TreatmentPackage[] = [
  {
    slug: 'acne-transformation-program',
    name: 'Acne Transformation Program',
    categorySlug: 'skin',
    image: placeholderImage('pkg-acne-transformation'),
    description: 'A complete 3-month program combining in-clinic acne treatment, scar prevention, and a take-home routine for clear, calm skin.',
    treatmentsIncluded: ['Acne Treatment (6 sessions)', 'Chemical Peel (2 sessions)', 'Custom Skincare Consultation'],
    sessions: '8 sessions over 3 months',
    duration: '3 months',
    originalPrice: 24000,
    offerPrice: 18999,
    benefits: ['Root-cause diagnosis before treatment', 'Reduced risk of scarring', 'A take-home routine included'],
    doctorSlug: 'dr-anika-sharma',
    clinicSlugs: ['gurgaon', 'delhi'],
    faqs: [
      { question: 'Is this suitable for cystic acne?', answer: 'Yes, though severity is assessed at consultation to determine if additional sessions are needed.' },
      { question: 'Can I combine this with skincare products I already use?', answer: 'Your dermatologist will review your current routine and adjust it during the program.' },
    ],
  },
  {
    slug: 'hair-growth-program',
    name: 'Hair Growth Program',
    categorySlug: 'hair',
    image: placeholderImage('pkg-hair-growth'),
    description: 'A structured 4-month plan combining medical hair fall treatment with PRP therapy for visible density improvement.',
    treatmentsIncluded: ['Hair Fall Treatment (4 sessions)', 'PRP Hair Therapy (4 sessions)', 'Scalp Analysis Reviews'],
    sessions: '8 sessions over 4 months',
    duration: '4 months',
    originalPrice: 32000,
    offerPrice: 24999,
    benefits: ['Combined medical + procedural approach', 'Progress tracked via scalp analysis', 'Suitable for male and female pattern hair loss'],
    doctorSlug: 'dr-varun-kapoor',
    clinicSlugs: ['gurgaon', 'delhi', 'mumbai'],
    faqs: [
      { question: 'How soon will I see results?', answer: 'Most patients notice reduced shedding by week 6 and visible density improvement by month 3.' },
      { question: 'Is PRP safe?', answer: 'Yes — PRP uses your own blood plasma, making it a very safe, well-tolerated procedure.' },
    ],
  },
  {
    slug: 'skin-rejuvenation-package',
    name: 'Skin Rejuvenation Package',
    categorySlug: 'skin',
    image: placeholderImage('pkg-skin-rejuvenation'),
    description: 'A 5-session program combining skin boosters, microneedling, and LED therapy to restore radiance to tired, congested skin.',
    treatmentsIncluded: ['Skin Rejuvenation (4 sessions)', 'Hydrafacial (1 session)'],
    sessions: '5 sessions over 10 weeks',
    duration: '10 weeks',
    originalPrice: 22000,
    offerPrice: 17499,
    benefits: ['Restores radiance and even tone', 'Improves overall skin texture', 'Minimal downtime throughout'],
    doctorSlug: 'dr-sana-iqbal',
    clinicSlugs: ['mumbai', 'gurgaon'],
    faqs: [
      { question: 'Will there be any downtime?', answer: 'Mild redness for a few hours after each session is normal; no significant downtime is expected.' },
    ],
  },
  {
    slug: 'bridal-glow-package',
    name: 'Bridal Glow Package',
    categorySlug: 'bridal',
    image: placeholderImage('pkg-bridal-glow'),
    description: 'A timed pre-bridal program covering skin, hair, and body treatments, planned backward from your wedding date.',
    treatmentsIncluded: ['Bridal Glow Facial (4 sessions)', 'Bridal Body Polishing (2 sessions)', 'Bridal Hair Spa (3 sessions)'],
    sessions: '9 sessions, planned around your date',
    duration: '2–3 months before the wedding',
    originalPrice: 45000,
    offerPrice: 35999,
    benefits: ['A single planned timeline across skin, hair, and body', 'Coordinated care from one team', 'Touch-up session included before the big day'],
    doctorSlug: 'dr-neha-verma',
    clinicSlugs: ['gurgaon', 'delhi', 'mumbai'],
    faqs: [
      { question: 'How far in advance should I start?', answer: 'Ideally 2-3 months before the wedding for the best cumulative results.' },
      { question: 'Can this be customised?', answer: 'Yes — the pre-bridal consultation lets us tailor the exact mix of treatments to your needs.' },
    ],
  },
  {
    slug: 'anti-ageing-package',
    name: 'Anti-Ageing Package',
    categorySlug: 'anti-ageing',
    image: placeholderImage('pkg-anti-ageing'),
    description: 'A combination program pairing Botox and skin boosters for a refreshed, natural-looking result.',
    treatmentsIncluded: ['Botox (1 session)', 'Skin Rejuvenation (3 sessions)'],
    sessions: '4 sessions over 2 months',
    duration: '2 months, with 4–6 month maintenance cycle',
    originalPrice: 28000,
    offerPrice: 22999,
    benefits: ['Addresses both dynamic lines and skin quality', 'Natural, conservative dosing', 'Maintenance plan included'],
    doctorSlug: 'dr-sana-iqbal',
    clinicSlugs: ['mumbai', 'gurgaon'],
    faqs: [
      { question: 'Will results look natural?', answer: 'Yes — our approach favours subtle, natural-looking enhancement over dramatic change.' },
    ],
  },
  {
    slug: 'laser-hair-reduction-package',
    name: 'Laser Hair Reduction Package',
    categorySlug: 'laser',
    image: placeholderImage('pkg-laser-hair-reduction'),
    description: 'A full 8-session laser hair removal program for long-term reduction across your chosen treatment areas.',
    treatmentsIncluded: ['Laser Hair Removal (8 sessions)'],
    sessions: '8 sessions, spaced 4–6 weeks apart',
    duration: '8–10 months',
    originalPrice: 20000,
    offerPrice: 14999,
    benefits: ['Significant long-term hair reduction', 'Technology calibrated for Indian skin tones', 'Flexible area selection (face/body/full body)'],
    doctorSlug: 'dr-rohan-mehta',
    clinicSlugs: ['gurgaon', 'delhi', 'mumbai', 'bengaluru'],
    faqs: [
      { question: 'Which areas can be included?', answer: 'Any combination of face, underarms, arms, legs, or full body — discussed and priced at consultation.' },
    ],
  },
  {
    slug: 'pigmentation-correction-package',
    name: 'Pigmentation Correction Package',
    categorySlug: 'skin',
    image: placeholderImage('pkg-pigmentation-correction'),
    description: 'A focused 6-session program combining laser toning and peels to fade stubborn pigmentation and melasma.',
    treatmentsIncluded: ['Pigmentation Treatment (4 sessions)', 'Q-Switch Laser (2 sessions)'],
    sessions: '6 sessions over 4 months',
    duration: '4 months',
    originalPrice: 26000,
    offerPrice: 20999,
    benefits: ['Targets both surface and deeper pigmentation', 'Progress tracked visually each visit', 'Includes sun-protection guidance'],
    doctorSlug: 'dr-priya-nair',
    clinicSlugs: ['bengaluru', 'noida'],
    faqs: [
      { question: 'Is this safe for melasma?', answer: 'Yes, though melasma requires a more conservative, longer-term approach — your dermatologist will set realistic expectations.' },
    ],
  },
  {
    slug: 'body-contouring-package',
    name: 'Body Contouring Package',
    categorySlug: 'body',
    image: placeholderImage('pkg-body-contouring'),
    description: 'A 6-session non-invasive body sculpting program targeting stubborn fat pockets.',
    treatmentsIncluded: ['Body Contouring (6 sessions)', 'Body Composition Analysis (2 scans)'],
    sessions: '6 sessions over 3 months',
    duration: '3 months',
    originalPrice: 42000,
    offerPrice: 32999,
    benefits: ['Non-invasive, no downtime', 'Progress tracked via body composition scans', 'Targets specific problem areas'],
    doctorSlug: 'dr-rohan-mehta',
    clinicSlugs: ['gurgaon', 'mumbai'],
    faqs: [
      { question: 'Will I need to change my diet?', answer: 'A basic nutrition guideline is provided, though the treatment itself does not require a strict diet.' },
    ],
  },
  {
    slug: 'weight-management-program',
    name: 'Weight Management Program',
    categorySlug: 'weight-management',
    image: placeholderImage('pkg-weight-management'),
    description: 'A 3-month medically supervised program combining nutrition counselling with regular progress tracking.',
    treatmentsIncluded: ['Medical Weight Loss Program (3 months)', 'Nutrition Counselling (monthly)', 'Body Composition Analysis (monthly)'],
    sessions: 'Monthly reviews over 3 months',
    duration: '3 months',
    originalPrice: 18000,
    offerPrice: 13999,
    benefits: ['Medically supervised, not a crash diet', 'Personalised nutrition plan', 'Ongoing progress tracking'],
    doctorSlug: 'dr-kabir-singh',
    clinicSlugs: ['gurgaon', 'mumbai'],
    faqs: [
      { question: 'Is this a diet plan or a medical program?', answer: 'It is a medically supervised program that includes nutrition guidance, not just a diet chart.' },
    ],
  },
  {
    slug: 'complete-hair-restoration-package',
    name: 'Complete Hair Restoration Package',
    categorySlug: 'hair',
    image: placeholderImage('pkg-hair-restoration'),
    description: 'A comprehensive plan for advanced hair loss, from initial medical therapy through to procedural restoration options.',
    treatmentsIncluded: ['Hair Fall Treatment (3 months)', 'PRP Hair Therapy (4 sessions)', 'Hair Restoration Consultation'],
    sessions: 'Planned individually based on assessment',
    duration: '4–6 months',
    originalPrice: 55000,
    offerPrice: 42999,
    benefits: ['A staged approach from medical to procedural care', 'Consultant-led planning throughout', 'Suitable for advanced hair loss'],
    doctorSlug: 'dr-varun-kapoor',
    clinicSlugs: ['delhi', 'mumbai'],
    faqs: [
      { question: 'Will I definitely need a hair transplant?', answer: 'Not necessarily — the program begins with medical therapy, and a transplant is only discussed if appropriate for your case.' },
    ],
  },
];

export function getPackageBySlug(slug: string): TreatmentPackage | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getPackagesByCategory(categorySlug: string): TreatmentPackage[] {
  return packages.filter((p) => p.categorySlug === categorySlug);
}
