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
      '免费在线开发者工具箱：JSON 格式化、Base64、颜色转换、正则测试等 15 个工具',
    descriptionEn:
      'Free online developer toolbox: JSON, Base64, color converter, regex tester and 15+ tools',
    tech: ['Vue', 'CDN', 'Tools', 'Static'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/tools-portal-cdn/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/tools-portal-cdn', text: 'Github', githubRepo: 'watermelontip/tools-portal-cdn' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.AI_PRICING_RADAR,
    name: 'AI Pricing Radar',
    title: 'AI Pricing Radar',
    preview: '',
    position: { x: 0, y: -3000, z: 200, rotateY: 0 },
    description:
      'AI 模型价格雷达：30+ 模型价格对比、月费计算器、场景推荐，覆盖 OpenAI/Anthropic/Google/DeepSeek 等 8 家厂商',
    descriptionEn:
      'AI Model Pricing Radar: compare 30+ models with cost calculator and scenario recommendations across 8 providers',
    tech: ['AI', 'Pricing', 'Tool', 'Comparison'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/ai-pricing-radar/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/ai-pricing-radar', text: 'Github', githubRepo: 'watermelontip/ai-pricing-radar' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.DEV_VAULT,
    name: 'DevVault',
    title: 'DevVault',
    preview: '',
    position: { x: 2250, y: 0, z: 0, rotateY: 0 },
    description:
      '隐私优先的开发者工具箱：22 工具（JSON/Base64/Hash/JWT/正则...），单文件 HTML，零网络请求，完全离线',
    descriptionEn:
      'Privacy-first developer toolbox: 22 tools (JSON/Base64/Hash/JWT/Regex...), single-file HTML, zero network requests, fully offline',
    tech: ['Privacy', 'DevTools', 'Single-file', 'Offline'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/DevVault/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/DevVault', text: 'Github', githubRepo: 'watermelontip/DevVault' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.JSON_LENS,
    name: 'JsonLens',
    title: 'JsonLens',
    preview: '',
    position: { x: 2500, y: 0, z: 0, rotateY: 0 },
    description:
      'JSON 可视化浏览器：树形渲染/搜索高亮/统计面板，支持大文件，单文件 HTML，完全离线',
    descriptionEn:
      'JSON visual browser: collapsible tree, search highlighting, stats panel, large file support, single-file HTML, fully offline',
    tech: ['JSON', 'Visualization', 'Privacy', 'Offline'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/JsonLens/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/JsonLens', text: 'Github', githubRepo: 'watermelontip/JsonLens' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.MARK_SNAP,
    name: 'MarkSnap',
    title: 'MarkSnap',
    preview: '',
    position: { x: 2750, y: 0, z: 0, rotateY: 0 },
    description:
      'Markdown 转图片工具：7 种主题、导出 PNG、代码高亮，单文件 HTML，完全离线',
    descriptionEn:
      'Markdown to image tool: 7 themes, PNG export, code highlighting, single-file HTML, fully offline',
    tech: ['Markdown', 'Image', 'Privacy', 'Offline'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/MarkSnap/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/MarkSnap', text: 'Github', githubRepo: 'watermelontip/MarkSnap' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.GRADIENT_STUDIO,
    name: 'Gradient Studio',
    title: 'Gradient Studio',
    preview: '',
    position: { x: 3000, y: 0, z: 0, rotateY: 0 },
    description: 'CSS 渐变生成器：线性/径向/锥形、16 种预设、一键复制 CSS，完全离线',
    descriptionEn: 'CSS gradient generator: linear/radial/conic, 16 presets, copy CSS, fully offline',
    tech: ['CSS', 'Design', 'Gradient', 'Offline'],
    links: [
      { type: 'demo', url: 'https://watermelontip.github.io/GradientStudio/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/watermelontip/GradientStudio', text: 'Github', githubRepo: 'watermelontip/GradientStudio' },
    ],
    layout: 'standard',
  },
  {id:SLIDE_IDS.SHADOW_FORGE,name:'Shadow Forge',title:'Shadow Forge',preview:'',position:{x:3250,y:0,z:0,rotateY:0},description:'CSS 阴影生成器：Box/Text Shadow、多层叠加、8 种预设，完全离线',descriptionEn:'CSS shadow generator: box/text shadow, multi-layer, 8 presets, fully offline',tech:['CSS','Design','Shadow','Offline'],links:[{type:'demo',url:'https://watermelontip.github.io/ShadowForge/',text:'Live Demo'},{type:'code',url:'https://github.com/watermelontip/ShadowForge',text:'Github',githubRepo:'watermelontip/ShadowForge'}],layout:'standard'},
  {id:SLIDE_IDS.PDF_LOCAL,name:'PDF Local',title:'PDF Local',preview:'',position:{x:3500,y:0,z:0,rotateY:0},description:'隐私优先的PDF工具箱：合并、拆分、旋转、水印、提取文本，文件不离开浏览器',descriptionEn:'Privacy-first PDF toolkit: merge, split, rotate, watermark, extract text. Files never leave your browser',tech:['PDF','Privacy','Offline','Tools'],links:[{type:'demo',url:'https://watermelontip.github.io/PdfLocal/',text:'Live Demo'},{type:'code',url:'https://github.com/watermelontip/PdfLocal',text:'Github',githubRepo:'watermelontip/PdfLocal'}],layout:'standard'},
  {id:SLIDE_IDS.QR_FORGE,name:'QR Forge',title:'QR Forge',preview:'',position:{x:3750,y:0,z:0,rotateY:0},description:'二维码生成器：自定义颜色/纠错级别/模块大小，导出 PNG/SVG，完全离线',descriptionEn:'QR code generator: custom colors/EC level/module size, export PNG/SVG, fully offline',tech:['QR','Generator','Privacy','Offline'],links:[{type:'demo',url:'https://watermelontip.github.io/QrForge/',text:'Live Demo'},{type:'code',url:'https://github.com/watermelontip/QrForge',text:'Github',githubRepo:'watermelontip/QrForge'}],layout:'standard'},
  {id:SLIDE_IDS.PALETTE_SNAP,name:'Palette Snap',title:'Palette Snap',preview:'',position:{x:4000,y:0,z:0,rotateY:0},description:'图片取色板：从图片提取色彩方案，可调颜色数量，导出 CSS 变量/Tailwind，图片不离开浏览器',descriptionEn:'Image color palette extractor: extract colors from images, export CSS vars/Tailwind, images never leave browser',tech:['Color','Design','Privacy','Offline'],links:[{type:'demo',url:'https://watermelontip.github.io/PaletteSnap/',text:'Live Demo'},{type:'code',url:'https://github.com/watermelontip/PaletteSnap',text:'Github',githubRepo:'watermelontip/PaletteSnap'}],layout:'standard'},
  {id:SLIDE_IDS.HANDWRITE,name:'Handwrite',title:'Handwrite',preview:'',position:{x:4250,y:0,z:0,rotateY:0},description:'文字转手写体：3 种字体、5 种纸张、5 种笔色，导出 PNG，文字不离开浏览器',descriptionEn:'Text to handwriting: 3 fonts, 5 paper styles, 5 pen colors, export PNG, text never leaves browser',tech:['Text','Handwriting','Privacy','Offline'],links:[{type:'demo',url:'https://watermelontip.github.io/Handwrite/',text:'Live Demo'},{type:'code',url:'https://github.com/watermelontip/Handwrite',text:'Github',githubRepo:'watermelontip/Handwrite'}],layout:'standard'},
  {id:SLIDE_IDS.FAVICON_FORGE,name:'Favicon Forge',title:'Favicon Forge',preview:'',position:{x:4500,y:0,z:0,rotateY:0},description:'Favicon 生成器：文字/Emoji/形状、多尺寸导出、生成 HTML 标签，完全离线',descriptionEn:'Favicon generator: text/emoji/shapes, multi-size export, HTML tags, fully offline',tech:['Favicon','Generator','Privacy','Offline'],links:[{type:'demo',url:'https://watermelontip.github.io/FaviconForge/',text:'Live Demo'},{type:'code',url:'https://github.com/watermelontip/FaviconForge',text:'Github',githubRepo:'watermelontip/FaviconForge'}],layout:'standard'},
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
  { id: SLIDE_IDS.AI_PRICING_RADAR, name: 'AI Pricing Radar', icon: 'fas fa-chart-line' },
  { id: SLIDE_IDS.DEV_VAULT, name: 'DevVault', icon: 'fas fa-shield-alt' },
  { id: SLIDE_IDS.JSON_LENS, name: 'JsonLens', icon: 'fas fa-search' },
  { id: SLIDE_IDS.MARK_SNAP, name: 'MarkSnap', icon: 'fas fa-camera' },
  { id: SLIDE_IDS.GRADIENT_STUDIO, name: 'Gradient Studio', icon: 'fas fa-palette' },
  { id: SLIDE_IDS.SHADOW_FORGE, name: 'Shadow Forge', icon: 'fas fa-magic' },
  { id: SLIDE_IDS.PDF_LOCAL, name: 'PDF Local', icon: 'fas fa-file-pdf' },
  { id: SLIDE_IDS.QR_FORGE, name: 'QR Forge', icon: 'fas fa-qrcode' },
  { id: SLIDE_IDS.PALETTE_SNAP, name: 'Palette Snap', icon: 'fas fa-eye-dropper' },
  { id: SLIDE_IDS.HANDWRITE, name: 'Handwrite', icon: 'fas fa-pen-fancy' },
  { id: SLIDE_IDS.FAVICON_FORGE, name: 'Favicon Forge', icon: 'fas fa-icons' },
  { id: SLIDE_IDS.OVERVIEW, name: 'Overview', icon: 'fas fa-th-large' },
];
