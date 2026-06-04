import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sessionType: '',
    vision: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      alert('Please fill in your name and email address.');
      return;
    }
    setSubmitted(true);
  };

  const details = [
    { label: 'Email', val: 'hello@primordialshots.com' },
    { label: 'Based', val: 'Lagos, Nigeria\nServing clients worldwide' },
    { label: 'Turnaround', val: '3 – 5 business days' },
    { label: 'Remote', val: '100% — no studio visit required' },
  ];

  return (
    <section className="px-6 py-16 md:px-12 md:py-28 bg-brand-black grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24" id="contact">
      {/* Left Details Column */}
      <FadeIn className="flex flex-col">
        <div className="text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-4">
          Get in Touch
        </div>
        <h2 className="font-display text-[3rem] sm:text-[4rem] md:text-[5rem] leading-[0.95] tracking-[0.02em] text-brand-white mb-6">
          Let's Make<br />
          <em className="font-serif italic text-brand-accent text-[0.7em] not-italic">
            Something Real
          </em>
        </h2>
        <p className="text-[0.85rem] leading-[1.9] text-brand-muted mb-10 max-w-[450px]">
          Tell us your vision. We take a limited number of sessions each month so every client gets the full attention of our team.
        </p>

        <div className="flex flex-col gap-6">
          {details.map((detail, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <span className="text-[0.65rem] tracking-[0.25em] uppercase text-brand-accent min-w-[80px] pt-1 font-medium">
                {detail.label}
              </span>
              <span className="text-[0.85rem] text-brand-muted leading-[1.6] whitespace-pre-line">
                {detail.val}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Right Form Column */}
      <FadeIn delay={100} className="flex flex-col justify-center">
        {submitted ? (
          <div className="bg-brand-dark-surface border border-brand-accent/30 p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
            <span className="text-4xl text-brand-accent mb-4">✦</span>
            <div className="font-display text-2xl tracking-[0.05em] text-brand-white mb-2">
              Enquiry Received
            </div>
            <p className="text-[0.85rem] text-brand-muted max-w-[320px] leading-[1.7]">
              Thank you, {formData.firstName}. Our team will review your vision and reply within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ firstName: '', lastName: '', email: '', sessionType: '', vision: '' });
              }}
              className="mt-6 text-[0.65rem] tracking-[0.2em] uppercase border-b border-brand-accent pb-1 text-brand-accent hover:text-brand-white hover:border-brand-white transition-colors cursor-pointer"
            >
              Send another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.65rem] tracking-[0.2em] uppercase text-brand-muted">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Amara"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="bg-transparent border-b border-brand-white/12 py-2 text-brand-white font-body text-[0.85rem] font-light outline-none focus:border-brand-accent transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.65rem] tracking-[0.2em] uppercase text-brand-muted">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Okonkwo"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="bg-transparent border-b border-brand-white/12 py-2 text-brand-white font-body text-[0.85rem] font-light outline-none focus:border-brand-accent transition-colors duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase text-brand-muted">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border-b border-brand-white/12 py-2 text-brand-white font-body text-[0.85rem] font-light outline-none focus:border-brand-accent transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase text-brand-muted">
                Type of Session
              </label>
              <select
                value={formData.sessionType}
                onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                className="bg-transparent border-b border-brand-white/12 py-2 text-brand-white font-body text-[0.85rem] font-light outline-none focus:border-brand-accent transition-colors duration-200 cursor-pointer"
              >
                <option value="" disabled className="bg-brand-black">Select a service</option>
                <option value="Remote Portrait" className="bg-brand-black">Remote Portrait</option>
                <option value="Editorial Shoot" className="bg-brand-black">Editorial Shoot</option>
                <option value="Brand Campaign" className="bg-brand-black">Brand Campaign</option>
                <option value="Fine Art Print" className="bg-brand-black">Fine Art Print</option>
                <option value="Other" className="bg-brand-black">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase text-brand-muted">
                Describe your vision — look, style, pose, outfit
              </label>
              <textarea
                placeholder="E.g. dark cinematic look, golden hour, black couture gown, confident seated pose..."
                value={formData.vision}
                onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                className="bg-transparent border-b border-brand-white/12 py-2 text-brand-white font-body text-[0.85rem] font-light outline-none focus:border-brand-accent transition-colors duration-200 resize-none min-h-[100px]"
              />
            </div>

            <button
              type="submit"
              className="submit-btn inline-flex items-center gap-4 text-[0.75rem] tracking-[0.2em] uppercase bg-brand-accent text-brand-black py-4 px-10 font-medium hover:bg-brand-white hover:gap-6 transition-all duration-300 w-fit cursor-pointer mt-2"
            >
              Send Enquiry &nbsp;&#8594;
            </button>
          </form>
        )}
      </FadeIn>
    </section>
  );
};
