'use client';

import { useI18n } from '@/lib/i18n-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Map, Calendar, Users, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const tourCategories = [
  { key: 'europe', tours: [
    { name: '巴黎浪漫之旅', price: '€399', duration: '4天', date: '2024年3月15日' },
    { name: '瑞士雪山游', price: '€599', duration: '5天', date: '2024年4月1日' },
    { name: '德国文化之旅', price: '€459', duration: '4天', date: '2024年4月20日' },
  ]},
  { key: 'italy', tours: [
    { name: '佛罗伦萨一日游', price: '€89', duration: '1天', date: '每周六' },
    { name: '威尼斯周末游', price: '€199', duration: '2天', date: '每周六' },
    { name: '罗马深度游', price: '€299', duration: '3天', date: '2024年3月10日' },
    { name: '米兰时尚之旅', price: '€159', duration: '2天', date: '2024年3月25日' },
  ]},
  { key: 'dayTrip', tours: [
    { name: '比萨斜塔半日游', price: '€49', duration: '半天', date: '每天' },
    { name: '锡耶纳古镇游', price: '€69', duration: '1天', date: '每周日' },
    { name: '五渔村一日游', price: '€99', duration: '1天', date: '每周三' },
  ]},
];

export default function ToursPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Map className="h-8 w-8 text-[#F5A623]" />
            <h1 className="text-4xl md:text-5xl font-bold">{t('tours.title')}</h1>
          </div>
          <p className="text-xl text-gray-200">{t('tours.subtitle')}</p>
        </div>
      </section>

      {/* Tour Categories */}
      {tourCategories.map((category) => (
        <section key={category.key} className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A2647] mb-8">
              {t(`tours.categories.${category.key}`)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tours.map((tour, index) => (
                <Card key={index} className="group overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 bg-gradient-to-br from-[#0A2647] to-[#2a4a6f]">
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <Map className="h-12 w-12 opacity-50" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl text-[#0A2647] mb-4">{tour.name}</h3>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{tour.date}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-[#F5A623]">{tour.price}</span>
                      <Button variant="outline" className="border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-white">
                        {t('common.bookNow')}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Custom Trip */}
      <section className="py-16 bg-[#0A2647]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('tours.customize')}</h2>
          <p className="text-xl text-gray-200 mb-8">{t('tours.customizeDesc')}</p>
          <Button 
            size="lg" 
            className="bg-[#F5A623] hover:bg-[#e5951f] text-[#0A2647] font-semibold px-8 py-4 rounded-xl"
            asChild
          >
            <Link href="/contact">
              {t('home.contactUs')}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}