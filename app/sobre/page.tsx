import Image from "@/components/ui/site-image";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {About,Rural,Principles,FinalCTA} from "@/components/sections";
import {pageMeta} from "@/lib/seo";
export const metadata=pageMeta("Sobre a advogada","Conheça a atuação de Maria Ronikerlly Melo, advogada previdenciária em Araripina, especialista em Benefícios Rurais.","/sobre");
export default function Page(){return <><Breadcrumbs items={[{label:"Sobre",href:"/sobre"}]}/><section className="internal-hero wrap internal-split"><div><span className="eyebrow">MARIA RONIKERLLY MELO</span><h1>Uma atuação previdenciária construída com clareza, proximidade e atenção a cada caso.</h1><p>Advogada Previdenciária · Especialista em Benefícios Rurais<br/>Araripina e região</p></div><div className="internal-photo"><Image src="/images/maria-ronikerlly-portrait-beige.jpeg" alt="Retrato de Maria Ronikerlly Melo com blazer bege" fill sizes="(max-width: 700px) 100vw, 40vw"/></div></section><About/><Principles/><Rural/><FinalCTA/></>}
