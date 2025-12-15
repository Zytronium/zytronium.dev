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
    } catch (error) {
      setContactInfo('Error verifying CAPTCHA.');
    }
  };

  return (
    <section className="text-center mb-16 bg-[#0a061d]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#27234c]">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-400 mb-6">To reveal my contact information, please confirm you are not a bot.</p>

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