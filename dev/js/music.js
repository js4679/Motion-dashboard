import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


// const morphTL = gsap.timeline();

const musicTL = gsap.timeline();


export function musicAnimation(){

    

    musicTL.from("#musicOutline",{duration: 1, drawSVG: "0%" })
            .from("#musicNote",{duration: 1, alpha: "0%" })
            .from("#Now-playing",{duration: .5, alpha: "0%" })
            .from("#Ghostbusters",{duration: .5, alpha: "0%" })
            .from("#by-ray-parker-jr",{duration: .5, alpha: "0%" });

    return musicTL;
}