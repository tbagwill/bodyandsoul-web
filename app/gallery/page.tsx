'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Placeholder from '../components/ui/Placeholder';
import AnimatedHeading from '../components/ui/AnimatedHeading';

// Placeholder images for now - these will be replaced with actual massage therapy/spa images
const galleryItems = [
  {
    id: 1,
    title: 'Reception Area',
    description: 'Our welcoming reception area where your journey to relaxation begins.',
    imageSrc: '/images/placeholder-1.jpg',
    width: 1920,
    height: 1280,
  },
  {
    id: 2,
    title: 'Treatment Room 1',
    description: 'A peaceful treatment room designed for your comfort.',
    imageSrc: '/images/placeholder-2.jpg',
    width: 1920,
    height: 1280,
  },
  {
    id: 3,
    title: 'Treatment Room 2',
    description: 'Another of our tranquil treatment spaces.',
    imageSrc: '/images/placeholder-3.jpg',
    width: 1920,
    height: 1280,
  },
  {
    id: 4,
    title: 'Relaxation Area',
    description: 'A comfortable space to unwind before or after your treatment.',
    imageSrc: '/images/placeholder-4.jpg',
    width: 1920,
    height: 1280,
  },
  {
    id: 5,
    title: 'Product Display',
    description: 'We offer a curated selection of wellness products.',
    imageSrc: '/images/placeholder-5.jpg',
    width: 1920,
    height: 1280,
  },
  {
    id: 6,
    title: 'Exterior View',
    description: 'Our peaceful location.',
    imageSrc: '/images/placeholder-6.jpg',
    width: 1920,
    height: 1280,
  },
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedHeading
              title="Our Space"
              subtitle="Take a virtual tour of our peaceful sanctuary. Each space is thoughtfully designed to promote relaxation and healing."
            />
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(100%_100%_at_top_center,rgba(255,255,255,0.7),rgba(255,255,255,0))]" />
      </div>

      {/* Gallery grid */}
      <div className="container py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Placeholder
                width={item.width}
                height={item.height}
                text={item.title}
                className="transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-900/40 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-4 bottom-4 opacity-0 transition duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={galleryItems.map(item => ({
          src: item.imageSrc,
          width: item.width,
          height: item.height,
          alt: item.title,
        }))}
      />
    </div>
  );
} 