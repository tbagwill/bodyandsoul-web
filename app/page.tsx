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
            title="Wellness Comes to You"
            subtitle="Experience the transformative power of professional mobile massage therapy with Body & Soul Rejuvenation. We bring relaxation and renewal directly to your doorstep for the ultimate convenience."
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
            title="Popular Services"
            subtitle="Choose from our comprehensive range of mobile wellness services delivered directly to your location to rejuvenate your body and soul."
          />
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[
            {
              title: '60 Min Relaxation Massage',
              description:
                'A soothing mobile full-body massage delivered to your location, designed to promote relaxation, reduce stress, and ease muscle tension in the comfort of your own space.',
            },
            {
              title: '90 Min Relaxation Massage',
              description:
                'An extended mobile relaxation massage that allows for deeper work and more attention to problem areas. Ideal for those seeking a thorough, full-body relaxation experience at home.',
            },


            {
              title: 'Massage Therapy',
              description:
                'From relaxing Swedish massage to deep tissue and sports massage, delivered to your location. Our mobile signature treatments include hot stones and scalp massage for complete relaxation.',
            },
            {
              title: 'Wellness Enhancements',
              description:
                'Enhance your wellness journey with our mobile red light therapy sessions and hot sauna blanket treatments delivered to your space for detoxification and rejuvenation.',
            },
            {
              title: 'Body Sculpting',
              description:
                'Mobile body contouring treatments using advanced cavitation and radio frequency technology, delivered in your home. Non-invasive procedures to help achieve your body goals.',
            },
            {
              title: 'Energy Healing',
              description:
                'Experience the healing power of mobile Reiki energy therapy brought to your space, available as standalone sessions or combined with massage for deeper healing and relaxation.',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-neutral-900/10 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold leading-7 text-neutral-900">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
