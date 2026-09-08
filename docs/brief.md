# Site Maria Ronikerlly Melo — Brief Mestre de Design, Conteúdo e Implementação

> Documento-fonte para construção do site institucional premium da advogada Maria Ronikerlly Melo. Este arquivo deve ser tratado como **source of truth** do projeto. Quando houver conflito entre uma demo de componente e este documento, prevalecem as regras deste documento.

---

## 1. Visão do projeto

Criar um site institucional premium, moderno, elegante, rápido e responsivo para **Maria Ronikerlly Melo**, com foco em:

- autoridade profissional;
- conversão para atendimento;
- posicionamento claro em Direito Previdenciário;
- destaque forte para a especialidade em **Benefícios Rurais**;
- presença regional em **Araripina e região**;
- crescimento orgânico via SEO e blog;
- uso forte e sofisticado das fotografias reais da cliente.

O site deve transmitir **credibilidade, proximidade, clareza, sofisticação e domínio técnico**, sem parecer um template jurídico genérico.

### Regra central de posicionamento

Hierarquia de mensagem:

1. **Advogada Previdenciária**
2. **Especialista em Benefícios Rurais**
3. **Araripina e Região**
4. Atendimento próximo, claro e estratégico
5. Conteúdo educativo como ativo de autoridade e SEO

---

## 2. Informações confirmadas da cliente

- **Nome profissional:** Maria Ronikerlly Melo
- **Atuação principal:** Advocacia Previdenciária
- **Diferencial:** Especialista em Benefícios Rurais
- **Região:** Araripina e região
- **Referência institucional exibida no Instagram:** BM - Bihum e Melo Advogados
- **Endereço exibido no perfil:** Rua Boaventura P. Alencar, 138, Araripina-PE

### Dados que NÃO devem ser inventados

Antes da publicação final, confirmar:

- número da OAB;
- WhatsApp;
- e-mail;
- URL do Google Maps;
- vínculo e forma correta de exibição de “BM - Bihum e Melo Advogados”;
- lista final de áreas de atuação além de Benefícios Rurais;
- avaliações reais do Google;
- números de autoridade, anos de experiência, quantidade de clientes ou métricas;
- redes sociais oficiais;
- política de privacidade e eventuais dados do controlador.

No código, usar placeholders claramente identificados, por exemplo:

```ts
const CONTACT = {
  whatsapp: "TODO_CONFIRMAR",
  email: "TODO_CONFIRMAR",
  oab: "TODO_CONFIRMAR",
};
```

Nunca criar números, depoimentos, OAB ou resultados jurídicos fictícios.

---

## 3. Direção visual

### Conceito

**Boutique jurídica contemporânea + autoridade pessoal + elegância editorial.**

A estética deve ser feminina com equilíbrio, profissional e atemporal. Evitar excesso de elementos “luxo” e qualquer aparência de neon, gamer, SaaS genérico ou advocacia clichê.

### Evitar

- martelo de juiz;
- balança da justiça como elemento dominante;
- tribunal americano;
- colunas clássicas genéricas;
- excesso de dourado;
- amarelo vivo;
- laranja de demos;
- azul elétrico de demos;
- sombras pesadas;
- animações em excesso;
- fundos muito carregados.

### Preferir

- muito espaço em branco;
- grids editoriais;
- fotografia grande;
- linhas finas;
- bordas sutis;
- gold/champagne fosco;
- grafite para contraste;
- motion suave e intencional;
- tipografia refinada;
- composições assimétricas controladas.

---

## 4. Paleta de cores

### Base

- Branco: `#FFFFFF`
- Ivory / off-white: `#F8F4EE`
- Creme claro: `#F2ECE3`
- Champagne: `#D7C19A`
- Gold premium: `#B9975B`
- Gold escuro opcional: `#8E6E3D`
- Grafite: `#1B1B1B`
- Cinza quente: `#6E675F`
- Preto profundo: `#0D0D0D`
- Azul-marinho de apoio opcional, inspirado nas fotos: `#1E2740`

### Regra de uso

Branco/off-white devem dominar. Gold/champagne entra como acabamento: bordas, ícones, linhas, microdetalhes, hover, glow discreto, pequenos destaques tipográficos e CTAs. Grafite/preto garantem contraste.

**Não usar dourado amarelo/neon.**

---

## 5. Tipografia

### Sans principal

**Poppins**

Usar em:

- navegação;
- corpo de texto;
- botões;
- labels;
- cards;
- FAQ;
- metadados do blog.

### Serif editorial

**Cormorant Garamond**

Usar em:

- headlines;
- títulos de seção;
- assinatura/wordmark;
- frases de impacto;
- destaques editoriais.

### Regras

- usar `next/font/google` quando possível;
- não carregar famílias extras sem necessidade;
- manter boa legibilidade em mobile;
- headlines podem misturar serif + sans apenas quando houver intenção visual clara.

---

## 6. Logo / assinatura premium

A cliente ainda não possui logo. Criar uma solução tipográfica, não um símbolo jurídico genérico.

### Wordmark principal

**Maria Ronikerlly Melo**

Complemento:

**Advogada Previdenciária**

Opcional em contextos específicos:

**Especialista em Benefícios Rurais**

### Direção

- nome em Cormorant Garamond;
- complemento em Poppins, caixa alta pequena ou tracking aberto;
- elegante, minimalista e legível;
- possibilidade de monograma discreto `MRM` apenas como apoio;
- variantes: grafite sobre branco, gold sobre branco, branco sobre grafite.

Não usar martelo, balança ou colunas como marca.

---

## 7. Arquivos de imagem disponíveis

### `/assets/images/maria-ronikerlly-hero.jpeg`

Foto horizontal, cliente sentada, fundo claro com linhas douradas. **Uso prioritário na Hero**.

Recomendações:

- preservar espaço negativo do lado esquerdo;
- usar `object-position` para manter a cliente em destaque à direita;
- pode receber parallax leve;
- não cobrir o rosto com texto.

### `/assets/images/maria-ronikerlly-portrait-beige.jpeg`

Retrato vertical com blazer bege e fundo claro. Uso ideal em:

- seção Sobre;
- página Sobre;
- cards editoriais;
- composição clara.

### `/assets/images/maria-ronikerlly-portrait-navy.jpeg`

Retrato vertical com blazer azul-marinho e fundo escuro. Uso ideal em:

- bloco de autoridade;
- seção de contraste escuro;
- CTA interno;
- página Contato.

### `/assets/images/maria-ronikerlly-office-seated.jpeg`

Cliente sentada em ambiente interno quente com detalhes dourados. Uso ideal em:

- CTA final;
- seção Sobre;
- página institucional;
- variação de Hero interna.

### `/references/instagram-profile-reference.jpeg`

Apenas referência de dados e posicionamento. **Não usar no site final**.

### Tratamento técnico das imagens

- usar `next/image`;
- gerar WebP/AVIF automaticamente via Next;
- usar `sizes` adequados;
- primeira imagem da Hero pode ser `priority`;
- demais imagens com lazy loading;
- definir `alt` descritivo e diferente em cada imagem;
- não usar o mesmo alt em todas as fotos.

---

## 8. Arquitetura do site

### Rotas principais

- `/` — Home
- `/sobre` — Sobre Maria Ronikerlly Melo
- `/beneficios-rurais` — Página pilar da especialidade
- `/areas-de-atuacao` — Áreas de atuação
- `/blog` — Central de conteúdo
- `/blog/[slug]` — Artigos
- `/contato` — Contato
- `/politica-de-privacidade` — Política de privacidade

### Opcional

- `/obrigado` — pós-conversão
- 404 personalizada

---

# 9. Homepage — estrutura, copy e efeitos

## 9.1 Header

### Conteúdo

- wordmark “Maria Ronikerlly Melo”;
- menu: Início, Sobre, Benefícios Rurais, Áreas de Atuação, Blog, Contato;
- CTA: **Falar com uma advogada**.

### Comportamento

- inicialmente leve/transparente sobre Hero quando houver contraste;
- ao scroll: fundo off-white/branco com blur e borda inferior muito sutil;
- versão mobile com menu acessível;
- CTA com acabamento premium.

### Motion

Navbar morph sutil no scroll. Nada brusco.

---

## 9.2 Hero

### Foto

Usar `maria-ronikerlly-hero.jpeg`.

### Eyebrow

**ADVOCACIA PREVIDENCIÁRIA • ARARIPINA E REGIÃO**

### H1

**Atuação previdenciária com atenção especial aos benefícios rurais.**

### Subheadline

**Orientação jurídica com clareza, proximidade e estratégia para quem busca compreender e defender seus direitos previdenciários.**

### CTAs

Primário: **Falar com uma advogada**  
Secundário: **Conhecer áreas de atuação**

### Microdestaques

- Especialista em Benefícios Rurais
- Atendimento em Araripina e Região
- Advocacia Previdenciária

### Layout

Desktop: texto à esquerda, foto à direita ou foto full-bleed com composição editorial preservando o espaço negativo.  
Mobile: texto primeiro e foto logo abaixo ou foto como background com overlay claro apenas se a leitura permanecer excelente.

### Efeitos

- reveal suave do eyebrow;
- headline com fade/blur/clip leve;
- stagger pequeno;
- parallax mínimo na foto;
- shine discreto no CTA principal;
- grain/noise quase imperceptível.

---

## 9.3 Sobre a advogada

### Título

**Experiência previdenciária com olhar atento à realidade de cada cliente.**

### Texto principal

Maria Ronikerlly Melo atua na área previdenciária com foco em um atendimento cuidadoso, humano e estratégico. Sua atuação se destaca especialmente na análise de situações relacionadas aos **benefícios rurais**, oferecendo orientação clara e individualizada para quem precisa compreender seus direitos e buscar o caminho jurídico adequado para o seu caso.

Com atuação em **Araripina e região**, valoriza um atendimento baseado em proximidade, responsabilidade e confiança.

### Componente recomendado

**Profile Carousel / Circular Profile Gallery** usando:

- `maria-ronikerlly-portrait-beige.jpeg`
- `maria-ronikerlly-portrait-navy.jpeg`
- `maria-ronikerlly-office-seated.jpeg`

### Conteúdos curtos sincronizados

**Atuação**  
Advocacia previdenciária com análise técnica e individual de cada situação.

**Especialidade**  
Atenção especial aos benefícios rurais e às particularidades desse tipo de demanda.

**Atendimento**  
Clareza e proximidade para que o cliente entenda melhor seus direitos e os próximos passos possíveis.

### Autoplay

5 segundos como padrão. Navegação manual com setas. Após interação, pausar e depois retomar suavemente.

---

## 9.4 Seção pilar — Benefícios Rurais

### Eyebrow

**ESPECIALIDADE**

### Título

**Especialista em Benefícios Rurais**

### Headline editorial

**Quem vive do campo tem uma história de trabalho que precisa ser corretamente demonstrada.**

### Copy

As demandas relacionadas aos benefícios rurais exigem atenção às particularidades da atividade exercida, da documentação e da forma como a trajetória do trabalhador é apresentada perante o INSS.

Uma análise individual permite organizar as informações relevantes, compreender os requisitos aplicáveis e definir o caminho jurídico adequado para cada situação.

### Blocos de apoio

- Análise individual do caso
- Atenção à documentação
- Orientação previdenciária clara
- Conhecimento das particularidades da atividade rural

### CTA

**Entender melhor os benefícios rurais** → `/beneficios-rurais`

### Motion

- section reveal;
- linhas douradas desenhando-se lentamente;
- opcional text-scroll em uma única frase de impacto;
- não usar animações pesadas nesta seção.

---

## 9.5 Áreas de atuação

### Título

**Áreas de atuação previdenciária**

### Texto

Atuação voltada à análise e orientação em demandas previdenciárias, sempre considerando as particularidades de cada caso.

### Área confirmada

**Benefícios Rurais**  
Atuação com atenção especial às demandas previdenciárias relacionadas ao trabalhador rural e às particularidades da sua comprovação.

### Áreas sugeridas — PENDENTES DE CONFIRMAÇÃO

Não publicar como informação definitiva até confirmação da cliente. Estruturar no código para habilitar/desabilitar por dados.

- Aposentadorias
- Benefícios por incapacidade
- Pensão por morte
- Salário-maternidade
- BPC/LOAS

### UI

Cards clean com:

- ícone discreto;
- título;
- descrição curta;
- link “Saiba mais” quando houver página dedicada.

### Hover

- elevação mínima;
- border gold suave;
- light sweep ou glow discreto;
- sem neon.

---

## 9.6 Como funciona o atendimento

### Título

**Um atendimento claro do início ao fim**

### Etapas

**01 — Conte sua situação**  
O primeiro passo é compreender sua necessidade e as informações iniciais do caso.

**02 — Análise do caso**  
Informações e documentos são avaliados para identificar o direcionamento adequado.

**03 — Orientação jurídica**  
Você recebe uma explicação clara sobre sua situação e os próximos passos possíveis.

**04 — Condução do atendimento**  
Quando houver viabilidade, o caso segue conforme a estratégia jurídica definida.

### Efeito

Timeline com progress line e reveal por etapa. Em mobile, timeline vertical simples.

---

## 9.7 Prova social / Google Reviews

### Título

**A confiança de quem já foi atendido**

### Componente

Testimonials Columns em loop vertical, com 1 coluna mobile, 2 tablet, 3 desktop.

### Dados permitidos

Somente avaliações reais fornecidas pela cliente ou obtidas de fonte autorizada.

Campos:

```ts
type Testimonial = {
  text: string;
  name: string;
  image?: string;
  rating?: number;
  source?: "google" | "manual";
};
```

### Visual

- cards off-white/branco;
- borda champagne leve;
- stars gold quando houver rating real;
- “Avaliação do Google” discreto;
- máscara vertical nas bordas superior/inferior.

### Se não houver avaliações no momento

Não inventar. Ocultar a seção ou exibir bloco institucional sem depoimentos até os dados serem adicionados.

---

## 9.8 Blog / Central de conteúdo

### Título

**Conteúdos para entender melhor seus direitos previdenciários**

### Copy

Informação clara e acessível para ajudar você a compreender dúvidas frequentes sobre temas previdenciários.

### Home

Exibir 3 artigos em destaque com:

- imagem de capa;
- categoria;
- título;
- resumo curto;
- CTA “Ler conteúdo”;
- card inteiro clicável.

### CTA

**Ver todos os conteúdos** → `/blog`

### Temas iniciais sugeridos

1. Quem é considerado trabalhador rural para o INSS?
2. Quais documentos podem ajudar a comprovar atividade rural?
3. Benefício rural negado: o que pode ser feito?
4. Como funciona a aposentadoria rural?
5. O que é segurado especial?
6. Agricultura familiar e INSS: o que é importante saber?

### Estratégia de cluster

Página pilar: `/beneficios-rurais`

Artigos relacionados devem apontar para ela e entre si.

---

## 9.9 FAQ curto

O FAQ não substitui o blog. Função: responder rapidamente dúvidas de conversão e levar para conteúdos aprofundados.

### Título

**Dúvidas frequentes**

### Perguntas

- Quem pode ter direito a benefício rural?
- Quais documentos podem ajudar a comprovar atividade rural?
- Meu benefício foi negado. Ainda posso buscar orientação?
- Posso ser atendido mesmo morando fora de Araripina?
- Como funciona o primeiro atendimento?

### UI

Accordion premium com transição suave de altura/opacity.

Quando existir artigo relacionado, incluir link contextual: **Ler conteúdo completo**.

---

## 9.10 CTA final

### Foto

Preferencial: `maria-ronikerlly-office-seated.jpeg` ou `maria-ronikerlly-portrait-navy.jpeg`.

### Título

**Precisa de orientação sobre seus direitos previdenciários?**

### Copy

Cada situação possui particularidades. Entre em contato para compreender melhor o seu caso e receber uma orientação sobre os próximos passos possíveis.

### CTA

**Falar com uma advogada**

### Apoio

- Advocacia Previdenciária
- Especialista em Benefícios Rurais
- Araripina e Região

---

## 9.11 Footer

Incluir:

- wordmark;
- descrição curta;
- navegação;
- áreas confirmadas;
- blog;
- contato;
- endereço;
- links sociais;
- política de privacidade;
- copyright dinâmico.

Texto sugerido:

**Maria Ronikerlly Melo atua na área previdenciária com atenção especial aos benefícios rurais, oferecendo orientação jurídica com clareza e responsabilidade.**

---

# 10. Páginas internas

## 10.1 `/sobre`

### H1

**Uma atuação previdenciária construída com clareza, proximidade e atenção a cada caso.**

Estrutura:

- Hero interna com fotografia;
- trajetória e forma de atuação;
- especialidade em Benefícios Rurais;
- princípios do atendimento;
- galeria de fotos;
- CTA.

Não inventar formação acadêmica, pós-graduação, anos de experiência ou premiações.

---

## 10.2 `/beneficios-rurais`

Página pilar prioritária para posicionamento e SEO.

### H1

**Benefícios rurais com atenção às particularidades de quem vive do trabalho no campo.**

Estrutura:

- introdução;
- quem pode precisar de orientação;
- importância da documentação e análise individual;
- etapas do atendimento;
- dúvidas comuns;
- artigos relacionados;
- CTA.

Não prometer concessão de benefício nem resultado.

---

## 10.3 `/areas-de-atuacao`

Exibir apenas áreas confirmadas para produção. Criar arquitetura de dados para expansão futura.

---

## 10.4 `/blog`

### Layout

- Hero editorial;
- grid de artigos;
- filtros por categoria;
- busca opcional;
- paginação ou load more;
- newsletter apenas se houver estratégia futura.

### Categorias iniciais possíveis

- Benefícios Rurais
- INSS
- Aposentadoria Rural
- Segurado Especial

Expandir apenas com áreas efetivamente atendidas.

---

## 10.5 `/blog/[slug]`

Cada artigo deve conter:

- H1 único;
- imagem de destaque;
- categoria;
- autor/revisor;
- data de publicação;
- data de atualização quando aplicável;
- introdução objetiva;
- H2/H3;
- sumário opcional;
- links internos;
- CTA contextual;
- artigos relacionados;
- bloco de autoria da advogada.

Adicionar aviso de caráter informativo quando adequado.

---

## 10.6 `/contato`

Estrutura:

- headline clara;
- WhatsApp;
- e-mail;
- endereço;
- mapa quando URL confirmada;
- horário somente se confirmado;
- formulário simples opcional;
- CTA direto.

---

# 11. Biblioteca de efeitos e componentes autorizados

## 11.1 Coverflow Carousel 3D

Uso: áreas, galeria, conteúdo visual ou seção editorial.  
Autoplay padrão do componente: **1500 ms**, loop infinito.  
Não usar se os cards exigirem leitura longa.  
Interação manual deve ter prioridade.  
Respeitar `prefers-reduced-motion`.

## 11.2 Arrow Fill Button

CTA premium com círculo que expande e preenche o botão no hover.

### Paleta padrão

- off-white + grafite + champagne;
- ou gold/champagne + grafite;
- sem laranja de demo.

Uso: Hero, CTA final e poucos pontos estratégicos.

## 11.3 Testimonials Columns

Loop vertical contínuo para avaliações reais do Google.  
Durações sugeridas: 15s / 19s / 17s.  
1/2/3 colunas conforme viewport.  
Desabilitar movimento em reduced-motion.

## 11.4 Profile Carousel / Circular Gallery

Adaptado do componente CircularTestimonials.  
Uso principal: seção Sobre.  
3 imagens em profundidade, autoplay ~5s, texto sincronizado.  
Renomear semanticamente para `profile-carousel.tsx`.

## 11.5 Text Scroll Animation

Variantes:

- caracteres convergentes;
- ícones/imagens convergentes;
- versão com rotação.

Usar no máximo 1–2 vezes por página.  
Textos curtos.  
Se usar Lenis, manter uma única instância global.

## 11.6 Premium Grid Background

Background em canvas com:

- grid móvel;
- spotlight;
- noise;
- hover em células;
- vignette.

Para este projeto, se usado, trocar azul da demo por champagne/gold discreto.  
Não usar `fixed inset-0 z-50` como background final. Preferir camada absoluta atrás do conteúdo.  
Uso máximo: uma seção estratégica.  
Custo de performance médio/alto.

## 11.7 Glowing Metric Card

Card com brilho metálico e ponto percorrendo a borda.

Variantes oficiais:

- `gold/champagne` — padrão preferencial;
- `silver` — alternativa.

Usar somente com métricas reais confirmadas.  
Corrigir `class` para `className`, remover estado/imports não usados e transformar em componente por props.

---

# 12. Efeitos adicionais disponíveis

O Codex pode usar, conforme necessidade visual e sem exagero:

- parallax de imagem/texto;
- scroll reveal com fade/blur/translate/scale;
- text reveal por linha, palavra ou caractere;
- section reveal;
- shine em botões;
- infinite marquee / loop de informações;
- badge/logo marquee;
- magnetic button;
- cursor glow / spotlight;
- image mask reveal;
- image parallax crop;
- sticky storytelling;
- pinned sections;
- horizontal scroll controlado;
- card hover depth / tilt suave;
- glass/blur panels;
- animated borders;
- gradient motion;
- noise/grain;
- mesh gradient;
- radial spotlight;
- particles discretas;
- ambient blobs;
- light sweep;
- counter animation para números reais;
- progress line;
- scroll progress;
- accordion premium;
- page transitions;
- navbar morph;
- nav link indicator;
- divider motion;
- floating CTA;
- Ken Burns suave em imagem;
- split screen reveal;
- clip-path transition;
- blur-to-focus;
- scale-to-focus;
- scroll-linked opacity;
- hover image swap;
- text/image sync;
- animated underline;
- word highlight on scroll;
- floating micro-elements.

### Regra de motion

Uma animação deve cumprir ao menos uma função:

- direcionar atenção;
- reforçar hierarquia;
- explicar transição;
- reforçar ação;
- criar profundidade;
- aumentar percepção de acabamento;
- tornar navegação mais fluida.

Não animar tudo.

---

# 13. SEO

## Objetivos

- presença local em Araripina;
- autoridade para temas previdenciários;
- destaque orgânico para Benefícios Rurais;
- crescimento por conteúdo em cluster.

## Termos iniciais para pesquisa/arquitetura

Não forçar keyword stuffing. Usar naturalmente:

- advogada previdenciária em Araripina;
- benefícios rurais;
- advogada benefícios rurais;
- aposentadoria rural;
- trabalhador rural INSS;
- segurado especial;
- benefício rural negado;
- documentos para atividade rural;
- direito previdenciário Araripina.

## Implementação

- metadata por rota;
- canonical;
- Open Graph;
- sitemap.xml;
- robots.txt;
- breadcrumbs;
- alt text real;
- URLs semânticas;
- links internos;
- Article schema quando adequado;
- BreadcrumbList;
- LegalService/ProfessionalService apenas se tecnicamente e semanticamente adequado aos dados confirmados;
- LocalBusiness schema somente com dados reais completos e revisados.

## Blog e E-E-A-T

- mostrar autoria/revisão da advogada;
- data de publicação/atualização;
- páginas institucionais claras;
- conteúdo original e útil;
- links internos para páginas de serviço;
- não gerar conteúdo jurídico enganoso ou promessas.

---

# 14. Performance

Meta: experiência rápida em 4G e mobile.

### Regras

- Next Image;
- imagens responsivas;
- `priority` apenas para Hero;
- lazy loading;
- reduzir JavaScript em componentes decorativos;
- carregar animações apenas quando necessário;
- pausar loops fora da viewport quando viável;
- não usar múltiplos canvas pesados;
- preferir transform/opacity;
- limitar `devicePixelRatio` em canvas;
- evitar layout shift;
- bom LCP, CLS e INP.

---

# 15. Acessibilidade

- HTML semântico;
- navegação por teclado;
- foco visível;
- contraste WCAG adequado;
- labels em formulários;
- `aria-label` em controles somente quando necessário;
- alt text significativo;
- não esconder conteúdo essencial em animações;
- suporte a `prefers-reduced-motion`;
- botões e links com áreas de toque adequadas.

Reduced motion:

- desativar autoplay quando necessário;
- remover parallax forte;
- converter background animado em estático;
- manter conteúdo visível em posição final.

---

# 16. Responsividade

Breakpoints devem respeitar o conteúdo, não apenas defaults.

### Mobile

- Hero vertical;
- CTA full-width quando ajudar conversão;
- carousels simplificados;
- hover convertido para tap ou removido;
- reduzir blur/glow;
- 1 coluna de testimonials;
- cards em 1 coluna;
- tipografia responsiva com `clamp()` quando adequado;
- nenhum elemento pode provocar scroll horizontal acidental.

---

# 17. Stack e arquitetura técnica

## Preferencial

- Next.js atual com App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion / Framer Motion
- Lucide React
- Lenis apenas se smooth scroll global for realmente usado

### Estrutura sugerida

```txt
/app
  /(site)
    page.tsx
    sobre/page.tsx
    beneficios-rurais/page.tsx
    areas-de-atuacao/page.tsx
    blog/page.tsx
    blog/[slug]/page.tsx
    contato/page.tsx
  layout.tsx
/components
  /ui
  /sections
  /layout
/content
  /blog
/lib
/public
  /images
/styles
```

### Componentes

Se o projeto não usa `/components/ui`, criar essa pasta e manter componentes reutilizáveis nela. Se não houver shadcn/Tailwind/TypeScript, configurar corretamente antes da integração.

---

# 18. Blog — modelo de dados sugerido

Pode usar MDX, Contentlayer alternativa compatível, arquivos Markdown ou CMS futuro. Para primeira versão, preferir solução simples e versionada no repositório.

Campos:

```ts
type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  draft?: boolean;
};
```

Conteúdo jurídico novo deve ser revisado antes de produção.

---

# 19. Conversão e CTA

### CTA padrão

**Falar com uma advogada**

Usar WhatsApp apenas quando o número estiver confirmado.

### Regras

- não usar “garanta seu benefício”;
- não prometer êxito;
- não usar escassez falsa;
- não usar números inventados;
- CTA deve convidar a apresentar o caso e receber orientação.

### Floating CTA

Opcional em mobile após o usuário rolar parte da página. Deve ser discreto, não cobrir conteúdo.

---

# 20. Conteúdo e tom de voz

### Tom

- claro;
- humano;
- profissional;
- acessível;
- seguro;
- respeitoso;
- sem juridiquês desnecessário.

### Evitar

- promessas;
- superlativos sem comprovação;
- “somos os melhores”;
- “resultado garantido”;
- agressividade comercial;
- linguagem genérica de advocacia.

---

# 21. Critérios de aceite

O projeto só deve ser considerado visualmente finalizado quando:

- todas as páginas principais estiverem implementadas;
- design for consistente em desktop/tablet/mobile;
- imagens reais estiverem corretamente usadas;
- não houver lorem ipsum;
- nenhuma informação não confirmada for apresentada como fato;
- blog e página de artigo existirem;
- FAQ e blog estiverem conectados por links contextuais;
- Hero tiver excelente contraste e leitura;
- CTAs tiverem estados hover/focus/tap;
- `prefers-reduced-motion` estiver tratado;
- SEO básico estiver configurado;
- imagens estiverem otimizadas;
- não houver erros TypeScript;
- build de produção passar;
- navegação e links internos funcionarem;
- mobile não tiver overflow horizontal;
- efeitos estiverem discretos e intencionais.

---

# 22. Prioridade visual deste projeto

1. Hero com fotografia real
2. Assinatura premium da marca pessoal
3. Especialidade em Benefícios Rurais
4. Seção Sobre com galeria animada
5. Áreas de atuação
6. Processo de atendimento
7. Prova social real quando disponível
8. Blog / autoridade / SEO
9. CTA final forte

---

# 23. Regra final para o agente de implementação

Construa um site que pareça **desenhado especificamente para Maria Ronikerlly Melo**, não um template em que apenas o nome foi trocado.

A fotografia, a especialidade em Benefícios Rurais, a presença regional, o uso de branco/gold/champagne e a tipografia editorial devem formar uma identidade coerente.

Use motion como acabamento, não como protagonista.

Se algum dado factual estiver ausente, crie a estrutura técnica para recebê-lo posteriormente e marque claramente o TODO no código. **Não invente dados.**
