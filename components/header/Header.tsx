"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setOpen(false);
      setQuery("");
    }
  };

  return (
    <header className="py-6 sticky top-0 bg-white z-50">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
            CERTIFYME
          </span>
          <div className="w-2 h-2 rounded-full bg-secondary mb-3"></div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium text-primary">
            Home
          </Link>
          <Link
            href="#"
            className="font-medium text-text-light hover:text-primary"
          >
            Vouchers
          </Link>
          <Link
            href="#"
            className="font-medium text-text-light hover:text-primary"
          >
            Learning
          </Link>
          <Link
            href="#"
            className="font-medium text-text-light hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="font-medium text-text-light hover:text-primary"
          >
            Contact Us
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Search Icon (outside) */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="p-2 text-text-dark hover:text-primary transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Inline Rounded Input */}
          {open && (
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search..."
              className="w-64 px-4 pl-4 pr-10 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary"
              onBlur={() => !query && setOpen(false)}
            />
          )}

          <button className="hidden md:block p-2 text-text-dark hover:text-primary">
            <ShoppingBag className="w-5 h-5" />
          </button>

          {/* Mobile Menu */}
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
