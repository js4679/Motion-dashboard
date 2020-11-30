import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


gsap.set("#svg",{transformOrigin: "center"});


const radarTL = gsap.timeline();
const ringSpeed= .5;

export function radarAnimation(){

    

    radarTL.from("#radarInnerRing", {duration: ringSpeed, scale:0, transformOrigin: "center" })
            .from("#radarRing4", {duration: ringSpeed, scale:0, transformOrigin: "center" })
            .from("#radarRing3", {duration: ringSpeed, scale:0, transformOrigin: "center" })
            .from("#radarRing2", {duration: ringSpeed, scale:0, transformOrigin: "center" })
            .from("#radarRing1", {duration: ringSpeed, scale:0, transformOrigin: "center" })
            .from("#radarOuterRing", {duration: ringSpeed, scale:0, transformOrigin: "center" })
            .from("#radarVertical",{duration: 1, drawSVG: "0%" })
            .from("#radarHorizontal",{duration: 1, drawSVG: "0%" });



    return radarTL;
}