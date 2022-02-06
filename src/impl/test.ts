import { Car } from '../components/car';
import { Engine } from '../components/engine';
import { Wheels } from '../components/wheels';

class TestPistons {
    constructor() {
        console.log("Made some test pistons.");
    }
    action() {
        console.log("The pistons do nothing");
    }
}

console.log('######## test begin ######');
const pistons = new TestPistons();
const wheels = new Wheels();
const engine = new Engine(pistons);
const car = new Car(wheels, engine);
car.action();
console.log('######## test end ######');
