'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n-context';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Plane, Train, Menu, User, LogIn, Users } from 'lucide-react';
import LanguageSwitcher from './language-switcher';
import { useSupabaseConfig } from '@/lib/supabase-config-inject';
import { getSupabaseBrowserClientWithRetry } from '@/lib/supabase-browser';
import Image from 'next/image';

const navLinks = [
  { href: '/', key: 'nav.home' },
  { href: '/flights', key: 'nav.flights' },
  { href: '/trains', key: 'nav.trains', highlight: true },
  { href: '/tours', key: 'nav.tours' },
  { href: '/visa', key: 'nav.visa' },
  { href: '/about', key: 'nav.about' },
  { href: '/contact', key: 'nav.contact' },
];

export default function Header() {
  const { t } = useI18n();
  const { isLoading: isConfigLoading } = useSupabaseConfig();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'retail' | 'agent' | 'admin'>('retail');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const supabase = await getSupabaseBrowserClientWithRetry();
        const { data: { session } } = await supabase.auth.getSession();
        setIsLoggedIn(!!session);
        setUserRole('retail');
      } catch {
        setIsLoggedIn(false);
        setUserRole('retail');
      }
    };
    if (!isConfigLoading) {
      checkAuth();
    }
  }, [isConfigLoading]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 premium-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image src="/assets/logo.png" alt="飞扬旅行社" width={44} height={44} className="drop-shadow-lg" />
            <span className="font-extrabold text-xl text-white hidden sm:block"
              style={{ background: 'linear-gradient(135deg, #fff 0%, #F5A623 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              飞扬旅行社
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-premium text-sm font-medium text-white/90 hover:text-white transition-colors flex items-center gap-1.5`}
              >
                {t(link.key)}
                {link.highlight && (
                  <span className="text-xs px-1.5 py-0.5 rounded-md text-white font-bold"
                    style={{ background: 'linear-gradient(135deg, #E2001A, #FF6B6B)' }}>
                    -40%
                  </span>
                )}
              </Link>
            ))}

            {/* Agent Link */}
            <Link
              href="/agent/register"
              className="nav-link-premium text-sm font-medium text-[#F5A623] hover:text-[#FFD700] transition-colors flex items-center gap-1.5"
            >
              <Users className="w-4 h-4" />
              {t('home.agentLink')}
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            {/* Role-based navigation */}
            {userRole === 'agent' && (
              <Link href="/agent/dashboard" className="hidden md:flex">
                <Button variant="outline" size="sm" className="text-[#F5A623] border-[#F5A623]/50 hover:bg-[#F5A623]/10 backdrop-blur-sm bg-white/5">
                  {t('nav.agent')}
                </Button>
              </Link>
            )}
            {userRole === 'admin' && (
              <Link href="/admin" className="hidden md:flex">
                <Button variant="outline" size="sm" className="text-[#FF6B6B] border-[#FF6B6B]/50 hover:bg-[#FF6B6B]/10 backdrop-blur-sm bg-white/5">
                  {t('nav.admin')}
                </Button>
              </Link>
            )}

            {/* User Account */}
            <Link href={isLoggedIn ? '/account' : '/login'}>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                {isLoggedIn ? (
                  <User className="h-5 w-5" />
                ) : (
                  <LogIn className="h-5 w-5" />
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0A2647]/95 backdrop-blur-xl text-white border-white/10">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors flex items-center gap-2 ${
                        link.highlight ? 'text-[#FF6B6B]' : 'hover:text-[#F5A623]'
                      }`}
                    >
                      {t(link.key)}
                      {link.highlight && (
                        <span className="text-xs px-2 py-0.5 rounded text-white"
                          style={{ background: 'linear-gradient(135deg, #E2001A, #FF6B6B)' }}>
                          -40%
                        </span>
                      )}
                    </Link>
                  ))}
                  <hr className="border-white/20 my-2" />
                  <Link
                    href="/agent/register"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-[#F5A623] hover:text-[#FFD700] transition-colors flex items-center gap-2"
                  >
                    <Users className="w-5 h-5" />
                    {t('home.agentLink')}
                  </Link>
                  <Link
                    href={isLoggedIn ? '/account' : '/login'}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-[#F5A623] transition-colors flex items-center gap-2"
                  >
                    {isLoggedIn ? <User className="w-5 h-5" /> : <LogIn className="w-5 h-5" />}
                    {isLoggedIn ? t('nav.account') : t('account.login')}
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
