import { Car } from "../components/car";
import { SnowFieldPlugin } from "../components/plugins/SnowFieldPlugin";

console.log('######## A normal field begin ######');
const car = new Car();
const snowFieldPlugin = new SnowFieldPlugin();
snowFieldPlugin.support(car);
car.action();
console.log('######## A normal field end ######');

console.log('######## A snowfield begin ######');
snowFieldPlugin.setIsOnSnowField(true);
car.action();
console.log('######## A snowfield end ######');
