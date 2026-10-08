export interface NewsItem {
  id: string;
  date: string;
  formattedDate: string;
  category: 'Prémios & Distinções' | 'Qualidade & Certificação' | 'Comunidade & Eventos' | 'Cultura do Queijo';
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'gala-5-estrelas-2024',
    date: '2024-03-08',
    formattedDate: '08 Março 2024',
    category: 'Prémios & Distinções',
    title: 'A Lactimonte mais uma vez na Gala Prémio Cinco Estrelas',
    excerpt:
      'Pelo quarto ano consecutivo, a Lactimonte sobe ao palco da Gala Cinco Estrelas, reafirmando a confiança das famílias portuguesas nos nossos queijos tradicionais.',
    image: '/assets/imagem/premios/premio-cinco-estrelas-2024.png',
    featured: true,
  },
  {
    id: 'entrega-premios-5-estrelas-2023',
    date: '2023-02-22',
    formattedDate: '22 Fevereiro 2023',
    category: 'Prémios & Distinções',
    title: 'Evento de Entrega dos Prémios Cinco Estrelas 2023',
    excerpt:
      'Uma noite memorável de celebração da qualidade nacional, onde a equipa Lactimonte recebeu o galardão atribuído pelos consumidores.',
    image: '/assets/imagem/premios/logo-premio-cinco-estrelas-2023.png',
    featured: true,
  },
  {
    id: 'premio-5-estrelas-4-vez',
    date: '2023-01-23',
    formattedDate: '23 Janeiro 2023',
    category: 'Prémios & Distinções',
    title: 'Prémio Cinco Estrelas pela 4ª vez consecutiva. Se ainda não sabe porquê, experimente!',
    excerpt:
      'Os testes de degustação e avaliação de satisfação voltaram a destacar a frescura, o sabor e a relação qualidade-preço da gama Lactimonte.',
    image: '/assets/imagem/premios/premio-cinco-estrelas-2021.png',
    featured: true,
  },
  {
    id: 'empresa-certificada-iso',
    date: '2022-06-15',
    formattedDate: '15 Junho 2022',
    category: 'Qualidade & Certificação',
    title: 'Lactimonte: Empresa Certificada em Segurança Alimentar',
    excerpt:
      'O nosso compromisso com o controlo sanitário do leite e a higiene em cada etapa do fabrico é validado pelas mais exigentes normas de certificação.',
    image: '/assets/imagem/premios/ifs-food.png',
  },
  {
    id: 'premio-5-estrelas-2022',
    date: '2022-04-10',
    formattedDate: '10 Abril 2022',
    category: 'Prémios & Distinções',
    title: 'Prémio Cinco Estrelas 2022 — 3 Anos Consecutivos de Excelência',
    excerpt:
      'Três anos seguidos a merecer a preferência dos consumidores portugueses na categoria de Queijos Tradicionais.',
    image: '/assets/imagem/premios/logo-premio-cinco-estrelas-2022.png',
  },
  {
    id: 'pme-lider-10-anos',
    date: '2021-10-18',
    formattedDate: '18 Outubro 2021',
    category: 'Qualidade & Certificação',
    title: 'A Queijaria PME Líder há 10 Anos em Destaque na Imprensa Nacional',
    excerpt:
      'Reportagem especial sobre o percurso de crescimento sustentável da Queijaria Lactimonte em Montemuro, Mafra.',
    image: '/assets/imagem/blog/lactimonte_correio-da-manha-1.jpg',
  },
  {
    id: 'segredo-queijos-lactimonte',
    date: '2020-07-28',
    formattedDate: '28 Julho 2020',
    category: 'Cultura do Queijo',
    title: 'Queijos: Um Mundo de Pequenos Segredos da Região Saloia',
    excerpt:
      'Descubra como a temperatura de maturação, a seleção do leite e o tempo de cura moldam a identidade de cada queijo Lactimonte.',
    image: '/assets/imagem/blog/queijos-lactimonte.jpg',
  },
  {
    id: 'congelar-queijo-maneira-certa',
    date: '2020-07-20',
    formattedDate: '20 Julho 2020',
    category: 'Cultura do Queijo',
    title: 'Congelar queijo e conservar no frigorífico? Só se for da maneira certa',
    excerpt:
      'Dicas práticas dos nossos mestres queijeiros para preservar a textura, humidade e aroma dos queijos frescos e curados em casa.',
    image: '/assets/imagem/blog/congelar-queijo.png',
  },
  {
    id: 'lactimonte-40-anos',
    date: '2020-01-15',
    formattedDate: '15 Janeiro 2020',
    category: 'Comunidade & Eventos',
    title: 'Lactimonte: Uma Tradição Familiar com Mais de 40 Anos de História',
    excerpt:
      'Desde a fundação em 1980 por Fernando Marques e Maria Adelina Amaro Marques até à moderna unidade fabril de hoje em Mafra.',
    image: '/assets/imagem/blog/noticia-premio-5-estrelas-2021.jpg',
  },
  {
    id: 'o-chef-e-voce-tvi',
    date: '2019-11-12',
    formattedDate: '12 Novembro 2019',
    category: 'Comunidade & Eventos',
    title: 'Produtos Lactimonte em Destaque no Programa “O Chef é Você” (TVI)',
    excerpt:
      'Os queijos frescos, curados e requeijão da Lactimonte desafiaram a criatividade gastronómica na televisão nacional.',
    image: '/assets/imagem/blog/chef-e-voce-lactimonte.png',
  },
  {
    id: 'passeio-pedestre-montemuro',
    date: '2019-05-19',
    formattedDate: '19 Maio 2019',
    category: 'Comunidade & Eventos',
    title: 'Lactimonte Associa-se ao 12º Passeio Pedestre de Montemuro',
    excerpt:
      'Enraizada na região saloia, a Lactimonte apoia ativamente o desporto, a cultura e as iniciativas da comunidade local de Mafra.',
    image: '/assets/imagem/blog/lactimonte-cdr-passeio-pedestre-montemuro.jpg',
  },
  {
    id: 'sabor-do-ano-distincao',
    date: '2019-03-04',
    formattedDate: '04 Março 2019',
    category: 'Prémios & Distinções',
    title: 'Lactimonte Distinguida com o Selo Sabor do Ano',
    excerpt:
      'A qualidade sensorial dos nossos queijos novamente comprovada em provas cegas independentes.',
    image: '/assets/imagem/premios/premio-2019.png',
  },
];
