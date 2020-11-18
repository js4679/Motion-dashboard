import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

// const morphTL = gsap.timeline();

const logoTL = gsap.timeline();


export function logoAnimation(){

    // morphTL.to("#blue",{duration: 1, morphSVG:"#star", fill:"#650467"});
    // return morphTL;

    logoTL.to("#open-top",{duration: 2, y: -500 },"open")
            .to("#open-bottom",{duration: 2, y: 500 },"open")
            .from("#blob", {duration:1, scale:0})
            .to("#blob", {duration:2, scale:2, x:150, y: -20})
            .to("#blob",{duration: 3, morphSVG:"#ghost-fill"});
    return logoTL;
}