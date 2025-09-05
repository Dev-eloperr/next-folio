// If Nav is already a client component that's fine; otherwise this can be server too.
import Link from "next/link";

export default function ScrollToFooterLink() {
  return (
    <Link
      href="#site-footer"
      className="text-sm px-6 py-2 rounded-[70px] bg-black text-white transition-opacity hover:opacity-80"
    >
      contact me
    </Link>
  );
}