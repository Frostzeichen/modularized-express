import { sweep } from "./sweeper/index.js";
import { delay } from "./timer/index.js";

main();

async function main() {
    let intervalMS = 10000
    for (;;) {
        sweep()
        console.log(`Sweeper: removing "deleted" items every ${intervalMS/1000} seconds.`);
        await delay(intervalMS);
    }
}