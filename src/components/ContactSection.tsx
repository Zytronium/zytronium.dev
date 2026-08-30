'use client';

import { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function ContactSection() {
  const [contactInfo, setContactInfo] = useState('');
  const [isBlurred, setIsBlurred] = useState(false);

  const onCaptchaSuccess = async (token: string) => {
    try {
      const response = await fetch('/api/reveal-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });

      const data = await response.json();

      if (data.success) {
        setContactInfo(data.fake);

        const delay = 350 + Math.random() * 300;
        setTimeout(() => {
          setIsBlurred(true);
          setTimeout(() => {
            setContactInfo(data.real);
            setTimeout(() => setIsBlurred(false), 150);
          }, 150);
        }, delay);
      } else {
        setContactInfo('CAPTCHA failed. Please try again.');
      }
    } catch {
      setContactInfo('Error verifying CAPTCHA.');
    }
  };

  return (
    <section id="contact" className="contact-section reference-panel">
      <p className="eyebrow">03 / Let’s connect</p>
      <h2>Let’s work together</h2>
      <p className="body-copy mb-6">For employers and collaborators: verify you are human to reveal my contact information.</p>

      <div className="flex justify-center mb-4">
        <HCaptcha
          sitekey="9826ed50-ee58-44ba-82c4-07b62424ff2a"
          onVerify={onCaptchaSuccess}
          theme="dark"
        />
      </div>

      {contactInfo && (
        <div
          className={`mt-6 transition-all duration-150 ${isBlurred ? 'blur-[5px]' : ''}`}
          dangerouslySetInnerHTML={{ __html: contactInfo }}
        />
      )}
    </section>
  );
}