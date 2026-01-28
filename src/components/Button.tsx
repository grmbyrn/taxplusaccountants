
import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary";
type ButtonProps =
  | ({
      variant?: Variant;
      href?: undefined;
      children: React.ReactNode;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      variant?: Variant;
      href: string;
      children: React.ReactNode;
    } & React.AnchorHTMLAttributes<HTMLAnchorElement>);


const base = "px-4 py-2 rounded-full font-semibold text-sm md:text-base inline-flex items-center justify-center";

const isInternal = (href: string) => href.startsWith("/") && !href.startsWith("//");

const Button = (props: ButtonProps) => {
  const { href, children, className = "", ...rest } = props as ButtonProps;
  const classes = `${base} ${className}`;
  if (href) {
    // Only pass anchor props
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    if (isInternal(href)) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }
  // Only pass button props
  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
