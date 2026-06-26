'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useI18n } from '@/lib/i18n-context';
import { useSupabaseConfig } from '@/lib/supabase-config-inject';
import { getSupabaseBrowserClientWithRetry } from '@/lib/supabase-browser';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { User, Mail, LogOut, Loader2, ChevronRight, Plane } from 'lucide-react';
import Link from 'next/link';

interface UserData {
  id: string;
  email: string;
  full_name?: string;
  created_at: string;
}

export default function AccountPage() {
  const { t } = useI18n();
  const router = useRouter();
  const { isLoading } = useSupabaseConfig();
  
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const supabase = await getSupabaseBrowserClientWithRetry();
        const { data: { user: authUser } } = await supabase.auth.getUser();
        
        if (!authUser) {
          router.replace('/login');
          return;
        }

        setUser({
          id: authUser.id,
          email: authUser.email || '',
          full_name: authUser.user_metadata?.full_name,
          created_at: authUser.created_at,
        });
      } catch {
        router.replace('/login');
      } finally {
        setIsLoadingUser(false);
      }
    };

    if (!isLoading) {
      fetchUser();
    }
  }, [isLoading, router]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const supabase = await getSupabaseBrowserClientWithRetry();
      await supabase.auth.signOut();
      router.replace('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    } finally {
      setIsLoggingOut(false);
      setShowLogoutDialog(false);
    }
  };

  if (isLoading || isLoadingUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
        <Loader2 className="h-8 w-8 animate-spin text-[#0A2647]" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const menuItems = [
    { icon: Plane, label: t('account.orders'), href: '/account/orders' },
    { icon: User, label: t('account.profile'), href: '#' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
            <User className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold">{user.full_name || user.email.split('@')[0]}</h1>
          <p className="text-gray-200 mt-2">{user.email}</p>
        </div>
      </section>

      {/* User Info */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Mail className="h-5 w-5 text-[#F5A623]" />
                <div>
                  <p className="text-sm text-gray-500">{t('common.email')}</p>
                  <p className="font-medium text-[#0A2647]">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <User className="h-5 w-5 text-[#F5A623]" />
                <div>
                  <p className="text-sm text-gray-500">用户名</p>
                  <p className="font-medium text-[#0A2647]">{user.full_name || '未设置'}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm">
            <CardContent className="p-0">
              {menuItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-6 hover:bg-gray-50 transition-colors border-b last:border-b-0"
                >
                  <item.icon className="h-5 w-5 text-[#F5A623]" />
                  <span className="font-medium text-[#0A2647]">{item.label}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400 ml-auto" />
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Logout Button */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Button 
              variant="outline"
              className="w-full border-red-500 text-red-500 hover:bg-red-50 rounded-xl py-6 gap-2"
              onClick={() => setShowLogoutDialog(true)}
            >
              <LogOut className="h-5 w-5" />
              退出登录
            </Button>
          </div>
        </div>
      </section>

      {/* Logout Dialog */}
      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent className="bg-white rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-[#0A2647]">确认退出登录</DialogTitle>
            <DialogDescription>
              退出登录后需要重新登录才能访问您的账户。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setShowLogoutDialog(false)}
              className="rounded-xl"
            >
              取消
            </Button>
            <Button 
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="bg-red-500 hover:bg-red-600 text-white rounded-xl"
            >
              {isLoggingOut ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                '确认退出'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}