// ============================================================
// SOLAR SYSTEM AGENTS — MISSION CONTROL CONFIGURATION
// ============================================================
// Edit this file to configure your Mission Control dashboard.
// Documentation: https://github.com/roomsterdam/solar-system-agents
// ============================================================

const CONFIG = {

  // ── BRANDING ──────────────────────────────────────────────
  brand: {
    name: 'SOLAR SYSTEM',
    subtitle: 'MISSION CONTROL',
    version: 'v1.0.0',
    centerTitle: 'AI AGENT HQ',
  },

  // ── GATEWAY / API ─────────────────────────────────────────
  gateway: {
    url: null,
    healthEndpoint: '/health',
    statusEndpoint: '/api/status',
    token: null,
    refreshInterval: 15000,
  },

  // ── AGENTS ────────────────────────────────────────────────
  // Each agent is a card in the roster AND a planet in the solar system.
  // Planet fields: planet (theme name), color, size, orbit, speed
  agents: [
    {
      id: 'coordinator', name: 'COORDINATOR', model: 'gpt-4o',
      role: 'Central command & task routing', tier: 'command', premium: true,
      skills: 12, channels: ['API', 'SLACK'], status: 'active', heartbeat: '60m',
      planet: 'Mercury', color: '#b0b0b0', size: 6, orbit: 80, speed: 0.012,
    },
    {
      id: 'developer', name: 'DEVELOPER', model: 'claude-sonnet-4-6',
      role: 'Code generation & review', tier: 'command', premium: true,
      skills: 15, channels: ['API', 'SLACK'], status: 'active', heartbeat: '30m',
      planet: 'Venus', color: '#e8c86a', size: 8, orbit: 110, speed: 0.009,
    },
    {
      id: 'researcher', name: 'RESEARCHER', model: 'claude-sonnet-4-6',
      role: 'Deep research & analysis', tier: 'command', premium: true,
      skills: 8, channels: ['API'], status: 'active', heartbeat: '90m',
      planet: 'Earth', color: '#4488ff', size: 9, orbit: 145, speed: 0.007,
    },
    {
      id: 'sales', name: 'SALES', model: 'gpt-4o-mini',
      role: 'Lead gen, outreach & CRM', tier: 'operations', premium: false,
      skills: 10, channels: ['TG', 'WA', 'API'], status: 'active', heartbeat: '60m',
      planet: 'Mars', color: '#dd4444', size: 7, orbit: 185, speed: 0.006,
    },
    {
      id: 'content', name: 'CONTENT', model: 'gpt-4o-mini',
      role: 'Content creation & social media', tier: 'operations', premium: false,
      skills: 6, channels: ['API', 'SLACK'], status: 'active', heartbeat: '120m',
      planet: 'Jupiter', color: '#d4a44c', size: 14, orbit: 240, speed: 0.004,
      moons: [{ name: 'SEO', size: 3, orbit: 22, speed: 0.03, color: '#88aacc' }],
    },
    {
      id: 'finance', name: 'FINANCE', model: 'gpt-4o-mini',
      role: 'Invoicing, expenses & forecasting', tier: 'operations', premium: false,
      skills: 5, channels: ['API'], status: 'idle', heartbeat: '360m',
      planet: 'Saturn', color: '#c8a86c', size: 12, orbit: 300, speed: 0.003,
      rings: true,
    },
    {
      id: 'security', name: 'SECURITY', model: 'claude-haiku-4-5',
      role: 'Threat detection & compliance', tier: 'support', premium: false,
      skills: 8, channels: ['API'], status: 'active', heartbeat: '360m',
      planet: 'Uranus', color: '#66cccc', size: 10, orbit: 360, speed: 0.002,
    },
    {
      id: 'analytics', name: 'ANALYTICS', model: 'gpt-4o-mini',
      role: 'Dashboards, metrics & BI', tier: 'support', premium: false,
      skills: 5, channels: ['API', 'SLACK'], status: 'idle', heartbeat: '120m',
      planet: 'Neptune', color: '#4466dd', size: 9, orbit: 410, speed: 0.0015,
    },
  ],

  // ── CRON JOBS / SCHEDULED TASKS ───────────────────────────
  // status: 'ok' | 'error' | 'disabled'
  // error: optional error message string
  crons: [
    { agent: 'COORDINATOR', name: 'Daily Standup Summary', schedule: '09:00 daily', status: 'ok', lastRun: '09:01' },
    { agent: 'RESEARCHER', name: 'Market Trends Report', schedule: '06:00 daily', status: 'ok', lastRun: '06:02' },
    { agent: 'DEVELOPER', name: 'Dependency Audit', schedule: '03:00 daily', status: 'ok', lastRun: '03:01' },
    { agent: 'SALES', name: 'Lead Pipeline Check', schedule: '09:00, 14:00, 18:00', status: 'ok', lastRun: '14:03' },
    { agent: 'SALES', name: 'Afternoon Outreach', schedule: '15:00 daily', status: 'error', lastRun: '15:00', error: 'LLM request timed out.' },
    { agent: 'CONTENT', name: 'Social Media Posts', schedule: '10:00, 16:00', status: 'ok', lastRun: '10:05' },
    { agent: 'CONTENT', name: 'Growth Report', schedule: '08:00 daily', status: 'error', lastRun: '08:00', error: 'Delivering to Slack requires target' },
    { agent: 'SECURITY', name: 'Security Scan', schedule: '03:00, 15:00', status: 'ok', lastRun: '15:02' },
    { agent: 'ANALYTICS', name: 'Weekly Metrics Digest', schedule: 'Mon 09:00', status: 'ok', lastRun: 'Mon 09:03' },
  ],

  // ── CHANNELS ──────────────────────────────────────────────
  channels: [
    { name: 'Slack', icon: '\u2709', status: 'online', detail: '4 CHANNELS' },
    { name: 'Telegram', icon: '\u2708', status: 'online', detail: '3 BOTS' },
    { name: 'WhatsApp', icon: '\u260E', status: 'online', detail: 'ACTIVE' },
    { name: 'API Gateway', icon: '\uD83D\uDDA5', status: 'online', detail: 'REST + WS' },
  ],

  // ── MODEL PROVIDERS ───────────────────────────────────────
  providers: [
    { name: 'OpenAI', detail: 'gpt-4o, gpt-4o-mini', status: 'active', label: 'PRIMARY' },
    { name: 'Anthropic', detail: 'claude-sonnet-4-6, haiku', status: 'active', label: 'ACTIVE' },
    { name: 'Groq', detail: 'llama-3.3-70b', status: 'active', label: 'FAST' },
    { name: 'Ollama (Local)', detail: 'qwen2.5:7b', status: 'local', label: 'LOCAL' },
  ],

  // ── REVENUE / KPI STREAMS ─────────────────────────────────
  revenue: [
    { name: 'SaaS Subscriptions', icon: '\uD83D\uDCBB', status: 'online', detail: '$4.2K MRR' },
    { name: 'API Usage', icon: '\u26A1', status: 'online', detail: '$890/mo' },
    { name: 'Consulting', icon: '\uD83D\uDCBC', status: 'online', detail: '3 CLIENTS' },
  ],

  // ── ROADMAP / QUEST PHASES ────────────────────────────────
  // Each phase has items with status: 'done' | 'active' | 'pending'
  // and an optional assignee
  roadmap: [
    {
      id: 'Q1', name: 'INFRASTRUCTURE', color: '#00d4ff', progress: 85,
      items: [
        { text: 'API rate limit handling', status: 'done', assignee: 'DEVELOPER' },
        { text: 'Model provider migration', status: 'done', assignee: 'DEVELOPER' },
        { text: 'Messaging integration x3', status: 'done', assignee: 'DEVELOPER' },
        { text: 'Multi-device deployment', status: 'done', assignee: 'COORDINATOR' },
        { text: 'Skills platform', status: 'done', assignee: 'DEVELOPER' },
        { text: 'Mission Control dashboard', status: 'done', assignee: 'DEVELOPER' },
        { text: 'Payments integration', status: 'active', assignee: 'FINANCE' },
      ],
    },
    {
      id: 'Q2', name: 'AGENT EVOLUTION', color: '#ff6b2b', progress: 15,
      items: [
        { text: 'Organizational design', status: 'done', assignee: 'COORDINATOR' },
        { text: 'Agent specialization training', status: 'active', assignee: 'RESEARCHER' },
        { text: 'Content pipeline automation', status: 'pending', assignee: 'CONTENT' },
        { text: 'A2A agent messaging', status: 'pending', assignee: 'DEVELOPER' },
      ],
    },
    {
      id: 'Q3', name: 'SALES ARENA', color: '#00ff88', progress: 10,
      items: [
        { text: 'Lead pipeline 3x/day', status: 'active', assignee: 'SALES' },
        { text: 'Auto follow-up system', status: 'pending', assignee: 'SALES' },
        { text: '<15 min response time', status: 'pending', assignee: 'SUPPORT' },
      ],
    },
    {
      id: 'Q4', name: 'MARKET DOMINATION', color: '#ffd700', progress: 5,
      items: [
        { text: 'Multi-platform publishing', status: 'active', assignee: 'CONTENT' },
        { text: 'Account rotation system', status: 'pending', assignee: 'SECURITY' },
        { text: '10+ live campaigns', status: 'pending', assignee: 'SALES' },
      ],
    },
    {
      id: 'Q5', name: 'FIRST REVENUE', color: '#ff3355', progress: 0,
      items: [
        { text: 'First paying customer', status: 'pending', assignee: 'SALES' },
        { text: '$1000/mo revenue', status: 'pending', assignee: 'FINANCE' },
        { text: 'Full autonomous ops', status: 'pending', assignee: 'COORDINATOR' },
      ],
    },
  ],

  // ── SYSTEM INFO ───────────────────────────────────────────
  system: {
    platform: 'Cloud VPS',
    ram: { total: 16, unit: 'GB' },
    gatewayPort: 8080,
  },
};
