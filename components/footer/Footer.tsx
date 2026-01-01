"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- MAIN FOOTER GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. BRAND & DESCRIPTION */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-xl text-white font-bold text-xl rotate-3 group-hover:rotate-0 transition-transform">
                C
              </div>
              <span className="text-2xl font-black tracking-tight text-gray-900">CERTIFY<span className="text-primary">.</span></span>
            </Link>
            
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Your trusted partner for authentic exam vouchers. We provide the most affordable path to industry-leading certifications with instant delivery.
            </p>

            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. QUICK LINKS (From Header) */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Explore</h4>
            <ul className="space-y-4">
              {[
                { label: "Home", path: "/" },
                { label: "Vouchers", path: "/course" },
                { label: "Trainings", path: "/training" },
                { label: "About Us", path: "/about" },
                { label: "Contact Us", path: "/contactus" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="text-sm font-medium text-gray-500 hover:text-primary flex items-center group transition-colors">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. VOUCHER CATEGORIES */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Top Vendors</h4>
            <ul className="space-y-4">
              {["AWS Vouchers", "Microsoft Vouchers", "GCP Certifications", "Cisco Vouchers", "PMP Vouchers"].map((item) => (
                <li key={item}>
                  <Link href="/course" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONTACT INFO */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Get In Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                    <MapPin size={18} />
                </div>
                <span className="text-sm text-gray-500 leading-tight pt-1">
                  123 Education Street, <br /> Learning City, 10001
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                    <Phone size={18} />
                </div>
                <span className="text-sm font-bold text-gray-700">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                    <Mail size={18} />
                </div>
                <span className="text-sm font-bold text-gray-700">info@certify.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM STRIP --- */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-gray-400">
            © {currentYear} Certify Vouchers. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs font-medium text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs font-medium text-gray-400 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}