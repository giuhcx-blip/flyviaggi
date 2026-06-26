'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n-context';
import { Train, Plus, Wallet, FileText, TrendingUp, Clock, Users, ArrowRight } from 'lucide-react';

export default function AgentDashboardPage() {
  const { t } = useI18n();

  // Mock data
  const agentInfo = {
    company: '示例旅行社',
    balance: 1250.00,
    discount: '8%',
    pendingOrders: 2,
    totalOrders: 156,
  };

  const recentOrders = [
    { id: 'ORD-001', route: '米兰 → 罗马', passengers: 5, status: 'issued', total: 145, date: '2024-01-15' },
    { id: 'ORD-002', route: '佛罗伦萨 → 威尼斯', passengers: 3, status: 'confirmed', total: 87, date: '2024-01-14' },
    { id: 'ORD-003', route: '米兰 → 那不勒斯', passengers: 2, status: 'pending', total: 58, date: '2024-01-13' },
  ];

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-700',
    confirmed: 'bg-blue-100 text-blue-700',
    issued: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0A2647] text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{t('agent.title')}</h1>
              <p className="text-white/70">{t('agent.welcome')}, {agentInfo.company}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#E2001A] text-white px-4 py-2 rounded-full font-semibold">
                {t('agent.discountValue')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Wallet className="w-8 h-8 text-[#F5A623] mb-2" />
            <p className="text-sm text-gray-500">{t('agent.balance')}</p>
            <p className="text-2xl font-bold text-[#0A2647]">€{agentInfo.balance.toFixed(2)}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <TrendingUp className="w-8 h-8 text-[#E2001A] mb-2" />
            <p className="text-sm text-gray-500">{t('agent.discount')}</p>
            <p className="text-2xl font-bold text-[#E2001A]">{agentInfo.discount} OFF</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Clock className="w-8 h-8 text-yellow-500 mb-2" />
            <p className="text-sm text-gray-500">待处理订单</p>
            <p className="text-2xl font-bold text-yellow-500">{agentInfo.pendingOrders}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Users className="w-8 h-8 text-[#0A2647] mb-2" />
            <p className="text-sm text-gray-500">总订单</p>
            <p className="text-2xl font-bold text-[#0A2647]">{agentInfo.totalOrders}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/agent/new-order" className="bg-gradient-to-r from-[#E2001A] to-[#c00017] text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <Plus className="w-8 h-8 mb-2" />
                <p className="font-semibold text-lg">{t('agent.newOrder')}</p>
                <p className="text-sm text-white/70">批量下单，专属折扣</p>
              </div>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
          <Link href="/agent/recharge" className="bg-gradient-to-r from-[#F5A623]/80 to-[#e09000] text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <Wallet className="w-8 h-8 mb-2" />
                <p className="font-semibold text-lg">{t('agent.recharge')}</p>
                <p className="text-sm text-white/70">预付费充值</p>
              </div>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
          <Link href="/agent/statements" className="bg-gradient-to-r from-[#0A2647] to-[#1a3a5c] text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <FileText className="w-8 h-8 mb-2" />
                <p className="font-semibold text-lg">{t('agent.statements')}</p>
                <p className="text-sm text-white/70">月度账单下载</p>
              </div>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="max-w-7xl mx-auto px-4 py-6 pb-16">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-[#0A2647] text-white p-4">
            <h2 className="font-semibold flex items-center gap-2">
              <Train className="w-5 h-5" />
              {t('agent.orders')}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">{t('agent.ordersTable.id')}</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">{t('agent.ordersTable.route')}</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">{t('agent.ordersTable.passengers')}</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">{t('agent.ordersTable.status')}</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">{t('agent.ordersTable.total')}</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">{t('agent.ordersTable.date')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-[#0A2647]">{order.id}</td>
                    <td className="px-4 py-3 text-gray-600">{order.route}</td>
                    <td className="px-4 py-3 text-gray-600">{order.passengers} 人</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                        {t(`agent.orderStatus.${order.status}`)}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-[#E2001A]">€{order.total}</td>
                    <td className="px-4 py-3 text-gray-500">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-100">
            <Link href="/agent/orders" className="text-[#0A2647] font-semibold hover:underline flex items-center gap-1">
              {t('common.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}