import Link from 'next/link';
import Image from 'next/image';
import AnimatedHeading from '../components/ui/AnimatedHeading';

const values = [
  {
    name: 'Holistic Approach',
    description: 'We believe in treating the whole person, not just symptoms. Our approach combines traditional massage techniques with modern therapeutic practices.',
  },
  {
    name: 'Personalized Care',
    description: 'Every body is unique, and so is every treatment. We tailor our services to meet your specific needs and goals.',
  },
  {
    name: 'Professional Excellence',
    description: 'Our licensed therapists maintain the highest standards of professionalism and continue their education to bring you the best care possible.',
  },
  {
    name: 'Peaceful Environment',
    description: "We bring tranquility directly to you, transforming your own space into a serene sanctuary where you can escape daily stresses and focus on your wellness journey.",
  },
];

const services = [
  {
    name: 'Relaxation Massage',
    description: 'Our signature mobile relaxation massage brings deep relaxation, stress reduction, and muscle tension relief directly to your home. Choose from our popular 60-minute session perfect for quick relief, or indulge in our 90-minute session for a more thorough, full-body experience in the comfort of your own space.',
    duration: '60-90 min',
  },


  {
    name: 'Massage Therapy',
    description: 'From relaxing Swedish massage to deep tissue and sports massage, our comprehensive mobile massage therapy options cater to your specific needs in your own space. Our signature treatments include hot stones and scalp massage for complete relaxation, bringing a truly customized spa experience to you.',
    duration: 'Varies',
  },
  {
    name: 'Wellness Enhancements',
    description: 'Enhance your wellness journey with our selection of mobile therapeutic treatments delivered to your location. Choose from red light therapy sessions for skin health and muscle recovery, and hot sauna blanket treatments for detoxification and rejuvenation.',
    duration: '20-45 min',
  },
  {
    name: 'Body Sculpting',
    description: 'Our mobile non-invasive body contouring treatments use advanced cavitation and radio frequency technology delivered in the comfort of your home. Perfect for targeting stubborn areas and enhancing your natural contours with convenient scheduling.',
    duration: 'Custom',
  },
  {
    name: 'Energy Healing',
    description: 'Discover the transformative power of our mobile energy healing treatments brought directly to your space. We offer various modalities including Reiki therapy, which can be experienced as a standalone treatment or combined with massage for a deeper healing experience in the comfort of your home.',
    duration: 'Varies',
  }
];

export default function About() {
  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl">
            <AnimatedHeading
              title="About Body & Soul"
              subtitle="Welcome to Body & Soul Rejuvenation, where we bring traditional massage techniques and modern therapeutic practices directly to you. Our mobile service delivers optimal wellness in the comfort of your own space, creating a peaceful sanctuary wherever you are."
            />
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(100%_100%_at_top_center,rgba(255,255,255,0.7),rgba(255,255,255,0))]" />
      </div>

      {/* Values section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
                      <AnimatedHeading
              title="Our Values"
              subtitle="At Body & Soul Rejuvenation, our values guide everything we do. We're committed to bringing exceptional care and creating nurturing environments wherever our clients are."
            />
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.name} className="relative">
                <dt className="text-xl font-semibold leading-7 text-neutral-900">
                  {value.name}
                </dt>
                <dd className="mt-3 text-base leading-7 text-neutral-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team section */}
      <div className="container py-24 sm:py-32 bg-primary-50">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <AnimatedHeading
            title="Meet Our Team"
            subtitle="Our licensed massage therapists bring years of experience and a passion for healing to every session."
          />
          <div className="mt-16">
            <div className="space-y-8">
              <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src="/photos/Headshot.JPG"
                  alt="Celeste Trevino"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 256px"
                  priority
                />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-neutral-900">Celeste Trevino</h3>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  Celeste has always sought out a career geared towards helping others. With a background in the medical field, she has witnessed how stress can affect the body. With a more holistic approach, she has found massage therapy to be a powerful tool for healing and relaxation. Celeste has obtained her license in massage therapy as well as body sculpting and Reiki healing practices. Her motto is: &ldquo;If you have a body, you can benefit from a massage.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <AnimatedHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of services to support your wellness journey."
          />
          <div className="mt-16 space-y-16">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col gap-8 sm:flex-row">
                <div className="sm:w-full">
                  <div className="flex flex-wrap items-baseline gap-x-4">
                    <h3 className="text-xl font-semibold leading-7 text-neutral-900">
                      {service.name}
                    </h3>
                    <div className="text-sm font-medium">
                      <span className="text-neutral-600">{service.duration}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-base leading-7 text-neutral-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/booking" className="btn">
              Book Your Session
            </Link>
          </div>
        </div>
      </div>

      {/* Service Area section */}
      <div className="container py-24 sm:py-32 bg-primary-50">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <AnimatedHeading
            title="Service Area"
            subtitle="We proudly serve the Antelope Valley and surrounding areas, bringing professional wellness services directly to your location."
          />
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-neutral-900">Primary Areas</h3>
                <p className="mt-4 text-base text-neutral-600">
                  Lancaster • Palmdale • Quartz Hill<br />
                  Acton • Agua Dulce • Littlerock
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-neutral-900">Extended Service</h3>
                <p className="mt-4 text-base text-neutral-600">
                  Santa Clarita • Newhall • Valencia<br />
                  Saugus • Canyon Country
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-neutral-900">Travel Distance</h3>
                <p className="mt-4 text-base text-neutral-600">
                  Up to 30 miles from Lancaster<br />
                  Special arrangements available
                </p>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-sm text-neutral-500">
                Don&apos;t see your area listed? Contact us to discuss service availability in your location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 