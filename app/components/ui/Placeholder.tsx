'use client';

interface PlaceholderProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

export default function Placeholder({
  width = 1920,
  height = 1280,
  text = 'Placeholder',
  className = '',
}: PlaceholderProps) {
  // Calculate aspect ratio for responsive sizing
  const aspectRatio = (height / width) * 100;

  return (
    <div
      className={`relative bg-neutral-100 overflow-hidden ${className}`}
      style={{ paddingBottom: `${aspectRatio}%` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mb-4 text-neutral-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <p className="text-neutral-400 text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
} 