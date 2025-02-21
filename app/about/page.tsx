import Link from 'next/link';
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
    name: 'Massage Therapy',
    description: 'Our core massage services include Swedish relaxation massage, deep tissue massage, and specialized treatments. Each session can be enhanced with hot stones, and our 90-minute sessions provide extra time for focused attention. Choose from 75 or 90-minute sessions for a truly transformative experience.',
    duration: '75-90 min',
    price: '$85-115',
  },
  {
    name: 'Wellness Treatments',
    description: 'Complement your massage with our wellness treatments. Experience the benefits of red light therapy for skin health and muscle recovery, ionic foot detox for natural cleansing, or our hot sauna blanket session for detoxification and relaxation.',
    duration: '20-30 min',
    price: '$25-40',
  },
  {
    name: 'Body Sculpting',
    description: 'Our non-invasive body contouring treatments use advanced cavitation and radio-frequency technology to help eliminate stubborn fat and contour your body. Available as single sessions or cost-effective packages for optimal results.',
    duration: '1 hr 30 min',
    price: '$80-420',
  },
  {
    name: 'Energy Healing & Reiki',
    description: 'Experience the gentle power of energy healing with our Reiki sessions. Choose from standalone Reiki treatments or combine with massage therapy for a holistic healing experience that addresses both physical and energetic well-being.',
    duration: '30-90 min',
    price: '$50-125',
  },
];

export default function About() {
  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <AnimatedHeading
              title="About Body & Soul"
              subtitle="Welcome to Body & Soul Rejuvenation, where we blend traditional massage techniques with modern therapeutic practices to help you achieve optimal wellness. Our mission is to provide a peaceful sanctuary where you can relax, rejuvenate, and restore your body's natural balance."
              align="left"
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
                <div className="absolute inset-0 bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 text-lg">Photo Coming Soon</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-neutral-900">Lead Therapist</h3>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  With over a decade of experience in therapeutic massage, our lead therapist specializes in creating personalized treatment plans that address your unique needs and goals.
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
                      <span className="text-primary-600">{service.price}</span>
                      <span className="mx-2 text-neutral-400">•</span>
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