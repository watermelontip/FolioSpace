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
  AI_PRICING_RADAR: 'ai-pricing-radar',
  DEV_VAULT: 'dev-vault',
  JSON_LENS: 'json-lens',
  MARK_SNAP: 'mark-snap',
  GRADIENT_STUDIO: 'gradient-studio',
  SHADOW_FORGE: 'shadow-forge',
  PDF_LOCAL: 'pdf-local',
  QR_FORGE: 'qr-forge',
  PALETTE_SNAP: 'palette-snap',
  OVERVIEW: 'overview',
} as const;

export type SlideId = (typeof SLIDE_IDS)[keyof typeof SLIDE_IDS];

export const SLIDE_POSITIONS = {
  TITLE: { x: 0, y: 0, z: 0 },
  OVERVIEW: { x: 0, y: 0, z: 0, scale: 4.5 },
} as const;
