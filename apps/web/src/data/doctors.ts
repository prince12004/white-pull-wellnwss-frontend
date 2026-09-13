import { avatarImage } from './images';

export interface Doctor {
  slug: string;
  name: string;
  photo: string;
  qualification: string;
  experienceYears: number;
  specialization: string[];
  bio: string;
  languages: string[];
  clinicSlugs: string[];
  awards: string[];
}

export const doctors: Doctor[] = [
  {
    slug: 'dr-anika-sharma',
    name: 'Dr. Anika Sharma',
    photo: avatarImage('doctor-anika-sharma'),
    qualification: 'MBBS, MD (Dermatology)',
    experienceYears: 12,
    specialization: ['Acne & Acne Scars', 'Pigmentation', 'Chemical Peels'],
    bio: 'Dr. Anika Sharma has spent over a decade helping patients navigate stubborn acne and pigmentation with an evidence-first, no-shortcuts approach. She believes the best results come from understanding root causes, not just treating symptoms.',
    languages: ['English', 'Hindi'],
    clinicSlugs: ['gurgaon', 'delhi'],
    awards: ['Best Dermatologist — Delhi NCR Health Awards, 2022', 'Fellowship in Cosmetic Dermatology, 2016'],
  },
  {
    slug: 'dr-rohan-mehta',
    name: 'Dr. Rohan Mehta',
    photo: avatarImage('doctor-rohan-mehta'),
    qualification: 'MBBS, DDVL',
    experienceYears: 9,
    specialization: ['Laser Treatments', 'Body Contouring', 'Weight Management'],
    bio: 'Dr. Rohan Mehta specialises in laser-based treatments and body contouring, with a particular focus on calibrating technology safely for Indian skin tones. He is known for his detailed, expectation-setting consultations.',
    languages: ['English', 'Hindi', 'Gujarati'],
    clinicSlugs: ['gurgaon', 'noida'],
    awards: ['Certified Laser Safety Officer', 'Speaker, Aesthetic Medicine Conference India, 2023'],
  },
  {
    slug: 'dr-sana-iqbal',
    name: 'Dr. Sana Iqbal',
    photo: avatarImage('doctor-sana-iqbal'),
    qualification: 'MBBS, MD, Fellowship in Aesthetic Medicine',
    experienceYears: 14,
    specialization: ['Botox & Fillers', 'Facial Aesthetics', 'Anti-Ageing'],
    bio: 'Dr. Sana Iqbal is known for her precise, natural-looking injectable work, favouring subtle enhancement over dramatic change. She trains junior dermatologists in advanced injectable technique.',
    languages: ['English', 'Hindi', 'Urdu'],
    clinicSlugs: ['mumbai', 'gurgaon'],
    awards: ['Top Aesthetic Physician — Mumbai Wellness Awards, 2021', 'International Fellowship, Aesthetic Medicine, Seoul'],
  },
  {
    slug: 'dr-varun-kapoor',
    name: 'Dr. Varun Kapoor',
    photo: avatarImage('doctor-varun-kapoor'),
    qualification: 'MBBS, MD (Dermatology), Trichology Fellowship',
    experienceYears: 11,
    specialization: ['Hair Fall', 'PRP Therapy', 'Hair Transplant'],
    bio: 'Dr. Varun Kapoor focuses exclusively on hair health, from early-stage thinning to advanced restoration procedures, combining medical therapy with a realistic, patient-first outlook.',
    languages: ['English', 'Hindi', 'Punjabi'],
    clinicSlugs: ['delhi', 'mumbai'],
    awards: ['Certified Trichologist, International Association of Trichologists', 'Published researcher, hair restoration techniques'],
  },
  {
    slug: 'dr-neha-verma',
    name: 'Dr. Neha Verma',
    photo: avatarImage('doctor-neha-verma'),
    qualification: 'MBBS, MD (Dermatology)',
    experienceYears: 7,
    specialization: ['Bridal Treatments', 'Skin Rejuvenation', 'Hydrafacial'],
    bio: 'Dr. Neha Verma has built a reputation for her carefully timed bridal treatment plans, helping brides-to-be look their best without last-minute skin surprises.',
    languages: ['English', 'Hindi'],
    clinicSlugs: ['bengaluru', 'mumbai'],
    awards: ["Rising Star in Dermatology — Young Dermatologists' Forum, 2020"],
  },
  {
    slug: 'dr-arjun-rao',
    name: 'Dr. Arjun Rao',
    photo: avatarImage('doctor-arjun-rao'),
    qualification: 'MBBS, MS (General Surgery), Fellowship in Cosmetic Surgery',
    experienceYears: 16,
    specialization: ['Hair Transplant', 'Liposuction', 'Aesthetic Procedures'],
    bio: 'Dr. Arjun Rao brings a surgical precision background to aesthetic procedures, known for thorough, honest consultations that set realistic expectations before any procedure is planned.',
    languages: ['English', 'Hindi', 'Kannada'],
    clinicSlugs: ['bengaluru'],
    awards: ['Fellow, Association of Cosmetic Surgeons of India', '16+ years of surgical aesthetic practice'],
  },
  {
    slug: 'dr-priya-nair',
    name: 'Dr. Priya Nair',
    photo: avatarImage('doctor-priya-nair'),
    qualification: 'MBBS, MD (Dermatology)',
    experienceYears: 8,
    specialization: ['Melasma', 'Sensitive Skin', 'Skincare Consultation'],
    bio: 'Dr. Priya Nair has a special interest in melasma and sensitive skin conditions, taking a conservative, barrier-first approach before introducing any active treatment.',
    languages: ['English', 'Hindi', 'Malayalam'],
    clinicSlugs: ['bengaluru', 'noida'],
    awards: ['Certificate of Excellence, Pigmentary Disorders Workshop, 2019'],
  },
  {
    slug: 'dr-kabir-singh',
    name: 'Dr. Kabir Singh',
    photo: avatarImage('doctor-kabir-singh'),
    qualification: 'MBBS, MD, Diploma in Clinical Nutrition',
    experienceYears: 10,
    specialization: ['Weight Management', 'Nutrition', 'Body Composition'],
    bio: 'Dr. Kabir Singh combines medical weight management with practical nutrition counselling, focused on sustainable habits rather than quick fixes.',
    languages: ['English', 'Hindi', 'Punjabi'],
    clinicSlugs: ['gurgaon', 'delhi'],
    awards: ['Diploma in Clinical Nutrition, distinction'],
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}

export function getDoctorsByClinic(clinicSlug: string): Doctor[] {
  return doctors.filter((d) => d.clinicSlugs.includes(clinicSlug));
}
