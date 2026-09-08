"use client";
import {useState} from "react";
import {Wheat,MapPin,FileText,Pause,Play} from "lucide-react";
const items=[{Icon:Wheat,text:"Especialista em Benefícios Rurais"},{Icon:MapPin,text:"Atendimento em Araripina e Região"},{Icon:FileText,text:"Advocacia Previdenciária"}];
export function InfoMarquee(){const [paused,setPaused]=useState(false);return <div className={`info-marquee ${paused?"is-paused":""}`} role="region" aria-label="Informações da atuação"><div className="marquee-window"><div className="marquee-track">{[0,1,2,3].map(copy=><div className="marquee-group" key={copy} aria-hidden={copy>0}>{items.map(({Icon,text})=><span key={text}><Icon size={21} strokeWidth={1.3}/>{text}<i aria-hidden="true"/></span>)}</div>)}</div></div><button className="icon-button marquee-pause" aria-label={paused?"Retomar faixa de informações":"Pausar faixa de informações"} onClick={()=>setPaused(p=>!p)}>{paused?<Play size={14}/>:<Pause size={14}/>}</button></div>;}
