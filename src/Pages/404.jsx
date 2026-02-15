import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, AlertCircle } from 'lucide-react';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-[150px] sm:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] leading-none">
            404
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B5A2B]/20 to-[#D4A574]/20 blur-3xl -z-10"></div>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-gray-100 dark:bg-white/10">
            <AlertCircle className="w-12 h-12 text-[#8B5A2B]" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
          {t('notFound.title')}
        </h2>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          {t('notFound.message')}
        </p>

        {/* Back to Home Button */}
        <Link to="/">
          <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8B5A2B]/30">
            <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {t('notFound.backHome')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
