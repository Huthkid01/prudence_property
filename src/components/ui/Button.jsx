import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-secondary text-white hover:bg-blue-900 focus:ring-secondary shadow-lg shadow-secondary/20",
  secondary:
    "border-2 border-white text-white hover:bg-white hover:text-primary focus:ring-white",
  accent:
    "bg-accent text-primary hover:bg-amber-400 focus:ring-accent shadow-lg shadow-accent/20",
  outline:
    "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-secondary",
  ghost: "text-secondary hover:bg-secondary/10 focus:ring-secondary",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
