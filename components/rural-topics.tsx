import {CoverflowCarousel} from "./ui/coverflow-carousel";
const topics=[
  {
    "title": "Aposentadoria Rural",
    "subtitle": "Orientação sobre os requisitos e a comprovação da atividade rural necessária para análise do direito à aposentadoria.",
    "src": "/images/blog-trabalhador-rural.jpeg",
    "alt": "Trabalhador rural na plantação",
    "href": "/blog/aposentadoria-rural"
  },
  {
    "title": "Segurado Especial",
    "subtitle": "Análise da situação de agricultores familiares e outros trabalhadores que podem se enquadrar como segurados especiais do INSS.",
    "src": "/images/area-beneficios-rurais.jpeg",
    "alt": "Trabalhador rural lendo seus registros",
    "href": "/blog/segurado-especial"
  },
  {
    "title": "Comprovação da Atividade Rural",
    "subtitle": "Orientação sobre documentos, registros e outros elementos que podem ser relevantes para demonstrar o exercício da atividade rural.",
    "src": "/images/blog-documentos-rurais.jpeg",
    "alt": "Trabalhador organizando documentos",
    "href": "/blog/documentos-atividade-rural"
  },
  {
    "title": "Salário-Maternidade Rural",
    "subtitle": "Análise do direito ao benefício para trabalhadoras rurais, considerando a comprovação da atividade e os requisitos previdenciários aplicáveis.",
    "src": "/images/area-maternidade.jpeg",
    "alt": "Mãe com bebê e documentos",
    "href": "/contato"
  },
  {
    "title": "Benefício Rural Negado pelo INSS",
    "subtitle": "Análise do motivo do indeferimento e das possibilidades jurídicas existentes para buscar a revisão da situação.",
    "src": "/images/blog-beneficio-negado.jpeg",
    "alt": "Trabalhador analisando uma comunicação",
    "href": "/blog/beneficio-rural-negado"
  },
  {
    "title": "Benefícios por Incapacidade do Trabalhador Rural",
    "subtitle": "Orientação para trabalhadores rurais que estejam impossibilitados de exercer sua atividade por motivo de doença ou incapacidade.",
    "src": "/images/area-incapacidade.jpeg",
    "alt": "Homem com braço imobilizado lendo documentos",
    "href": "/contato"
  }
];
export function RuralTopics(){return <section className="section rural-topics"><div className="wrap"><span className="eyebrow">BENEFÍCIOS RURAIS</span><h2>Um olhar atento a cada demanda do campo.</h2></div><CoverflowCarousel slides={topics} label="Temas de benefícios rurais" interval={1500}/></section>}
