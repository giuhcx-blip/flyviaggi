'use client';

import { useI18n } from '@/lib/i18n-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plane, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const popularRoutes = [
  { from: '北京', to: '米兰', price: '€450', airline: '中国国际航空' },
  { from: '上海', to: '罗马', price: '€480', airline: '意大利航空' },
  { from: '广州', to: '威尼斯', price: '€520', airline: '南方航空' },
  { from: '普拉托', to: '北京', price: '€460', airline: '多家航空公司' },
];

const airlines = [
  '中国国际航空', '东方航空', '南方航空', '意大利航空', '汉莎航空', '荷兰航空'
];

export default function FlightsPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Plane className="h-8 w-8 text-[#F5A623]" />
            <h1 className="text-4xl md:text-5xl font-bold">{t('flights.title')}</h1>
          </div>
          <p className="text-xl text-gray-200">{t('flights.subtitle')}</p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[#0A2647] mb-6 text-center">
                {t('flights.subtitle')}
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="from" className="text-[#0A2647]">{t('flights.form.from')}</Label>
                    <Input id="from" placeholder="北京、上海、广州..." className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="to" className="text-[#0A2647]">{t('flights.form.to')}</Label>
                    <Input id="to" placeholder="米兰、罗马、威尼斯..." className="mt-2" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-[#0A2647]">{t('flights.form.date')}</Label>
                    <Input id="date" type="date" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="returnDate" className="text-[#0A2647]">{t('flights.form.returnDate')}</Label>
                    <Input id="returnDate" type="date" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="passengers" className="text-[#0A2647]">{t('flights.form.passengers')}</Label>
                  <Input id="passengers" type="number" min="1" max="10" defaultValue="1" className="mt-2" />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#F5A623] hover:bg-[#e5951f] text-[#0A2647] font-semibold py-4 rounded-xl"
                >
                  {t('flights.form.submit')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-center text-sm text-gray-500">{t('flights.contactNote')}</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2647] mb-8">
            {t('flights.popularRoutes')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularRoutes.map((route, index) => (
              <Card key={index} className="bg-[#F5F5F7] rounded-xl border-none hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-[#0A2647]">{route.from}</span>
                    <ArrowRight className="h-4 w-4 text-[#F5A623]" />
                    <span className="font-semibold text-[#0A2647]">{route.to}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{route.airline}</p>
                  <p className="text-xl font-bold text-[#F5A623]">{route.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Airlines */}
      <section className="py-12 bg-[#F5F5F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2647] mb-8 text-center">
            {t('flights.airlines')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {airlines.map((airline, index) => (
              <Card key={index} className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="text-[#0A2647] font-medium">{airline}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-[#0A2647]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">{t('home.contactUs')}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-green-500 hover:bg-green-600 text-white gap-2 rounded-xl" asChild>
              <Link href="/contact">
                <MessageCircle className="h-5 w-5" />
                {t('common.whatsapp')}
              </Link>
            </Button>
            <Button className="bg-[#F5A623] hover:bg-[#e5951f] text-[#0A2647] gap-2 rounded-xl" asChild>
              <Link href="/contact">
                <Phone className="h-5 w-5" />
                {t('common.phone')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}