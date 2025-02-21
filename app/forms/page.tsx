'use client';

import { useState } from 'react';
import PDFViewer from '../components/forms/PDFViewer';
import AnimatedHeading from '../components/ui/AnimatedHeading';

const forms = [
  {
    id: 'consultation',
    category: 'Required Forms',
    title: 'Client Consultation Form',
    description: 'Complete this form before your first appointment to help us understand your needs and health history.',
    file: '/forms/Body&Soul-ClientConsulatationForm.pdf',
  },
  {
    id: 'consent',
    category: 'Required Forms',
    title: 'Client Consent Form',
    description: 'Required consent form acknowledging treatment understanding and agreement.',
    file: '/forms/Body&Soul-ClientConsentForm.pdf',
  },
  {
    id: 'cancellation',
    category: 'Policies',
    title: 'Cancellation Policy',
    description: 'Our cancellation policy and associated fees.',
    file: '/forms/Body&Soul-CancellationPolicyForm.pdf',
  },
  {
    id: 'release',
    category: 'Optional Forms',
    title: 'Photo/Video Release Form',
    description: 'Optional consent for using photos/videos for marketing purposes.',
    file: '/forms/Body&Soul-PhotoVideoReleaseForm.pdf',
  },
  {
    id: 'care',
    category: 'Guidelines',
    title: 'Pre & Post Care Instructions',
    description: 'Important guidelines for before and after your massage therapy session.',
    file: '/forms/Body&Soul-PrecarePostcareInstructions.pdf',
  },
];

const categories = Array.from(new Set(forms.map(form => form.category)));

export default function Forms() {
  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedHeading
              title="Forms & Documents"
              subtitle="Access and complete necessary forms for your massage therapy sessions. You can view forms online or download them for later completion."
            />
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(100%_100%_at_top_center,rgba(255,255,255,0.7),rgba(255,255,255,0))]" />
      </div>

      {/* Forms section */}
      <div className="container py-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
          {/* Forms list */}
          <div className="lg:col-span-1">
            <nav className="flex flex-col space-y-8">
              {categories.map((category) => (
                <div key={category}>
                  <h2 className="text-lg font-semibold text-neutral-900 mb-4">{category}</h2>
                  <ul className="space-y-2">
                    {forms
                      .filter(form => form.category === category)
                      .map(form => (
                        <li key={form.id}>
                          <button
                            onClick={() => setSelectedForm(form.id)}
                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                              selectedForm === form.id
                                ? 'bg-primary-50 text-primary-900'
                                : 'hover:bg-neutral-50 text-neutral-600'
                            }`}
                          >
                            <span className="block font-medium">{form.title}</span>
                            <span className="block text-sm mt-1">{form.description}</span>
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* PDF viewer */}
          <div className="lg:col-span-2">
            {selectedForm ? (
              <PDFViewer
                file={forms.find(f => f.id === selectedForm)?.file || ''}
                title={forms.find(f => f.id === selectedForm)?.title || ''}
              />
            ) : (
              <div className="flex items-center justify-center h-full min-h-[500px] rounded-lg bg-neutral-50 border border-neutral-200">
                <p className="text-neutral-600">Select a form to view</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 