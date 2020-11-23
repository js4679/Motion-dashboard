import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);




const rpmTL = gsap.timeline();


export function rpmAnimation(){

    

    rpmTL.from("#rpm1",{duration: .25, drawSVG: "0%" })
        .from("#rpm2",{duration: .25, drawSVG: "0%" })
        .from("#rpm3",{duration: .25, drawSVG: "0%" })
        .from("#rpm4",{duration: .25, drawSVG: "0%" })
        .from("#rpm5",{duration: .25, drawSVG: "0%" })
        .from("#rpm6",{duration: .25, drawSVG: "0%" })
        .from("#rpm7",{duration: .25, drawSVG: "0%" })
        .from("#rpmNumbers",{duration: 1, alpha: 0});

    return rpmTL;
}