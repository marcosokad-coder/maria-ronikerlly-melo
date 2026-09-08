import type { Metadata } from "next";
import {site} from "./site";
export function pageMeta(title:string,description:string,path:string):Metadata{return {title,description,alternates:{canonical:site.origin+path},openGraph:{type:"website",locale:"pt_BR",siteName:site.name,title,description,url:site.origin+path,images:[{url:site.origin+"/images/maria-ronikerlly-hero.jpeg",width:1536,height:857,alt:site.name}]}};}
