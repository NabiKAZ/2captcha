import * as Captcha from "../dist/index.js";
import denv from "dotenv";

import * as fs from "fs";
import * as path from "path";

denv.config();

(async () => {


    // const solver = new Captcha.Solver(process.env.TOKEN);
    const pingback = new Captcha.Pingback(process.env.TOKEN);
    const p = path.join(path.dirname(import.meta.url), "resources/testImage.png").substring(6);
    const base64Image = fs.readFileSync(p).toString("base64");

    await pingback.listen()

    pingback.solve("textCaptcha", 5, )
    console.log(x);
    // await pingback.listen();
})();