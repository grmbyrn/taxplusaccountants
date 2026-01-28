import Link from "next/link";

type ButtonProps = {
  href: string;        // required, internal page link
  label: string;       // text to display
  bgColor?: string;    // optional background color class
  textColor?: string;  // optional text color class
  className?: string;  // optional extra classes
};

const base = "px-8 py-3.5 rounded-md font-semibold text-lg inline-flex items-center justify-center";

const Button = ({
  href,
  label,
  bgColor = "bg-primary-500",
  textColor = "text-white",
  className = "",
}: ButtonProps) => {
  const classes = `${base} ${bgColor} ${textColor} ${className}`.trim();

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
};

export default Button;