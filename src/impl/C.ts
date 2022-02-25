import { CCar } from "../components/cars/CCar";

console.log('######## C normal field and normal temperature begin ######');
const car = new CCar();
car.action();
console.log('######## C normal field and normal temperature  end ######');

console.log('######## C snowfield begin ######');
car.setIsOnSnowField(true);
car.action();
console.log('######## C snowfield end ######');

console.log('######## C snowfield and very code begin ######');
car.setIsVeryCold(true);
car.action();
console.log('######## C snowfield and very code end ######');
