import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import { I18nProvider } from '@/lib/i18n-context';
import { SupabaseConfigProvider } from '@/lib/supabase-config-inject';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: 'FlyViaggi 飞扬旅行社',
    template: '%s | FlyViaggi',
  },
  description: 'FlyViaggi 飞扬旅行社 - 意大利普拉托华人旅行社，提供机票、旅游团、火车票、签证等综合服务。',
  keywords: [
    'FlyViaggi',
    '飞扬旅行社',
    '意大利旅行社',
    '普拉托旅行社',
    '机票预订',
    '旅游团',
    '火车票',
    '签证服务',
    'Italo',
    '意中往返',
  ],
  authors: [{ name: 'FlyViaggi', url: 'https://flyviaggi.it' }],
  generator: 'Next.js',
  openGraph: {
    title: 'FlyViaggi 飞扬旅行社 | 你的意大利旅行伙伴',
    description: '专业服务，温暖相伴。意中往返机票、旅游团、火车票、签证服务。',
    url: 'https://flyviaggi.it',
    siteName: 'FlyViaggi',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh">
      <body className={`antialiased min-h-screen`}>
        <I18nProvider>
          <SupabaseConfigProvider>
            {isDev && <Inspector />}
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </SupabaseConfigProvider>
        </I18nProvider>
      </body>
    </html>
  );
}