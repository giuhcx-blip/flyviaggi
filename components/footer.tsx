'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n-context';
import { Plane, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { href: '/flights', key: 'nav.flights' },
  { href: '/tours', key: 'nav.tours' },
  { href: '/trains', key: 'nav.trains' },
  { href: '/visa', key: 'nav.visa' },
  { href: '/about', key: 'nav.about' },
  { href: '/contact', key: 'nav.contact' },
];

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-[#0A2647] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-6 w-6 text-[#F5A623]" />
              <span className="font-bold text-lg">{t('footer.brand')}</span>
            </div>
            <p className="text-sm text-gray-300 mb-2">WINGSUP S.R.L</p>
            <p className="text-sm text-gray-300">VIA FABIO FILZI 112</p>
            <p className="text-sm text-gray-300">59100 PRATO (PO), Italia</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('nav.home')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#F5A623] transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('home.contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-[#F5A623]" />
                <span>+39 0574 XXXXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-[#F5A623]" />
                <span>info@flyviaggi.it</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-[#F5A623]" />
                <span>Prato, Italia</span>
              </li>
            </ul>
            {/* Social */}
            <div className="flex gap-4 mt-4">
              <span className="text-sm text-gray-300">WhatsApp</span>
              <span className="text-sm text-gray-300">WeChat</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">{t('footer.copyright')}</p>
          <p className="text-sm text-gray-400 mt-2">P.IVA: 02632470973</p>
        </div>
      </div>
    </footer>
  );
}