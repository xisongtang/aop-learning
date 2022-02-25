import { ACar } from "../components/cars/ACar";

console.log('######## A normal field begin ######');
const car = new ACar();
car.action();
console.log('######## A normal field end ######');

console.log('######## A snowfield begin ######');
car.setIsOnSnowField(true);
car.action();
console.log('######## A snowfield end ######');
