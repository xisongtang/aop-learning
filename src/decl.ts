import { Car } from "./components/car";
import { Engine } from "./components/engine";

export interface IWheels {
    action(): void;
}

export interface IPistons {
    action(): void;
}

export interface IEngine {
    action(): void;
}

export interface ICarPlugin {
    support(car: Car): Car;
}
