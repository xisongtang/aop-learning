import { Car } from "../components/car";
import { Engine } from "../components/engine";
import { Pistons } from "../components/pistons";
import { Wheels } from "../components/wheels";
import { IWheels } from "../decl";

class ChainWheels implements IWheels {
    constructor() {
        console.log("made some chain wheels");
    }

    action(): void {
        console.log('chain wheels behave safer then normal wheels on snowfield');
    }
}

let isOnSnowField = false;

console.log('######## A normal field begin ######');
const pistons = new Pistons();
const wheels = new Wheels();
const engine = new Engine(pistons);
const car = new Car(wheels, engine);
car.action();
console.log('######## A normal field end ######');

console.log('######## A snowfield begin ######');
isOnSnowField = true;
car.setWheels(new ChainWheels());
car.action();
console.log('######## A snowfield end ######');
