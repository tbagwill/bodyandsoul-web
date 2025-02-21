'use client';

import { useState } from 'react';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from '../ui/LoadingSpinner';

interface PDFViewerComponentProps {
  file: string;
  title: string;
}

export default function PDFViewerComponent({ file, title }: PDFViewerComponentProps) {
  const [isLoading, setIsLoading] = useState(true);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      </div>
      <div className="border rounded-lg overflow-hidden bg-neutral-50 relative" style={{ height: '750px' }}>
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-neutral-50 z-10"
            >
              <LoadingSpinner size={60} color="var(--color-primary-600)" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js`}>
          <Viewer
            fileUrl={file}
            plugins={[defaultLayoutPluginInstance]}
            defaultScale={SpecialZoomLevel.PageFit}
            onDocumentLoad={() => setIsLoading(false)}
          />
        </Worker>
      </div>
    </motion.div>
  );
} 