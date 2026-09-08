"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Pause, Play, ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import Link from "next/link";
import Image from "./site-image";
import { cn } from "@/lib/utils";

export interface CoverflowSlide {
  src: string; alt: string; title?: string; subtitle?: string;
  href?: string; badge?: string; meta?: { label: string; value: string }[];
}
export interface CoverflowCarouselProps {
  slides: CoverflowSlide[]; rotate?: number; depth?: number; perspective?: number;
  falloff?: number; fade?: number; cardWidth?: string; gap?: number; loop?: boolean;
  showCaption?: boolean; showPagination?: boolean; showNavigation?: boolean;
  autoPlay?: boolean; interval?: number; label?: string; className?: string; cardClassName?: string;
}
/** Adapted from the supplied coverflow: fractional position, ring folding and DOM painting. */
export function CoverflowCarousel({slides,rotate=44,depth=.6,perspective=3,falloff=.56,fade=.1,
  cardWidth="clamp(235px, 27vw, 330px)",gap=.05,loop=true,showCaption=true,showPagination=true,
  showNavigation=true,autoPlay=true,interval=1500,label="Áreas de atuação",className,cardClassName}:CoverflowCarouselProps){
  const count=slides.length;
  const frameRef=React.useRef<HTMLDivElement>(null);
  const cardRefs=React.useRef<(HTMLDivElement|null)[]>([]);
  const posRef=React.useRef(0),targetRef=React.useRef(0),widthRef=React.useRef(0);
  const rafRef=React.useRef<number|null>(null);
  const dragRef=React.useRef<{id:number;x:number;pos:number;v:number;t:number}|null>(null);
  const manualUntil=React.useRef(0);
  const [selected,setSelected]=React.useState(0);
  const [paused,setPaused]=React.useState(false);
  const [engaged,setEngaged]=React.useState(false);
  const [visible,setVisible]=React.useState(false);
  const [pageVisible,setPageVisible]=React.useState(true);
  const reduced=useReducedMotion();
  const indexAt=React.useCallback((pos:number)=>count?((Math.round(pos)%count)+count)%count:0,[count]);
  const paint=React.useCallback(()=>{
    const width=widthRef.current;if(!width||!count)return;
    const pitch=width*(1+gap),pos=posRef.current;
    cardRefs.current.forEach((card,index)=>{
      if(!card)return;let offset=index-pos;
      if(loop){offset=((offset%count)+count)%count;if(offset>count/2)offset-=count;}
      const distance=Math.abs(offset),ramp=Math.pow(distance,falloff);
      const tilt=Math.min(rotate*ramp,82)*Math.sign(offset);
      card.style.transform=`translateX(calc(-50% + ${offset*pitch}px)) translateZ(${-depth*width*ramp}px) rotateY(${-tilt}deg)`;
      const edge=loop&&count>2?Math.min(1,Math.max(0,count/2-distance)):1;
      card.style.opacity=String(Math.max(0,1-fade*distance)*edge);
      card.style.zIndex=String(100-Math.round(distance));
    });
  },[count,depth,fade,falloff,gap,loop,rotate]);
  const settle=React.useCallback((target:number)=>{
    if(rafRef.current!==null)cancelAnimationFrame(rafRef.current);
    targetRef.current=target;setSelected(indexAt(target));
    if(reduced){posRef.current=target;paint();rafRef.current=null;return;}
    let previous=0;
    const step=(now:number)=>{
      const remaining=target-posRef.current;
      if(Math.abs(remaining)<.0004){posRef.current=target;paint();rafRef.current=null;return;}
      const dt=previous?Math.min(now-previous,48):16.67;previous=now;
      posRef.current+=remaining*(1-Math.pow(.84,dt/16.67));paint();rafRef.current=requestAnimationFrame(step);
    };rafRef.current=requestAnimationFrame(step);
  },[indexAt,paint,reduced]);
  const clamp=React.useCallback((pos:number)=>loop?pos:Math.max(0,Math.min(count-1,pos)),[count,loop]);
  const nudge=React.useCallback((by:number)=>settle(clamp(Math.round(targetRef.current)+by)),[clamp,settle]);
  function manualNudge(by:number){manualUntil.current=Date.now()+6500;nudge(by);}
  function goTo(index:number){manualUntil.current=Date.now()+6500;const target=loop?index+Math.round((targetRef.current-index)/count)*count:index;settle(clamp(target));}
  function onPointerDown(event:React.PointerEvent<HTMLDivElement>){
    if(count<2||event.button!==0)return;
    if(rafRef.current!==null)cancelAnimationFrame(rafRef.current);
    manualUntil.current=Date.now()+6500;event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current=posRef.current;dragRef.current={id:event.pointerId,x:event.clientX,pos:posRef.current,v:0,t:performance.now()};
  }
  function onPointerMove(event:React.PointerEvent<HTMLDivElement>){
    const drag=dragRef.current;if(!drag||drag.id!==event.pointerId)return;
    const pitch=widthRef.current*(1+gap);if(!pitch)return;
    const now=performance.now(),previous=posRef.current;
    posRef.current=clamp(drag.pos-(event.clientX-drag.x)/pitch);
    drag.v=((posRef.current-previous)/Math.max(now-drag.t,1))*1000;drag.t=now;
    setSelected(indexAt(posRef.current));paint();
  }
  function endDrag(event:React.PointerEvent<HTMLDivElement>){
    const drag=dragRef.current;if(!drag||drag.id!==event.pointerId)return;
    dragRef.current=null;manualUntil.current=Date.now()+6500;
    if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);
    const carried=event.type==="pointercancel"?0:Math.max(-2,Math.min(2,drag.v*.18));
    settle(clamp(Math.round(posRef.current+carried)));
  }
  React.useEffect(()=>{
    const frame=frameRef.current;if(!frame)return;
    const measure=()=>{const card=cardRefs.current[0];if(card){widthRef.current=card.offsetWidth;paint();}};
    measure();const resize=new ResizeObserver(measure);resize.observe(frame);
    const observer=new IntersectionObserver(([e])=>setVisible(e.isIntersecting),{threshold:.1});observer.observe(frame);
    return()=>{resize.disconnect();observer.disconnect();};
  },[paint]);
  React.useEffect(()=>{const handler=()=>setPageVisible(!document.hidden);handler();document.addEventListener("visibilitychange",handler);return()=>document.removeEventListener("visibilitychange",handler);},[]);
  React.useEffect(()=>{
    if(!autoPlay||reduced||paused||engaged||!visible||!pageVisible||count<2)return;
    const timer=setInterval(()=>{if(!dragRef.current&&Date.now()>manualUntil.current)nudge(1);},interval);
    return()=>clearInterval(timer);
  },[autoPlay,reduced,paused,engaged,visible,pageVisible,count,interval,nudge]);
  React.useEffect(()=>()=>{if(rafRef.current!==null)cancelAnimationFrame(rafRef.current);},[]);
  if(!count)return null;
  const active=slides[selected];
  return <div className={cn("coverflow",className)} style={{"--cf-card":cardWidth} as React.CSSProperties} role="region" aria-roledescription="carrossel" aria-label={label}
    onMouseEnter={()=>setEngaged(true)} onMouseLeave={()=>setEngaged(false)} onFocusCapture={()=>setEngaged(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setEngaged(false);}}>
    <div className="cf-frame" ref={frameRef} tabIndex={0} aria-label="Use as setas do teclado ou arraste para navegar" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={endDrag} onPointerCancel={endDrag}
      onKeyDown={e=>{if(e.key==="ArrowLeft"||e.key==="ArrowRight"){e.preventDefault();manualNudge(e.key==="ArrowLeft"?-1:1);}}} style={{perspective:`calc(var(--cf-card) * ${perspective})`,touchAction:"pan-y"}}>
      <div className="cf-stage">{slides.map((slide,index)=><div key={slide.src+index} ref={node=>{cardRefs.current[index]=node;}} role="group" aria-roledescription="slide" aria-label={`${index+1} de ${count}: ${slide.title}`} aria-hidden={selected!==index} className={cn("cf-card",cardClassName)} style={{opacity:index===0?1:0}}>
        <Image src={slide.src} alt={slide.alt} fill sizes="(max-width: 700px) 75vw, 360px" draggable={false}/>
        <div className="cf-card-shade"/><div className="cf-card-label">{slide.badge&&<span>{slide.badge}</span>}<h3>{slide.title}</h3><small>{String(index+1).padStart(2,"0")} / {String(count).padStart(2,"0")}</small></div>
      </div>)}</div>
    </div>
    <div className="cf-controls">{showNavigation&&<button className="icon-button" onClick={()=>manualNudge(-1)} aria-label="Área anterior"><ChevronLeft size={20}/></button>}
      {showPagination&&<div className="cf-pagination">{slides.map((s,i)=><button key={i} onClick={()=>goTo(i)} aria-label={`Ver ${s.title}`} aria-current={selected===i?"true":undefined}><span/></button>)}</div>}
      {showNavigation&&<button className="icon-button" onClick={()=>manualNudge(1)} aria-label="Próxima área"><ChevronRight size={20}/></button>}
      {autoPlay&&!reduced&&<button className="icon-button" aria-label={paused?"Retomar carrossel":"Pausar carrossel"} aria-pressed={paused} onClick={()=>setPaused(p=>!p)}>{paused?<Play size={16}/>:<Pause size={16}/>}</button>}
    </div>
    {showCaption&&<div className="cf-caption" aria-live={paused||engaged?"polite":"off"}><div key={selected} className="cf-caption-content"><h3>{active.title}</h3><p>{active.subtitle}</p>{active.href&&<Link href={active.href} className="text-link">Saiba mais <ArrowUpRight size={16}/></Link>}</div></div>}
  </div>;
}
