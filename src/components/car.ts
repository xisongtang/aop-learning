import { Engine } from "./engine";
import { Wheels } from "./wheels";

export class Car {
    private wheels: Wheels;
    private engine: Engine;

    constructor() {
        this.wheels = new Wheels();
        this.engine = new Engine();
    }

    action() {
        this.wheels.action();
        this.engine.action();
        console.log("The car drives by.");
    }
}
