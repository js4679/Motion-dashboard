import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


const fuelTL = gsap.timeline();


export function fuelAnimation(){

    

    fuelTL.from("#Stroke-2",{duration: 1, drawSVG: "0%" })
            .from("#Stroke-9",{duration: .25, drawSVG: "0%" })
            .from("#Stroke-6",{duration: .25, drawSVG: "0%" })
            .from("#Stroke-10",{duration: .25, drawSVG: "0%" })
            .from("#Stroke-11",{duration: .25, drawSVG: "0%" })
            .from("#Stroke-14",{duration: .25, drawSVG: "0%" })
            .from("#Stroke-15",{duration: .25, drawSVG: "0%" })
            .from("#Stroke-17",{duration: .25, drawSVG: "0%" })
            .from("#f",{duration: .5, alpha: 0 }, "fill")
            .from("#e",{duration: .5, alpha: 0 }, "fill");

    return fuelTL;
}