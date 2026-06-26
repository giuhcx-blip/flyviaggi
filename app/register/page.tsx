'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n-context';
import { useSupabaseConfig } from '@/lib/supabase-config-inject';
import { getSupabaseBrowserClientWithRetry } from '@/lib/supabase-browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

const APP_CONFIG = {
  icon_url: 'https://coze-coding-project.tos.coze.site/gen_project_icon/2026-06-25/7654989463948427264_1782318998.png?sign=4904383514-3ab2b0ba92-0-1f38aa68e20df3ab5775e13f95becd654e43e80370bc5b40ed3738d0f9860d5e',
  name: '飞扬旅行社官网',
};

export default function RegisterPage() {
  const { t } = useI18n();
  const router = useRouter();
  const { isLoading } = useSupabaseConfig();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // 检查是否已登录
    const checkAuth = async () => {
      try {
        const supabase = await getSupabaseBrowserClientWithRetry();
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          router.replace('/');
        }
      } catch {
        // 未登录，继续显示注册页
      }
    };
    if (!isLoading) {
      checkAuth();
    }
  }, [isLoading, router]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // 验证密码
    if (password.length < 6) {
      setError('密码长度至少6位');
      return;
    }

    if (password !== confirmPassword) {
      setError('两次输入的密码不一致');
      return;
    }

    setIsSubmitting(true);

    try {
      const supabase = await getSupabaseBrowserClientWithRetry();
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: email.split('@')[0],
          }
        }
      });

      if (error) {
        if (error.message.includes('already registered')) {
          setError('该邮箱已注册，请直接登录');
        } else {
          setError(error.message);
        }
        return;
      }

      // 注册成功，由于 mailer_auto_confirm: true，自动确认，直接跳转首页
      if (data.session) {
        router.replace('/');
      } else {
        // 如果没有自动确认，提示用户
        setError('注册成功，请登录');
        router.push('/login');
      }
    } catch (err) {
      setError('注册失败，请稍后重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
        <Loader2 className="h-8 w-8 animate-spin text-[#0A2647]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7] p-4">
      <Card className="w-full max-w-md bg-white rounded-xl shadow-lg">
        <CardContent className="p-8">
          {/* App Icon and Name */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-xl overflow-hidden mb-4">
              <Image
                src={APP_CONFIG.icon_url}
                alt={APP_CONFIG.name}
                width={64}
                height={64}
                className="object-cover"
                unoptimized
              />
            </div>
            <h1 className="text-xl font-bold text-[#0A2647]">{APP_CONFIG.name}</h1>
          </div>

          {/* Register Form */}
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-[#0A2647]">{t('common.email')}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="mt-2"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-[#0A2647]">密码</Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="至少6位密码"
                  className="pr-10"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-[#0A2647]">确认密码</Label>
              <div className="relative mt-2">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="再次输入密码"
                  className="pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#F5A623] hover:bg-[#e5951f] text-[#0A2647] font-semibold py-4 rounded-xl"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                t('account.register')
              )}
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <Link 
              href="/login"
              className="text-sm text-[#0A2647] hover:text-[#F5A623] transition-colors"
            >
              已有账号？去登录
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}