import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);




const rpmTL = gsap.timeline();


export function rpmAnimation(){

    

    rpmTL.from("#Fill-1",{duration: 1, drawSVG: "0%" });

    return rpmTL;
}