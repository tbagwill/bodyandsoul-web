import Link from 'next/link';
import AnimatedHeading from './components/ui/AnimatedHeading';

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Background */}
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[1000px] overflow-hidden bg-neutral-50"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90" />
      </div>

      {/* Hero section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedHeading
            title="Discover Your Path to Wellness"
            subtitle="Experience the transformative power of professional massage therapy at Body & Soul Rejuvenation. Let us guide you on your journey to relaxation and renewal."
          />
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/booking" className="btn">
              Book Now
            </Link>
            <Link href="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Featured services */}
      <div className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedHeading
            title="Our Services"
            subtitle="Choose from our comprehensive range of wellness services designed to rejuvenate your body and soul."
          />
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {[
            {
              title: 'Massage Therapy',
              description:
                'From relaxing Swedish massage to deep tissue and sports massage. Our signature treatments include hot stones and scalp massage for complete relaxation.',
              price: 'From $85.00',
            },
            {
              title: 'Wellness Enhancements',
              description:
                'Enhance your wellness journey with our red light therapy sessions, ionic foot detox, and hot sauna blanket treatments for detoxification and rejuvenation.',
              price: 'From $25.00',
            },
            {
              title: 'Body Sculpting',
              description:
                'Advanced body contouring treatments using cavitation and radio frequency technology. Non-invasive procedures to help achieve your body goals.',
              price: 'From $80.00',
            },
            {
              title: 'Energy Healing',
              description:
                'Experience the healing power of Reiki energy therapy, available as standalone sessions or combined with massage for deeper healing and relaxation.',
              price: 'From $50.00',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-neutral-900/10 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold leading-7 text-neutral-900">{service.title}</h3>
                <span className="text-sm text-primary-600 font-medium">{service.price}</span>
              </div>
              <p className="mt-4 text-base leading-7 text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
