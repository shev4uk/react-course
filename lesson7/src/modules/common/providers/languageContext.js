import { createContext, useState } from 'react';

export const LanguageContext = createContext();

export default function LanguageProvider({children}) {
    const [language, setLanguage] = useState('en');
    function toggleLang() {
      setLanguage(language === 'en' ? 'ua' : 'en')
    }
    const value = {language, toggleLang}
    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}