import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");


const logoTL = gsap.timeline();


export function logoAnimation(){


    logoTL.to("#open-top",{duration: 1, y: -500 },"open")
            .to("#open-bottom",{duration: 1, y: 500 },"open")
            .from("#ghost",{duration: 2, scale: 20, transformOrigin: "center"})
            .from("#logoCircle",{duration: 1, alpha: 0, transformOrigin: "center"})
            .from("#logoCrossbar",{duration: 1, alpha: 0})
            .to("#first-load",{duration: 1, alpha: 0});
    return logoTL;
}