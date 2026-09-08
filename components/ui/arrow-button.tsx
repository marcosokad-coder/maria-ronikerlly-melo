import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {contactHref} from "@/lib/site";
export function ArrowButton({href=contactHref,children="Falar com uma advogada",light=false}:{href?:string;children?:React.ReactNode;light?:boolean}){return <Link href={href} className={`arrow-button ${light?"light":""}`}><span>{children}</span><span className="arrow-circle"><ArrowUpRight size={18}/></span></Link>}
