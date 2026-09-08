import {site} from "@/lib/site";
export type BlogPost={slug:string;title:string;category:string;excerpt:string;coverImage:string;coverAlt:string;publishedAt:string;updatedAt?:string;draft:boolean;author:string;reviewer:string;sections:{heading:string;text:string}[];sources:{label:string;url:string}[]};
// Drafts are visible in the owner-private review version only. Confirm author/reviewer before public release.
export const allPosts:BlogPost[]=[
  {
    "slug": "quem-e-trabalhador-rural-inss",
    "title": "Quem é considerado trabalhador rural para o INSS?",
    "category": "Benefícios Rurais",
    "excerpt": "Entenda por que a forma de trabalho e a trajetória de cada pessoa fazem diferença na análise previdenciária.",
    "coverImage": "/images/maria-ronikerlly-portrait-beige.jpeg",
    "coverAlt": "Maria Ronikerlly Melo — orientação sobre benefícios rurais",
    "publishedAt": "2026-09-08",
    "draft": true,
    "author": "TODO_CONFIRMAR",
    "reviewer": "TODO_CONFIRMAR",
    "sections": [
      {
        "heading": "O trabalho no campo e o enquadramento previdenciário",
        "text": "A expressão trabalhador rural reúne diferentes situações. A análise previdenciária precisa observar como a atividade é exercida, a existência de vínculos e o histórico de trabalho. O endereço rural, sozinho, não explica essa trajetória."
      },
      {
        "heading": "Por onde começar a organização do caso",
        "text": "Anote os períodos de trabalho, os locais e as atividades desenvolvidas. Separe registros que já possui e informe também eventuais atividades fora do campo. A organização facilita a identificação do que ainda precisa ser esclarecido."
      },
      {
        "heading": "Uma análise individual",
        "text": "O enquadramento e os requisitos dependem da situação concreta. A orientação jurídica pode ajudar a compreender os documentos e os caminhos possíveis, sem promessa de concessão."
      }
    ],
    "sources": [
      {
        "label": "Gov.br — Aposentadoria por idade rural",
        "url": "https://www.gov.br/pt-br/servicos/solicitar-aposentadoria-por-idade-para-trabalhador-rural"
      }
    ]
  },
  {
    "slug": "documentos-atividade-rural",
    "title": "Quais documentos podem ajudar a comprovar atividade rural?",
    "category": "Benefícios Rurais",
    "excerpt": "Organizar documentos e períodos de trabalho é um passo importante para apresentar sua história ao INSS.",
    "coverImage": "/images/maria-ronikerlly-office-seated.jpeg",
    "coverAlt": "Maria Ronikerlly Melo — orientação sobre benefícios rurais",
    "publishedAt": "2026-09-08",
    "draft": true,
    "author": "TODO_CONFIRMAR",
    "reviewer": "TODO_CONFIRMAR",
    "sections": [
      {
        "heading": "O conjunto documental importa",
        "text": "A comprovação deve ser analisada em conjunto com a trajetória do trabalhador. Registros da produção e documentos relacionados ao exercício da atividade ou ao uso da terra podem ser relevantes, conforme o caso. Não há um documento que garanta sozinho a concessão."
      },
      {
        "heading": "A autodeclaração rural",
        "text": "Para o segurado especial, a autodeclaração informa detalhes da atividade exercida. O INSS disponibiliza o preenchimento eletrônico pelo Meu INSS. As informações precisam corresponder à realidade e ser coerentes com os registros disponíveis."
      },
      {
        "heading": "Como preparar os documentos",
        "text": "Organize os registros por período, preserve os originais e verifique se as cópias estão legíveis. Indique eventuais lacunas para que possam ser avaliadas. A lista adequada depende da categoria do trabalhador e do benefício solicitado."
      }
    ],
    "sources": [
      {
        "label": "INSS — Autodeclaração rural",
        "url": "https://www.gov.br/inss/pt-br/saiba-mais/rural/autodeclaracao-rural"
      }
    ]
  },
  {
    "slug": "beneficio-rural-negado",
    "title": "Benefício rural negado: o que pode ser feito?",
    "category": "INSS",
    "excerpt": "O primeiro passo é compreender a decisão e avaliar os documentos apresentados e os caminhos possíveis.",
    "coverImage": "/images/maria-ronikerlly-portrait-navy.jpeg",
    "coverAlt": "Maria Ronikerlly Melo — orientação sobre inss",
    "publishedAt": "2026-09-08",
    "draft": true,
    "author": "TODO_CONFIRMAR",
    "reviewer": "TODO_CONFIRMAR",
    "sections": [
      {
        "heading": "Leia o motivo da negativa",
        "text": "Uma decisão negativa precisa ser compreendida antes de escolher o próximo passo. Guarde a comunicação recebida e verifique o motivo apontado pelo INSS. Organize também os documentos utilizados no pedido."
      },
      {
        "heading": "Avalie a decisão e os prazos",
        "text": "Há procedimento de recurso administrativo no INSS. A adequação desse caminho depende da decisão, dos fundamentos e dos prazos aplicáveis. Procure orientação sem adiar a análise da comunicação recebida."
      },
      {
        "heading": "O próximo passo depende do caso",
        "text": "A orientação deve considerar o processo e as informações disponíveis. Nenhuma medida assegura automaticamente a concessão. A análise individual ajuda a identificar o que precisa ser esclarecido e quais alternativas podem ser avaliadas."
      }
    ],
    "sources": [
      {
        "label": "INSS — Recurso administrativo",
        "url": "https://www.gov.br/inss/pt-br/direitos-e-deveres/recurso/recurso-administrativo-de-beneficio-previdenciario"
      }
    ]
  },
  {
    "slug": "aposentadoria-rural",
    "title": "Como funciona a aposentadoria rural?",
    "category": "Aposentadoria Rural",
    "excerpt": "Idade, atividade rural e comprovação precisam ser avaliadas em conjunto.",
    "coverImage": "/images/maria-ronikerlly-office-seated.jpeg",
    "coverAlt": "Maria Ronikerlly Melo — orientação sobre aposentadoria rural",
    "publishedAt": "2026-09-08",
    "draft": true,
    "author": "TODO_CONFIRMAR",
    "reviewer": "TODO_CONFIRMAR",
    "sections": [
      {
        "heading": "Uma análise que considera a trajetória",
        "text": "A aposentadoria por idade rural exige a verificação dos requisitos aplicáveis e da comprovação do trabalho. A análise não deve se limitar a um único documento ou apenas à idade da pessoa."
      },
      {
        "heading": "Organize o histórico de trabalho",
        "text": "Reúna as informações sobre os períodos de atividade, os locais e a forma de exercício do trabalho. Informe também eventuais vínculos urbanos. Esses dados ajudam a compreender a trajetória e a modalidade que deve ser analisada."
      },
      {
        "heading": "Consulte informações oficiais",
        "text": "O serviço de aposentadoria rural no portal gov.br apresenta os requisitos e as orientações do INSS. Para entender como as regras se aplicam à sua história, uma análise individual é essencial."
      }
    ],
    "sources": [
      {
        "label": "Gov.br — Aposentadoria por idade rural",
        "url": "https://www.gov.br/pt-br/servicos/solicitar-aposentadoria-por-idade-para-trabalhador-rural"
      }
    ]
  },
  {
    "slug": "segurado-especial",
    "title": "O que é segurado especial?",
    "category": "Segurado Especial",
    "excerpt": "Conheça a importância do enquadramento previdenciário para quem trabalha no campo.",
    "coverImage": "/images/maria-ronikerlly-portrait-beige.jpeg",
    "coverAlt": "Maria Ronikerlly Melo — orientação sobre segurado especial",
    "publishedAt": "2026-09-08",
    "draft": true,
    "author": "TODO_CONFIRMAR",
    "reviewer": "TODO_CONFIRMAR",
    "sections": [
      {
        "heading": "Uma categoria que exige atenção",
        "text": "Segurado especial é um enquadramento previdenciário com critérios próprios. A análise considera a forma de exercício da atividade rural e as condições do trabalho. Não basta utilizar essa denominação no pedido."
      },
      {
        "heading": "Informações sobre a atividade",
        "text": "Detalhes sobre os períodos, a exploração da atividade e a participação familiar devem ser apresentados com clareza. A autodeclaração rural é um dos instrumentos utilizados para registrar essas informações perante o INSS."
      },
      {
        "heading": "Evite conclusões automáticas",
        "text": "Cada integrante da família pode ter uma trajetória diferente. Outras atividades e vínculos precisam ser informados para permitir uma avaliação adequada do enquadramento."
      }
    ],
    "sources": [
      {
        "label": "INSS — Autodeclaração rural",
        "url": "https://www.gov.br/inss/pt-br/saiba-mais/rural/autodeclaracao-rural"
      }
    ]
  },
  {
    "slug": "agricultura-familiar-inss",
    "title": "Agricultura familiar e INSS: o que é importante saber?",
    "category": "Segurado Especial",
    "excerpt": "A organização do trabalho da família merece atenção na análise dos direitos previdenciários.",
    "coverImage": "/images/maria-ronikerlly-hero.jpeg",
    "coverAlt": "Maria Ronikerlly Melo — orientação sobre segurado especial",
    "publishedAt": "2026-09-08",
    "draft": true,
    "author": "TODO_CONFIRMAR",
    "reviewer": "TODO_CONFIRMAR",
    "sections": [
      {
        "heading": "A história da família e a de cada pessoa",
        "text": "O trabalho na agricultura familiar precisa ser descrito de maneira fiel à realidade. É importante identificar quem participa da atividade, em quais períodos e de que forma."
      },
      {
        "heading": "Documentação e coerência",
        "text": "Organize os registros disponíveis sobre a atividade e a produção. As informações apresentadas na autodeclaração e nos documentos devem ser coerentes. Dúvidas e lacunas devem ser esclarecidas, sem criar registros que não correspondam ao trabalho realizado."
      },
      {
        "heading": "Orientação para o caso concreto",
        "text": "A análise previdenciária observa os requisitos do benefício e o enquadramento de cada pessoa. Ter familiares que receberam um benefício não significa que outro pedido terá o mesmo resultado."
      }
    ],
    "sources": [
      {
        "label": "INSS — Autodeclaração rural",
        "url": "https://www.gov.br/inss/pt-br/saiba-mais/rural/autodeclaracao-rural"
      }
    ]
  }
];

export const posts=allPosts.filter(post=>!site.publicReleaseApproved||(!post.draft&&site.editorialApproved&&post.author!=="TODO_CONFIRMAR"&&post.reviewer!=="TODO_CONFIRMAR"));
