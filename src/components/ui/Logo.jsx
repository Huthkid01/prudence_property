import { useId } from "react";
import { Link } from "react-router-dom";

export default function Logo({
  variant = "light",
  size = "md",
  showText = true,
  asLink = false,
}) {
  const gradientId = useId();
  const isLight = variant === "light";

  const sizes = {
    sm: { icon: 36, text: "text-base", sub: "text-[9px]" },
    md: { icon: 44, text: "text-xl", sub: "text-[10px]" },
    lg: { icon: 52, text: "text-2xl", sub: "text-xs" },
  };

  const { icon, text, sub } = sizes[size];

  const content = (
    <>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 drop-shadow-sm"
      >
        <rect width="48" height="48" rx="12" fill={`url(#${gradientId})`} />
        <path
          d="M24 10L36 20V36H30V28H18V36H12V20L24 10Z"
          fill="white"
          fillOpacity="0.95"
        />
        <rect x="20" y="24" width="8" height="8" rx="1" fill="#F59E0B" />
        <path
          d="M24 14L32 21V34H28V28H20V34H16V21L24 14Z"
          fill="#1E40AF"
          fillOpacity="0.25"
        />
        <circle cx="36" cy="12" r="4" fill="#F59E0B" />
        <path
          d="M34.5 12L35.5 13L37.5 11"
          stroke="#0F172A"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#1E40AF" />
            <stop offset="1" stopColor="#0F172A" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <div className="leading-none">
          <span
            className={`block font-display font-bold tracking-tight ${text} ${
              isLight ? "text-white" : "text-primary"
            }`}
          >
            Prudence
          </span>
          <span
            className={`block font-semibold uppercase tracking-[0.2em] mt-0.5 ${sub} ${
              isLight ? "text-accent" : "text-secondary"
            }`}
          >
            Property
          </span>
        </div>
      )}
    </>
  );

  if (asLink) {
    return (
      <Link to="/" className="flex items-center gap-3 group transition-opacity hover:opacity-90">
        {content}
      </Link>
    );
  }

  return <div className="flex items-center gap-3">{content}</div>;
}
