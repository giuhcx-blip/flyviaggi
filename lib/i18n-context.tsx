'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Language, translations, languageNames } from './i18n';

type TranslationKey = keyof typeof translations.zh;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languageNames: Record<Language, string>;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('zh');

  useEffect(() => {
    // 从 localStorage 或 cookie 读取语言偏好
    const savedLang = localStorage.getItem('language');
    if (savedLang && ['zh', 'it', 'en'].includes(savedLang)) {
      setLanguageState(savedLang as Language);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  }, []);

  // 简化的翻译函数，支持嵌套路径如 "nav.home"
  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let result: unknown = translations[language];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k as keyof typeof result];
      } else {
        // 如果找不到，尝试返回中文版本作为 fallback
        let fallback: unknown = translations.zh;
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk as keyof typeof fallback];
          } else {
            return key; // 最后返回 key 本身
          }
        }
        return typeof fallback === 'string' ? fallback : key;
      }
    }
    
    return typeof result === 'string' ? result : key;
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, languageNames }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}