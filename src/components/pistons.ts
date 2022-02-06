import { IPistons } from "../decl";

export class Pistons implements IPistons {
    constructor() {
        console.log("Made some pistons.");
    }
    action() {
        console.log("The pistons fire up and down.");
    }
}
