import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);




const speedTL = gsap.timeline();


export function speedAnimation(){

    

    speedTL.from("#speedShape",{duration: .25, alpha: 0, transformOrigin: "center" })
        .from("#speed1",{duration: .25, drawSVG: "0%" })
        .from("#speed2",{duration: .25, drawSVG: "0%" })
        .from("#speed3",{duration: .25, drawSVG: "0%" })
        .from("#speed4",{duration: .25, drawSVG: "0%" })
        .from("#speed5",{duration: .25, drawSVG: "0%" })
        .from("#speed6",{duration: .25, drawSVG: "0%" })
        .from("#speed7",{duration: .25, drawSVG: "0%" })
        .from("#twenty",{duration: .5, alpha: 0}, "in")
        .from("#forty",{duration: .5, alpha: 0}, "in")
        .from("#sixty",{duration: .5, alpha: 0}, "in");

    return speedTL;
}