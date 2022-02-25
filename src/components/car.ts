import { IEngine, IWheels } from "../decl";

export class Car {
    protected wheels: IWheels;
    protected engine: IEngine;

    constructor(wheels: IWheels, engine: IEngine) {
        this.wheels = wheels;
        this.engine = engine;
    }

    protected getWheels() {
        return this.wheels;
    }

    protected getEngine() {
        return this.engine;
    }

    action() {
        this.getWheels().action();
        this.getEngine().action();
        console.log("The car drives by.");
    }

    setWheels(wheels: IWheels) {
        this.wheels = wheels;
        return this;
    }

    setEngine(engine: IEngine) {
        this.engine = engine;
        return this;
    }
}
