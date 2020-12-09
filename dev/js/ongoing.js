import { gsap } from "gsap";


const ongoingTL = gsap.timeline();


export function ongoingAnimation(){

    

    ongoingTL.to("#D", {duration: .5, fill: "#DC509D" , scale: 1.5, transformOrigin: "center"})
            .to("#twenty",{duration: .5, fill: "#DC509D" , scale: 1.25, transformOrigin: "center"}, "first")
            .to("#one", {duration: .5, fill: "#DC509D" , scale: 1.5, transformOrigin: "center"}, 'first')
            .to("#capacityTopFill",{duration: .5, scaleX: .5, transformOrigin: "right" }, "go2")
            .to("#capacityMiddleFill",{duration: .5, scaleX: 1.5, transformOrigin: "right"}, "go1")
            .to("#capacityBottomFill",{duration: .5, scaleX: .5, transformOrigin: "right"}, "go3")
            .to("#turboLeftFill",{duration: .5, scaleY: 1.5, transformOrigin: "bottom"}, "go1")
            .to("#turboMiddleFill",{duration: .5, scaleY: .25, transformOrigin: "bottom" }, "go2")
            .to("#turboRightFill",{duration: .5, scaleY: 1.25, transformOrigin: "bottom" }, "go3")
            .to("#radarInnerRing", {duration: 1, scale: 10, alpha: 0, transformOrigin: "center", repeat: 3 }, "go1")
            .to("#D", {duration: .5, fill: "#9FEC89" , scale: 1, transformOrigin: "center"})
            .to("#P", {duration: .5, fill: "#DC509D" , scale: 1.5, transformOrigin: "center"})
            .to("#twenty",{duration: .5, fill: "#9FEC89" , scale: 1, transformOrigin: "center"}, "last")
            .to("#one", {duration: .5, fill: "#9FEC89" , scale: 1, transformOrigin: "center"}, "last");

    return ongoingTL;
}