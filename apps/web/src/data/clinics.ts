import { placeholderImage } from './images';

export interface OpeningHour {
  day: string;
  hours: string;
}

export interface Clinic {
  slug: string;
  name: string;
  city: string;
  area: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  image: string;
  openingHours: OpeningHour[];
  categorySlugs: string[];
}

export const clinics: Clinic[] = [
  {
    slug: 'gurgaon',
    name: 'White Plum Clinic — Gurgaon',
    city: 'Gurgaon',
    area: 'DLF Phase 3',
    address: 'Ground Floor, Galleria Market, DLF Phase 3, Gurgaon, Haryana 122002',
    phone: '+91 9876543210',
    whatsapp: '919876543210',
    email: 'gurgaon@whiteplumwellness.example',
    image: placeholderImage('clinic-gurgaon'),
    openingHours: [
      { day: 'Mon – Sat', hours: '10:00 AM – 8:00 PM' },
      { day: 'Sunday', hours: '11:00 AM – 5:00 PM' },
    ],
    categorySlugs: ['skin', 'hair', 'laser', 'anti-ageing', 'body', 'bridal', 'weight-management'],
  },
  {
    slug: 'delhi',
    name: 'White Plum Clinic — Delhi',
    city: 'Delhi',
    area: 'Greater Kailash',
    address: 'M-Block Market, Greater Kailash I, New Delhi 110048',
    phone: '+91 9876543211',
    whatsapp: '919876543211',
    email: 'delhi@whiteplumwellness.example',
    image: placeholderImage('clinic-delhi'),
    openingHours: [
      { day: 'Mon – Sat', hours: '10:00 AM – 8:00 PM' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    categorySlugs: ['skin', 'hair', 'anti-ageing', 'bridal', 'aesthetic-procedures'],
  },
  {
    slug: 'mumbai',
    name: 'White Plum Clinic — Mumbai',
    city: 'Mumbai',
    area: 'Bandra West',
    address: 'Linking Road, Bandra West, Mumbai, Maharashtra 400050',
    phone: '+91 9876543212',
    whatsapp: '919876543212',
    email: 'mumbai@whiteplumwellness.example',
    image: placeholderImage('clinic-mumbai'),
    openingHours: [
      { day: 'Mon – Sat', hours: '10:00 AM – 8:30 PM' },
      { day: 'Sunday', hours: '11:00 AM – 6:00 PM' },
    ],
    categorySlugs: ['skin', 'anti-ageing', 'facial-aesthetics', 'aesthetic-procedures', 'bridal'],
  },
  {
    slug: 'noida',
    name: 'White Plum Clinic — Noida',
    city: 'Noida',
    area: 'Sector 50',
    address: 'Sector 50 Market, Noida, Uttar Pradesh 201301',
    phone: '+91 9876543213',
    whatsapp: '919876543213',
    email: 'noida@whiteplumwellness.example',
    image: placeholderImage('clinic-noida'),
    openingHours: [
      { day: 'Mon – Sat', hours: '10:00 AM – 7:30 PM' },
      { day: 'Sunday', hours: '11:00 AM – 5:00 PM' },
    ],
    categorySlugs: ['skin', 'hair', 'body', 'weight-management'],
  },
  {
    slug: 'bengaluru',
    name: 'White Plum Clinic — Bengaluru',
    city: 'Bengaluru',
    area: 'Indiranagar',
    address: '100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038',
    phone: '+91 9876543214',
    whatsapp: '919876543214',
    email: 'bengaluru@whiteplumwellness.example',
    image: placeholderImage('clinic-bengaluru'),
    openingHours: [
      { day: 'Mon – Sat', hours: '10:00 AM – 8:00 PM' },
      { day: 'Sunday', hours: '11:00 AM – 5:00 PM' },
    ],
    categorySlugs: ['skin', 'hair', 'laser', 'aesthetic-procedures'],
  },
];

export function getClinicBySlug(slug: string): Clinic | undefined {
  return clinics.find((c) => c.slug === slug);
}

export function getClinicsByCity(city: string): Clinic[] {
  return clinics.filter((c) => c.city.toLowerCase() === city.toLowerCase());
}

export function getCities(): string[] {
  return Array.from(new Set(clinics.map((c) => c.city)));
}
