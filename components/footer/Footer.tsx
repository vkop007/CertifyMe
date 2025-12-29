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
    <footer className="bg-green-50/50 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                DEVSKILL
              </span>
              <div className="w-2 h-2 rounded-full bg-secondary mb-3"></div>
            </Link>
            <p className="text-text-light text-sm leading-relaxed mb-6">
              We are passionate about empowering learners. We provide with
              high-quality, accessible & engaging education.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-text-light hover:text-primary hover:shadow-md transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-text-dark mb-6">Company Us</h4>
            <ul className="space-y-4 text-sm text-text-light">
              {["About Us", "Our Team", "Careers", "Mentors", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-text-dark mb-6">Categories</h4>
            <ul className="space-y-4 text-sm text-text-light">
              {[
                "Design",
                "Development",
                "Marketing",
                "Business",
                "Photography",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-text-dark mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-text-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Education Street, Learning City, 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@devskill.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-light">
            © 2023 DevSkill. All rights reserved.
          </p>

          {/* Payment Icons Placeholder */}
          <div className="flex items-center gap-4 opacity-70 grayscale">
            <div className="h-6 w-10 bg-gray-300 rounded"></div>
            <div className="h-6 w-10 bg-gray-300 rounded"></div>
            <div className="h-6 w-10 bg-gray-300 rounded"></div>
            <div className="h-6 w-10 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
