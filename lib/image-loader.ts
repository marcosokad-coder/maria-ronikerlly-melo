"use client";
import type {ImageLoaderProps} from "next/image";
export default function imageLoader({src,width}:ImageLoaderProps){const sizes=[384,640,828,1080,1536];const selected=sizes.find(s=>s>=width)||1536;return src.replace(/\.jpeg$/,`-${selected}.webp`);}
