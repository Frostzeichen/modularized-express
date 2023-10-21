import {Worker, isMainThread} from "node:worker_threads"

if (isMainThread) {
    const route = new Worker("./controllers/routes/index.js");
    const sweep = new Worker("./controllers/database/index.js");
}