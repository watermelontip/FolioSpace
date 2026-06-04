import netToolboxPreview from '../assets/net-toolbox.png';
import kawaiiThemePreview from '../assets/kawaii-theme.png';
import toolsPortalPreview from '../assets/tools-portal.png';
import { Project } from '../types/project';
import { SLIDE_IDS } from './slideIds';

export const projectsData: Project[] = [
  {
    id: SLIDE_IDS.NET_TOOLBOX,
    name: 'Net Toolbox',
    title: 'Net Toolbox',
    preview: netToolboxPreview,
    position: { x: 1500, y: 0, z: 0, rotateY: 0 },
    description:
      '综合网络工具箱：IP 查询、延迟测试、DNS 查询、Whois、SSL 检测等 8 大功能，一站式网络诊断',
    descriptionEn:
      'Comprehensive network toolbox: IP lookup, latency test, DNS query, Whois, SSL detection and more — 8 tools in one',
    tech: ['Network', 'Vue', 'API', 'Tool'],
    links: [
      {
        type: 'demo',
        url: 'https://watermelontip.github.io/net-toolbox/',
        text: 'Live Demo',
      },
      {
        type: 'code',
        url: 'https://github.com/watermelontip/net-toolbox',
        text: 'Github',
        githubRepo: 'watermelontip/net-toolbox',
      },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.KAWAII_THEME,
    name: 'Kawaii AI Theme Engine',
    title: 'Kawaii AI Theme Engine',
    preview: kawaiiThemePreview,
    position: { x: 0, y: 1500, z: 200, rotateY: 90 },
    description:
      '基于随机化的 AI 卡哇伊风格主题生成引擎，每次生成独一无二的可爱主题，支持导出 CSS',
    descriptionEn:
      'Randomization-based AI kawaii-style theme generation engine — generates unique cute themes with CSS export',
    tech: ['AI', 'CSS', 'Theme', 'Generator'],
    links: [
      {
        type: 'demo',
        url: 'https://watermelontip.github.io/Kawaii-AI-Theme-Engine/',
        text: 'Live Demo',
      },
      {
        type: 'code',
        url: 'https://github.com/watermelontip/Kawaii-AI-Theme-Engine',
        text: 'Github',
        githubRepo: 'watermelontip/Kawaii-AI-Theme-Engine',
      },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.TOOLS_PORTAL,
    name: 'Tools Portal',
    title: 'Tools Portal',
    preview: toolsPortalPreview,
    position: { x: -1500, y: 0, z: 400, rotateY: 180 },
    description:
      '免费在线开发者工具箱：JSON 格式化、Base64 编解码、颜色转换、正则测试等 15 个实用工具',
    descriptionEn:
      'Free online developer toolbox: JSON formatter, Base64 codec, color converter, regex tester and 15+ utilities',
    tech: ['Vue', 'CDN', 'Tools', 'Static'],
    links: [
      {
        type: 'demo',
        url: 'https://watermelontip.github.io/tools-portal-cdn/',
        text: 'Live Demo',
      },
      {
        type: 'code',
        url: 'https://github.com/watermelontip/tools-portal-cdn',
        text: 'Github',
        githubRepo: 'watermelontip/tools-portal-cdn',
      },
    ],
    layout: 'standard',
  },
];

export const mapData = [
  {
    id: SLIDE_IDS.TITLE,
    name: 'Introduction',
    icon: 'fas fa-home',
  },
  {
    id: SLIDE_IDS.NET_TOOLBOX,
    name: 'Net Toolbox',
    icon: 'fas fa-network-wired',
  },
  {
    id: SLIDE_IDS.KAWAII_THEME,
    name: 'Kawaii Theme',
    icon: 'fas fa-palette',
  },
  {
    id: SLIDE_IDS.TOOLS_PORTAL,
    name: 'Tools Portal',
    icon: 'fas fa-tools',
  },
  {
    id: SLIDE_IDS.OVERVIEW,
    name: 'Overview',
    icon: 'fas fa-th-large',
  },
];
