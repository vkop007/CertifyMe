import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";

export default function Header() {
  return (
    <header className="py-6">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
            DEVSKILL
          </span>
          <div className="w-2 h-2 rounded-full bg-secondary mb-3"></div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="font-medium text-primary">
            Home
          </Link>
          <Link
            href="#"
            className="font-medium text-text-light hover:text-primary transition-colors"
          >
            Our Course
          </Link>
          <Link
            href="#"
            className="font-medium text-text-light hover:text-primary transition-colors"
          >
            Pages
          </Link>
          <Link
            href="#"
            className="font-medium text-text-light hover:text-primary transition-colors"
          >
            Mentors
          </Link>
          <Link
            href="#"
            className="font-medium text-text-light hover:text-primary transition-colors"
          >
            Blog
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-text-dark hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden p-2 text-text-dark hover:text-primary transition-colors md:block">
            <ShoppingBag className="w-5 h-5" />
          </button>

          <div className="hidden md:flex items-center gap-3 ml-2">
            <Link
              href="#"
              className="px-5 py-2 rounded-full border border-gray-200 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="px-5 py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Join Free
            </Link>
          </div>

          {/* Mobile Menu Button (Placeholder) */}
          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </div>
    </header>
  );
}
