"use client";
import {useEffect} from "react";
import {usePathname} from "next/navigation";
/** Progressive enhancement: SSR content remains visible, motion is disabled by user preference. */
export function ScrollEffects(){const pathname=usePathname();useEffect(()=>{
  const media=window.matchMedia("(prefers-reduced-motion: reduce)");let cleanup=()=>{};
  function setup(){cleanup();if(media.matches)return;
    const sections=[...document.querySelectorAll<HTMLElement>("main > section, main > div > section")];
    const photos=[...document.querySelectorAll<HTMLElement>(".hero-photo, .cta-photo img, .internal-photo img")];
    const progress=document.querySelector<HTMLElement>(".scroll-progress");
    const observer=new IntersectionObserver(entries=>{for(const entry of entries){entry.target.classList.toggle("motion-in",entry.isIntersecting);}}, {threshold:.03,rootMargin:"-2% 0px -3% 0px"});
    for(const section of sections){section.classList.add("motion-section");observer.observe(section);}
    let raf=0;
    const draw=()=>{raf=0;const max=document.documentElement.scrollHeight-innerHeight;if(progress)progress.style.transform=`scaleX(${max>0?scrollY/max:0})`;
      for(const photo of photos){const box=photo.parentElement?.getBoundingClientRect();if(!box||box.bottom<0||box.top>innerHeight)continue;
        const strength=innerWidth<951?10:25;const offset=Math.max(-1,Math.min(1,(innerHeight/2-(box.top+box.height/2))/innerHeight))*strength;
        photo.style.setProperty("--parallax-y",`${offset}px`);photo.classList.add("parallax-photo");}
    };
    const update=()=>{if(!raf)raf=requestAnimationFrame(draw);};draw();addEventListener("scroll",update,{passive:true});addEventListener("resize",update);
    cleanup=()=>{observer.disconnect();cancelAnimationFrame(raf);removeEventListener("scroll",update);removeEventListener("resize",update);sections.forEach(s=>s.classList.remove("motion-section","motion-in"));photos.forEach(p=>{p.classList.remove("parallax-photo");p.style.removeProperty("--parallax-y");});if(progress)progress.style.transform="scaleX(0)";};
  }
  setup();media.addEventListener("change",setup);return()=>{cleanup();media.removeEventListener("change",setup);};
},[pathname]);return <div className="scroll-progress" aria-hidden="true"/>;}
