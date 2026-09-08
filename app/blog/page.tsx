import {Breadcrumbs} from "@/components/breadcrumbs";
import {BlogGrid} from "@/components/blog-grid";
import {pageMeta} from "@/lib/seo";
export const metadata=pageMeta("Central de Conteúdo","Informação sobre benefícios rurais, segurado especial, documentos, aposentadoria rural e INSS.","/blog");
export default function Page(){return <><Breadcrumbs items={[{label:"Blog",href:"/blog"}]}/><section className="wrap internal-hero"><span className="eyebrow">CENTRAL DE CONTEÚDO</span><h1>Conhecimento para compreender seus direitos.</h1><p>Informação clara e acessível para ajudar você a compreender dúvidas frequentes sobre temas previdenciários.</p></section><section className="wrap" style={{paddingBottom:90}}><BlogGrid/></section></>}
