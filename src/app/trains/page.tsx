'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n-context';
import { Train, Clock, Tag, ArrowRight, CreditCard, CheckCircle } from 'lucide-react';

export default function TrainsPage() {
  const { t } = useI18n();

  const trainResults = [
    {
      carrier: 'Italo',
      type: 'Prima Flex',
      departure: '08:30',
      arrival: '11:40',
      duration: '3h 10min',
      price: 29,
      originalPrice: 49,
      discount: 40,
    },
    {
      carrier: 'Trenitalia',
      type: 'Frecciarossa',
      departure: '09:00',
      arrival: '12:00',
      duration: '3h 00min',
      price: 35,
      originalPrice: 55,
      discount: 36,
    },
    {
      carrier: 'Italo',
      type: 'Prima Flex',
      departure: '10:15',
      arrival: '13:25',
      duration: '3h 10min',
      price: 29,
      originalPrice: 49,
      discount: 40,
    },
    {
      carrier: 'Trenitalia',
      type: 'Frecciarossa',
      departure: '11:30',
      arrival: '14:20',
      duration: '2h 50min',
      price: 42,
      originalPrice: 60,
      discount: 30,
    },
  ];

  const popularRoutes = [
    { from: '米兰', to: '罗马', fromIt: 'Milano', toIt: 'Roma' },
    { from: '佛罗伦萨', to: '威尼斯', fromIt: 'Firenze', toIt: 'Venezia' },
    { from: '米兰', to: '佛罗伦萨', fromIt: 'Milano', toIt: 'Firenze' },
    { from: '罗马', to: '那不勒斯', fromIt: 'Roma', toIt: 'Napoli' },
    { from: '威尼斯', to: '罗马', fromIt: 'Venezia', toIt: 'Roma' },
    { from: '米兰', to: '威尼斯', fromIt: 'Milano', toIt: 'Venezia' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero with Search */}
      <section className="bg-gradient-to-br from-[#E2001A] to-[#c00017] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <Tag className="w-5 h-5" />
              <span className="font-semibold">{t('trains.promoTitle')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('trains.title')}</h1>
            <p className="text-xl text-white/80">{t('trains.subtitle')}</p>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-[#0A2647] mb-2">{t('trains.search.from')}</label>
                <input 
                  type="text" 
                  placeholder={t('trains.search.placeholderFrom')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E2001A] focus:ring-2 focus:ring-[#E2001A]/20 outline-none transition-all text-gray-700"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-[#0A2647] mb-2">{t('trains.search.to')}</label>
                <input 
                  type="text" 
                  placeholder={t('trains.search.placeholderTo')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E2001A] focus:ring-2 focus:ring-[#E2001A]/20 outline-none transition-all text-gray-700"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-[#0A2647] mb-2">{t('trains.search.date')}</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E2001A] focus:ring-2 focus:ring-[#E2001A]/20 outline-none transition-all text-gray-700"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-[#0A2647] mb-2">{t('trains.search.passengers')}</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E2001A] focus:ring-2 focus:ring-[#E2001A]/20 outline-none transition-all text-gray-700">
                  {[1, 2, 3, 4, 5].map(n => (
                    <option key={n} value={n}>{n} 人</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="inline-flex items-center gap-2 bg-[#E2001A] hover:bg-[#c00017] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg">
                <Train className="w-5 h-5" />
                {t('trains.search.submit')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-[#E2001A]/10 to-[#F5A623]/10 rounded-2xl p-6 border border-[#E2001A]/30">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-[#E2001A] text-white px-6 py-3 rounded-full font-bold text-xl">
              Prima Flex -40%
            </div>
            <p className="text-[#0A2647]">{t('trains.promoDesc')}</p>
          </div>
        </div>
      </section>

      {/* Sample Results */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-[#0A2647] mb-6">{t('trains.results.title')}</h2>
        <div className="space-y-4">
          {trainResults.map((train, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Carrier Info */}
                <div className="flex items-center gap-4">
                  <div className={`${train.carrier === 'Italo' ? 'bg-[#E2001A]' : 'bg-[#0A2647]'} w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold`}>
                    {train.carrier === 'Italo' ? 'AGV' : 'FR'}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A2647]">{train.carrier}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{train.type}</span>
                      {train.discount >= 40 && (
                        <span className="bg-[#E2001A] text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                          {t('trains.results.discount')} {train.discount}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Time Info */}
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-xl font-bold text-[#0A2647]">{train.departure}</p>
                    <p className="text-sm text-gray-500">{t('trains.results.departure')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{train.duration}</span>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-[#0A2647]">{train.arrival}</p>
                    <p className="text-sm text-gray-500">{t('trains.results.arrival')}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#E2001A]">€{train.price}</p>
                    <p className="text-sm text-gray-400 line-through">€{train.originalPrice}</p>
                  </div>
                  <button className="bg-[#E2001A] hover:bg-[#c00017] text-white px-6 py-3 rounded-xl font-semibold transition-all">
                    {t('trains.results.select')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-[#0A2647] mb-4">{t('trains.booking.payment')}</h3>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
              <CreditCard className="w-5 h-5 text-[#0A2647]" />
              <span className="text-sm">Stripe</span>
            </div>
            {/* WeChat/Alipay Icons - Visual Only */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#07C160]/10 rounded-lg">
              <svg className="w-5 h-5 text-[#07C160]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.5c0 2.212 1.17 4.2 3.06 5.545-.16.598-.84 3.076-.87 3.277-.04.262.1.26.22.235.09-.014 1.47-.945 2.645-1.715.59.114 1.22.174 1.87.174 4.8 0 8.69-3.286 8.69-7.31 0-4.025-3.89-7.31-8.69-7.31z"/>
              </svg>
              <span className="text-sm">{t('common.wechat')}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1677FF]/10 rounded-lg">
              <svg className="w-5 h-5 text-[#1677FF]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 13.6c-.48.48-1.12.72-1.76.72s-1.28-.24-1.76-.72l-1.92-1.92-1.92 1.92c-.48.48-1.12.72-1.76.72s-1.28-.24-1.76-.72c-.96-.96-.96-2.56 0-3.52l1.92-1.92-1.92-1.92c-.96-.96-.96-2.56 0-3.52s2.56-.96 3.52 0l1.92 1.92 1.92-1.92c.96-.96 2.56-.96 3.52 0s.96 2.56 0 3.52l-1.92 1.92 1.92 1.92c.96.96.96 2.56 0 3.52z"/>
              </svg>
              <span className="text-sm">{t('common.alipay')}</span>
            </div>
            <div className="text-sm text-gray-500">
              <CheckCircle className="w-4 h-4 inline mr-1 text-green-500" />
              华人客户放心支付
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes Quick Links */}
      <section className="max-w-7xl mx-auto px-4 py-8 pb-16">
        <h2 className="text-2xl font-bold text-[#0A2647] mb-6">{t('trains.popularRoutes')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularRoutes.map((route, idx) => (
            <button key={idx} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg hover:border-[#E2001A] border border-transparent transition-all text-center">
              <p className="font-semibold text-[#0A2647]">{route.from}</p>
              <p className="text-xs text-gray-400">{route.fromIt}</p>
              <Train className="w-4 h-4 mx-auto my-2 text-[#E2001A]" />
              <p className="font-semibold text-[#0A2647]">{route.to}</p>
              <p className="text-xs text-gray-400">{route.toIt}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}