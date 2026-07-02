'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n-context';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { href: '/flights', label: '机票' },
  { href: '/trains', label: '火车票' },
  { href: '/tours', label: '旅游团' },
  { href: '/visa', label: '签证' },
  { href: '/about', label: '关于我们' },
  { href: '/contact', label: '联系我们' },
];

const agentLinks = [
  { href: '/agent/register', label: '代理注册' },
  { href: '/agent', label: '代理后台' },
  { href: '#', label: '批发价格' },
];

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="premium-footer text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/assets/logo.png" alt="飞扬旅行社" width={40} height={40} className="drop-shadow-lg" />
              <span className="font-extrabold text-xl"
                style={{ background: 'linear-gradient(135deg, #fff 0%, #F5A623 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                飞扬旅行社
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-3">WINGSUP S.R.L</p>
            <p className="text-white/70 text-sm leading-relaxed">VIA FABIO FILZI 112</p>
            <p className="text-white/70 text-sm leading-relaxed">59100 PRATO (PO), Italia</p>
            <p className="text-white/50 text-xs mt-3">P.IVA: 02632470973</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white/90">快速链接</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[#F5A623] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white/90">联系我们</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:0574074555" className="flex items-center gap-3 text-sm text-white/60 hover:text-[#F5A623] transition-colors">
                  <Phone className="w-4 h-4 text-[#F5A623]" />
                  0574.074555
                </a>
              </li>
              <li>
                <a href="mailto:info@flyviaggi.it" className="flex items-center gap-3 text-sm text-white/60 hover:text-[#F5A623] transition-colors">
                  <Mail className="w-4 h-4 text-[#F5A623]" />
                  info@flyviaggi.it
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-sm text-white/60 hover:text-[#F5A623] transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#F5A623]" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-sm text-white/60 hover:text-[#F5A623] transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#F5A623]" />
                  微信
                </a>
              </li>
            </ul>
          </div>

          {/* Agent Services */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white/90">代理服务</h3>
            <ul className="space-y-3">
              {agentLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[#F5A623] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/40">© 2026 FlyViaggi 飞扬旅行社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
