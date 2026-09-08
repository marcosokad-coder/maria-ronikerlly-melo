import {Breadcrumbs} from "@/components/breadcrumbs";
import {Areas,Process,FinalCTA} from "@/components/sections";
import {pageMeta} from "@/lib/seo";
export const metadata=pageMeta("Áreas de atuação","Atuação previdenciária de Maria Ronikerlly Melo, com especialidade em benefícios rurais e atendimento em Araripina e região.","/areas-de-atuacao");
export default function Page(){return <><Breadcrumbs items={[{label:"Áreas de Atuação",href:"/areas-de-atuacao"}]}/><section className="wrap internal-hero"><span className="eyebrow">ADVOCACIA PREVIDENCIÁRIA</span><h1>Atenção às particularidades de cada caso.</h1><p>Orientação jurídica com clareza, proximidade e estratégia para quem busca compreender e defender seus direitos previdenciários.</p></section><Areas/><Process/><FinalCTA/></>}
