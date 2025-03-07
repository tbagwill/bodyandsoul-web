'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import AnimatedHeading from '../components/ui/AnimatedHeading';

const galleryItems = [
  {
    id: 1,
    title: 'Main Treatment Room',
    description: 'Our serene main treatment room where your relaxation journey takes place.',
    imageSrc: '/photos/MainRoom.JPG',
    width: 1920,
    height: 1280,
  },
  {
    id: 2,
    title: 'Ambient Lighting',
    description: 'Soft, calming lights create the perfect atmosphere for relaxation.',
    imageSrc: '/photos/Lights.JPG',
    width: 1920,
    height: 1280,
  },
  {
    id: 3,
    title: 'Cozy Fireplace',
    description: 'Our warm and inviting fireplace adds to the peaceful ambiance.',
    imageSrc: '/photos/Fireplace.JPG',
    width: 1920,
    height: 1280,
  },
  {
    id: 4,
    title: 'Professional Certifications',
    description: 'Our commitment to excellence and continued education.',
    imageSrc: '/photos/Certifications.JPG',
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
          alt: item.title,
        }))}
      />
    </div>
  );
} 