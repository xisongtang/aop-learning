import { IWheels } from "../../decl";
import { Engine } from "../engine";
import { Pistons } from "../pistons";
import { Wheels } from "../wheels";
import { Car } from "../car";

export class ChainWheels implements IWheels {
    constructor() {
        console.log("made some chain wheels");
    }

    action(): void {
        console.log('chain wheels behave safer then normal wheels on snowfield');
    }
}

export class HugeWheels implements IWheels {
    constructor() {
        console.log("made some huge wheels");
    }

    action(): void {
        console.log('chain wheels behave more reliable then normal wheels on grassfield');
    }
}

export class ACar extends Car {
    private isOnSnowField = false;
    private isOnGrassField = false;
    private chainWheels = new ChainWheels();
    private hugeWheels = new HugeWheels();
    constructor() {
        super(new Wheels(), new Engine(new Pistons()));
    }

    setIsOnSnowField(value: boolean) {
        this.isOnSnowField = value;
    }

    setIsOnGrassField(value: boolean) {
        this.isOnSnowField = value;
    }

    protected getWheels(): IWheels {
        return this.isOnSnowField ? this.chainWheels :
            this.isOnGrassField ? this.wheels : this.hugeWheels;
    }
}
