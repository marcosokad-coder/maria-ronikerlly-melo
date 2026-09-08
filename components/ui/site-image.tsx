"use client";
import Image,{type ImageProps} from "next/image";
import imageLoader from "@/lib/image-loader";
export default function SiteImage({alt,...props}:ImageProps){return <Image {...props} alt={alt} loader={imageLoader}/>}
