'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface Technology {
  name: string;
  level: number;
}

interface TechCategory {
  title: string;
  technologies: Technology[];
  gradient: string;
}

export function Technologies() {
  const { t } = useLanguage();

  const categories: TechCategory[] = [
    {
      title: t('tech.frontend'),
      gradient: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Redux Toolkit', level: 80 },
        { name: 'React Query 5', level: 80 },
        { name: 'React Router 6', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Shadcn', level: 75 },
      ],
    },
    {
      title: t('tech.backend'),
      gradient: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Prisma', level: 75 },
        { name: 'Zod', level: 80 },
        { name: 'Axios', level: 90 },
      ],
    },
    {
      title: t('tech.tools'),
      gradient: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'Azure DevOps', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Postman', level: 85 },
        { name: 'Figma', level: 75 },
      ],
    },
    {
      title: t('tech.automation'),
      gradient: 'from-orange-500 to-red-500',
      technologies: [{ name: 'N8N', level: 80 }],
    },
  ];

  return (
    <section id="technologies" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('tech.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('tech.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {tech.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: techIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
