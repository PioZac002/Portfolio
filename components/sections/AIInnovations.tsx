'use client';

import { motion } from 'framer-motion';
import { Brain, Workflow, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function AIInnovations() {
  const { t } = useLanguage();

  const interests = [
    {
      icon: Brain,
      title: t('ai.integration.title'),
      description: t('ai.integration.desc'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Workflow,
      title: t('ai.automation.title'),
      description: t('ai.automation.desc'),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: t('ai.ml.title'),
      description: t('ai.ml.desc'),
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="ai" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('ai.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t('ai.subtitle')}
          </p>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('ai.intro')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect p-8 rounded-2xl group hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${interest.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{interest.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
