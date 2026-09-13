import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { AlertCircle, HelpCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Container, Section, SectionHeading } from '@/components/ui/container';
import { PopReveal } from '@/components/ui/motion';
import { ServiceCard } from '@/components/cards/service-card';
import { DoctorCard } from '@/components/cards/doctor-card';
import { ClinicCard } from '@/components/cards/clinic-card';
import { BlogCard } from '@/components/cards/blog-card';
import { BeforeAfterSlider } from '@/components/before-after-slider';
import { BookAppointmentButton } from '@/components/booking/book-appointment-button';
import { WhatsappCtaLink } from '@/components/booking/whatsapp-cta-link';
import { concerns, getConcernBySlug } from '@/data/concerns';
import { getServiceBySlug } from '@/data/services';
import { getBlogsByConcern } from '@/data/blogs';
import { beforeAfterResults } from '@/data/before-after';
import { getDoctorBySlug } from '@/data/doctors';
import { getClinicBySlug } from '@/data/clinics';

export function generateStaticParams() {
  return concerns.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const concern = getConcernBySlug(slug);
  if (!concern) return {};
  return { title: concern.name, description: concern.shortDescription };
}

export default async function ConcernDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const concern = getConcernBySlug(slug);
  if (!concern) notFound();

  const recommendedServices = concern.recommendedServiceSlugs.map(getServiceBySlug).filter(Boolean);
  const relatedResult = beforeAfterResults.find((r) => r.concernSlug === concern.slug);
  const relatedBlogs = getBlogsByConcern(concern.slug);
  const doctorSlugs = Array.from(new Set(recommendedServices.flatMap((s) => s!.doctorSlugs))).slice(0, 3);
  const relatedDoctors = doctorSlugs.map(getDoctorBySlug).filter(Boolean);
  const clinicSlugs = Array.from(new Set(recommendedServices.flatMap((s) => s!.clinicSlugs))).slice(0, 2);
  const relatedClinics = clinicSlugs.map(getClinicBySlug).filter(Boolean);

  return (
    <>
      <Breadcrumb items={[{ label: 'Concerns', href: '/concerns' }, { label: concern.name }]} />

      <section className="relative overflow-hidden bg-charcoal-900 py-20 text-white">
        <Image src={concern.image} alt={concern.name} fill sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/70 to-charcoal-900/40" />
        <Container className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach-300">Concern</p>
          <PopReveal>
            <h1 className="mt-3 max-w-xl font-display text-4xl font-semibold sm:text-5xl">{concern.name}</h1>
          </PopReveal>
          <p className="mt-4 max-w-xl text-ivory-100/80">{concern.shortDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookAppointmentButton size="lg" context={{ concern: concern.name }}>
              Book Consultation
            </BookAppointmentButton>
            <WhatsappCtaLink context={{ concern: concern.name }} className="h-12 px-6 text-base">
              WhatsApp Now
            </WhatsappCtaLink>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="Overview" title={`Understanding ${concern.name}`} />
            <p className="text-center text-charcoal-700">{concern.overview}</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-ivory-200 bg-white p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-charcoal-900">
                <AlertCircle className="h-5 w-5 text-peach-500" /> Symptoms
              </h3>
              <ul className="mt-4 flex flex-col gap-2 text-base leading-relaxed text-charcoal-600">
                {concern.symptoms.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-ivory-200 bg-white p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-charcoal-900">
                <HelpCircle className="h-5 w-5 text-gold-500" /> Common Causes
              </h3>
              <ul className="mt-4 flex flex-col gap-2 text-base leading-relaxed text-charcoal-600">
                {concern.causes.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {recommendedServices.length > 0 && (
        <Section tone="muted">
          <Container>
            <SectionHeading eyebrow="Recommended for You" title="Treatment Options" align="left" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedServices.map((s) => s && <ServiceCard key={s.slug} service={s} />)}
            </div>
          </Container>
        </Section>
      )}

      {relatedResult && (
        <Section>
          <Container className="max-w-xl">
            <SectionHeading eyebrow="Real Results" title="Before & After" />
            <BeforeAfterSlider beforeImage={relatedResult.beforeImage} afterImage={relatedResult.afterImage} />
          </Container>
        </Section>
      )}

      {relatedDoctors.length > 0 && (
        <Section tone="muted">
          <Container>
            <SectionHeading eyebrow="Our Specialists" title="Recommended Doctors" align="left" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedDoctors.map((d) => d && <DoctorCard key={d.slug} doctor={d} />)}
            </div>
          </Container>
        </Section>
      )}

      {relatedClinics.length > 0 && (
        <Section>
          <Container>
            <SectionHeading eyebrow="Where to Go" title="Available Clinics" align="left" />
            <div className="flex flex-col gap-4">
              {relatedClinics.map((c) => c && <ClinicCard key={c.slug} clinic={c} />)}
            </div>
          </Container>
        </Section>
      )}

      {relatedBlogs.length > 0 && (
        <Section tone="muted">
          <Container>
            <SectionHeading eyebrow="Learn More" title="Related Articles" align="left" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <section className="bg-charcoal-900 py-16 text-center text-white">
        <Container className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Let&apos;s address your {concern.name.toLowerCase()}</h2>
          <div className="mt-6 flex justify-center gap-3">
            <BookAppointmentButton size="lg" context={{ concern: concern.name }}>
              Book Consultation
            </BookAppointmentButton>
          </div>
        </Container>
      </section>
    </>
  );
}
