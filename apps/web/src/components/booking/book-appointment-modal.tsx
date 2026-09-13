'use client';

import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Select,
} from '@white/ui';
import { clinics } from '@/data/clinics';
import { concerns } from '@/data/concerns';
import { services } from '@/data/services';
import { buildContextWhatsappLink } from '@/lib/whatsapp';

export interface BookingContext {
  service?: string;
  package?: string;
  doctor?: string;
  clinic?: string;
  city?: string;
  offer?: string;
  concern?: string;
}

interface BookAppointmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  context?: BookingContext;
}

export function BookAppointmentModal({ open, onOpenChange, context }: BookAppointmentModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [concern, setConcern] = useState(context?.concern ?? '');
  const [service, setService] = useState(context?.service ?? '');
  const [clinic, setClinic] = useState(context?.clinic ?? '');

  function handleContinue(e: React.FormEvent) {
    e.preventDefault();
    const link = buildContextWhatsappLink({
      ...context,
      service: context?.service ?? service ?? undefined,
      concern: context?.concern ?? concern ?? undefined,
      name: name || undefined,
      phone: phone || undefined,
      clinic: context?.clinic ?? clinic ?? undefined,
    });
    window.open(link, '_blank', 'noopener,noreferrer');
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book a Consultation</DialogTitle>
          <DialogDescription>
            Share a few details and we&apos;ll continue the conversation on WhatsApp — no online payment, no account
            needed.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handleContinue}>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="booking-name">Name</Label>
            <Input id="booking-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="booking-mobile">Mobile Number</Label>
            <Input
              id="booking-mobile"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="98765 43210"
            />
          </div>
          {!context?.service && !context?.package && (
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="booking-service">Service (optional)</Label>
              <Select id="booking-service" value={service} onChange={(e) => setService(e.target.value)}>
                <option value="">Not sure yet</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </Select>
            </div>
          )}
          {!context?.concern && (
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="booking-concern">Concern (optional)</Label>
              <Select id="booking-concern" value={concern} onChange={(e) => setConcern(e.target.value)}>
                <option value="">Select a concern</option>
                {concerns.map((c) => (
                  <option key={c.slug} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </Select>
            </div>
          )}
          {!context?.clinic && (
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="booking-clinic">Preferred Clinic (optional)</Label>
              <Select id="booking-clinic" value={clinic} onChange={(e) => setClinic(e.target.value)}>
                <option value="">No preference</option>
                {clinics.map((c) => (
                  <option key={c.slug} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </Select>
            </div>
          )}
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="whatsapp">
              Continue on WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
