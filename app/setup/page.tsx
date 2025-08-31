import AnimatedHeading from '../components/ui/AnimatedHeading';

const setupSteps = [
  {
    id: 1,
    title: 'Space Requirements',
    description: 'We need a quiet, private room with enough space for our professional massage table (approximately 8x4 feet). The room should be comfortable temperature and have adequate lighting.',
    icon: '🏠',
  },
  {
    id: 2,
    title: 'Equipment Setup',
    description: 'We bring all necessary equipment including our professional massage table, linens, oils, and any specialized tools needed for your treatment. Setup takes approximately 10-15 minutes.',
    icon: '🛠️',
  },
  {
    id: 3,
    title: 'Ambiance Creation',
    description: 'We transform your space into a relaxing sanctuary with portable lighting, calming music, and aromatherapy to enhance your massage experience.',
    icon: '✨',
  },
  {
    id: 4,
    title: 'Professional Service',
    description: 'Once setup is complete, you can enjoy your full massage session in the comfort of your own space. All equipment is sanitized and professional-grade.',
    icon: '💆',
  },
];

const requirements = [
  {
    category: 'Space',
    items: ['Quiet, private room', 'Minimum 8x10 feet', 'Level flooring', 'Room temperature control'],
  },
  {
    category: 'Access',
    items: ['Clear path to treatment room', 'Parking availability', 'Accessible entrance', 'Restroom nearby'],
  },
  {
    category: 'Utilities',
    items: ['Electrical outlet nearby', 'Good ventilation', 'Adequate lighting', 'Clean environment'],
  },
];

export default function Setup() {
  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedHeading
              title="Mobile Service Setup"
              subtitle="Learn about our professional mobile massage setup process and what we need to create the perfect wellness experience in your space."
            />
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(100%_100%_at_top_center,rgba(255,255,255,0.7),rgba(255,255,255,0))]" />
      </div>

      {/* Setup Process section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <AnimatedHeading
            title="Our Setup Process"
            subtitle="We handle everything to ensure your mobile massage experience is seamless and relaxing."
          />
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {setupSteps.map((step) => (
              <div key={step.id} className="relative p-8 bg-white rounded-2xl shadow-sm ring-1 ring-neutral-900/10">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold leading-7 text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-base leading-7 text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements section */}
      <div className="container py-24 sm:py-32 bg-primary-50">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <AnimatedHeading
            title="Setup Requirements"
            subtitle="To ensure the best possible experience, here's what we need from your location."
          />
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {requirements.map((req) => (
              <div key={req.category} className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">{req.category}</h3>
                <ul className="space-y-2">
                  {req.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-sm text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Ready to Experience Mobile Wellness?
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            We&apos;ll handle all the setup details. Just prepare to relax and enjoy your personalized massage experience.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/booking" className="btn">
              Book Your Session
            </a>
            <a href="/about" className="btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
