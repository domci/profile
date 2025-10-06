'use client';

import { useLanguage } from '@/lib/language-context';
import Image from 'next/image';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 left-4 z-50 flex space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-200 ${
          language === 'en'
            ? 'border-blue-400 shadow-lg scale-110'
            : 'border-gray-600 hover:border-gray-400 hover:scale-105'
        }`}
        aria-label="Switch to English"
      >
        <Image
          src="/flags/us.svg"
          alt="US Flag"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </button>
      <button
        onClick={() => setLanguage('de')}
        className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-200 ${
          language === 'de'
            ? 'border-blue-400 shadow-lg scale-110'
            : 'border-gray-600 hover:border-gray-400 hover:scale-105'
        }`}
        aria-label="Switch to German"
      >
        <Image
          src="/flags/de.svg"
          alt="German Flag"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
}