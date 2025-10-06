'use client';

import { useLanguage } from '@/lib/language-context';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 left-4 z-50 flex space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-200 ${
          language === 'en'
            ? 'border-blue-400 shadow-lg scale-110'
            : 'border-gray-600 hover:border-gray-400 hover:scale-105'
        }`}
        aria-label="Switch to English"
      >
        <div className="w-full h-full bg-gradient-to-br from-red-500 via-white to-blue-500 flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-800 rounded-full ml-0.5"></div>
        </div>
      </button>
      <button
        onClick={() => setLanguage('de')}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-200 ${
          language === 'de'
            ? 'border-blue-400 shadow-lg scale-110'
            : 'border-gray-600 hover:border-gray-400 hover:scale-105'
        }`}
        aria-label="Switch to German"
      >
        <div className="w-full h-full bg-gradient-to-br from-black via-red-600 to-yellow-400 flex items-center justify-center">
          <div className="w-1 h-2 bg-black rounded-full"></div>
          <div className="w-1 h-2 bg-red-600 rounded-full ml-0.5"></div>
          <div className="w-1 h-2 bg-yellow-400 rounded-full ml-0.5"></div>
        </div>
      </button>
    </div>
  );
}