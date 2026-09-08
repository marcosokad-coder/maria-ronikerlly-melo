import type {Metadata} from "next";
import {Poppins,Cormorant_Garamond} from "next/font/google";
import {ScrollEffects} from "@/components/ui/scroll-effects";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import {site} from "@/lib/site";
import "./globals.css";
const poppins=Poppins({subsets:["latin"],weight:["400","500","600"],variable:"--font-poppins",display:"swap"});
const cormorant=Cormorant_Garamond({subsets:["latin"],weight:["400","500","600"],style:["normal","italic"],variable:"--font-cormorant",display:"swap"});
export const metadata:Metadata={metadataBase:new URL(site.origin),title:{default:site.name,template:"%s | Maria Ronikerlly Melo"},description:"Advocacia Previdenciária em Araripina e região. Especialista em Benefícios Rurais.",robots:{index:site.publicReleaseApproved,follow:true},icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body className={`${poppins.variable} ${cormorant.variable}`}><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><ScrollEffects/><Header/><main id="conteudo">{children}</main><Footer/></body></html>}
