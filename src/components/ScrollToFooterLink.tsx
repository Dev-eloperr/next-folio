// If Nav is already a client component that's fine; otherwise this can be server too.
import clsx from "clsx";
import Link from "next/link";

export default function ScrollToFooterLink() {
  return (
    <Link
      href="#site-footer"
      className={clsx(
        "relative group overflow-hidden",
        "text-sm px-6 py-2 rounded-[70px]",
        "bg-black text-white transition-all duration-500"
      )}
    >
      <span 
        className="absolute inset-0 bg-accent transform origin-bottom 
        scale-y-0 transition-transform duration-500 ease-out
        group-hover:scale-y-100 rounded-[70px]"
      />
      <span className="relative z-10">contact me</span>
    </Link>
  );
}