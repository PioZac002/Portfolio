'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  const contacts = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Linkedin,
      title: t('contact.linkedin'),
      value: 'LinkedIn',
      link: 'https://linkedin.com',
      gradient: 'from-blue-600 to-blue-400',
    },
    {
      icon: Github,
      title: t('contact.github'),
      value: 'PioZac002',
      link: 'https://github.com/PioZac002',
      gradient: 'from-gray-700 to-gray-500',
    },
    {
      icon: MapPin,
      title: t('contact.location'),
      value: t('contact.location.value'),
      link: '#',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-effect p-6 rounded-2xl group hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${contact.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {contact.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Piotr Zaćmiński. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
