import { BCar } from "../components/cars/BCar";

console.log('######## B normal temperature begin ######');
const car = new BCar();
car.action();
console.log('######## B normal temperature end ######');

console.log('######## B very code begin ######');
car.setIsVeryCold(true);
car.action();
console.log('######## B very code end ######');
