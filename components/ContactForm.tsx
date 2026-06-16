'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Lawn Care',
  'Landscaping',
  'Irrigation',
  'Landscape Construction',
  'Lawn Restoration',
  'Snow Plowing',
  'Salting & Ice Management',
  'Not sure / Multiple services',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    const form = new FormData(e.currentTarget);
    const name = (form.get('name') as string) ?? '';
    const phone = (form.get('phone') as string) ?? '';
    const email = (form.get('email') as string) ?? '';
    const service = (form.get('service') as string) ?? '';
    const note = (form.get('message') as string) ?? '';
    const smsConsent = form.get('smsConsent') === 'on';

    // Combine the selected service and any free-text note into one message.
    const message = [service, note].map((s) => s.trim()).filter(Boolean).join(' — ');

    try {
      const res = await fetch('https://www.alignandacquire.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessSlug: 'master-gardner',
          name,
          phone,
          email,
          message,
          smsConsent,
        }),
      });
      if (!res.ok) {
        setError(true);
        return;
      }
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="card-soft text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-100 text-brand-700">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
          Thanks — we&apos;ll be in touch!
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          Your message has been received. We typically respond within one business day. For
          anything urgent, call us at{' '}
          <a href="tel:+16163661552" className="font-semibold text-brand-800">
            (616) 366-1552
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-soft">
      <h3 className="font-display text-2xl font-semibold text-ink">Request a free quote</h3>
      <p className="mt-2 text-sm text-ink/70">
        Tell us a little about your property and what you&apos;re looking for.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-ink">
            What do you need help with?
          </label>
          <select
            name="service"
            required
            defaultValue=""
            className="mt-2 block w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          >
            <option value="" disabled>
              Select a service…
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-ink">Tell us more</label>
          <textarea
            name="message"
            rows={5}
            placeholder="Property details, timing, anything we should know…"
            className="mt-2 block w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <label className="flex items-start gap-2 text-xs text-ink/60 sm:col-span-2">
          <input
            type="checkbox"
            name="smsConsent"
            className="mt-0.5 h-4 w-4 rounded border-black/20 text-brand-700 focus:ring-brand-500"
          />
          <span>
            I agree to receive SMS messages from Master Gardner, LLC about my quote. Message
            and data rates may apply. Reply STOP to opt out.
          </span>
        </label>
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-600">
          Sorry, something went wrong sending your message. Please try again or call us at{' '}
          <a href="tel:+16163661552" className="font-semibold text-brand-800">
            (616) 366-1552
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary mt-6 w-full disabled:opacity-60 sm:w-auto"
      >
        {submitting ? 'Sending…' : 'Send message'} <Send className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  className = '',
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-ink">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 block w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
      />
    </div>
  );
}
