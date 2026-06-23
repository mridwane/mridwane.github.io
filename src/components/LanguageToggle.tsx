import React, { useEffect, useState } from 'react';

type Lang = 'en' | 'id';

export function LanguageToggle() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'id') {
      setLang(stored);
    }
  }, []);

  const toggleLang = () => {
    const newLang: Lang = lang === 'en' ? 'id' : 'en';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
    window.dispatchEvent(new CustomEvent('language-toggle'));
  };

  return (
    <button
      onClick={toggleLang}
      aria-label='Toggle Language'
      className='relative flex items-center justify-center rounded-2xl p-2.5 bg-slate-100 dark:bg-slate-800 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border-none group text-[11px] font-black tracking-widest'
    >
      <div className='relative h-5 w-5 flex items-center justify-center overflow-hidden'>
        <span
          className={`absolute transition-all duration-500 ease-in-out ${
            lang === 'en' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } text-slate-700 dark:text-slate-200`}
        >
          EN
        </span>
        <span
          className={`absolute transition-all duration-500 ease-in-out ${
            lang === 'id' ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          } text-slate-700 dark:text-slate-200`}
        >
          ID
        </span>
      </div>
    </button>
  );
}
