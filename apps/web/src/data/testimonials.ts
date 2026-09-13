import { avatarImage } from './images';

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  rating: number;
  review: string;
  treatment: string;
  city: string;
  clinicSlug: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  { id: 't1', name: 'Priyanka M.', photo: avatarImage('t1'), rating: 5, review: 'My acne is finally under control after years of trying everything. The team actually explained why my skin was breaking out instead of just prescribing another cream.', treatment: 'Acne Treatment', city: 'Gurgaon', clinicSlug: 'gurgaon', featured: true },
  { id: 't2', name: 'Rahul K.', photo: avatarImage('t2'), rating: 5, review: 'Started the hair fall program feeling pretty hopeless. Three months in, my hairline has genuinely stopped receding and shedding has reduced a lot.', treatment: 'Hair Fall Treatment', city: 'Delhi', clinicSlug: 'delhi', featured: true },
  { id: 't3', name: 'Ananya S.', photo: avatarImage('t3'), rating: 5, review: 'Did laser hair removal for my arms and underarms — completely worth it. No more weekly waxing appointments and the results have lasted.', treatment: 'Laser Hair Removal', city: 'Mumbai', clinicSlug: 'mumbai', featured: true },
  { id: 't4', name: 'Kavita R.', photo: avatarImage('t4'), rating: 4, review: 'Pigmentation on my cheeks had bothered me for years. It has faded noticeably and the doctor was very honest about the timeline instead of overpromising.', treatment: 'Pigmentation Treatment', city: 'Bengaluru', clinicSlug: 'bengaluru', featured: false },
  { id: 't5', name: 'Aditya V.', photo: avatarImage('t5'), rating: 5, review: 'Got Botox done here for the first time and was nervous about looking "frozen" — the result is subtle and natural, exactly what I wanted.', treatment: 'Botox', city: 'Mumbai', clinicSlug: 'mumbai', featured: true },
  { id: 't6', name: 'Simran K.', photo: avatarImage('t6'), rating: 5, review: 'Did the bridal package three months before my wedding and it was the best decision. My skin looked genuinely radiant on the day.', treatment: 'Bridal Glow Package', city: 'Gurgaon', clinicSlug: 'gurgaon', featured: true },
  { id: 't7', name: 'Nikhil J.', photo: avatarImage('t7'), rating: 4, review: 'Hydrafacial has become my monthly ritual now. Skin feels noticeably smoother and brighter every single time.', treatment: 'Hydrafacial', city: 'Delhi', clinicSlug: 'delhi', featured: false },
  { id: 't8', name: 'Meera P.', photo: avatarImage('t8'), rating: 5, review: 'The PRP sessions for my hair thinning have made a real difference — my hairdresser even commented on the new baby hairs coming in.', treatment: 'PRP Hair Therapy', city: 'Mumbai', clinicSlug: 'mumbai', featured: false },
  { id: 't9', name: 'Rohit T.', photo: avatarImage('t9'), rating: 5, review: 'Consulted for a double chin I was self-conscious about. The non-surgical option worked well and there was barely any downtime.', treatment: 'Double Chin Reduction', city: 'Gurgaon', clinicSlug: 'gurgaon', featured: false },
  { id: 't10', name: 'Divya N.', photo: avatarImage('t10'), rating: 4, review: 'Chemical peels have really helped even out my skin tone. It took a few sessions to see the full effect but it was gradual and gentle.', treatment: 'Chemical Peel', city: 'Noida', clinicSlug: 'noida', featured: false },
  { id: 't11', name: 'Arjun B.', photo: avatarImage('t11'), rating: 5, review: 'The dermal filler consultation was thorough — no pressure to do more than I actually needed, which I really appreciated.', treatment: 'Dermal Fillers', city: 'Mumbai', clinicSlug: 'mumbai', featured: false },
  { id: 't12', name: 'Sneha A.', photo: avatarImage('t12'), rating: 5, review: 'Stretch marks from my pregnancy had bothered me for years. They are noticeably softer and less visible now after the sessions.', treatment: 'Stretch Mark Treatment', city: 'Noida', clinicSlug: 'noida', featured: false },
  { id: 't13', name: 'Karan D.', photo: avatarImage('t13'), rating: 4, review: 'Weight management program gave me actual structure instead of another fad diet. Down several kilos and feeling much better overall.', treatment: 'Medical Weight Loss Program', city: 'Gurgaon', clinicSlug: 'gurgaon', featured: false },
  { id: 't14', name: 'Ishita G.', photo: avatarImage('t14'), rating: 5, review: 'Dandruff had been a recurring problem for years — this is the first treatment that actually addressed the root cause instead of just a medicated shampoo.', treatment: 'Dandruff Treatment', city: 'Delhi', clinicSlug: 'delhi', featured: false },
  { id: 't15', name: 'Varun S.', photo: avatarImage('t15'), rating: 5, review: 'The jawline contouring result looks completely natural. People noticed I looked "refreshed" but couldn’t pinpoint what changed — exactly the goal.', treatment: 'Jawline Contouring', city: 'Mumbai', clinicSlug: 'mumbai', featured: false },
  { id: 't16', name: 'Pooja L.', photo: avatarImage('t16'), rating: 4, review: 'Skin rejuvenation sessions left my skin looking genuinely brighter and more even. Minimal downtime which worked well with my job.', treatment: 'Skin Rejuvenation', city: 'Bengaluru', clinicSlug: 'bengaluru', featured: false },
  { id: 't17', name: 'Manish C.', photo: avatarImage('t17'), rating: 5, review: 'Explored the hair transplant option after years of hesitating. The consultation was upfront about timelines and realistic outcomes.', treatment: 'Hair Transplant', city: 'Delhi', clinicSlug: 'delhi', featured: false },
  { id: 't18', name: 'Ritu H.', photo: avatarImage('t18'), rating: 5, review: 'Melasma had made me self-conscious for years. It is not completely gone but significantly lighter, and the doctor was honest that it needs ongoing management.', treatment: 'Pigmentation Treatment', city: 'Bengaluru', clinicSlug: 'bengaluru', featured: false },
  { id: 't19', name: 'Yash M.', photo: avatarImage('t19'), rating: 4, review: 'Did the HIFU skin tightening session and noticed a visible lift in my jawline area over the following weeks.', treatment: 'HIFU Skin Tightening', city: 'Gurgaon', clinicSlug: 'gurgaon', featured: false },
  { id: 't20', name: 'Shreya K.', photo: avatarImage('t20'), rating: 5, review: 'The team walked me through every step of the acne scar revision process. Texture on my cheeks has improved more than I expected.', treatment: 'Scar Revision', city: 'Gurgaon', clinicSlug: 'gurgaon', featured: false },
];

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured);
}
