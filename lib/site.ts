export const site = {
 name: "Maria Ronikerlly Melo", role: "Advogada Previdenciária",
 origin: "https://maria-ronikerlly-melo.marcosmagalhaes1202.chatgpt.site",
 address: "Rua Boaventura P. Alencar, 138, Araripina-PE",
 whatsapp: "TODO_CONFIRMAR", email: "TODO_CONFIRMAR", oab: "TODO_CONFIRMAR",
 maps: "TODO_CONFIRMAR", instagram: "TODO_CONFIRMAR", institution: "TODO_CONFIRMAR",
 privacyController: "TODO_CONFIRMAR", publicReleaseApproved: false,
 reviewsEnabled: false, editorialApproved: false,
};
export const contactHref = /^\d{10,15}$/.test(site.whatsapp) ? `https://wa.me/${site.whatsapp}` : "/contato";
export const nav = [["/", "Início"], ["/sobre", "Sobre"], ["/beneficios-rurais", "Benefícios Rurais"], ["/areas-de-atuacao", "Áreas de Atuação"], ["/blog", "Blog"], ["/contato", "Contato"]];
export const areas = [
  {
    "id": "beneficios-rurais",
    "title": "Benefícios Rurais",
    "description": "Orientação especializada para trabalhadores rurais, com atenção à documentação, à comprovação da atividade e às particularidades de cada caso perante o INSS.",
    "fullDescription": "Atuação voltada às demandas previdenciárias de trabalhadores rurais, segurados especiais e famílias que exercem atividade no campo. O atendimento considera as particularidades da comprovação da atividade rural, da documentação e do histórico de trabalho de cada cliente.",
    "image": "/images/area-beneficios-rurais.jpeg",
    "alt": "Trabalhador rural examinando documentos no campo",
    "enabled": true,
    "href": "/beneficios-rurais",
    "specialty": true
  },
  {
    "id": "aposentadorias",
    "title": "Aposentadorias",
    "description": "Análise previdenciária para identificar requisitos, documentos e possibilidades de aposentadoria de acordo com o histórico de cada segurado.",
    "fullDescription": "Análise do histórico previdenciário para identificar possibilidades de aposentadoria, requisitos, períodos contributivos e documentos necessários. O objetivo é proporcionar uma visão clara da situação previdenciária antes da realização do pedido.",
    "image": "/images/area-aposentadorias.jpeg",
    "alt": "Casal idoso lendo documentos em casa",
    "enabled": true,
    "href": "/areas-de-atuacao#aposentadorias",
    "specialty": false
  },
  {
    "id": "incapacidade",
    "title": "Benefícios por Incapacidade",
    "description": "Orientação em casos de incapacidade para o trabalho, com análise da situação, documentação e possíveis benefícios previdenciários.",
    "fullDescription": "Atuação em situações em que uma doença, acidente ou condição de saúde interfere temporária ou permanentemente na capacidade para o trabalho, com análise dos requisitos previdenciários e da documentação necessária.",
    "image": "/images/area-incapacidade.jpeg",
    "alt": "Homem com braço imobilizado analisando documentos",
    "enabled": true,
    "href": "/areas-de-atuacao#incapacidade",
    "specialty": false
  },
  {
    "id": "pensao-por-morte",
    "title": "Pensão por Morte",
    "description": "Análise do direito à pensão por morte e orientação sobre os requisitos e documentos necessários para os dependentes.",
    "fullDescription": "Orientação aos dependentes de segurados falecidos para análise do direito à pensão por morte, considerando vínculo com o segurado, qualidade de dependente, documentação e demais requisitos aplicáveis.",
    "image": "/images/area-pensao.jpeg",
    "alt": "Mulher segurando uma fotografia de família junto a documentos",
    "enabled": true,
    "href": "/areas-de-atuacao#pensao-por-morte",
    "specialty": false
  },
  {
    "id": "salario-maternidade",
    "title": "Salário-Maternidade",
    "description": "Orientação sobre o salário-maternidade e análise dos requisitos previdenciários conforme a realidade de cada segurada.",
    "fullDescription": "Análise do direito ao salário-maternidade conforme a situação previdenciária da segurada, considerando vínculos, contribuições, atividade rural e demais particularidades que possam interferir na concessão do benefício.",
    "image": "/images/area-maternidade.jpeg",
    "alt": "Mãe acolhendo o bebê no colo enquanto segura documentos",
    "enabled": true,
    "href": "/areas-de-atuacao#salario-maternidade",
    "specialty": false
  },
  {
    "id": "bpc-loas",
    "title": "BPC / LOAS",
    "description": "Análise dos requisitos para o BPC/LOAS e orientação sobre a documentação necessária para o pedido do benefício.",
    "fullDescription": "Orientação sobre o Benefício de Prestação Continuada destinado a pessoas idosas ou pessoas com deficiência que preencham os requisitos previstos em lei, com análise individual da situação familiar, social e documental.",
    "image": "/images/area-bpc.jpeg",
    "alt": "Mulher idosa recebendo apoio de uma mulher mais jovem",
    "enabled": true,
    "href": "/areas-de-atuacao#bpc-loas",
    "specialty": false
  }
];
export type Testimonial = {text:string;name:string;image?:string;rating?:number;source?:"google"|"manual"};
export const testimonials:Testimonial[]=[];
export const aboutCopy = "Maria Ronikerlly Melo atua na área previdenciária com foco em um atendimento cuidadoso, humano e estratégico. Sua atuação se destaca especialmente na análise de situações relacionadas aos benefícios rurais, oferecendo orientação clara e individualizada para quem precisa compreender seus direitos e buscar o caminho jurídico adequado para o seu caso.";
export const ruralCopy = "As demandas relacionadas aos benefícios rurais exigem atenção às particularidades da atividade exercida, da documentação e da forma como a trajetória do trabalhador é apresentada perante o INSS.";
export const steps = [ ["Conte sua situação","O primeiro passo é compreender sua necessidade e as informações iniciais do caso."], ["Análise do caso","Informações e documentos são avaliados para identificar o direcionamento adequado."], ["Orientação jurídica","Você recebe uma explicação clara sobre sua situação e os próximos passos possíveis."], ["Condução do atendimento","Quando houver viabilidade, o caso segue conforme a estratégia jurídica definida."] ];
export const faqs = [
 {q:"Quem pode ter direito a benefício rural?",a:"A análise considera a atividade exercida, a categoria do trabalhador, o período de trabalho e os requisitos do benefício. O enquadramento precisa ser avaliado individualmente.",slug:"quem-e-trabalhador-rural-inss"},
 {q:"Quais documentos podem ajudar a comprovar atividade rural?",a:"Documentos relacionados ao trabalho, à produção e ao uso da terra podem ser relevantes. A autodeclaração também integra a análise do segurado especial. O conjunto deve refletir a trajetória real do trabalhador.",slug:"documentos-atividade-rural"},
 {q:"Meu benefício foi negado. Ainda posso buscar orientação?",a:"Sim. A decisão e os documentos apresentados podem ser analisados para compreender o motivo da negativa e avaliar os caminhos possíveis, observando os prazos aplicáveis.",slug:"beneficio-rural-negado"},
 {q:"Posso ser atendido mesmo morando fora de Araripina?",a:"A atuação abrange Araripina e região. Consulte a disponibilidade e a modalidade de atendimento para a sua localidade."},
 {q:"Como funciona o primeiro atendimento?",a:"O primeiro passo é compreender sua situação e as informações iniciais do caso. A partir disso, são identificados os documentos necessários e os próximos passos possíveis."}
];
