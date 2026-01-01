"use client";

import Link from "next/link";
import { Search, ShoppingBag, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

/* ================== VOUCHER GROUPS ================== */
const IT_VOUCHERS = [
  "AWS",
  "Databricks",
  "GCP",
  "Checkpoint",
  "SAP",
  "Salesforce",
  "Microsoft",
  "Kubernetes",
  "Juniper",
  "ISTQB",
  "Snowflake",
  "CompTIA",
  "Oracle",
  "Tableau",
  "ServiceNow",
  "DELLEMC",
  "Cisco",
  "ECCouncil",
  "Fortinet",
  "ISACA",
  "Pega",
  "SAS",
  "Splunk",
  "VMware",
];

const ENGLISH_VOUCHERS = ["GRE", "TOEFL"];

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/course?q=${encodeURIComponent(query)}`);
      setOpenSearch(false);
      setQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container-custom px-4 md:px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
              CERTIFY
            </span>
            <span className="w-2 h-2 rounded-full bg-secondary mb-3" />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium ${
                pathname === "/" ? "text-primary" : "text-text-light hover:text-primary"
              }`}
            >
              HOME
            </Link>

            {/* -------- VOUCHERS DROPDOWN -------- */}
            <div className="relative group">
              <Link
                href="/course"
                className={`flex items-center gap-1 font-medium ${
                  pathname.startsWith("/course")
                    ? "text-primary"
                    : "text-text-light hover:text-primary"
                }`}
              >
                VOUCHERS
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>

              <div className="absolute left-0 top-full mt-3 w-[520px] bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-5 space-y-6 max-h-[420px] overflow-y-auto">

                  {/* IT CERTIFICATIONS */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
                      IT Certifications
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {IT_VOUCHERS.map((item) => (
                        <Link
                          key={item}
                          href={`/course?q=${encodeURIComponent(item)}`}
                          className="px-3 py-2 rounded-lg text-sm hover:bg-green-50 hover:text-primary transition"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* ENGLISH CERTIFICATIONS */}
                  <div className="border-t pt-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
                      English Certifications
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {ENGLISH_VOUCHERS.map((item) => (
                        <Link
                          key={item}
                          href={`/course?q=${encodeURIComponent(item)}`}
                          className="px-3 py-2 rounded-lg text-sm hover:bg-blue-50 hover:text-primary transition"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <Link
              href="/training"
              className={`font-medium ${
                pathname === "/training"
                  ? "text-primary"
                  : "text-text-light hover:text-primary"
              }`}
            >
              TRAININGS
            </Link>

            <Link
              href="/about"
              className={`font-medium ${
                pathname === "/about"
                  ? "text-primary"
                  : "text-text-light hover:text-primary"
              }`}
            >
              ABOUT US
            </Link>

            <Link
              href="/contactus"
              className={`font-medium ${
                pathname === "/contactus"
                  ? "text-primary"
                  : "text-text-light hover:text-primary"
              }`}
            >
              CONTACT US
            </Link>
          </nav>

          {/* ================= RIGHT ACTIONS ================= */}
          <div className="flex items-center gap-3 relative">

            <button
              onClick={() => setOpenSearch(!openSearch)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Search className="w-5 h-5" />
            </button>

            {openSearch && (
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search..."
                className="hidden sm:block w-40 px-3 py-1.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary"
              />
            )}

            <button
              onClick={() => router.push("/cart")}
              className="relative flex p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden p-2"
            >
              {mobileMenu ? <X className="w-6 h-6" /> : (
                <>
                  <div className="w-6 h-0.5 bg-black mb-1.5" />
                  <div className="w-6 h-0.5 bg-black mb-1.5" />
                  <div className="w-6 h-0.5 bg-black" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenu && (
          <div className="lg:hidden border-t py-4 space-y-2">
            {[
              ["Home", "/"],
              ["Vouchers", "/course"],
              ["Trainings", "/training"],
              ["About Us", "/about"],
              ["Contact Us", "/contactus"],
            ].map(([label, link]) => (
              <Link
                key={label}
                href={link}
                onClick={() => setMobileMenu(false)}
                className="block px-4 py-2 rounded-lg text-text-dark hover:bg-green-50"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
