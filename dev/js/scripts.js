import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { logoAnimation } from "./demo.js";
import { borderAnimation } from "./border.js";
import { musicAnimation } from "./music.js";
import { fuelAnimation } from "./fuel.js";
import { capacityTurboAnimation } from "./capacityTurbo.js";
import { rpmAnimation } from "./rpm.js";
import { speedAnimation } from "./speed.js";


gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline()
mainTL.add(logoAnimation())
        .add(borderAnimation())
        .add(rpmAnimation())
        .add(speedAnimation())
        .add(capacityTurboAnimation())
        .add(fuelAnimation())
        .add(musicAnimation());

GSDevTools.create();