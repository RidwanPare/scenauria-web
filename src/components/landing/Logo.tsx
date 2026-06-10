export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      {/* Arche Scenauria */}
      <path
        d="M8 36V20C8 12.8 13.4 7 20 7s12 5.8 12 13v16h-7V21c0-3.4-2.2-6-5-6s-5 2.6-5 6v15H8z"
        fill="#13233F"
      />
      <path d="M15 36V21c0-3.4 2.2-6 5-6v21h-5z" fill="#9FB8E8" />
    </svg>
  );
}
