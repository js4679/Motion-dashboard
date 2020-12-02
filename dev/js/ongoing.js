import { gsap } from "gsap";


const ongoingTL = gsap.timeline();


export function ongoingAnimation(){

    

    ongoingTL.to("#capacityTopFill",{duration: .5, scaleX: .5, transformOrigin: "right" }, "go2")
            .to("#capacityMiddleFill",{duration: .5, scaleX: 1.5, transformOrigin: "right"}, "go1")
            .to("#capacityBottomFill",{duration: .5, scaleX: .5, transformOrigin: "right"}, "go3")
            .to("#turboLeftFill",{duration: .5, scaleY: 1.5, transformOrigin: "bottom"}, "go1")
            .to("#turboMiddleFill",{duration: .5, scaleY: .25, transformOrigin: "bottom" }, "go2")
            .to("#turboRightFill",{duration: .5, scaleY: 1.25, transformOrigin: "bottom" }, "go3");

    return ongoingTL;
}