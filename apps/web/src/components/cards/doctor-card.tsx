import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Doctor } from '@/data/doctors';
import { getClinicBySlug } from '@/data/clinics';

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const primaryClinic = doctor.clinicSlugs[0] ? getClinicBySlug(doctor.clinicSlugs[0]) : undefined;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-ivory-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(229,102,144,0.4)]">
      <Link href={`/doctors/${doctor.slug}`} className="relative block aspect-[4/4.5] w-full overflow-hidden">
        <Image
          src={doctor.photo}
          alt={doctor.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-1.5 p-6">
        <Link href={`/doctors/${doctor.slug}`}>
          <h3 className="font-display text-xl font-medium text-charcoal-900 hover:text-peach-600">{doctor.name}</h3>
        </Link>
        <p className="text-sm text-charcoal-500">{doctor.qualification}</p>
        <p className="text-sm font-medium text-gold-600">{doctor.experienceYears}+ years experience</p>
        <p className="mt-1 text-sm text-charcoal-500">{doctor.specialization.slice(0, 2).join(' · ')}</p>
        {primaryClinic && <p className="text-xs text-charcoal-300">{primaryClinic.name}</p>}
        <Link
          href={`/doctors/${doctor.slug}`}
          className="group/link mt-4 inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-peach-500 px-3 text-sm font-medium text-peach-600 transition-colors hover:bg-peach-50"
        >
          View Profile
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
