export interface ColorToken {
  name: string;
  cssVar: string;
  hex: '#ffffff' | '#000000' | '#169f38';
  rgb: string;
  contrastVsBlack: string;
  contrastVsWhite: string;
  wcagCompliance: string;
  usage: string;
}

export interface ButtonSizeSpec {
  id: 'sm' | 'md' | 'lg';
  label: string;
  heightPx: number;
  minWidthPx: number;
  borderRadiusPx: number;
  paddingX: string;
  fontSize: string;
  iconSizePx: number;
  wcagTargetRule: string;
}

export interface ButtonVariationSpec {
  id: 'primary' | 'secondary';
  name: string;
  description: string;
  normalState: {
    background: string;
    text: string;
    border: string;
    depthEffect: string;
  };
  hoverState: {
    background: string;
    text: string;
    border: string;
    motion: string;
    responseTime: '100ms (0.1s)';
  };
  activeState: {
    background: string;
    text: string;
    border: string;
    confirmationFeedback: string;
    responseTime: '100ms (0.1s)';
  };
}

export interface IconCatalogItem {
  id: string;
  iconesJsId: string;
  label: string;
  usageContext: string;
}

export interface FormErrorCatalogItem {
  code: string;
  field: string;
  formType: 'Contacto' | 'Newsletter' | 'Ambos';
  triggerCondition: string;
  message: string;
  wcagCriterion: string;
}

export const COLOR_PALETTE: ColorToken[] = [
  {
    name: 'Branco Puro (Background Geral)',
    cssVar: '--color-lacti-white',
    hex: '#ffffff',
    rgb: 'rgb(255, 255, 255)',
    contrastVsBlack: '21.0 : 1 (AAA)',
    contrastVsWhite: '1.0 : 1',
    wcagCompliance: 'WCAG 2.2 AAA (Critério 1.4.3 & 1.4.6)',
    usage: 'Background geral de todo o website, superfície de cartões luminosos, superfície de botões secundários e texto sobre fundo verde.',
  },
  {
    name: 'Verde Lactimonte (Títulos, Cards, Bordas & Botões)',
    cssVar: '--color-lacti-green',
    hex: '#169f38',
    rgb: 'rgb(22, 159, 56)',
    contrastVsBlack: '6.15 : 1 (AA)',
    contrastVsWhite: '3.41 : 1 (AA Borda/UI >= 3:1)',
    wcagCompliance: 'WCAG 2.2 AA (Critério 1.4.11 Borda/UI >= 3:1 sobre #ffffff)',
    usage: 'Títulos e subtítulos de destaque, superfície de cards verdes, todas as bordas estruturais, botões primários e ondas do Shader Footer.',
  },
  {
    name: 'Preto Profundo (Exclusivo para Títulos e Descrições)',
    cssVar: '--color-lacti-black',
    hex: '#000000',
    rgb: 'rgb(0, 0, 0)',
    contrastVsBlack: '1.0 : 1',
    contrastVsWhite: '21.0 : 1 (AAA)',
    wcagCompliance: 'WCAG 2.2 AAA (21:1 sobre #ffffff — NUNCA utilizado como background)',
    usage: 'Utilizado exclusivamente para títulos principais e texto de descrição sobre fundo branco. Nunca é utilizado como cor de fundo.',
  },
];

export const TYPOGRAPHY_SPECS = [
  {
    family: 'Dancing Script',
    cssClass: 'font-script',
    weights: ['400 (Regular)', '700 (Bold)'],
    role: 'Tipografia Emocional e Subtítulos Artesanais em Verde (#169f38)',
    sample: 'Tradição queijeira da região Saloia desde 1980',
  },
  {
    family: 'Roboto',
    cssClass: 'font-sans',
    weights: ['300 (Light)', '400 (Regular)', '500 (Medium)', '700 (Bold)', '900 (Black)'],
    role: 'Tipografia Estrutural para Títulos, Descrições, Botões e Monumental Footer',
    sample: 'Queijos Frescos, Queijos Curados e Requeijão 100% Nacional.',
  },
];

export const BUTTON_SIZES: ButtonSizeSpec[] = [
  {
    id: 'sm',
    label: 'Pequeno (SM)',
    heightPx: 44,
    minWidthPx: 44,
    borderRadiusPx: 22,
    paddingX: '20px (1.25rem)',
    fontSize: '14px (0.875rem)',
    iconSizePx: 18,
    wcagTargetRule: 'Cumpre WCAG 2.2 Critério 2.5.5 (mínimo absoluto 44×44px)',
  },
  {
    id: 'md',
    label: 'Médio (MD)',
    heightPx: 52,
    minWidthPx: 52,
    borderRadiusPx: 26,
    paddingX: '28px (1.75rem)',
    fontSize: '16px (1.000rem)',
    iconSizePx: 20,
    wcagTargetRule: 'Supera WCAG 2.2 Critério 2.5.5 (52px de altura, raio 26px)',
  },
  {
    id: 'lg',
    label: 'Grande (LG)',
    heightPx: 60,
    minWidthPx: 60,
    borderRadiusPx: 30,
    paddingX: '36px (2.25rem)',
    fontSize: '18px (1.125rem)',
    iconSizePx: 22,
    wcagTargetRule: 'Supera WCAG 2.2 Critério 2.5.5 (60px de altura, raio 30px)',
  },
];

export const BUTTON_VARIATIONS: ButtonVariationSpec[] = [
  {
    id: 'primary',
    name: 'Variação 1 — Primário (Fundo Verde #169f38 · Texto Branco #ffffff)',
    description: 'Sem sombra/profundidade. No Hover faz a troca direta de cor (o background passa a ser a cor do texto #ffffff e o texto passa a #169f38). Quando ativo nunca tem fundo preto.',
    normalState: {
      background: '#169f38',
      text: '#ffffff',
      border: '2px solid #169f38',
      depthEffect: 'Sem profundidade (flat / box-shadow: none)',
    },
    hoverState: {
      background: '#ffffff (Troca com a cor do texto)',
      text: '#169f38 (Troca com a cor do background)',
      border: '2px solid #169f38',
      motion: 'Troca instantânea de cor + avanço de 2px no ícone único',
      responseTime: '100ms (0.1s)',
    },
    activeState: {
      background: '#169f38 (Nunca preto)',
      text: '#ffffff',
      border: '2px solid #169f38',
      confirmationFeedback: 'Escala tátil scale(0.98) com fundo verde #169f38 e confirmação por troca do ícone único para check-circle',
      responseTime: '100ms (0.1s)',
    },
  },
  {
    id: 'secondary',
    name: 'Variação 2 — Secundário (Fundo Branco #ffffff · Texto e Borda Verde #169f38)',
    description: 'Sem sombra/profundidade. No Hover faz a troca direta de cor (o background passa a ser a cor do texto #169f38 e o texto passa a #ffffff). Quando ativo nunca tem fundo preto.',
    normalState: {
      background: '#ffffff',
      text: '#169f38',
      border: '2px solid #169f38 (Contraste 3.41:1 >= 3:1)',
      depthEffect: 'Sem profundidade (flat / box-shadow: none)',
    },
    hoverState: {
      background: '#169f38 (Troca com a cor do texto)',
      text: '#ffffff (Troca com a cor do background)',
      border: '2px solid #169f38',
      motion: 'Troca instantânea de cor + avanço de 2px no ícone único',
      responseTime: '100ms (0.1s)',
    },
    activeState: {
      background: '#ffffff (Nunca preto)',
      text: '#169f38',
      border: '2px solid #169f38',
      confirmationFeedback: 'Escala tátil scale(0.98) com fundo branco #ffffff e confirmação imediata com ícone check-circle',
      responseTime: '100ms (0.1s)',
    },
  },
];

export const ICON_CATALOG: IconCatalogItem[] = [
  { id: 'arrow-up-right', iconesJsId: 'lucide:arrow-up-right', label: 'Seta Diagonal', usageContext: 'CTAs principais e exploração de páginas' },
  { id: 'book-open', iconesJsId: 'lucide:book-open', label: 'Livro de Receitas', usageContext: 'Botão "Ver receita" fora do card de vídeo' },
  { id: 'play', iconesJsId: 'lucide:play', label: 'Reproduzir Vídeo', usageContext: 'Controlo de vídeo nas receitas (VideoReelPro)' },
  { id: 'maximize', iconesJsId: 'lucide:maximize-2', label: 'Ecrã Inteiro', usageContext: 'Abrir vídeo de receita em Full Screen sem texto e com som' },
  { id: 'volume-on', iconesJsId: 'lucide:volume-2', label: 'Som Ativo', usageContext: 'Indicador de áudio ligado no modo Full Screen' },
  { id: 'volume-off', iconesJsId: 'lucide:volume-x', label: 'Sem Som', usageContext: 'Controlo de silêncio no player de vídeo' },
  { id: 'check-circle', iconesJsId: 'lucide:check-circle-2', label: 'Confirmação', usageContext: 'Estado carregado/ativo dos botões e sucesso de formulário' },
  { id: 'alert-circle', iconesJsId: 'lucide:alert-circle', label: 'Alerta de Erro', usageContext: 'Mensagens de erro de formulário e newsletter' },
  { id: 'send', iconesJsId: 'lucide:send', label: 'Enviar', usageContext: 'Submissão de formulário de contacto e newsletter' },
  { id: 'award', iconesJsId: 'lucide:award', label: 'Distinção / Prémio', usageContext: 'Prémios Cinco Estrelas, Sabor do Ano e PME Líder' },
  { id: 'star', iconesJsId: 'lucide:star', label: 'Estrela Google', usageContext: 'Avaliação Google 4,0 ★ (45 avaliações)' },
  { id: 'shield-check', iconesJsId: 'lucide:shield-check', label: 'Segurança Alimentar', usageContext: 'Qualidade certificada e controlo sanitário do leite' },
  { id: 'leaf', iconesJsId: 'lucide:leaf', label: 'Natureza & Sustentabilidade', usageContext: 'Pastagens da Região Saloia e ETAR própria' },
  { id: 'map-pin', iconesJsId: 'lucide:map-pin', label: 'Localização', usageContext: 'Morada Montemuro, Santo Estevão das Galés, Mafra' },
  { id: 'phone', iconesJsId: 'lucide:phone', label: 'Telefone', usageContext: 'Ligações telefónicas (+351) 219 758 120 / 917 048 410' },
  { id: 'mail', iconesJsId: 'lucide:mail', label: 'E-mail', usageContext: 'Contacto geral@lactimonte.pt e subscrição de newsletter' },
  { id: 'plus', iconesJsId: 'lucide:plus', label: 'Expandir Acordeão', usageContext: 'Acordeão de Gamas de Queijos' },
  { id: 'close', iconesJsId: 'lucide:x', label: 'Fechar', usageContext: 'Fechar vídeo Full Screen ou modal de receita' },
  { id: 'facebook', iconesJsId: 'lucide:facebook', label: 'Facebook', usageContext: 'Rede social oficial Facebook Lactimonte' },
  { id: 'instagram', iconesJsId: 'lucide:instagram', label: 'Instagram', usageContext: 'Rede social oficial Instagram & Reels Lactimonte' },
  { id: 'linkedin', iconesJsId: 'lucide:linkedin', label: 'LinkedIn', usageContext: 'Rede social empresarial LinkedIn Lactimonte' },
];

export const FORM_ERROR_MESSAGES: FormErrorCatalogItem[] = [
  {
    code: 'ERR_NAME_REQUIRED',
    field: 'Nome',
    formType: 'Ambos',
    triggerCondition: 'Campo deixado vazio ou com menos de 2 caracteres após interação',
    message: 'Por favor, indique o seu nome (mínimo 2 caracteres).',
    wcagCriterion: 'WCAG 3.3.1 (Identificação de Erros) & 3.3.3 (Sugestão de Erro)',
  },
  {
    code: 'ERR_SURNAME_REQUIRED',
    field: 'Apelido',
    formType: 'Contacto',
    triggerCondition: 'Campo apelido vazio após interação',
    message: 'Por favor, indique o seu apelido.',
    wcagCriterion: 'WCAG 3.3.1 (Identificação de Erros)',
  },
  {
    code: 'ERR_EMAIL_REQUIRED',
    field: 'E-mail',
    formType: 'Ambos',
    triggerCondition: 'Campo de e-mail deixado em branco',
    message: 'O endereço de e-mail é obrigatório para concluirmos o pedido.',
    wcagCriterion: 'WCAG 3.3.1 & 3.3.2 (Etiquetas ou Instruções)',
  },
  {
    code: 'ERR_EMAIL_FORMAT',
    field: 'E-mail',
    formType: 'Ambos',
    triggerCondition: 'Texto introduzido não corresponde ao formato nome@dominio.tld',
    message: 'Introduza um endereço de e-mail válido (exemplo: nome@dominio.pt).',
    wcagCriterion: 'WCAG 3.3.3 (Sugestão de Correção de Erro)',
  },
  {
    code: 'ERR_PHONE_REQUIRED',
    field: 'Telemóvel / Telefone',
    formType: 'Contacto',
    triggerCondition: 'Campo de telefone vazio no formulário de contacto',
    message: 'Por favor, indique um contacto telefónico para resposta rápida.',
    wcagCriterion: 'WCAG 3.3.1 (Identificação de Erros)',
  },
  {
    code: 'ERR_PHONE_FORMAT',
    field: 'Telemóvel / Telefone',
    formType: 'Contacto',
    triggerCondition: 'Número com menos de 9 dígitos ou caracteres inválidos',
    message: 'Introduza um número nacional válido de 9 dígitos (ex: 917 048 410 ou 219 758 120).',
    wcagCriterion: 'WCAG 3.3.3 (Sugestão de Correção de Erro)',
  },
  {
    code: 'ERR_SUBJECT_REQUIRED',
    field: 'Assunto / Departamento',
    formType: 'Contacto',
    triggerCondition: 'Nenhuma opção selecionada no seletor de assunto',
    message: 'Selecione o assunto da sua mensagem (Comercial, Distribuição ou Consumidor).',
    wcagCriterion: 'WCAG 3.3.1 (Identificação de Erros)',
  },
  {
    code: 'ERR_MESSAGE_MIN',
    field: 'Mensagem',
    formType: 'Contacto',
    triggerCondition: 'Mensagem vazia ou com menos de 10 caracteres',
    message: 'Por favor, detalhe a sua mensagem (mínimo de 10 caracteres).',
    wcagCriterion: 'WCAG 3.3.3 (Sugestão de Correção de Erro)',
  },
  {
    code: 'ERR_GDPR_REQUIRED',
    field: 'Consentimento RGPD',
    formType: 'Ambos',
    triggerCondition: 'Tentativa de submissão sem aceitar a Política de Privacidade',
    message: 'É necessário aceitar a Política de Privacidade para submeter os seus dados.',
    wcagCriterion: 'WCAG 3.3.1 & 3.3.4 (Prevenção de Erros)',
  },
  {
    code: 'ERR_NETWORK',
    field: 'Sistema / Submissão Global',
    formType: 'Ambos',
    triggerCondition: 'Falha de rede ou timeout do servidor',
    message: 'Ocorreu um erro temporário na ligação. Tente novamente ou ligue para (+351) 219 758 120.',
    wcagCriterion: 'WCAG 4.1.3 (Mensagens de Estado — role="alert")',
  },
  {
    code: 'OK_NEWSLETTER',
    field: 'Confirmação Newsletter',
    formType: 'Newsletter',
    triggerCondition: 'Submissão válida da subscrição de newsletter',
    message: 'Subscrição confirmada! Vai receber em primeira mão as novidades e receitas da Lactimonte.',
    wcagCriterion: 'WCAG 4.1.3 (Mensagens de Estado — aria-live="polite")',
  },
  {
    code: 'OK_CONTACT',
    field: 'Confirmação Contacto',
    formType: 'Contacto',
    triggerCondition: 'Submissão válida do formulário de contacto',
    message: 'Mensagem recebida com sucesso! A equipa da Lactimonte responderá com a maior brevidade.',
    wcagCriterion: 'WCAG 4.1.3 (Mensagens de Estado — aria-live="polite")',
  },
];

export const RESPONSIVE_BREAKPOINTS = [
  { query: '@media (max-width: 480px)', label: 'Smartphones Compactos', layout: '1 coluna fluida, botões largos de fácil alcance com o polegar, tipografia escalada.' },
  { query: '@media (max-width: 576px)', label: 'Smartphones Standard', layout: 'Grelha vertical otimizada, cartões VideoReel 9:14 e menu gaveta acessível.' },
  { query: '@media (min-width: 768px)', label: 'Tablets Verticais', layout: 'Container 736px, grelhas de 2 colunas para produtos, receitas e notícias.' },
  { query: '@media (min-width: 992px)', label: 'Tablets Horizontais & Laptops', layout: 'Container 960px, navegação desktop completa e acordeão de queijos expandido.' },
  { query: '@media (min-width: 1200px)', label: 'Desktops Standard', layout: 'Container 1160px, grelhas de 3 a 4 colunas, micro-interações hover completas.' },
  { query: '@media (min-width: 1400px)', label: 'Monitores Amplos (Ultra-Wide)', layout: 'Container 1360px, espaçamento editorial generoso e tipografia monumental.' },
];
