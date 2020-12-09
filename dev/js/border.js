import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


// const morphTL = gsap.timeline();

const borderTL = gsap.timeline();


export function borderAnimation(){

    

    borderTL.from("#border",{duration: 3, drawSVG: "50% 50%" })
            .from("#P", {duration: .5, alpha: 0})
            .from("#R", {duration: .5, alpha: 0})
            .from("#N", {duration: .5, alpha: 0})
            .from("#D", {duration: .5, alpha: 0})
            .from("#L", {duration: .5, alpha: 0});

    return borderTL;
}