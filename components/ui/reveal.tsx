"use client";
import {motion,useReducedMotion} from "motion/react";
export function Reveal({children,className=""}:{children:React.ReactNode;className?:string}){const reduced=useReducedMotion();return <motion.div className={className} initial={false} whileInView={reduced?{}:{y:[16,0],opacity:[0.65,1],filter:["blur(2px)","blur(0px)"]}} viewport={{once:true,amount:0.12}} transition={{duration:0.65,ease:"easeOut"}}>{children}</motion.div>}
