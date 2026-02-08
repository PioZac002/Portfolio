'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  github: string;
  demo: string;
}

export function Projects() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: t('projects.tasksystem.title'),
      description: t('projects.tasksystem.desc'),
      technologies: ['React', 'Next.js', 'TypeScript', 'Prisma', 'MongoDB'],
      gradient: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/PioZac002',
      demo: '#',
    },
    {
      title: t('projects.barberapp.title'),
      description: t('projects.barberapp.desc'),
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
      gradient: 'from-purple-500 to-pink-500',
      github: 'https://github.com/PioZac002',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden group"
            >
              {/* Gradient Header */}
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-8">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm font-medium text-white bg-gradient-to-r ${project.gradient} rounded-full`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group/link"
                  >
                    <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    <span className="font-medium">{t('projects.viewCode')}</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 group/link`}
                  >
                    <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    <span className="font-medium">{t('projects.liveDemo')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
