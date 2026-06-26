'use client';

import { useI18n } from '@/lib/i18n-context';
import { Users, Train, Wallet, FileText, CheckCircle, XCircle, Settings, ArrowRight } from 'lucide-react';

export default function AdminDashboardPage() {
  const { t } = useI18n();

  // Mock data
  const stats = {
    pendingAgents: 3,
    totalAgents: 45,
    todayOrders: 28,
    totalRevenue: 12500,
  };

  const pendingAgents = [
    { id: 1, company: '华人旅行社A', contact: '张经理', phone: '+39 123 456', wechat: 'agent_a', date: '2024-01-15' },
    { id: 2, company: '欧洲游旅行社', contact: '李女士', phone: '+39 234 567', wechat: 'agent_b', date: '2024-01-14' },
    { id: 3, company: '阳光旅行社', contact: '王先生', phone: '+39 345 678', wechat: 'agent_c', date: '2024-01-13' },
  ];

  const recentOrders = [
    { id: 'ORD-001', type: 'agent', customer: '华人旅行社A', route: '米兰 → 罗马', amount: 145, status: 'issued' },
    { id: 'ORD-002', type: 'retail', customer: '散客', route: '佛罗伦萨 → 威尼斯', amount: 87, status: 'confirmed' },
    { id: 'ORD-003', type: 'agent', customer: '欧洲游旅行社', route: '米兰 → 那不勒斯', amount: 580, status: 'pending' },
  ];

  const typeColors: Record<string, string> = {
    agent: 'bg-[#F5A623]/10 text-[#F5A623]',
    retail: 'bg-gray-100 text-gray-600',
  };

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-700',
    confirmed: 'bg-blue-100 text-blue-700',
    issued: 'bg-green-100 text-green-700',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a1a2e] text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold">{t('admin.title')}</h1>
          <p className="text-white/70">FlyViaggi 管理后台</p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
            <Users className="w-8 h-8 text-yellow-500 mb-2" />
            <p className="text-sm text-gray-500">{t('admin.agentReview')}</p>
            <p className="text-2xl font-bold text-[#0A2647]">{stats.pendingAgents} 待审核</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#F5A623]">
            <Users className="w-8 h-8 text-[#F5A623] mb-2" />
            <p className="text-sm text-gray-500">{t('admin.agentManage')}</p>
            <p className="text-2xl font-bold text-[#0A2647]">{stats.totalAgents} 代理</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#E2001A]">
            <Train className="w-8 h-8 text-[#E2001A] mb-2" />
            <p className="text-sm text-gray-500">{t('admin.orders')}</p>
            <p className="text-2xl font-bold text-[#0A2647]">{stats.todayOrders} 今日订单</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
            <Wallet className="w-8 h-8 text-green-500 mb-2" />
            <p className="text-sm text-gray-500">今日收入</p>
            <p className="text-2xl font-bold text-[#0A2647]">€{stats.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* Pending Agents */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-yellow-500 text-white p-4">
            <h2 className="font-semibold flex items-center gap-2">
              <Users className="w-5 h-5" />
              {t('admin.agentReview')} ({stats.pendingAgents})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">{t('admin.agentList.company')}</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">{t('admin.agentList.contact')}</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">{t('admin.agentList.phone')}</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">WeChat</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">申请日期</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">{t('admin.agentList.action')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pendingAgents.map((agent) => (
                  <tr key={agent.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-[#0A2647]">{agent.company}</td>
                    <td className="px-4 py-3 text-gray-600">{agent.contact}</td>
                    <td className="px-4 py-3 text-gray-600">{agent.phone}</td>
                    <td className="px-4 py-3 text-gray-600">{agent.wechat}</td>
                    <td className="px-4 py-3 text-gray-500">{agent.date}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm transition-all">
                          <CheckCircle className="w-4 h-4" />
                          {t('admin.actions.approve')}
                        </button>
                        <button className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-gray-600 px-3 py-1 rounded-lg text-sm transition-all">
                          <XCircle className="w-4 h-4" />
                          拒绝
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="max-w-7xl mx-auto px-4 py-6 pb-16">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-[#E2001A] text-white p-4">
            <h2 className="font-semibold flex items-center gap-2">
              <Train className="w-5 h-5" />
              {t('admin.orders')} (今日)
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">订单号</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">类型</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">客户</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">路线</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">金额</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-[#0A2647]">{order.id}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[order.type]}`}>
                        {t(`admin.orderType.${order.type}`)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{order.customer}</td>
                    <td className="px-4 py-3 text-gray-600">{order.route}</td>
                    <td className="px-4 py-3 font-semibold text-[#E2001A]">€{order.amount}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-100">
            <a href="#" className="text-[#0A2647] font-semibold hover:underline flex items-center gap-1">
              {t('common.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 py-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="#" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Users className="w-8 h-8 text-[#F5A623]" />
              <span className="font-semibold text-[#0A2647]">{t('admin.agentManage')}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#F5A623] group-hover:translate-x-2 transition-all" />
          </a>
          <a href="#" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Wallet className="w-8 h-8 text-[#E2001A]" />
              <span className="font-semibold text-[#0A2647]">{t('admin.rechargeRecords')}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#E2001A] group-hover:translate-x-2 transition-all" />
          </a>
          <a href="#" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FileText className="w-8 h-8 text-[#0A2647]" />
              <span className="font-semibold text-[#0A2647]">{t('admin.reports')}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0A2647] group-hover:translate-x-2 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}