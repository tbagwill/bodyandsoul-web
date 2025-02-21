'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import LoadingSpinner from '../ui/LoadingSpinner';
import AnimatedLayout from '../layout/AnimatedLayout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Dynamically import the viewer component
const PDFViewerComponent = dynamic(
  () => import('./PDFViewerComponent'),
  { 
    ssr: false,
    loading: () => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full"
      >
        <div className="mb-4">
          <motion.h3 
            className="text-lg font-semibold text-neutral-900"
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading PDF Viewer...
          </motion.h3>
        </div>
        <div className="border rounded-lg overflow-hidden bg-neutral-50 flex items-center justify-center" style={{ height: '750px' }}>
          <LoadingSpinner size={60} color="var(--color-primary-600)" />
        </div>
      </motion.div>
    )
  }
);

interface PDFViewerProps {
  file: string;
  title: string;
}

export default function PDFViewer({ file, title }: PDFViewerProps) {
  return (
    <AnimatedLayout>
      <PDFViewerComponent file={file} title={title} />
    </AnimatedLayout>
  );
} 