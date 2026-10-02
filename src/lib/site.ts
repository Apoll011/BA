/**
 * Morada, telefone, horário, email e Instagram são conteúdo de exemplo.
 * Substituir em produção.
 */

export const atelier = {
  name: "BA",
  tagline: "O ofício do brilho, sem pressa.",
  description:
    "Atelier de detalhe automóvel em Estoril. Pneus, lavagens, correção de pintura e proteção. Um carro de cada vez.",
  phoneDisplay: "+351 214 680 240",
  phoneTel: "+351214680240",
  email: "atelier@ba.pt",
  instagramUrl: "https://www.instagram.com/ba.atelier",
  instagramHandle: "@ba.atelier",
  address: {
    street: "Avenida Marginal 214",
    postalCode: "2765-372",
    city: "Estoril",
    country: "Portugal",
  },
  hours: [
    { label: "Terça a sábado", value: "09:00–18:00" },
    { label: "Domingo e segunda", value: "Encerrado" },
  ],
  coordinates: {
    lat: 38.70555,
    lon: -9.39715,
    label: "38.7056° N · 9.3972° W",
  },
} as const;

export const heroImage = {
  src: "/bg.png",
  alt: "Traseira de um automóvel azul molhado numa baía de detalhe iluminada.",
} as const;

export const nav = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/precos", label: "Preços" },
  { href: "/galeria", label: "Galeria" },
  { href: "/contactos", label: "Contactos" },
] as const;

export const tickerPhrases = [
  "Pneus",
  "Lavagens",
  "Detalhe de Assinatura",
  "Correção de Pintura",
] as const;

export type Service = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  tags: string[];
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "pneus",
    kicker: "Rodar",
    title: "Pneus",
    summary:
      "Montagem, equilibragem e geometria para a jante sair direita e o piso assentar sem marcas.",
    tags: ["Montagem", "Equilibragem", "Geometria"],
    includes: [
      "Montagem com cuidado no talão, para não marcar a jante",
      "Equilibragem e válvula nova",
      "Pressão segundo a chapa do construtor",
      "Geometria da direção, por marcação",
      "Reparação de furos no piso",
      "Armazenamento de época, ao abrigo do sol",
    ],
  },
  {
    slug: "lavagens",
    kicker: "Lavagem",
    title: "Lavagens",
    summary:
      "Lavagem à mão, dois baldes, sem escovas de túnel. Exterior, jantes e habitáculo tratados à parte.",
    tags: ["Exterior", "Habitáculo", "Jantes"],
    includes: [
      "Pré-lavagem e dois baldes, sem escovas de túnel",
      "Jantes, cavas e limiares das portas",
      "Vidros por dentro e por fora",
      "Aspiração e superfícies do habitáculo",
      "Peles tratadas à parte, quando pedido",
      "Secagem à mão, sem manchas de água",
    ],
  },
];

export const priceGroups = [
  {
    id: "pneus",
    title: "Pneus",
    rows: [
      ["Montagem e equilibragem, jante até 17\"", "22 € / pneu"],
      ["Montagem e equilibragem, 18\" a 20\"", "28 € / pneu"],
      ["Montagem e equilibragem, acima de 20\"", "36 € / pneu"],
      ["Geometria da direção", "75 €"],
      ["Reparação de furo no piso", "28 €"],
      ["Válvula metálica", "8 €"],
      ["Sensor TPMS, programação", "desde 45 €"],
      ["Armazenamento de época, jogo de 4", "90 €"],
    ],
  },
  {
    id: "lavagens",
    title: "Lavagens",
    rows: [
      ["Lavagem de manutenção", "55 €"],
      ["Lavagem detalhada de exterior", "110 €"],
      ["Habitáculo profundo", "145 €"],
      ["Exterior e habitáculo", "195 €"],
      ["Descontaminação ferrosa e alcatrão", "85 €"],
      ["Motor a vapor", "75 €"],
      ["Tratamento de peles", "desde 90 €"],
    ],
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Receção",
    body: "Inspeção à luz rasante, lista de riscos e acordo do plano antes de qualquer máquina.",
  },
  {
    number: "02",
    title: "Descontaminação",
    body: "Lavagem segura, ferro, alcatrão e contaminantes presos na pintura.",
  },
  {
    number: "03",
    title: "Correção",
    body: "Polimento por fases, só na medida em que a espessura e o verniz o permitem.",
  },
  {
    number: "04",
    title: "Proteção",
    body: "Selante ou cerâmico, em oficina fechada, longe do pó da rua.",
  },
  {
    number: "05",
    title: "Entrega",
    body: "Revisão final, fotografias de saída e entrega com o habitáculo protegido.",
  },
] as const;

export const reasons = [
  {
    number: "01",
    title: "Oficina fechada",
    body: "A pintura acabada de corrigir não apanha pó de rua nem a fila de uma lavagem rápida.",
  },
  {
    number: "02",
    title: "Um carro de cada vez",
    body: "A agenda é curta de propósito. O tempo é do automóvel que está na baía.",
  },
  {
    number: "03",
    title: "Luz rasante",
    body: "Riscos e hologramas veem-se antes de se prometer o que o verniz não dá.",
  },
  {
    number: "04",
    title: "Produto de oficina",
    body: "Compostos, selantes e cerâmicos de gama profissional, doseados à pintura.",
  },
] as const;

export const galleryFrames = [
  { title: "Baía de lavagem", tone: "dark" },
  { title: "Luz rasante", tone: "azure" },
  { title: "Jante", tone: "split" },
  { title: "Habitáculo", tone: "light" },
  { title: "Capô", tone: "mist" },
  { title: "Entrega", tone: "dark" },
] as const;

export function mapsUrl() {
  const { lat, lon } = atelier.coordinates;
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}`;
}

export function mapEmbedUrl() {
  const { lat, lon } = atelier.coordinates;
  const pad = 0.008;
  const bbox = [lon - pad, lat - pad, lon + pad, lat + pad].join("%2C");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
}

export function addressLine() {
  const { street, postalCode, city } = atelier.address;
  return `${street}, ${postalCode} ${city}`;
}
