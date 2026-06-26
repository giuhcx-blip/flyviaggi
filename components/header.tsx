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

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const supabase = await getSupabaseBrowserClientWithRetry();
        const { data: { session } } = await supabase.auth.getSession();
        setIsLoggedIn(!!session);
        // TODO: Fetch user role from database
        // For now, default to retail
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

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A2647] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Plane className="h-6 w-6 text-[#F5A623]" />
            <span className="font-bold text-lg">FlyViaggi</span>
            {/* Discount Badge */}
            <span className="hidden sm:inline-flex items-center gap-1 bg-[#E2001A] text-white text-xs px-2 py-0.5 rounded-full ml-2">
              <Train className="w-3 h-3" />
              -40%
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  link.highlight 
                    ? 'text-[#E2001A] hover:text-[#c00017]' 
                    : 'hover:text-[#F5A623]'
                }`}
              >
                {t(link.key)}
                {link.highlight && (
                  <span className="bg-[#E2001A] text-white text-xs px-1.5 py-0.5 rounded">-40%</span>
                )}
              </Link>
            ))}
            
            {/* Agent Link */}
            <Link 
              href="/agent/register" 
              className="text-sm font-medium text-[#F5A623] hover:text-[#e09000] transition-colors flex items-center gap-1"
            >
              <Users className="w-4 h-4" />
              {t('home.agentLink')}
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            {/* Role-based navigation */}
            {userRole === 'agent' && (
              <Link href="/agent/dashboard" className="hidden md:flex">
                <Button variant="outline" size="sm" className="text-[#F5A623] border-[#F5A623] hover:bg-[#F5A623]/10">
                  {t('nav.agent')}
                </Button>
              </Link>
            )}
            {userRole === 'admin' && (
              <Link href="/admin" className="hidden md:flex">
                <Button variant="outline" size="sm" className="text-[#E2001A] border-[#E2001A] hover:bg-[#E2001A]/10">
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
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0A2647] text-white">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors flex items-center gap-2 ${
                        link.highlight 
                          ? 'text-[#E2001A]' 
                          : 'hover:text-[#F5A623]'
                      }`}
                    >
                      {t(link.key)}
                      {link.highlight && (
                        <span className="bg-[#E2001A] text-white text-xs px-2 py-1 rounded">40% OFF</span>
                      )}
                    </Link>
                  ))}
                  <hr className="border-white/20 my-2" />
                  <Link
                    href="/agent/register"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-[#F5A623] hover:text-[#e09000] transition-colors flex items-center gap-2"
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