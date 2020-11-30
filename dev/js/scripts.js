import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { logoAnimation } from "./demo.js";
import { borderAnimation } from "./border.js";
import { musicAnimation } from "./music.js";
import { fuelAnimation } from "./fuel.js";
import { capacityTurboAnimation } from "./capacityTurbo.js";
import { rpmAnimation } from "./rpm.js";
import { speedAnimation } from "./speed.js";
import { radarAnimation } from "./radar.js"


gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline()
mainTL.add(logoAnimation())
        .add(borderAnimation(), "play")
        .add(radarAnimation(), "play")
        .add(rpmAnimation(), "play2")
        .add(speedAnimation(), "play2")
        .add(capacityTurboAnimation())
        .add(fuelAnimation(), "play3")
        .add(musicAnimation(), "play3");

GSDevTools.create();