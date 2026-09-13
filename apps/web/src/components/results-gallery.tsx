'use client';

import { useMemo, useState } from 'react';
import { cn } from '@white/ui';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@white/ui';
import { ResultCard } from '@/components/cards/result-card';
import { BeforeAfterSlider } from '@/components/before-after-slider';
import { Stagger, FadeUp } from '@/components/ui/motion';
import { beforeAfterCategories, beforeAfterResults, type BeforeAfterResult } from '@/data/before-after';
import { getDoctorBySlug } from '@/data/doctors';
import { getClinicBySlug } from '@/data/clinics';

export function ResultsGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState<BeforeAfterResult | null>(null);

  const filtered = useMemo(
    () => (activeCategory === 'All' ? beforeAfterResults : beforeAfterResults.filter((r) => r.category === activeCategory)),
    [activeCategory],
  );

  const doctor = selected ? getDoctorBySlug(selected.doctorSlug) : undefined;
  const clinic = selected ? getClinicBySlug(selected.clinicSlug) : undefined;

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {['All', ...beforeAfterCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              activeCategory === cat ? 'bg-peach-500 text-white' : 'bg-white text-charcoal-600 border border-ivory-200 hover:border-peach-300',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <Stagger key={activeCategory} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.06}>
        {filtered.map((result) => (
          <FadeUp key={result.id}>
            <ResultCard result={result} onClick={() => setSelected(result)} />
          </FadeUp>
        ))}
      </Stagger>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.title}</DialogTitle>
              </DialogHeader>
              <BeforeAfterSlider beforeImage={selected.beforeImage} afterImage={selected.afterImage} />
              <p className="mt-4 text-sm text-charcoal-600">{selected.description}</p>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                <div>
                  <dt className="text-xs text-charcoal-400">Sessions</dt>
                  <dd className="font-medium text-charcoal-900">{selected.sessions}</dd>
                </div>
                <div>
                  <dt className="text-xs text-charcoal-400">Duration</dt>
                  <dd className="font-medium text-charcoal-900">{selected.duration}</dd>
                </div>
                {doctor && (
                  <div>
                    <dt className="text-xs text-charcoal-400">Doctor</dt>
                    <dd className="font-medium text-charcoal-900">{doctor.name}</dd>
                  </div>
                )}
                {clinic && (
                  <div>
                    <dt className="text-xs text-charcoal-400">Clinic</dt>
                    <dd className="font-medium text-charcoal-900">{clinic.name}</dd>
                  </div>
                )}
              </dl>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
