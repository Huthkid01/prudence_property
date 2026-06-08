import { Link } from "react-router-dom";
import {
  navLinks,
  servicesPreview,
  contactInfo,
  socialLinks,
} from "../../data/content";
import Icon from "../ui/Icon";
import Logo from "../ui/Logo";
import { HiPhone, HiEnvelope, HiMapPin } from "react-icons/hi2";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <div className="mb-5">
              <Logo variant="light" size="md" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Professional property management services focused on protecting
              property value and enhancing community living.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-accent hover:text-primary transition-colors"
                >
                  <Icon name={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Services</h3>
            <ul className="space-y-3">
              {servicesPreview.map((service) => (
                <li key={service.title}>
                  <Link
                    to={service.path}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <HiPhone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-accent transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <HiEnvelope className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <HiMapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>&copy; {currentYear} Prudence Property. All rights reserved.</p>
          <p>Property Management You Can Trust</p>
        </div>
      </div>
    </footer>
  );
}
