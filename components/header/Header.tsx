"use client";

import Link from "next/link";
import { Search, ShoppingCart, ChevronDown, X, Menu, Terminal, Languages, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const IT_VOUCHERS = ["AWS", "Databricks", "GCP", "Checkpoint", "SAP", "Salesforce", "Microsoft", "Kubernetes", "Juniper", "ISTQB", "Snowflake", "CompTIA", "Oracle", "Tableau", "ServiceNow", "DELLEMC", "Cisco", "ECCouncil", "Fortinet", "ISACA", "Pega", "SAS", "Splunk", "VMware"];
const ENGLISH_VOUCHERS = ["GRE", "TOEFL"];

export default function Header() {
  const [query, setQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- LOGO SECTION --- */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center w-11 h-11 bg-primary rounded-2xl rotate-3 group-hover:rotate-0 transition-all duration-300">
              <span className="text-white font-black text-xl -rotate-3 group-hover:rotate-0 transition-all">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black leading-none tracking-tight text-gray-900">CERTIFY</span>
              <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Vouchers</span>
            </div>
          </Link>

          {/* --- CENTER NAVIGATION --- */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/" className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${pathname === "/" ? "bg-primary/10 text-primary" : "text-gray-500 hover:text-gray-900"}`}>HOME</Link>
            
            {/* MEGA MENU TRIGGER */}
            <div className="relative group px-4 py-2">
              <button className="flex items-center gap-1 text-sm font-bold text-gray-500 group-hover:text-primary transition-colors">
                VOUCHERS
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* PREMIUM MEGA DROPDOWN */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex ring-1 ring-black/5">
                  
                  {/* Sidebar Info */}
                  <div className="w-[240px] bg-gray-50/80 p-8 border-r border-gray-100">
                    <div className="h-10 w-10 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                      <Terminal size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Exam Vouchers</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">Access official exam vouchers for top-tier IT and Language certifications.</p>
                    <Link href="/course" className="text-xs font-bold text-primary flex items-center gap-2 group/link">
                      VIEW ALL COLLECTIONS <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Links Grid */}
                  <div className="flex-1 p-8">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2 py-0.5 border border-gray-200 rounded">IT SPECIALIZATIONS</span>
                      </div>
                      <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                        {IT_VOUCHERS.slice(0, 15).map((item) => (
                          <Link key={item} href={`/course?q=${encodeURIComponent(item)}`} className="text-[13px] font-medium text-gray-600 hover:text-primary transition-colors">
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-50">
                      <div className="flex items-center gap-2 mb-4 text-secondary">
                        <Languages size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">English Proficiency</span>
                      </div>
                      <div className="flex gap-6">
                        {ENGLISH_VOUCHERS.map((item) => (
                          <Link key={item} href={`/course?q=${encodeURIComponent(item)}`} className="text-sm font-bold text-gray-700 hover:text-secondary transition-colors">
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/training" className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${pathname === "/training" ? "bg-primary/10 text-primary" : "text-gray-500 hover:text-gray-900"}`}>TRAININGS</Link>
            <Link href="/about" className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${pathname === "/about" ? "bg-primary/10 text-primary" : "text-gray-500 hover:text-gray-900"}`}>ABOUT</Link>
          </nav>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-white transition-all">
              <Search className="w-4 h-4 text-gray-400" />
              <input 
                placeholder="Find a voucher..." 
                className="bg-transparent border-none text-sm focus:ring-0 ml-2 w-32 xl:w-48 text-gray-700"
              />
            </div>

            {/* MODERN CART LOGO */}
            <button
              onClick={() => router.push("/cart")}
              className="group relative p-3 bg-gray-50 hover:bg-primary/10 rounded-2xl transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-primary" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-primary text-[10px] font-bold text-white items-center justify-center">
                    {cartCount}
                  </span>
                </span>
              )}
            </button>

            <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden p-2">
              <Menu className="w-6 h-6 text-gray-900" />
            </button>

            <Link href="/contactus" className="hidden lg:flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-xs font-black tracking-widest rounded-2xl hover:bg-primary hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}