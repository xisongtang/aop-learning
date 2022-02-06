import { Car } from "../components/car";
import { GrassFieldPlugin } from "../components/plugins/GrassFieldPlugin";
import { SnowFieldPlugin } from "../components/plugins/SnowFieldPlugin";

console.log('######## A normal field begin ######');
const car = new Car();
const grassFieldPlugin = new GrassFieldPlugin();
const snowFieldPlugin = new SnowFieldPlugin();
const plugins = [grassFieldPlugin, snowFieldPlugin];
plugins.forEach(p => p.support(car));
car.action();
console.log('######## A normal field end ######');

console.log('######## A snowfield begin ######');
snowFieldPlugin.setIsOnSnowField(true);
car.action();
console.log('######## A snowfield end ######');

console.log('######## A grassfield begin ######');
snowFieldPlugin.setIsOnSnowField(false);
grassFieldPlugin.setIsOnGrassField(true);
car.action();
console.log('######## A grassfield end ######');
