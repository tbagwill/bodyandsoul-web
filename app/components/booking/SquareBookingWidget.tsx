'use client';

import Script from 'next/script';

export default function SquareBookingWidget() {
  return (
    <>
      <Script 
        src="https://square.site/appointments/buyer/widget/tbq4sktsxijte2/LQZ5PZHYX93NB.js"
        strategy="afterInteractive"
      />
      <div id="square-appointments-widget" />
    </>
  );
} 