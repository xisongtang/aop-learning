import { ACar } from "../components/cars/ACar";

console.log('######## A normal field begin ######');
const car = new ACar();
car.action();
console.log('######## A normal field end ######');

console.log('######## A snowfield begin ######');
car.setIsOnSnowField(true);
car.action();
console.log('######## A snowfield end ######');

console.log('######## A grassfield begin ######');
car.setIsOnSnowField(false);
car.setIsOnGrassField(true);
car.action();
console.log('######## A grassfield end ######');
