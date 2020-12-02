import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


const capacityTurboTL = gsap.timeline();


export function capacityTurboAnimation(){

    

    capacityTurboTL.from("#capacityTop",{duration: 1, drawSVG: "0%" }, "draw")
            .from("#capacityMiddle",{duration: 1, drawSVG: "0%" }, "draw")
            .from("#capacityBottom",{duration: 1, drawSVG: "0%" }, "draw")
            .from("#turboLeft",{duration: 1, drawSVG: "0%" }, "draw")
            .from("#turboMiddle",{duration: 1, drawSVG: "0%" }, "draw")
            .from("#turboRight",{duration: 1, drawSVG: "0%" }, "draw")
            .from("#capacityTopFill",{duration: .5, alpha: 0 }, "fill")
            .from("#capacityMiddleFill",{duration: .5, alpha: 0}, "fill")
            .from("#capacityBottomFill",{duration: .5, alpha: 0}, "fill")
            .from("#turboLeftFill",{duration: .5, alpha: 0}, "fill")
            .from("#turboMiddleFill",{duration: .5, alpha: 0 }, "fill")
            .from("#turboRightFill",{duration: .5, alpha: 0 }, "fill")
            .from("#capacityText",{duration: .5, alpha: 0 }, "fill")
            .from("#turboText",{duration: .5, alpha: 0 }, "fill");

    return capacityTurboTL;
}