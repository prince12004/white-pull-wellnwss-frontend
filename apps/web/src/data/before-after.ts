import { placeholderImage } from './images';

export interface BeforeAfterResult {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  treatmentSlug: string;
  concernSlug: string;
  doctorSlug: string;
  clinicSlug: string;
  sessions: string;
  duration: string;
  description: string;
}

export const beforeAfterCategories = ['Skin', 'Hair', 'Laser', 'Anti-Ageing', 'Body'];

export const beforeAfterResults: BeforeAfterResult[] = [
  { id: 'ba1', title: 'Clearer skin after Acne Treatment', category: 'Skin', beforeImage: placeholderImage('ba1-before'), afterImage: placeholderImage('ba1-after'), treatmentSlug: 'acne-treatment', concernSlug: 'acne', doctorSlug: 'dr-anika-sharma', clinicSlug: 'gurgaon', sessions: '6 sessions', duration: '3 months', description: 'Active acne significantly reduced with a combination of peels, extractions, and a prescribed home-care routine.' },
  { id: 'ba2', title: 'Pigmentation faded after treatment', category: 'Skin', beforeImage: placeholderImage('ba2-before'), afterImage: placeholderImage('ba2-after'), treatmentSlug: 'pigmentation-treatment', concernSlug: 'pigmentation', doctorSlug: 'dr-anika-sharma', clinicSlug: 'gurgaon', sessions: '6 sessions', duration: '4 months', description: 'Noticeable fading of stubborn cheek pigmentation using a combination of peels and laser toning.' },
  { id: 'ba3', title: 'Brighter, even-toned skin', category: 'Skin', beforeImage: placeholderImage('ba3-before'), afterImage: placeholderImage('ba3-after'), treatmentSlug: 'hydrafacial', concernSlug: 'uneven-skin-tone', doctorSlug: 'dr-rohan-mehta', clinicSlug: 'delhi', sessions: '4 sessions', duration: '2 months', description: 'Monthly Hydrafacial sessions delivered a visibly brighter, more even complexion.' },
  { id: 'ba4', title: 'Reduced acne scarring', category: 'Skin', beforeImage: placeholderImage('ba4-before'), afterImage: placeholderImage('ba4-after'), treatmentSlug: 'scar-revision', concernSlug: 'acne-scars', doctorSlug: 'dr-anika-sharma', clinicSlug: 'gurgaon', sessions: '5 sessions', duration: '5 months', description: 'Textural improvement in acne scarring using microneedling and subcision technique.' },
  { id: 'ba5', title: 'Smoother texture after Chemical Peel', category: 'Skin', beforeImage: placeholderImage('ba5-before'), afterImage: placeholderImage('ba5-after'), treatmentSlug: 'chemical-peel', concernSlug: 'open-pores', doctorSlug: 'dr-anika-sharma', clinicSlug: 'noida', sessions: '5 sessions', duration: '3 months', description: 'Visible refinement in pore size and skin texture following a course of medical peels.' },
  { id: 'ba6', title: 'Visible density improvement', category: 'Hair', beforeImage: placeholderImage('ba6-before'), afterImage: placeholderImage('ba6-after'), treatmentSlug: 'hair-fall-treatment', concernSlug: 'hair-fall', doctorSlug: 'dr-varun-kapoor', clinicSlug: 'delhi', sessions: '4-month program', duration: '4 months', description: 'Reduced shedding and improved density following a combined medical and PRP program.' },
  { id: 'ba7', title: 'Thicker hair after PRP', category: 'Hair', beforeImage: placeholderImage('ba7-before'), afterImage: placeholderImage('ba7-after'), treatmentSlug: 'prp-hair-therapy', concernSlug: 'hair-thinning', doctorSlug: 'dr-varun-kapoor', clinicSlug: 'mumbai', sessions: '5 sessions', duration: '5 months', description: 'Visible increase in hair thickness and coverage at the crown after a PRP course.' },
  { id: 'ba8', title: 'Restored hairline', category: 'Hair', beforeImage: placeholderImage('ba8-before'), afterImage: placeholderImage('ba8-after'), treatmentSlug: 'hair-transplant', concernSlug: 'hair-fall', doctorSlug: 'dr-arjun-rao', clinicSlug: 'bengaluru', sessions: 'Single procedure', duration: '12 months', description: 'A natural-looking hairline restoration, shown at the 12-month post-procedure mark.' },
  { id: 'ba9', title: 'Dandruff-free, healthier scalp', category: 'Hair', beforeImage: placeholderImage('ba9-before'), afterImage: placeholderImage('ba9-after'), treatmentSlug: 'dandruff-treatment', concernSlug: 'dandruff', doctorSlug: 'dr-varun-kapoor', clinicSlug: 'noida', sessions: '4 sessions', duration: '2 months', description: 'Flaking and irritation resolved with a targeted medicated scalp program.' },
  { id: 'ba10', title: 'Smooth, hair-free skin', category: 'Laser', beforeImage: placeholderImage('ba10-before'), afterImage: placeholderImage('ba10-after'), treatmentSlug: 'laser-hair-removal', concernSlug: 'unwanted-hair', doctorSlug: 'dr-rohan-mehta', clinicSlug: 'gurgaon', sessions: '8 sessions', duration: '10 months', description: 'Significant long-term hair reduction after a full laser hair removal course.' },
  { id: 'ba11', title: 'Refined pores after Carbon Laser Peel', category: 'Laser', beforeImage: placeholderImage('ba11-before'), afterImage: placeholderImage('ba11-after'), treatmentSlug: 'carbon-laser-peel', concernSlug: 'open-pores', doctorSlug: 'dr-rohan-mehta', clinicSlug: 'delhi', sessions: '5 sessions', duration: '3 months', description: 'Visibly refined pores and a smoother surface after a course of carbon laser peels.' },
  { id: 'ba12', title: 'Even tone after Q-Switch Laser', category: 'Laser', beforeImage: placeholderImage('ba12-before'), afterImage: placeholderImage('ba12-after'), treatmentSlug: 'q-switch-laser', concernSlug: 'pigmentation', doctorSlug: 'dr-anika-sharma', clinicSlug: 'mumbai', sessions: '6 sessions', duration: '4 months', description: 'Reduced pigmentation and a brighter overall tone following Q-Switch laser toning.' },
  { id: 'ba13', title: 'Smoother texture after Laser Rejuvenation', category: 'Laser', beforeImage: placeholderImage('ba13-before'), afterImage: placeholderImage('ba13-after'), treatmentSlug: 'laser-skin-rejuvenation', concernSlug: 'fine-lines', doctorSlug: 'dr-sana-iqbal', clinicSlug: 'mumbai', sessions: '4 sessions', duration: '4 months', description: 'Softened fine lines and improved texture using fractional laser resurfacing.' },
  { id: 'ba14', title: 'Natural-looking Botox result', category: 'Anti-Ageing', beforeImage: placeholderImage('ba14-before'), afterImage: placeholderImage('ba14-after'), treatmentSlug: 'botox', concernSlug: 'wrinkles', doctorSlug: 'dr-sana-iqbal', clinicSlug: 'mumbai', sessions: 'Single session', duration: '2 weeks', description: 'Softened forehead and frown lines with a natural, non-frozen appearance.' },
  { id: 'ba15', title: 'Restored volume with Fillers', category: 'Anti-Ageing', beforeImage: placeholderImage('ba15-before'), afterImage: placeholderImage('ba15-after'), treatmentSlug: 'dermal-fillers', concernSlug: 'ageing', doctorSlug: 'dr-sana-iqbal', clinicSlug: 'gurgaon', sessions: 'Single session', duration: '2 weeks', description: 'Cheek volume restored for a more refreshed, youthful appearance.' },
  { id: 'ba16', title: 'Lifted jawline after HIFU', category: 'Anti-Ageing', beforeImage: placeholderImage('ba16-before'), afterImage: placeholderImage('ba16-after'), treatmentSlug: 'hifu-skin-tightening', concernSlug: 'ageing', doctorSlug: 'dr-sana-iqbal', clinicSlug: 'gurgaon', sessions: 'Single session', duration: '3 months', description: 'Progressive tightening along the jawline visible over the 3 months following treatment.' },
  { id: 'ba17', title: 'Defined jawline after contouring', category: 'Anti-Ageing', beforeImage: placeholderImage('ba17-before'), afterImage: placeholderImage('ba17-after'), treatmentSlug: 'jawline-contouring', concernSlug: 'double-chin', doctorSlug: 'dr-sana-iqbal', clinicSlug: 'mumbai', sessions: 'Single session', duration: '3 months', description: 'A more defined jawline achieved with precision structural filler placement.' },
  { id: 'ba18', title: 'Sculpted silhouette', category: 'Body', beforeImage: placeholderImage('ba18-before'), afterImage: placeholderImage('ba18-after'), treatmentSlug: 'body-contouring', concernSlug: 'body-fat', doctorSlug: 'dr-rohan-mehta', clinicSlug: 'gurgaon', sessions: '6 sessions', duration: '3 months', description: 'Visible contouring in stubborn areas after a full body contouring package.' },
  { id: 'ba19', title: 'Reduced double chin', category: 'Body', beforeImage: placeholderImage('ba19-before'), afterImage: placeholderImage('ba19-after'), treatmentSlug: 'double-chin-reduction', concernSlug: 'double-chin', doctorSlug: 'dr-sana-iqbal', clinicSlug: 'mumbai', sessions: '4 sessions', duration: '4 months', description: 'A sharper jaw-neck profile after a course of non-surgical double chin reduction.' },
  { id: 'ba20', title: 'Softened stretch marks', category: 'Body', beforeImage: placeholderImage('ba20-before'), afterImage: placeholderImage('ba20-after'), treatmentSlug: 'stretch-mark-treatment', concernSlug: 'stretch-marks', doctorSlug: 'dr-rohan-mehta', clinicSlug: 'noida', sessions: '6 sessions', duration: '5 months', description: 'Visibly softened texture and colour of stretch marks after a full microneedling course.' },
];

export function getResultsByCategory(category: string): BeforeAfterResult[] {
  return beforeAfterResults.filter((r) => r.category === category);
}

export function getResultById(id: string): BeforeAfterResult | undefined {
  return beforeAfterResults.find((r) => r.id === id);
}
