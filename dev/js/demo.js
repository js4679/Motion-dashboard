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
            .to("#logo", {duration: 1, scale: .36, x: 75, y: -265, delay: .75})
            .to("#first-load",{duration: .5, alpha: 0});
    return logoTL;
}