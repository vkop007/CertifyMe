"use client";

import Link from "next/link";
import { Search, ShoppingBag, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const VOUCHERS = [
  "AWS",
  "Microsoft",
  "Salesforce",
  "Oracle",
  "CompTIA",
  "Kubernetes",
  "Checkpoint",
  "Red Hat",
  "DELLEMC",
  "VMware",
  "Juniper",
  "ECCouncil",
  "Fortinet",
  "ISACA",
  "ISTQB",
  "Pega",
  "SAS",
  "Splunk",
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setOpen(false);
      setQuery("");
    }
  };

  return (
    <header className="py-3 sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container-custom flex items-center justify-between py-5">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
            CERTIFYME
          </span>
          <span className="w-2 h-2 rounded-full bg-secondary mb-3"></span>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 relative">
          <Link href="/" className="font-medium text-primary">
            Home
          </Link>

          {/* VOUCHERS DROPDOWN */}
          <div className="relative group">
            <Link
              href="/course"
              className="flex items-center gap-1 font-medium text-text-light hover:text-primary transition"
            >
              Vouchers
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>

            <div
              className="absolute top-full left-0 mt-3 w-[420px] bg-white rounded-2xl shadow-xl border border-gray-100
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-200"
            >
              <div
                className="grid grid-cols-2 gap-x-3 gap-y-1 p-4 max-h-72 overflow-y-auto
                scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
              >
                {VOUCHERS.map((item) => (
                  <Link
                    key={item}
                    href={`/course/${item
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="px-3 py-2 rounded-lg text-sm text-text-dark
                    hover:bg-green-50 hover:text-primary transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* TRAININGS */}
          <Link
            href="/training"
            className="font-medium text-text-light hover:text-primary transition"
          >
            Trainings
          </Link>

          <Link
            href="#"
            className="font-medium text-text-light hover:text-primary transition"
          >
            Certifications
          </Link>

          <Link
            href="#"
            className="font-medium text-text-light hover:text-primary transition"
          >
            About Us
          </Link>

          <Link
            href="#"
            className="font-medium text-text-light hover:text-primary transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          {/* SEARCH */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="p-2 rounded-full hover:bg-gray-100 text-text-dark hover:text-primary transition"
          >
            <Search className="w-5 h-5" />
          </button>

          {open && (
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search certifications, vouchers..."
              className="w-64 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary"
              onBlur={() => !query && setOpen(false)}
            />
          )}

          {/* CART */}
          <button
            onClick={() => router.push("/cart")}
            className="relative hidden md:flex p-2 rounded-full hover:bg-gray-100 text-text-dark hover:text-primary transition"
          >
            <ShoppingBag className="w-5 h-5" />

            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* MOBILE MENU */}
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
