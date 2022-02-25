import { ICarPlugin, IWheels } from "../../decl";
import { Car } from "../car";

export class ChainWheels implements IWheels {
    constructor() {
        console.log("made some chain wheels");
    }

    action(): void {
        console.log('chain wheels behave safer then normal wheels on snowfield');
    }
}

export class SnowFieldPlugin implements ICarPlugin {
    private isOnSnowField = false;
    private chainWheels = new ChainWheels();

    setIsOnSnowField(value: boolean) {
        this.isOnSnowField = value;
    }

    support(car: Car) {
        car.registerWheels({
            getWheels: (next) => () => {
                if (this.isOnSnowField) {
                    return this.chainWheels;
                }
                return next();
            }
        })
        return car;
    }
}
