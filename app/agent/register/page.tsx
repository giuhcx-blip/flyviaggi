'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n-context';
import { Building2, User, Phone, MessageCircle, TrendingUp, ArrowLeft, CheckCircle } from 'lucide-react';

export default function AgentRegisterPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-4">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0A2647] mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t('nav.home')}
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5A623]/20 rounded-full mb-4">
            <Building2 className="w-8 h-8 text-[#F5A623]" />
          </div>
          <h1 className="text-3xl font-bold text-[#0A2647] mb-2">{t('agentRegister.title')}</h1>
          <p className="text-gray-600">{t('agentRegister.subtitle')}</p>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#E2001A]/10 rounded-xl p-6 mb-8 border border-[#F5A623]/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-[#E2001A] text-white text-xl font-bold px-3 py-1 rounded-full mb-2">
                -5~10%
              </div>
              <p className="text-sm text-gray-600">额外折扣</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-[#F5A623] mb-2" />
              <p className="text-sm text-gray-600">批量下单</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-8 h-8 text-[#0A2647] mb-2" />
              <p className="text-sm text-gray-600">专属账单</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#0A2647] mb-2">
                <Building2 className="w-4 h-4 inline mr-1" />
                {t('agentRegister.form.company')}
              </label>
              <input 
                type="text"
                placeholder="旅行社/代理公司名称"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0A2647] mb-2">
                <User className="w-4 h-4 inline mr-1" />
                {t('agentRegister.form.contact')}
              </label>
              <input 
                type="text"
                placeholder="联系人姓名"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0A2647] mb-2">
                <Phone className="w-4 h-4 inline mr-1" />
                {t('agentRegister.form.phone')}
              </label>
              <input 
                type="tel"
                placeholder="+39 xxx xxx xxxx"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0A2647] mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1" />
                {t('agentRegister.form.wechat')}
              </label>
              <input 
                type="text"
                placeholder="微信号"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0A2647] mb-2">
                <TrendingUp className="w-4 h-4 inline mr-1" />
                {t('agentRegister.form.monthlyVolume')}
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all">
                <option value="">预估月订单量</option>
                <option value="50">50 以下</option>
                <option value="100">50-100</option>
                <option value="200">100-200</option>
                <option value="500">200-500</option>
                <option value="1000">500+</option>
              </select>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#F5A623] hover:bg-[#e09000] text-white py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              {t('agentRegister.form.submit')}
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            {t('agentRegister.note')}
          </p>
        </div>

        {/* Existing Agent Login */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            已有代理账户？{' '}
            <Link href="/login" className="text-[#F5A623] font-semibold hover:underline">
              登录后台
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}