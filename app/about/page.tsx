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
    description: "We've created a tranquil space where you can escape the stresses of daily life and focus on your wellness journey.",
  },
];

const services = [
  {
    name: 'Relaxation Massage',
    description: 'Our signature relaxation massage is designed to promote deep relaxation, reduce stress, and ease muscle tension. Choose from our popular 60-minute session perfect for quick relief, or indulge in our 90-minute session for a more thorough, full-body experience with extra attention to problem areas.',
    duration: '60-90 min',
  },
  {
    name: 'Reiki & Energy Healing',
    description: 'Experience the gentle power of energy healing with our Reiki sessions. Our one-hour sessions promote physical and emotional well-being through gentle touch, helping to restore balance and harmony. Available as standalone sessions or combined with massage therapy for a holistic healing experience.',
    duration: '60 min',
  },
  {
    name: 'Birthday Package',
    description: 'Make your special day even more memorable with our luxurious birthday package. This carefully curated experience includes a customized massage session and special wellness treats designed to celebrate and rejuvenate. The perfect way to treat yourself or someone special.',
    duration: 'Custom',
  },
  {
    name: 'Massage Therapy',
    description: 'From relaxing Swedish massage to deep tissue and sports massage, our comprehensive massage therapy options cater to your specific needs. Our signature treatments include hot stones and scalp massage for complete relaxation, ensuring a truly customized experience.',
    duration: 'Varies',
  },
  {
    name: 'Wellness Enhancements',
    description: 'Enhance your wellness journey with our selection of therapeutic treatments. Choose from red light therapy sessions for skin health and muscle recovery, ionic foot detox for natural cleansing, and hot sauna blanket treatments for detoxification and rejuvenation.',
    duration: '20-45 min',
  },
  {
    name: 'Body Sculpting',
    description: 'Our non-invasive body contouring treatments use advanced cavitation and radio frequency technology to help achieve your body goals. These treatments are perfect for targeting stubborn areas and enhancing your natural contours.',
    duration: 'Custom',
  },
  {
    name: 'Energy Healing',
    description: 'Discover the transformative power of our energy healing treatments. We offer various modalities including Reiki therapy, which can be experienced as a standalone treatment or combined with massage for a deeper healing experience that addresses both physical and energetic well-being.',
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
              subtitle="Welcome to Body & Soul Rejuvenation, where we blend traditional massage techniques with modern therapeutic practices to help you achieve optimal wellness. Our mission is to provide a peaceful sanctuary where you can relax, rejuvenate, and restore your body's natural balance."
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
            subtitle="At Body & Soul Rejuvenation, our values guide everything we do. We're committed to providing exceptional care in a nurturing environment."
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
    </div>
  );
} 