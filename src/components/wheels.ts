import { IWheels } from "../decl";

export class Wheels implements IWheels {
    constructor() {
        console.log("made some wheels");
    }
    action() {
        console.log("The wheels go 'round and 'round.");
    }
}
