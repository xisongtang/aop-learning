import { IEngine, IWheels } from "../decl";
import { Engine } from "./engine";
import { Pistons } from "./pistons";
import { Wheels } from "./wheels";

interface RegisterWheels {
    priority?: number;
    getWheels(next: () => IWheels): () => IWheels;
}

interface RegisterEngine {
    priority?: number;
    getEngine(next: () => IEngine): () => IEngine;
}

export class Car {
    private wheels: IWheels;
    private engine: IEngine;

    private wheelsConfigs: RegisterWheels[] = [];
    private engineConfigs: RegisterEngine[] = [];

    constructor(wheels?: IWheels, engine?: IEngine) {
        this.wheels = wheels ?? new Wheels();
        this.engine = engine ?? new Engine(new Pistons());
    }

    private getWheels() {
        return (this.wheelsConfigs.reduce((p, v) => {
            return v.getWheels(p);
        }, () => this.wheels))();
    }

    private getEngine() {
        return (this.engineConfigs.reduce((p, v) => {
            return v.getEngine(p);
        }, () => this.engine))();
    }

    action() {
        this.getWheels().action();
        this.getEngine().action();
        console.log("The car drives by.");
    }

    registerWheels(config: RegisterWheels) {
        this.wheelsConfigs.push(config);
        this.wheelsConfigs.sort((a, b) => {
            return (b.priority ?? 0) - (a.priority ?? 0);
        });
    }

    registerEngine(config: RegisterEngine) {
        this.engineConfigs.push(config);
        this.engineConfigs.sort((a, b) => {
            return (b.priority ?? 0) - (a.priority ?? 0);
        });
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
