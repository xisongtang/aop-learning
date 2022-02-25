import { IEngine, IPistons } from "../decl";

export class Engine implements IEngine {
    private pistons: IPistons;
    constructor(pistons: IPistons) {
        this.pistons = pistons;
        console.log("Made an engine.");
    }
    action() {
        this.pistons.action();
        console.log("The engine goes vroom vroom.");
    }
}
