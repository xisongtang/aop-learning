import { Car } from "../components/car";
import { ColdPlugin } from "../components/plugins/ColdPlugin";
import { SnowFieldPlugin } from "../components/plugins/SnowFieldPlugin";

console.log('######## C normal field and normal temperature begin ######');
const car = new Car();
const coldPlugin = new ColdPlugin();
const snowFieldPlugin = new SnowFieldPlugin();
const plugins = [coldPlugin, snowFieldPlugin];
plugins.forEach(p => p.support(car));
car.action();
console.log('######## C normal field and normal temperature  end ######');

console.log('######## C snowfield begin ######');
snowFieldPlugin.setIsOnSnowField(true);
car.action();
console.log('######## C snowfield end ######');

console.log('######## C snowfield and very code begin ######');
coldPlugin.setIsVeryCold(true);
car.action();
console.log('######## C snowfield and very code end ######');
