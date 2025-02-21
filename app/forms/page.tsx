'use client';

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
  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedHeading
              title="Forms & Documents"
              subtitle="Access and download necessary forms for your massage therapy sessions. Please complete these forms before your appointment."
            />
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(100%_100%_at_top_center,rgba(255,255,255,0.7),rgba(255,255,255,0))]" />
      </div>

      {/* Forms section */}
      <div className="container py-24">
        <div className="max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">{category}</h2>
              <div className="grid gap-6">
                {forms
                  .filter(form => form.category === category)
                  .map(form => (
                    <div
                      key={form.id}
                      className="bg-white rounded-lg border border-neutral-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <h3 className="text-lg font-medium text-neutral-900">{form.title}</h3>
                        <p className="mt-1 text-neutral-600">{form.description}</p>
                      </div>
                      <a
                        href={form.file}
                        download
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 whitespace-nowrap"
                      >
                        Download PDF
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 