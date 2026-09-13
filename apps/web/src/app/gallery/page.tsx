import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Container, Section } from '@/components/ui/container';
import { GalleryGrid } from '@/components/gallery-grid';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A look inside our clinics, treatments, team, and events.',
};

export default function GalleryPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Gallery' }]} />
      <section className="bg-gradient-to-b from-peach-50 to-white py-16 text-center">
        <Container>
          <h1 className="font-display text-4xl font-semibold text-charcoal-900">Gallery</h1>
          <p className="mx-auto mt-3 max-w-2xl text-charcoal-500">A look inside our clinics, treatments, team, and events.</p>
        </Container>
      </section>
      <Section>
        <Container>
          <GalleryGrid />
        </Container>
      </Section>
    </>
  );
}
