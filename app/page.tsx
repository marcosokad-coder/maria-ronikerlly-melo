import Image from "@/components/ui/site-image";
import Link from "next/link";
import {ArrowDown,ArrowUpRight} from "lucide-react";
import {ArrowButton} from "@/components/ui/arrow-button";
import {About,Rural,Areas,Process,Reviews,FinalCTA,MicroDetails} from "@/components/sections";
import {FAQ} from "@/components/faq";
import {BlogSection} from "@/components/blog";
import {pageMeta} from "@/lib/seo";
export const metadata=pageMeta("Advogada previdenciária em Araripina","Advocacia Previdenciária com atenção especial aos benefícios rurais. Orientação clara e individualizada em Araripina e região.","/");
export default function Home(){return <><section className="hero"><Image className="hero-photo" src="/images/maria-ronikerlly-hero.jpeg" alt="Maria Ronikerlly Melo sentada em uma poltrona diante de um fundo claro com detalhes dourados" fill priority sizes="100vw"/><div className="hero-overlay"/><div className="wrap hero-inner"><div className="hero-copy"><span className="eyebrow">ADVOCACIA PREVIDENCIÁRIA <span>• ARARIPINA E REGIÃO</span></span><h1>Atuação previdenciária com atenção especial aos <em>benefícios rurais.</em></h1><p>Orientação jurídica com clareza, proximidade e estratégia para quem busca compreender e defender seus direitos previdenciários.</p><div className="hero-actions"><ArrowButton/><Link className="text-link" href="/areas-de-atuacao">Conhecer áreas de atuação <ArrowUpRight size={16}/></Link></div></div><a className="discover" href="#sobre" aria-label="Conhecer Maria Ronikerlly Melo"><ArrowDown size={15}/> CONHEÇA NOSSA ATUAÇÃO</a></div><div className="hero-signature">Maria Ronikerlly Melo<small>ESPECIALISTA EM BENEFÍCIOS RURAIS</small></div></section><MicroDetails/><div id="sobre"><About/></div><Rural/><Areas/><Process/><Reviews/><BlogSection/><FAQ/><FinalCTA/></>}
