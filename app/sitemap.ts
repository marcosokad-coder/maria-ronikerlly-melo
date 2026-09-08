import type {MetadataRoute} from "next";
import {site,nav} from "@/lib/site";
import {posts} from "@/content/blog/posts";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{return [...nav.map(([path])=>({url:site.origin+path,priority:path==="/"?1:path==="/beneficios-rurais"?.9:.7})),{url:site.origin+"/politica-de-privacidade",priority:.2},...posts.map(p=>({url:site.origin+"/blog/"+p.slug,lastModified:p.updatedAt||p.publishedAt,priority:.6}))]}
