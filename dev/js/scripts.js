import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { logoAnimation } from "./demo.js";
import { borderAnimation } from "./border.js"
import { musicAnimation } from "./music.js";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline()
mainTL.add(logoAnimation())
        .add(borderAnimation())
        .add(musicAnimation());

GSDevTools.create();