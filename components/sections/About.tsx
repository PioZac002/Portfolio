'use client';

import { motion } from 'framer-motion';
import { Code, Zap, Brain, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const passions = [
    {
      icon: Code,
      title: t('about.passion.fullstack'),
      description: t('about.passion.fullstack.desc'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: t('about.passion.automation'),
      description: t('about.passion.automation.desc'),
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Brain,
      title: t('about.passion.ai'),
      description: t('about.passion.ai.desc'),
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('about.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.intro')}
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t('about.experience.title')}
                </h3>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {t('about.experience.position')}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('about.experience.duration')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Passions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('about.passions.title')}
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {passions.map((passion, index) => {
            const Icon = passion.icon;
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
                  className={`w-16 h-16 bg-gradient-to-br ${passion.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {passion.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{passion.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
