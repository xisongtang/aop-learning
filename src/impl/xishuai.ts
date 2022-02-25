import { Car } from '../components/car';
import { Engine } from '../components/engine';
import { Pistons } from '../components/pistons';
import { Wheels } from '../components/wheels';

console.log('######## xishuai begin ######');
const pistons = new Pistons();
const wheels = new Wheels();
const engine = new Engine(pistons);
const car = new Car(wheels, engine);
car.action();
console.log('######## xishuai end ######');
