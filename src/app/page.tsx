'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n-context';
import { Plane, Train, Map, FileText, Users, ArrowRight, MessageCircle, Star, Shield, Clock, Heart } from 'lucide-react';
import Particles from '@/components/particles';
import { useEffect, useRef } from 'react';

export default function HomePage() {
  const { t } = useI18n();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.premium-fade-in').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    { key: 'flights', icon: '✈️', href: '/flights', desc: '优质航线，贴心服务，专业团队为您保驾护航' },
    { key: 'trains', icon: '🚄', href: '/trains', desc: 'Italo Prima Flex 高达 40% 折扣，提前预订更省钱', highlight: true },
    { key: 'tours', icon: '🏛️', href: '/tours', desc: '精选路线，深度体验，专业导游全程陪同' },
    { key: 'visa', icon: '📋', href: '/visa', desc: '专业办理，快速高效，一站式解决方案' },
  ];

  const stats = [
    { value: '40%', label: '最高折扣' },
    { value: '2000+', label: '服务客户' },
    { value: '50+', label: '热门路线' },
    { value: '24/7', label: '客服支持' },
  ];

  const popularRoutes = [
    { from: '米兰', to: '罗马', price: '€29', original: '€49', time: '3h 10min' },
    { from: '佛罗伦萨', to: '威尼斯', price: '€25', original: '€42', time: '2h 05min' },
    { from: '米兰', to: '佛罗伦萨', price: '€22', original: '€37', time: '1h 45min' },
    { from: '罗马', to: '那不勒斯', price: '€18', original: '€30', time: '1h 10min' },
  ];

  const testimonials = [
    { name: '王先生', initial: '王', content: '"火车票折扣真的很划算，客服响应很快！每次出行都选择飞扬旅行社，省时又省钱。"', rating: 5 },
    { name: '李女士', initial: '李', content: '"签证办理很顺利，全程都有专人跟进。材料准备得很细致，一次通过！"', rating: 5 },
    { name: '张先生', initial: '张', content: '"代理后台很方便，批量下单节省很多时间。作为旅行社合作伙伴，非常推荐！"', rating: 5 },
  ];

  const features = [
    { icon: Shield, title: '安全保障', desc: '正规注册旅行社，资金安全有保障' },
    { icon: Clock, title: '极速出票', desc: '下单后最快10分钟出票，不耽误行程' },
    { icon: Heart, title: '华人服务', desc: '中文客服全程服务，沟通零障碍' },
    { icon: Star, title: '品质体验', desc: '精选合作伙伴，确保服务品质' },
  ];

  return (
    <>
      {/* Fixed Gradient Background */}
      <div className="premium-gradient-bg" />
      <Particles />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="premium-fade-in inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 glass-card" style={{ animationDelay: '0.1s' }}>
              <span className="text-xl">🎫</span>
              <span className="text-white/90 text-lg font-medium">Prima Flex 特惠</span>
            </div>

            {/* Main Title */}
            <h1 className="premium-fade-in text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight hero-title-gradient">
              {t('home.heroTitle')}
            </h1>

            {/* Subtitle */}
            <p className="premium-fade-in text-xl md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
              华人专属服务，提前购票享最高折扣
            </p>

            {/* CTA Buttons */}
            <div className="premium-fade-in flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/trains"
                className="btn-glow inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-lg font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #F5A623, #FF6B6B)' }}
              >
                立即购票
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/flights"
                className="btn-glow inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-lg font-bold text-white glass-card"
              >
                <Plane className="w-5 h-5" />
                机票查询
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative px-4 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="premium-fade-in glass-card rounded-2xl p-8 text-center">
                <div className="stat-number-glow text-4xl md:text-5xl font-black mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="premium-fade-in text-3xl md:text-4xl font-black text-center text-[#0A2647] mb-4">
              为什么选择飞扬
            </h2>
            <p className="premium-fade-in text-center text-gray-500 mb-12 max-w-2xl mx-auto">
              专业服务，温暖相伴。我们是您在意大利最值得信赖的旅行伙伴
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="premium-fade-in group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-[#667eea]/5 hover:to-[#f093fb]/5 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{ background: 'linear-gradient(135deg, #667eea20, #764ba220)' }}>
                    <feat.icon className="w-7 h-7 text-[#667eea]" />
                  </div>
                  <h3 className="font-bold text-[#0A2647] mb-2">{feat.title}</h3>
                  <p className="text-sm text-gray-500">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="premium-fade-in text-3xl md:text-4xl font-black text-center text-[#0A2647] mb-12">
              {t('home.servicesTitle')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service) => (
                <Link
                  key={service.key}
                  href={service.href}
                  className="premium-fade-in group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
                >
                  {service.highlight && (
                    <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-white text-xs font-bold"
                      style={{ background: 'linear-gradient(135deg, #E2001A, #FF6B6B)' }}>
                      -40%
                    </div>
                  )}
                  <div className="text-4xl mb-4 service-icon-hover">{service.icon}</div>
                  <h3 className="font-bold text-[#0A2647] mb-2">{t(`home.services.${service.key}`)}</h3>
                  <p className="text-sm text-gray-500">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Agent Partnership */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/agent/register"
              className="premium-fade-in group flex flex-col md:flex-row items-center justify-between rounded-3xl p-10 border-2 transition-all duration-300 hover:border-[#F5A623] hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, rgba(245,166,35,0.05), rgba(230,0,26,0.05))' }}
            >
              <div className="flex items-center gap-5 mb-4 md:mb-0">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #F5A623, #FF6B6B)' }}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A2647] text-xl mb-1">{t('home.agentLink')}</h3>
                  <p className="text-gray-600">{t('home.agentDesc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all"
                style={{ color: '#F5A623' }}>
                {t('common.learnMore')}
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="premium-fade-in text-3xl md:text-4xl font-black text-center text-[#0A2647] mb-12">
              {t('home.popularRoutes')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {popularRoutes.map((route, idx) => (
                <Link
                  key={idx}
                  href="/trains"
                  className="premium-fade-in group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#0A2647]">{route.from}</span>
                      <Train className="w-4 h-4 text-[#667eea]" />
                      <span className="font-bold text-[#0A2647]">{route.to}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-3">{route.time}</div>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-2xl font-black" style={{ color: '#E2001A' }}>{route.price}</span>
                      <span className="text-sm text-gray-400 line-through ml-2">{route.original}</span>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 rounded-md text-white"
                      style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                      Prima Flex
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/trains"
                className="premium-fade-in inline-flex items-center gap-2 font-semibold text-[#667eea] hover:text-[#764ba2] transition-colors"
              >
                {t('common.viewAll')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="premium-fade-in text-3xl md:text-4xl font-black text-center text-[#0A2647] mb-12">
              {t('home.testimonials')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((item, idx) => (
                <div key={idx} className="premium-fade-in bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                      {item.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2647]">{item.name}</h4>
                      <div className="flex gap-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="premium-fade-in text-3xl md:text-5xl font-black text-white mb-6">
              准备好出发了吗？
            </h2>
            <p className="premium-fade-in text-xl text-white/90 mb-10 font-light">
              立即预订，享受华人专属优惠服务
            </p>
            <div className="premium-fade-in flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/trains"
                className="btn-glow inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-lg font-bold bg-white text-[#667eea]"
              >
                <Train className="w-5 h-5" />
                预订火车票
              </Link>
              <Link
                href="/contact"
                className="btn-glow inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-lg font-bold text-white border-2 border-white/50 hover:bg-white/10"
              >
                <MessageCircle className="w-5 h-5" />
                联系我们
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
