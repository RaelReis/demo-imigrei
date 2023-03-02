import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  fill?: boolean;
  as?: "link" | "button";
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Button({ children, fill = false, as = "button", href = "#", onClick }: ButtonProps) {
  const className = fill ? "button-fill" : "button";

  return (
    <>
      {as === "button" && (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      )}
      {as === "link" && (
        <Link href={href} className={className} onClick={onClick}>
          {children}
        </Link>
      )}
    </>
  );
}
