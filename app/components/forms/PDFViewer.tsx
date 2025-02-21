'use client';

import { motion } from 'framer-motion';
import AnimatedLayout from '../layout/AnimatedLayout';

interface PDFViewerProps {
  file: string;
  title: string;
}

export default function PDFViewer({ file, title }: PDFViewerProps) {
  return (
    <AnimatedLayout>
      <motion.div 
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="mb-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          <a 
            href={file}
            download
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Download PDF
          </a>
        </div>
        <div className="border rounded-lg overflow-hidden bg-neutral-50" style={{ height: '750px' }}>
          <iframe
            src={`${file}#view=FitH`}
            className="w-full h-full"
            title={title}
          />
        </div>
      </motion.div>
    </AnimatedLayout>
  );
} 