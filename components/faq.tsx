"use client";
import Link from "next/link";
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from "@/components/ui/accordion";
import {faqs} from "@/lib/site";
export function FAQ(){return <section className="section wrap faq-section"><div><span className="eyebrow">RESPOSTAS COM CLAREZA</span><h2>Dúvidas frequentes</h2><p>Um primeiro passo para entender melhor seus direitos.</p><Link className="text-link" href="/blog">Explore a central de conteúdo ↗</Link></div><Accordion type="single" collapsible className="faq-list">{faqs.map((f,i)=><AccordionItem value={String(i)} key={f.q}><AccordionTrigger>{f.q}</AccordionTrigger><AccordionContent><p>{f.a}</p>{f.slug&&<Link className="text-link" href={`/blog/${f.slug}`}>Ler conteúdo completo ↗</Link>}</AccordionContent></AccordionItem>)}</Accordion></section>}
