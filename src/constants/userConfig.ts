import { ContactLink } from '../types/userConfig';

export const USER_CONFIG = {
  AVATAR_URL: 'https://renecho-blog.pages.dev/images/avatar.jpg',
  NAME: 'Ren Echo',
  JOB_TITLE: 'AI Student & Developer',
  BIO: [
    '🎓 河南工业大学 · 人工智能专业大学生',
    '💻 探索 AI、编程和各种有趣的技术领域',
    '✨ Stay curious, keep coding.',
  ],
  CONTACT_LINKS: [
    {
      type: 'github',
      url: 'https://github.com/watermelontip',
      icon: 'fab fa-github',
      text: 'GitHub',
    },
    {
      type: 'email',
      url: 'mailto:renwu2005@foxmail.com',
      icon: 'fas fa-envelope',
      text: '邮箱',
    },
    {
      type: 'website',
      url: 'https://renecho-blog.pages.dev/',
      icon: 'fas fa-globe',
      text: '博客',
    },
  ] as ContactLink[],
} as const;

export const GITHUB_TOKEN = '';
