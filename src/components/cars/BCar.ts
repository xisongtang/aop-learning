import { IEngine, IPistons } from "../../decl";
import { Engine } from "../engine";
import { Pistons } from "../pistons";
import { Wheels } from "../wheels";
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

export class BCar extends Car {
    private isVeryCold = false;
    private hotEngine: IEngine;
    constructor() {
        super(new Wheels(), new Engine(new Pistons()));
        this.hotEngine = new HotEngine(new Pistons());
    }

    setIsVeryCold(value: boolean) {
        this.isVeryCold = value;
    }

    protected getEngine() {
        return this.isVeryCold ? this.hotEngine : this.engine;
    }
}
