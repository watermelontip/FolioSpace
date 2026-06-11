export const SLIDE_IDS = {
  TITLE: 'title',
  NET_TOOLBOX: 'net-toolbox',
  KAWAII_THEME: 'kawaii-theme',
  TOOLS_PORTAL: 'tools-portal',
  CODE_FLOWCHART: 'code-flowchart',
  PARTICLE_LAB: 'particle-lab',
  ROUGH_CHART: 'rough-chart',
  TOWER_GAME: 'tower-game',
  ALGO_VISUALIZER: 'algo-visualizer',
  TOKENSCOPE: 'tokenscope',
  CRONCRAFT: 'croncraft',
  JSONTOTS: 'json-to-ts',
  MARKPDF: 'markpdf',
  SCHEMAVIZ: 'schema-viz',
  GRIDFORGE: 'grid-forge',
  JSONTOCSV: 'json-to-csv',
  YAMLFORGE: 'yaml-forge',
  BASE64FORGE: 'base64-forge',
  URLFORGE: 'url-forge',
  COLORCONVERT: 'color-convert',
  TABLEFORGE: 'table-forge',
  OVERVIEW: 'overview',
} as const;

export type SlideId = (typeof SLIDE_IDS)[keyof typeof SLIDE_IDS];

export const SLIDE_POSITIONS = {
  TITLE: { x: 0, y: 0, z: 0 },
  OVERVIEW: { x: 0, y: 0, z: 0, scale: 4.5 },
} as const;
