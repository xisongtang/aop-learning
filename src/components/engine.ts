import { Pistons } from "./pistons";

export class Engine {
    private pistons: Pistons;
    constructor() {
        this.pistons = new Pistons();
        console.log("Made an engine.");
    }
    action() {
        this.pistons.action();
        console.log("The engine goes vroom vroom.");
    }
}
