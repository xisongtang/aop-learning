import { IWheels } from "../../decl";
import { ChainWheels } from "./ACar";
import { BCar } from "./BCar";

export class CCar extends BCar {
    private isOnSnowField = false;
    private chainWheels = new ChainWheels();
    constructor() {
        super();
    }

    setIsOnSnowField(value: boolean) {
        this.isOnSnowField = value;
    }

    protected getWheels(): IWheels {
        return this.isOnSnowField ? this.chainWheels : this.wheels;
    }
}
