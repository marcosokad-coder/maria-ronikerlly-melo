"use client";
import {motion,useReducedMotion} from "motion/react";
export function Reveal({children,className=""}:{children:React.ReactNode;className?:string}){const reduced=useReducedMotion();return <motion.div className={className} initial={false} whileInView={reduced?{}:{y:[30,0],opacity:[0.35,1],filter:["blur(4px)","blur(0px)"]}} viewport={{once:false,amount:.12}} transition={{duration:.8,ease:[.22,1,.36,1]}}>{children}</motion.div>}
