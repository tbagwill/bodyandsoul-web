'use client';

import SquareBookingWidget from '../components/booking/SquareBookingWidget';

export default function Booking() {
  return (
    <>
      <style jsx global>{`
        footer {
          display: none !important;
        }
      `}</style>
      <div className="container pt-2">
        <div className="max-w-4xl mx-auto">
          <SquareBookingWidget />
        </div>
      </div>
    </>
  );
} 