'use client';

import { useI18n } from '@/lib/i18n-context';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, MapPin, FileText, Award, Clock } from 'lucide-react';

const teamMembers = [
  { name: '张经理', role: '创始人/总经理', years: '15年+' },
  { name: '李顾问', role: '签证专员', years: '8年+' },
  { name: '王顾问', role: '机票专员', years: '10年+' },
  { name: '陈顾问', role: '旅游顾问', years: '6年+' },
];

const milestones = [
  { year: '2010', event: '公司成立' },
  { year: '2015', event: '服务客户突破3000' },
  { year: '2020', event: '开通微信小程序' },
  { year: '2024', event: '服务客户超过5000' },
];

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building className="h-8 w-8 text-[#F5A623]" />
            <h1 className="text-4xl md:text-5xl font-bold">{t('about.title')}</h1>
          </div>
          <p className="text-xl text-gray-200">{t('about.subtitle')}</p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A2647] mb-6">
                {t('about.company')}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-[#0A2647]">FlyViaggi 飞扬旅行社</strong>（WINGSUP S.R.L）成立于2010年，
                  是一家位于意大利普拉托的专业旅行社，主要服务于在意华人社区。
                </p>
                <p>
                  我们提供意中往返机票、意大利火车票、旅游团定制、签证服务等综合旅游服务。
                  多年来，我们以专业的服务和温暖的关怀，赢得了超过5000位客户的信赖。
                </p>
                <p>
                  作为正规注册的旅行社，我们拥有专业的团队和完善的服务体系，
                  致力于为每一位客户提供最优质、最便捷的旅行体验。
                </p>
                <p>
                  公司地址：VIA FABIO FILZI 112, 59100 PRATO (PO), Italia
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2647] mb-8 text-center">
            {t('about.team')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-[#F5F5F7] rounded-xl text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-[#0A2647] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {member.name[0]}
                  </div>
                  <h3 className="font-semibold text-[#0A2647] mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                  <div className="flex items-center justify-center gap-1 text-sm text-[#F5A623]">
                    <Clock className="h-4 w-4" />
                    <span>{member.years}经验</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2647] mb-8 text-center">
            发展历程
          </h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#F5A623] flex items-center justify-center text-[#0A2647] font-bold">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-[#0A2647] font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office & License */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-[#F5F5F7] rounded-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-[#F5A623]" />
                  <h3 className="text-xl font-bold text-[#0A2647]">{t('about.office')}</h3>
                </div>
                <p className="text-gray-600 mb-2">VIA FABIO FILZI 112</p>
                <p className="text-gray-600 mb-2">59100 PRATO (PO), Italia</p>
              </CardContent>
            </Card>
            <Card className="bg-[#F5F5F7] rounded-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-[#F5A623]" />
                  <h3 className="text-xl font-bold text-[#0A2647]">{t('about.license')}</h3>
                </div>
                <p className="text-gray-600 mb-2">公司：WINGSUP S.R.L</p>
                <p className="text-gray-600 mb-2">P.IVA: 02632470973</p>
                <p className="text-sm text-gray-500 mt-2">正规注册旅行社，服务有保障</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}