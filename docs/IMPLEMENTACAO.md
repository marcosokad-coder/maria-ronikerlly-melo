# Maria Ronikerlly Melo — implementação

Fonte obrigatória: `docs/brief.md`. As quatro fotos originais estão em `public/images`, com variantes WebP responsivas de 384 a 1536 px. A referência do Instagram não integra os arquivos públicos.

## Stack
Next.js 16 App Router, React 19, TypeScript, Tailwind 4, shadcn/ui (Radix), Motion e Lucide. Exportação estática para Sites; `next/image` usa loader responsivo para WebPs locais. `next/font/google` hospeda Poppins e Cormorant Garamond no build. O ambiente de revisão usa o adaptador Vinext do Sites; a produção é gerada pelo Next.js nativo.

## Comandos
`npm run lint`, `npm run typecheck`, `npm run build`. O build gera `out/`. `npm run dev` mantém o preview compatível com Sites. Para desenvolvimento Next nativo: `npx next dev`.

## Configuração e pendências
`lib/site.ts` centraliza WhatsApp, e-mail, OAB, Maps, Instagram, vínculo institucional, controlador da política e flags de publicação. Valores ausentes usam TODO_CONFIRMAR. Botões de atendimento levam a /contato enquanto WhatsApp não estiver confirmado. Não há formulário que simule envio.

`areas` habilita as seis áreas confirmadas pelo usuário em 08/09/2026, preservando textos curtos e completos. `reviewsEnabled` inicia false e `testimonials` vazio. Nenhuma avaliação é fictícia.

## Conteúdo
`content/blog/posts.ts` contém seis rascunhos versionados, fontes oficiais e estrutura de autoria/revisão. Três cards são exibidos na Home. Filtros e carregar mais funcionam na Central de Conteúdo. FAQ possui links contextuais.

Antes da publicação pública: revisar juridicamente cada artigo, confirmar autoria/revisão, definir draft=false nos textos aprovados e editorialApproved=true. Artigos não aprovados são automaticamente omitidos quando publicReleaseApproved=true. Não atribuir revisão à advogada antes de confirmação.

A política de privacidade é preliminar e requer confirmação do controlador, canal, práticas de infraestrutura e prazos. Esta versão privada usa noindex; somente ativar publicReleaseApproved após confirmar os dados institucionais e o conteúdo. Atualizar origin quando houver domínio definitivo. Article schema é emitido apenas para artigos aprovados com autor confirmado.

## Verificação
Build nativo Next, lint e typecheck. Auditoria do HTML exportado: links locais, imagens, H1, metadata e canonical. Revisão visual da Home desktop, mobile 390px e tablet 768px, carrossel, accordion, menu e filtro INSS. O preview Vinext pode usar fallback de navegação por HTTP; a produção usa Next e HTTPS.

## Alterações autorizadas em 08/09/2026
- Faixa informativa com loop horizontal contínuo e botão de pausa.
- Três capas do blog enviadas pelo usuário, mapeadas aos artigos correspondentes; demais artigos utilizam fotografias temáticas disponíveis, sem retratos da advogada nas capas.
- Seis áreas confirmadas com as respectivas imagens numeradas. Coverflow baseado na geometria fornecida, autoplay 1500 ms, navegação por setas/arraste, seleção direta e pausa. Autoplay interrompido por hover, foco, interação, aba oculta, componente fora de tela ou movimento reduzido.
- Seis temas rurais em carrossel próprio na página pilar.
- Entrada/saída de seções via IntersectionObserver, parallax vinculado ao scroll, progressão de leitura, reveals repetíveis, flutuação e shine de CTAs, hover nos cards e divisores animados.
- Lint, TypeScript e build Next aprovados. Imagens e links locais verificados. Coverflow desktop: autoplay, pausa e seleção manual confirmados; mobile 375 px e tablet 753 px sem overflow horizontal.
