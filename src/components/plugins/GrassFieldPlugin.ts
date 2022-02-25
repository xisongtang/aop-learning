import { ICarPlugin, IWheels } from "../../decl";
import { Car } from "../car";

export class HugeWheels implements IWheels {
    constructor() {
        console.log("made some huge wheels");
    }

    action(): void {
        console.log('chain wheels behave more reliable then normal wheels on grassfield');
    }
}


export class GrassFieldPlugin implements ICarPlugin {
    private isOnGrassField = false;
    private hugeWheels = new HugeWheels();

    setIsOnGrassField(value: boolean) {
        this.isOnGrassField = value;
    }

    support(car: Car) {
        car.registerWheels({
            getWheels: (next) => () => {
                if (this.isOnGrassField) {
                    return this.hugeWheels;
                }
                return next();
            }
        })
        return car;
    }
}
