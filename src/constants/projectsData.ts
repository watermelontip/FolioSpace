import netToolboxPreview from '../assets/net-toolbox.mp4';
import kawaiiThemePreview from '../assets/kawaii-theme.mp4';
import toolsPortalPreview from '../assets/tools-portal.mp4';
import codeFlowchartPreview from '../assets/code-flowchart.mp4';
import particleLabPreview from '../assets/particle-lab.mp4';
import roughChartPreview from '../assets/rough-chart.mp4';
import towerGamePreview from '../assets/tower-game.mp4';
import algoVisualizerPreview from '../assets/algo-visualizer.mp4';
import { Project } from '../types/project';
import { SLIDE_IDS } from './slideIds';

export const projectsData: Project[] = [
  {
    id: SLIDE_IDS.ALGO_VISUALIZER,
    name: 'Algo Visualizer',
    title: 'Algo Visualizer',
    preview: algoVisualizerPreview,
    position: { x: 1500, y: 0, z: 0, rotateY: 0 },
    description:
      '交互式算法可视化工具：支持排序算法和路径查找算法的动态演示与教学',
    descriptionEn:
      'Interactive algorithm visualization tool with sorting and pathfinding animations',
    tech: ['Algorithm', 'Canvas', 'Visualization', 'Education'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/algo-visualizer/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/algo-visualizer', text: 'Github', githubRepo: 'watermelontip/algo-visualizer' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.CODE_FLOWCHART,
    name: 'Code Flowchart',
    title: 'Code Flowchart',
    preview: codeFlowchartPreview,
    position: { x: 1200, y: 800, z: 200, rotateY: 30 },
    description:
      '代码转流程图工具：将代码自动解析并生成可视化的 SVG 流程图',
    descriptionEn:
      'Convert code into visual SVG flowcharts automatically',
    tech: ['Parser', 'SVG', 'Code', 'Tool'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/code-flowchart/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/code-flowchart', text: 'Github', githubRepo: 'watermelontip/code-flowchart' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.PARTICLE_LAB,
    name: 'Particle Lab',
    title: 'Particle Lab',
    preview: particleLabPreview,
    position: { x: 0, y: 1500, z: 400, rotateY: 90 },
    description:
      '交互式粒子特效生成器：自由调节参数，实时预览各种酷炫粒子动画效果',
    descriptionEn:
      'Interactive particle effect generator with real-time parameter tuning',
    tech: ['Canvas', 'Animation', 'Particle', 'Creative'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/particle-lab/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/particle-lab', text: 'Github', githubRepo: 'watermelontip/particle-lab' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.ROUGH_CHART,
    name: 'Rough Chart',
    title: 'Rough Chart',
    preview: roughChartPreview,
    position: { x: -1060, y: 1060, z: 600, rotateY: 135 },
    description:
      '手绘风格图表生成器：基于 RoughViz，生成具有手绘质感的数据可视化图表',
    descriptionEn:
      'Hand-drawn style chart generator based on RoughViz',
    tech: ['Chart', 'RoughViz', 'SVG', 'Data Viz'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/rough-chart/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/rough-chart', text: 'Github', githubRepo: 'watermelontip/rough-chart' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.TOWER_GAME,
    name: 'Tower Game',
    title: 'Tower Game',
    preview: towerGamePreview,
    position: { x: -1500, y: 0, z: 800, rotateY: 180 },
    description:
      '堆塔小游戏：经典的堆叠方块游戏，考验你的反应和节奏感',
    descriptionEn:
      'Classic tower stacking game testing your timing and rhythm',
    tech: ['Game', 'Canvas', 'Animation', 'Casual'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/tower-game/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/tower-game', text: 'Github', githubRepo: 'watermelontip/tower-game' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.NET_TOOLBOX,
    name: 'Net Toolbox',
    title: 'Net Toolbox',
    preview: netToolboxPreview,
    position: { x: -1060, y: -1060, z: 1000, rotateY: 225 },
    description:
      '综合网络工具箱：IP 查询、延迟测试、DNS 查询、Whois、SSL 检测等 8 大功能',
    descriptionEn:
      'Comprehensive network toolbox: IP lookup, latency test, DNS, Whois, SSL detection and more',
    tech: ['Network', 'Vue', 'API', 'Tool'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/net-toolbox/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/net-toolbox', text: 'Github', githubRepo: 'watermelontip/net-toolbox' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.KAWAII_THEME,
    name: 'Kawaii AI Theme Engine',
    title: 'Kawaii AI Theme Engine',
    preview: kawaiiThemePreview,
    position: { x: 0, y: -1500, z: 1200, rotateY: 270 },
    description:
      '基于随机化的 AI 卡哇伊风格主题生成引擎，每次生成独一无二的可爱主题',
    descriptionEn:
      'Randomization-based AI kawaii-style theme generation engine',
    tech: ['AI', 'CSS', 'Theme', 'Generator'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/Kawaii-AI-Theme-Engine/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/Kawaii-AI-Theme-Engine', text: 'Github', githubRepo: 'watermelontip/Kawaii-AI-Theme-Engine' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.TOOLS_PORTAL,
    name: 'Tools Portal',
    title: 'Tools Portal',
    preview: toolsPortalPreview,
    position: { x: 1060, y: -1060, z: 1400, rotateY: 315 },
    description:
      '免费在线开发者工具箱：JSON 格式化、Base64、颜色转换、正则测试、QR 码、渐变生成等 21 个工具',
    descriptionEn:
      'Free online developer toolbox: JSON, Base64, color converter, regex, QR code, gradient generator and 21 tools',
    tech: ['Vue', 'CDN', 'Tools', 'Static'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/tools-portal-cdn/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/tools-portal-cdn', text: 'Github', githubRepo: 'watermelontip/tools-portal-cdn' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.TOKENSCOPE,
    name: 'TokenScope',
    title: 'TokenScope',
    preview: algoVisualizerPreview, // Reuse preview for now
    position: { x: 900, y: 1600, z: 200, rotateY: -20 },
    description:
      'AI Token 可视化工具：实时 token 计数 + 多模型成本对比 + 视觉热力图 + 优化建议',
    descriptionEn:
      'AI Token visualization: real-time counting, multi-model cost comparison, visual heatmap, optimization tips',
    tech: ['React', 'Vite', 'AI', 'Token'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/tokenscope/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/tokenscope', text: 'Github', githubRepo: 'watermelontip/tokenscope' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.CRONCRAFT,
    name: 'CronCraft',
    title: 'CronCraft',
    preview: algoVisualizerPreview, // Reuse preview for now
    position: { x: 600, y: 2400, z: 200, rotateY: 20 },
    description:
      '可视化 Cron 表达式编辑器：实时预览执行计划 + 20+ 预设模板 + 中文描述',
    descriptionEn:
      'Visual Cron expression editor: real-time execution preview, 20+ presets, Chinese support',
    tech: ['React', 'Vite', 'Cron', 'Tool'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/croncraft/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/croncraft', text: 'Github', githubRepo: 'watermelontip/croncraft' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.JSONTOTS,
    name: 'JsonToTS',
    title: 'JsonToTS',
    preview: algoVisualizerPreview, // Reuse preview for now
    position: { x: 300, y: 3200, z: 200, rotateY: -15 },
    description:
      'JSON 转 TypeScript 工具：实时转换 + 嵌套支持 + 自定义选项',
    descriptionEn:
      'JSON to TypeScript converter: real-time conversion, nested support, customizable options',
    tech: ['React', 'Vite', 'TypeScript', 'Tool'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/json-to-ts/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/json-to-ts', text: 'Github', githubRepo: 'watermelontip/json-to-ts' },
    ],
    layout: 'standard',
  },
];

export const mapData = [
  { id: SLIDE_IDS.TITLE, name: 'Introduction', icon: 'fas fa-home' },
  { id: SLIDE_IDS.ALGO_VISUALIZER, name: 'Algo Visualizer', icon: 'fas fa-project-diagram' },
  { id: SLIDE_IDS.CODE_FLOWCHART, name: 'Code Flowchart', icon: 'fas fa-sitemap' },
  { id: SLIDE_IDS.PARTICLE_LAB, name: 'Particle Lab', icon: 'fas fa-magic' },
  { id: SLIDE_IDS.ROUGH_CHART, name: 'Rough Chart', icon: 'fas fa-chart-bar' },
  { id: SLIDE_IDS.TOWER_GAME, name: 'Tower Game', icon: 'fas fa-gamepad' },
  { id: SLIDE_IDS.NET_TOOLBOX, name: 'Net Toolbox', icon: 'fas fa-network-wired' },
  { id: SLIDE_IDS.KAWAII_THEME, name: 'Kawaii Theme', icon: 'fas fa-palette' },
  { id: SLIDE_IDS.TOOLS_PORTAL, name: 'Tools Portal', icon: 'fas fa-tools' },
  { id: SLIDE_IDS.TOKENSCOPE, name: 'TokenScope', icon: 'fas fa-coins' },
  { id: SLIDE_IDS.CRONCRAFT, name: 'CronCraft', icon: 'fas fa-clock' },
  { id: SLIDE_IDS.JSONTOTS, name: 'JsonToTS', icon: 'fas fa-exchange-alt' },
  { id: SLIDE_IDS.OVERVIEW, name: 'Overview', icon: 'fas fa-th-large' },
];
