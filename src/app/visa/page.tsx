'use client';

import { useI18n } from '@/lib/i18n-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, CheckCircle, Clock, Euro, ChevronRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const visaTypes = [
  { name: '旅游签证', duration: '15-30天', fee: '€150-200' },
  { name: '商务签证', duration: '30-90天', fee: '€200-300' },
  { name: '探亲签证', duration: '30-90天', fee: '€180-250' },
  { name: '学生签证', duration: '长期', fee: '€250-350' },
];

const requirements = [
  '有效护照（有效期6个月以上）',
  '签证申请表',
  '护照照片（白底）',
  '行程安排/机票预订单',
  '住宿证明',
  '银行流水（近6个月）',
  '在职证明或学生证明',
  '医疗保险',
];

const feesInfo = [
  { item: '签证费', cost: '€80-150' },
  { item: '服务费', cost: '€50-100' },
  { item: '快递费', cost: '€15-30' },
  { item: '办理周期', cost: '7-15个工作日' },
];

export default function VisaPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-[#F5A623]" />
            <h1 className="text-4xl md:text-5xl font-bold">{t('visa.title')}</h1>
          </div>
          <p className="text-xl text-gray-200">{t('visa.subtitle')}</p>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2647] mb-8">
            {t('visa.types')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaTypes.map((visa, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-[#0A2647] mb-4">{visa.name}</h3>
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>有效期：{visa.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Euro className="h-4 w-4" />
                    <span>费用：{visa.fee}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2647] mb-8">
            {t('visa.requirements')}
          </h2>
          <Card className="max-w-3xl mx-auto bg-[#F5F5F7] rounded-xl">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#F5A623]" />
                    <span className="text-[#0A2647]">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fees & Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2647] mb-8 text-center">
            {t('visa.fees')}
          </h2>
          <div className="max-w-2xl mx-auto">
            {feesInfo.map((info, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg mb-4 shadow-sm">
                <span className="font-medium text-[#0A2647]">{info.item}</span>
                <span className="font-bold text-[#F5A623]">{info.cost}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consult CTA */}
      <section className="py-16 bg-[#0A2647]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('visa.consult')}</h2>
          <p className="text-xl text-gray-200 mb-8">专业顾问一对一解答，确保签证顺利通过</p>
          <Button 
            size="lg" 
            className="bg-[#F5A623] hover:bg-[#e5951f] text-[#0A2647] font-semibold px-8 py-4 rounded-xl gap-2"
            asChild
          >
            <Link href="/contact">
              <MessageCircle className="h-5 w-5" />
              {t('home.contactUs')}
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}