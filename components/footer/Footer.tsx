import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-50/50 pt-14 lg:pt-20 pb-8">
      <div className="container-custom px-4 md:px-6">

        {/* TOP SECTION */}
        <div
          className="
            flex flex-col
            lg:flex-row lg:justify-between
            gap-10 lg:gap-12
            mb-12
          "
        >
          {/* BRAND */}
          <div className="text-center lg:text-left">
            <Link
              href="/"
              className="flex justify-center lg:justify-start items-center gap-2 mb-4"
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                CERTIFY
              </span>
              <span className="w-2 h-2 rounded-full bg-secondary mb-2"></span>
            </Link>

            <p className="text-text-light text-sm leading-relaxed mb-5 max-w-sm mx-auto lg:mx-0">
              Certifyme focuses on availing discounted vouchers to help you
              achieve your certification goals affordably.
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    w-9 h-9 rounded-full bg-white
                    flex items-center justify-center
                    text-text-light
                    hover:text-primary hover:shadow-md
                    transition-all
                  "
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="text-center lg:text-left">
            <h4 className="font-bold text-text-dark mb-4">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm text-text-light max-w-sm mx-auto lg:mx-0">
              <li className="flex items-start justify-center lg:justify-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Education Street, Learning City, 10001</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@certify.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-xs md:text-sm text-text-light text-center">
            © 2026 Certifyme. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
