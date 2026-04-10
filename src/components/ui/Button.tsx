import { ReactNode, AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full font-semibold transition-colors";
  const sizes = {
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };
  const variants = {
    primary: "bg-ocean-600 text-white hover:bg-ocean-700",
    outline: "border-2 border-ocean-600 text-ocean-600 hover:bg-ocean-600 hover:text-white",
  };

  return (
    <a className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
