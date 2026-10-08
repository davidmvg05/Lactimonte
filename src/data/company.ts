export interface GoogleReviewHighlight {
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
}

export const COMPANY_INFO = {
  name: 'Lactimonte',
  legalName: 'Queijaria Lactimonte – Fernando Marques, Lda.',
  foundedYear: 1980,
  founders: 'Fernando Marques e Maria Adelina Amaro Marques',
  region: 'Montemuro · Concelho de Mafra (Região Saloia)',
  tagline: 'A Arte e Tradição de Bem Fazer Queijos desde 1980',
  description:
    'Empresa familiar portuguesa fundada em 1980 em Montemuro, no concelho de Mafra, especializada na produção e distribuição de laticínios tradicionais da região Saloia, com destaque para os seus premiados queijos frescos, queijos curados e requeijão.',
  address: {
    street: 'Rua Escola Montemuro',
    postalCode: '2665-410',
    locality: 'Santo Estevão das Galés',
    municipality: 'Mafra',
    country: 'Portugal',
    coordinates: {
      lat: 38.9186,
      lng: -9.2367,
    },
  },
  contacts: {
    phoneFixed: '(+351) 219 758 120',
    phoneFixedHref: 'tel:+351219758120',
    phoneFixedNote: 'Chamada para a rede fixa nacional',
    phoneMobile: '(+351) 917 048 410',
    phoneMobileHref: 'tel:+351917048410',
    phoneMobileNote: 'Chamada para a rede móvel nacional',
    email: 'geral@lactimonte.pt',
    emailHref: 'mailto:geral@lactimonte.pt',
  },
  social: {
    website: 'https://lactimonte.com/',
    facebook: 'https://www.facebook.com/Lactimonte/?locale=pt_PT',
    instagram: 'https://www.instagram.com/lactimonte_queijos/',
    instagramReel: 'https://www.instagram.com/reel/DHTj0rNo1n9/',
    linkedin: 'https://www.linkedin.com/company/lactimonte/?originalSubdomain=pt',
  },
  googleReviews: {
    rating: 4.0,
    totalReviews: 45,
    badgeText: '4,0 ★ no Google (45 avaliações verificadas)',
    highlights: [
      {
        author: 'Carlos Figueiredo',
        role: 'Cliente & Gastrónomo Local',
        rating: 5,
        date: 'Há 2 meses',
        comment:
          'O verdadeiro sabor da tradição saloia. O queijo fresco e o requeijão com doce de abóbora são imbatíveis na frescura e textura.',
      },
      {
        author: 'Helena Rodrigues',
        role: 'Consumidora Familiar',
        rating: 4,
        date: 'Há 4 meses',
        comment:
          'Compramos sempre o Queijo Curado Flor de Montemuro e os packs de queijo fresco. Qualidade constante ao longo de décadas.',
      },
      {
        author: 'Rui Tavares',
        role: 'Parceiro de Restauração · Grande Lisboa',
        rating: 5,
        date: 'Há 6 meses',
        comment:
          'Distribuição rigorosa, produtos certificados e um requeijão artesanal que faz a diferença nas sobremesas do nosso restaurante.',
      },
    ] as GoogleReviewHighlight[],
  },
  awards: [
    {
      title: 'Prémio Cinco Estrelas',
      years: '2020 · 2021 · 2022 · 2023 · 2024',
      subtitle: 'Distinção consecutiva pela excelência e preferência dos consumidores portugueses.',
      image: '/assets/imagem/premios/premio-cinco-estrelas-2024.png',
      images: [
        '/assets/imagem/premios/premio-cinco-estrelas-2020.png',
        '/assets/imagem/premios/premio-cinco-estrelas-2021.png',
        '/assets/imagem/premios/logo-premio-cinco-estrelas-2022.png',
        '/assets/imagem/premios/logo-premio-cinco-estrelas-2023.png',
        '/assets/imagem/premios/premio-cinco-estrelas-2024.png',
      ],
    },
    {
      title: 'Sabor do Ano',
      years: '2016 · 2017 · 2019',
      subtitle: 'Reconhecimento em provas cegas de análise sensorial pela qualidade genuína.',
      image: '/assets/imagem/premios/premio-2019.png',
      images: [
        '/assets/imagem/premios/premio-2016.png',
        '/assets/imagem/premios/premio-2017.png',
        '/assets/imagem/premios/premio-2019.png',
      ],
    },
    {
      title: 'PME Líder & Empresa Certificada',
      years: 'Mais de 10 Anos Consecutivos',
      subtitle: 'Solidez empresarial, segurança alimentar certificada e responsabilidade ambiental com ETAR própria.',
      image: '/assets/imagem/premios/pme-lider.png',
      images: [
        '/assets/imagem/premios/pme-lider.png',
        '/assets/imagem/premios/ifs-food.png',
      ],
    },
  ],
  pillars: [
    {
      number: '01',
      title: 'Matéria-Prima 100% Controlada',
      description:
        'Leite selecionado de produtores controlados sanitariamente pelas OPP locais, testado segundo rigorosos critérios nutricionais e higiénicos.',
      icon: 'shield-check',
    },
    {
      number: '02',
      title: 'Saber Fazer da Região Saloia',
      description:
        'Mais de quatro décadas a aperfeiçoar o dessoramento lento, a cura com temperatura e humidade controladas e a fervura tradicional do soro.',
      icon: 'award',
    },
    {
      number: '03',
      title: 'Sustentabilidade & ETAR Própria',
      description:
        'Unidade fabril em Montemuro equipada com moderna ETAR para tratamento e recuperação de efluentes, minimizando a pegada ambiental.',
      icon: 'leaf',
    },
  ],
};
