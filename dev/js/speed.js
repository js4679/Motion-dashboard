import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);




const speedTL = gsap.timeline();


export function speedAnimation(){

    

    speedTL.from("#Speed-1",{duration: .25, drawSVG: "0%" })
        .from("#Speed-2",{duration: .25, drawSVG: "0%" })
        .from("#Speed-3",{duration: .25, drawSVG: "0%" })
        .from("#Speed-4",{duration: .25, drawSVG: "0%" })
        .from("#Speed-5",{duration: .25, drawSVG: "0%" })
        .from("#Speed-6",{duration: .25, drawSVG: "0%" })
        .from("#Speed-7",{duration: .25, drawSVG: "0%" })
        .from("#20",{duration: 1, alpha: 0})
        .from("#40",{duration: 1, alpha: 0})
        .from("#60",{duration: 1, alpha: 0});

    return speedTL;
}