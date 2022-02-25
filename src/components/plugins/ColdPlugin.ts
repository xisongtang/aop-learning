import { IEngine, IPistons, ICarPlugin } from "../../decl";
import { Pistons } from "../pistons";
import { Car } from "../car";

class HotEngine implements IEngine {
    constructor(private pistons: IPistons) {
        console.log("made a hot engine");
    }

    action(): void {
        this.pistons.action();
        console.log('hot engine behaves more reliable then normal engine when very cold');
    }
}

export class ColdPlugin implements ICarPlugin {
    private isVeryCold = false;
    private hotEngine = new HotEngine(new Pistons());

    setIsVeryCold(value: boolean) {
        this.isVeryCold = value;
    }

    support(car: Car) {
        car.registerEngine({
            getEngine: (next) => () => {
                if (this.isVeryCold) {
                    return this.hotEngine;
                }
                return next();
            }
        })
        return car;
    }
}
