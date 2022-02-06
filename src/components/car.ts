import { IEngine, IWheels } from "../decl";

export class Car {
    private wheels: IWheels;
    private engine: IEngine;

    constructor(wheels: IWheels, engine: IEngine) {
        this.wheels = wheels;
        this.engine = engine;
    }

    action() {
        this.wheels.action();
        this.engine.action();
        console.log("The car drives by.");
    }
}
