import { Car } from "../components/car";
import { ColdPlugin } from "../components/plugins/ColdPlugin";

console.log('######## B normal temperature begin ######');
const car = new Car();
const coldPlugin = new ColdPlugin()
coldPlugin.support(car);
car.action();
console.log('######## B normal temperature end ######');

console.log('######## B very code begin ######');
coldPlugin.setIsVeryCold(true);
car.action();
console.log('######## B very code end ######');
