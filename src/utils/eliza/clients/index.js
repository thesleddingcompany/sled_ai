import { SledClientInterface } from "./sledClient.js/index.js";

export async function initializeClient(character, runtime) {
    return await SledClientInterface.start(runtime);
}
