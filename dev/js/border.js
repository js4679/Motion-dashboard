import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


// const morphTL = gsap.timeline();

const borderTL = gsap.timeline();


export function borderAnimation(){

    

    borderTL.from("#border",{duration: 3, drawSVG: "50% 50%" })
            .from("#gearshift", {duration: 1, alpha: 0, stagger: .5});

    return borderTL;
}