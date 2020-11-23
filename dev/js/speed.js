import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);




const speedTL = gsap.timeline();


export function speedAnimation(){

    

    speedTL.from("#speed1",{duration: .25, drawSVG: "0%" })
        .from("#speed2",{duration: .25, drawSVG: "0%" })
        .from("#speed3",{duration: .25, drawSVG: "0%" })
        .from("#speed4",{duration: .25, drawSVG: "0%" })
        .from("#speed5",{duration: .25, drawSVG: "0%" })
        .from("#speed6",{duration: .25, drawSVG: "0%" })
        .from("#speed7",{duration: .25, drawSVG: "0%" })
        .from("#20",{duration: 1, alpha: 0})
        .from("#40",{duration: 1, alpha: 0})
        .from("#60",{duration: 1, alpha: 0});

    return speedTL;
}