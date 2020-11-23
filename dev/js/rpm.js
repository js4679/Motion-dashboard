import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);




const rpmTL = gsap.timeline();


export function rpmAnimation(){

    

    rpmTL.from("#Stroke-1",{duration: .25, drawSVG: "0%" })
        .from("#Stroke-2",{duration: .25, drawSVG: "0%" })
        .from("#Stroke-3",{duration: .25, drawSVG: "0%" })
        .from("#Stroke-4",{duration: .25, drawSVG: "0%" })
        .from("#Stroke-5",{duration: .25, drawSVG: "0%" })
        .from("#Stroke-6",{duration: .25, drawSVG: "0%" })
        .from("#Stroke-7",{duration: .25, drawSVG: "0%" })
        .from("#rpmNumbers",{duration: 1, alpha: 0});

    return rpmTL;
}