'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n-context';
import { Plane, Train, Map, FileText, Users, ArrowRight, MessageCircle } from 'lucide-react';

export default function HomePage() {
  const { t } = useI18n();

  const services = [
    { key: 'flights', icon: Plane, href: '/flights', color: 'bg-[#0A2647]' },
    { key: 'trains', icon: Train, href: '/trains', color: 'bg-[#E2001A]', highlight: true },
    { key: 'tours', icon: Map, href: '/tours', color: 'bg-[#0A2647]' },
    { key: 'visa', icon: FileText, href: '/visa', color: 'bg-[#0A2647]' },
  ];

  const popularRoutes = [
    { from: '米兰', to: '罗马', price: '€29', time: '3h 10min' },
    { from: '佛罗伦萨', to: '威尼斯', price: '€25', time: '2h 05min' },
    { from: '米兰', to: '佛罗伦萨', price: '€22', time: '1h 45min' },
    { from: '罗马', to: '那不勒斯', price: '€18', time: '1h 10min' },
  ];

  const testimonials = [
    { name: '王先生', content: '火车票折扣真的很划算，客服响应很快！', rating: 5 },
    { name: '李女士', content: '签证办理很顺利，全程都有专人跟进。', rating: 5 },
    { name: '张先生', content: '代理后台很方便，批量下单节省很多时间。', rating: 5 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A2647] to-[#1a3a5c] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516483638261-f4dbaf03396f?w=1920')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center">
            {/* Discount Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E2001A] text-white px-6 py-3 rounded-full mb-6 shadow-lg animate-pulse">
              <span className="font-bold text-2xl">{t('home.discountBadge')}</span>
              <span className="text-sm">{t('home.discountLabel')}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('home.heroTitle')}</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">{t('home.heroSubtitle')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/trains" 
                className="inline-flex items-center justify-center gap-2 bg-[#E2001A] hover:bg-[#c00017] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <Train className="w-5 h-5" />
                {t('home.heroCta')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/flights" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all border border-white/30"
              >
                <Plane className="w-5 h-5" />
                {t('home.heroSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#0A2647] text-center mb-12">{t('home.servicesTitle')}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link 
              key={service.key}
              href={service.href}
              className={`group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 ${service.highlight ? 'ring-2 ring-[#E2001A]' : ''}`}
            >
              {service.highlight && (
                <div className="absolute -top-3 -right-3 bg-[#E2001A] text-white text-xs font-bold px-2 py-1 rounded-full">
                  -40%
                </div>
              )}
              <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-[#0A2647] mb-1">{t(`home.services.${service.key}`)}</h3>
              <p className="text-sm text-gray-500">{t(`home.services.${service.key}Desc`)}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Agent Link */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <Link 
          href="/agent/register"
          className="group flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#F5A623]/10 to-[#E2001A]/10 rounded-2xl p-8 border border-[#F5A623]/30 hover:border-[#F5A623] transition-all"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Users className="w-12 h-12 text-[#F5A623]" />
            <div>
              <h3 className="font-bold text-[#0A2647] text-lg">{t('home.agentLink')}</h3>
              <p className="text-gray-600">{t('home.agentDesc')}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#F5A623] font-semibold group-hover:gap-4 transition-all">
            {t('common.learnMore')}
            <ArrowRight className="w-5 h-5" />
          </div>
        </Link>
      </section>

      {/* Popular Routes */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0A2647] text-center mb-12">{t('home.popularRoutes')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularRoutes.map((route, idx) => (
              <Link 
                key={idx}
                href="/trains"
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-[#0A2647]">{route.from}</span>
                  <Train className="w-4 h-4 text-[#E2001A]" />
                  <span className="font-semibold text-[#0A2647]">{route.to}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{route.time}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[#E2001A] font-bold">{route.price}</span>
                    <span className="bg-[#E2001A] text-white text-xs px-2 py-0.5 rounded">Prima Flex</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/trains"
              className="inline-flex items-center gap-2 text-[#E2001A] font-semibold hover:underline"
            >
              {t('common.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#0A2647] text-center mb-12">{t('home.testimonials')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F5A623]/20 flex items-center justify-center text-[#F5A623] font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#0A2647]">{item.name}</p>
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-[#F5A623]">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#0A2647] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('home.contactUs')}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all">
              <MessageCircle className="w-5 h-5" />
              {t('common.whatsapp')}
            </a>
            <a href="#" className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.5c0 2.212 1.17 4.2 3.06 5.545-.16.598-.84 3.076-.87 3.277-.04.262.1.26.22.235.09-.014 1.47-.945 2.645-1.715.59.114 1.22.174 1.87.174 4.8 0 8.69-3.286 8.69-7.31 0-4.025-3.89-7.31-8.69-7.31zm5.08 5.77l-4.2 4.2c-.16.16-.38.24-.6.24-.22 0-.44-.08-.6-.24l-2.1-2.1c-.32-.32-.32-.84 0-1.16.32-.32.84-.32 1.16 0l1.5 1.5 3.54-3.54c.32-.32.84-.32 1.16 0 .32.32.32.84 0 1.16z"/>
              </svg>
              {t('common.wechat')}
            </a>
            <a href="#" className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('common.phone')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}