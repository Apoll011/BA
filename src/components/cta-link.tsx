import Link from "next/link";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  tone?: "royal" | "glass" | "line";
  className?: string;
};

export function CtaLink({ href, children, tone = "royal", className }: CtaLinkProps) {
  const classes = cn(
    buttonVariants({ variant: tone === "royal" ? "default" : "outline", size: "lg" }),
    "h-12 rounded-full px-6 font-mono text-[0.68rem] uppercase tracking-[0.18em]",
    tone === "royal" &&
      "bg-royal text-white shadow-[0_10px_30px_rgb(0_94_240/0.32)] hover:bg-royal/90 hover:text-white",
    tone === "glass" &&
      "border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white",
    tone === "line" && "border-onyx/15 bg-white text-onyx hover:bg-alabaster hover:text-onyx",
    className,
  );

  if (/^(https?:|tel:|mailto:)/.test(href)) {
    const web = href.startsWith("http");
    return (
      <a href={href} className={classes} target={web ? "_blank" : undefined} rel={web ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
