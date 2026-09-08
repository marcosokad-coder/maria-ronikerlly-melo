"use client";
import {useState} from "react";
import {posts} from "@/content/blog/posts";
import {BlogCard} from "./blog";
export function BlogGrid(){const [category,setCategory]=useState("Todos");const [count,setCount]=useState(3);const filtered=posts.filter(p=>category==="Todos"||p.category===category);return <><div className="filters" role="group" aria-label="Filtrar artigos por categoria">{["Todos",...new Set(posts.map(p=>p.category))].map(c=><button key={c} aria-pressed={category===c} onClick={()=>{setCategory(c);setCount(3)}}>{c}</button>)}</div><div className="blog-grid" aria-live="polite">{filtered.slice(0,count).map(p=><BlogCard post={p} key={p.slug}/>)}</div>{count<filtered.length&&<button className="load-more" onClick={()=>setCount(c=>c+3)}>Carregar mais conteúdos</button>}</>}
