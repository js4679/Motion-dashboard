import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

var audio = document.getElementById("audio");

import { logoAnimation } from "./demo.js";
import { borderAnimation } from "./border.js";
import { musicAnimation } from "./music.js";
import { fuelAnimation } from "./fuel.js";
import { capacityTurboAnimation } from "./capacityTurbo.js";
import { rpmAnimation } from "./rpm.js";
import { speedAnimation } from "./speed.js";
import { radarAnimation } from "./radar.js";
import { ongoingAnimation } from "./ongoing.js";


playMusic();


function playMusic(){
    audio.play();
}

gsap.registerPlugin(GSDevTools);



const mainTL = gsap.timeline()
mainTL.add(logoAnimation())
        .add(borderAnimation(), "play")
        .add(radarAnimation(), "play")
        .add(rpmAnimation(), "play2")
        .add(speedAnimation(), "play2")
        .add(capacityTurboAnimation(), "play2")
        .add(fuelAnimation(), "play2")
        .add(musicAnimation(), "play2")
        .add(ongoingAnimation());

GSDevTools.create();