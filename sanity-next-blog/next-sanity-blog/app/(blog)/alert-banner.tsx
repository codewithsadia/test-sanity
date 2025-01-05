import Link from "next/link";

export default function AlertBanner() {

  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b bg-red-200 text-black backdrop-blur flex items-center justify-between px-4 h-14">
      <div className="py-2 text-center text-lg font-bold font-serif hover:underline">
        BLOG
      </div>
      <nav className="flex space-x-4 text-sm font-serif font-bold">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
    </div>
  );
}
