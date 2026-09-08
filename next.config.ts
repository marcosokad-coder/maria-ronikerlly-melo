import type {NextConfig} from "next";
const config:NextConfig={output:"export",trailingSlash:true,images:{loader:"custom",loaderFile:"./lib/image-loader.ts",deviceSizes:[384,640,828,1080,1536],imageSizes:[384]},poweredByHeader:false};
export default config;
