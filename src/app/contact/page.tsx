'use client';

import { useI18n } from '@/lib/i18n-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="h-8 w-8 text-[#F5A623]" />
            <h1 className="text-4xl md:text-5xl font-bold">{t('contact.title')}</h1>
          </div>
          <p className="text-xl text-gray-200">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <Card className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A2647] mb-6">发送消息</h2>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-[#0A2647]">{t('contact.form.name')}</Label>
                    <Input id="name" className="mt-2" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-[#0A2647]">{t('contact.form.email')}</Label>
                      <Input id="email" type="email" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[#0A2647]">{t('contact.form.phone')}</Label>
                      <Input id="phone" type="tel" className="mt-2" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-[#0A2647]">{t('contact.form.message')}</Label>
                    <Textarea id="message" rows={5} className="mt-2" />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#F5A623] hover:bg-[#e5951f] text-[#0A2647] font-semibold py-4 rounded-xl gap-2"
                  >
                    <Send className="h-5 w-5" />
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <Card className="bg-white rounded-xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0A2647] mb-4">直接联系</h3>
                  <div className="space-y-4">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl gap-2 justify-start" asChild>
                      <a href="https://wa.me/39XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp: +39 XXXXXXXXXX
                      </a>
                    </Button>
                    <Button className="w-full bg-[#F5A623] hover:bg-[#e5951f] text-[#0A2647] rounded-xl gap-2 justify-start" asChild>
                      <a href="tel:+39XXXXXXXXXX">
                        <Phone className="h-5 w-5" />
                        {t('common.phone')}: +39 XXXXXXXXXX
                      </a>
                    </Button>
                    <Button className="w-full bg-[#0A2647] hover:bg-[#1a3a5c] text-white rounded-xl gap-2 justify-start" asChild>
                      <a href="mailto:info@flyviaggi.it">
                        <Mail className="h-5 w-5" />
                        {t('common.email')}: info@flyviaggi.it
                      </a>
                    </Button>
                  </div>
                  <div className="mt-4 p-4 bg-[#F5F5F7] rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>WeChat:</strong> 添加微信客服 "flyviaggi" 咨询
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="bg-white rounded-xl shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-[#F5A623]" />
                    <h3 className="text-xl font-bold text-[#0A2647]">{t('contact.hours')}</h3>
                  </div>
                  <p className="text-gray-600">{t('contact.hoursValue')}</p>
                  <p className="text-sm text-gray-500 mt-2">周日及节假日休息</p>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="bg-white rounded-xl shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-[#F5A623]" />
                    <h3 className="text-xl font-bold text-[#0A2647]">{t('contact.address')}</h3>
                  </div>
                  <p className="text-gray-600">Prato, Italia</p>
                  <p className="text-sm text-gray-500 mt-2">详细地址请预约来访</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}