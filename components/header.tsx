"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect,useState} from "react";
import {Menu,X} from "lucide-react";
import {nav} from "@/lib/site";
import {ArrowButton} from "@/components/ui/arrow-button";
import {Sheet,SheetContent,SheetTitle,SheetDescription,SheetTrigger,SheetClose} from "@/components/ui/sheet";
export function Wordmark(){return <Link className="wordmark" href="/" aria-label="Maria Ronikerlly Melo — início"><span>Maria Ronikerlly Melo</span><small>ADVOGADA PREVIDENCIÁRIA</small></Link>}
export function Header(){const path=usePathname();const [scrolled,setScrolled]=useState(false);const [open,setOpen]=useState(false);useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>24);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);return <header className={`header ${scrolled?"scrolled":""}`}><div className="header-inner"><Wordmark/><nav className="desktop-nav" aria-label="Navegação principal">{nav.map(([href,label])=><Link key={href} href={href} aria-current={path===href?"page":undefined}>{label}</Link>)}</nav><div className="header-cta"><ArrowButton/></div><Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><button className="mobile-menu icon-button" aria-label="Abrir menu"><Menu/></button></SheetTrigger><SheetContent className="mobile-panel" showCloseButton={false}><SheetTitle>Menu</SheetTitle><SheetDescription>Maria Ronikerlly Melo</SheetDescription><SheetClose className="icon-button menu-close" aria-label="Fechar menu"><X/></SheetClose><nav aria-label="Navegação mobile">{nav.map(([href,label])=><Link onClick={()=>setOpen(false)} key={href} href={href} aria-current={path===href?"page":undefined}>{label}</Link>)}</nav></SheetContent></Sheet></div></header>}
