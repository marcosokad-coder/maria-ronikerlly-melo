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
export const areas = [{title:"Benefícios Rurais",description:"Atuação com atenção especial às demandas previdenciárias relacionadas ao trabalhador rural e às particularidades da sua comprovação.",enabled:true,href:"/beneficios-rurais"}, ...["Aposentadorias","Benefícios por incapacidade","Pensão por morte","Salário-maternidade","BPC/LOAS"].map(title=>({title,description:"TODO_CONFIRMAR",enabled:false,href:"/contato"}))];
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
