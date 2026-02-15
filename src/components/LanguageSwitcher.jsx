import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const toggleLanguage = () => {
        const newLang = currentLang === 'id' ? 'en' : 'id';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg flex items-center gap-1.5
                 bg-gray-200 dark:bg-gray-800
                 text-gray-800 dark:text-gray-100
                 hover:scale-105 transition-all duration-300
                 border border-transparent hover:border-amber-600/30"
            aria-label="Toggle language"
        >
            <Globe size={16} />
            <span className="text-xs font-semibold uppercase">
                {currentLang === 'id' ? 'EN' : 'ID'}
            </span>
        </button>
    );
}
