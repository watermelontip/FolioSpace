1|1|import netToolboxPreview from '../assets/net-toolbox.mp4';
2|2|import kawaiiThemePreview from '../assets/kawaii-theme.mp4';
3|3|import toolsPortalPreview from '../assets/tools-portal.mp4';
4|4|import codeFlowchartPreview from '../assets/code-flowchart.mp4';
5|5|import particleLabPreview from '../assets/particle-lab.mp4';
6|6|import roughChartPreview from '../assets/rough-chart.mp4';
7|7|import towerGamePreview from '../assets/tower-game.mp4';
8|8|import algoVisualizerPreview from '../assets/algo-visualizer.mp4';
9|9|import { Project } from '../types/project';
10|10|import { SLIDE_IDS } from './slideIds';
11|11|
12|12|export const projectsData: Project[] = [
13|13|  {
14|14|    id: SLIDE_IDS.ALGO_VISUALIZER,
15|15|    name: 'Algo Visualizer',
16|16|    title: 'Algo Visualizer',
17|17|    preview: algoVisualizerPreview,
18|18|    position: { x: 1500, y: 0, z: 0, rotateY: 0 },
19|19|    description:
20|20|      '交互式算法可视化工具：支持排序算法和路径查找算法的动态演示与教学',
21|21|    descriptionEn:
22|22|      'Interactive algorithm visualization tool with sorting and pathfinding animations',
23|23|    tech: ['Algorithm', 'Canvas', 'Visualization', 'Education'],
24|24|    links: [
25|25|      { type: 'demo', url: 'https://watermelontip.github.io/algo-visualizer/', text: 'Live Demo' },
26|26|      { type: 'code', url: 'https://github.com/watermelontip/algo-visualizer', text: 'Github', githubRepo: 'watermelontip/algo-visualizer' },
27|27|    ],
28|28|    layout: 'standard',
29|29|  },
30|30|  {
31|31|    id: SLIDE_IDS.CODE_FLOWCHART,
32|32|    name: 'Code Flowchart',
33|33|    title: 'Code Flowchart',
34|34|    preview: codeFlowchartPreview,
35|35|    position: { x: 1200, y: 800, z: 200, rotateY: 30 },
36|36|    description:
37|37|      '代码转流程图工具：将代码自动解析并生成可视化的 SVG 流程图',
38|38|    descriptionEn:
39|39|      'Convert code into visual SVG flowcharts automatically',
40|40|    tech: ['Parser', 'SVG', 'Code', 'Tool'],
41|41|    links: [
42|42|      { type: 'demo', url: 'https://watermelontip.github.io/code-flowchart/', text: 'Live Demo' },
43|43|      { type: 'code', url: 'https://github.com/watermelontip/code-flowchart', text: 'Github', githubRepo: 'watermelontip/code-flowchart' },
44|44|    ],
45|45|    layout: 'reverse',
46|46|  },
47|47|  {
48|48|    id: SLIDE_IDS.PARTICLE_LAB,
49|49|    name: 'Particle Lab',
50|50|    title: 'Particle Lab',
51|51|    preview: particleLabPreview,
52|52|    position: { x: 0, y: 1500, z: 400, rotateY: 90 },
53|53|    description:
54|54|      '交互式粒子特效生成器：自由调节参数，实时预览各种酷炫粒子动画效果',
55|55|    descriptionEn:
56|56|      'Interactive particle effect generator with real-time parameter tuning',
57|57|    tech: ['Canvas', 'Animation', 'Particle', 'Creative'],
58|58|    links: [
59|59|      { type: 'demo', url: 'https://watermelontip.github.io/particle-lab/', text: 'Live Demo' },
60|60|      { type: 'code', url: 'https://github.com/watermelontip/particle-lab', text: 'Github', githubRepo: 'watermelontip/particle-lab' },
61|61|    ],
62|62|    layout: 'standard',
63|63|  },
64|64|  {
65|65|    id: SLIDE_IDS.ROUGH_CHART,
66|66|    name: 'Rough Chart',
67|67|    title: 'Rough Chart',
68|68|    preview: roughChartPreview,
69|69|    position: { x: -1060, y: 1060, z: 600, rotateY: 135 },
70|70|    description:
71|71|      '手绘风格图表生成器：基于 RoughViz，生成具有手绘质感的数据可视化图表',
72|72|    descriptionEn:
73|73|      'Hand-drawn style chart generator based on RoughViz',
74|74|    tech: ['Chart', 'RoughViz', 'SVG', 'Data Viz'],
75|75|    links: [
76|76|      { type: 'demo', url: 'https://watermelontip.github.io/rough-chart/', text: 'Live Demo' },
77|77|      { type: 'code', url: 'https://github.com/watermelontip/rough-chart', text: 'Github', githubRepo: 'watermelontip/rough-chart' },
78|78|    ],
79|79|    layout: 'reverse',
80|80|  },
81|81|  {
82|82|    id: SLIDE_IDS.TOWER_GAME,
83|83|    name: 'Tower Game',
84|84|    title: 'Tower Game',
85|85|    preview: towerGamePreview,
86|86|    position: { x: -1500, y: 0, z: 800, rotateY: 180 },
87|87|    description:
88|88|      '堆塔小游戏：经典的堆叠方块游戏，考验你的反应和节奏感',
89|89|    descriptionEn:
90|90|      'Classic tower stacking game testing your timing and rhythm',
91|91|    tech: ['Game', 'Canvas', 'Animation', 'Casual'],
92|92|    links: [
93|93|      { type: 'demo', url: 'https://watermelontip.github.io/tower-game/', text: 'Live Demo' },
94|94|      { type: 'code', url: 'https://github.com/watermelontip/tower-game', text: 'Github', githubRepo: 'watermelontip/tower-game' },
95|95|    ],
96|96|    layout: 'standard',
97|97|  },
98|98|  {
99|99|    id: SLIDE_IDS.NET_TOOLBOX,
100|100|    name: 'Net Toolbox',
101|101|    title: 'Net Toolbox',
102|102|    preview: netToolboxPreview,
103|103|    position: { x: -1060, y: -1060, z: 1000, rotateY: 225 },
104|104|    description:
105|105|      '综合网络工具箱：IP 查询、延迟测试、DNS 查询、Whois、SSL 检测等 8 大功能',
106|106|    descriptionEn:
107|107|      'Comprehensive network toolbox: IP lookup, latency test, DNS, Whois, SSL detection and more',
108|108|    tech: ['Network', 'Vue', 'API', 'Tool'],
109|109|    links: [
110|110|      { type: 'demo', url: 'https://watermelontip.github.io/net-toolbox/', text: 'Live Demo' },
111|111|      { type: 'code', url: 'https://github.com/watermelontip/net-toolbox', text: 'Github', githubRepo: 'watermelontip/net-toolbox' },
112|112|    ],
113|113|    layout: 'reverse',
114|114|  },
115|115|  {
116|116|    id: SLIDE_IDS.KAWAII_THEME,
117|117|    name: 'Kawaii AI Theme Engine',
118|118|    title: 'Kawaii AI Theme Engine',
119|119|    preview: kawaiiThemePreview,
120|120|    position: { x: 0, y: -1500, z: 1200, rotateY: 270 },
121|121|    description:
122|122|      '基于随机化的 AI 卡哇伊风格主题生成引擎，每次生成独一无二的可爱主题',
123|123|    descriptionEn:
124|124|      'Randomization-based AI kawaii-style theme generation engine',
125|125|    tech: ['AI', 'CSS', 'Theme', 'Generator'],
126|126|    links: [
127|127|      { type: 'demo', url: 'https://watermelontip.github.io/Kawaii-AI-Theme-Engine/', text: 'Live Demo' },
128|128|      { type: 'code', url: 'https://github.com/watermelontip/Kawaii-AI-Theme-Engine', text: 'Github', githubRepo: 'watermelontip/Kawaii-AI-Theme-Engine' },
129|129|    ],
130|130|    layout: 'standard',
131|131|  },
132|132|  {
133|133|    id: SLIDE_IDS.TOOLS_PORTAL,
134|134|    name: 'Tools Portal',
135|135|    title: 'Tools Portal',
136|136|    preview: toolsPortalPreview,
137|137|    position: { x: 1060, y: -1060, z: 1400, rotateY: 315 },
138|138|    description:
139|139|      '免费在线开发者工具箱：JSON 格式化、Base64、颜色转换、正则测试、QR 码、渐变生成等 21 个工具',
140|140|    descriptionEn:
141|141|      'Free online developer toolbox: JSON, Base64, color converter, regex, QR code, gradient generator and 21 tools',
142|142|    tech: ['Vue', 'CDN', 'Tools', 'Static'],
143|143|    links: [
144|144|      { type: 'demo', url: 'https://watermelontip.github.io/tools-portal-cdn/', text: 'Live Demo' },
145|145|      { type: 'code', url: 'https://github.com/watermelontip/tools-portal-cdn', text: 'Github', githubRepo: 'watermelontip/tools-portal-cdn' },
146|146|    ],
147|147|    layout: 'reverse',
148|148|  },
149|149|  {