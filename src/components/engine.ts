import { IEngine, IPistons } from "../decl";
import { Pistons } from "./pistons";

interface RegisterPiston {
    priority?: number;
    getPistons(next: () => IPistons): () => IPistons;
}

export class Engine implements IEngine {
    private pistons: IPistons;

    private pistonsConfigs: RegisterPiston[] = [];

    constructor(pistons?: IPistons) {
        this.pistons = pistons ?? new Pistons();
        console.log("Made an engine.");
    }

    private getPistons() {
        return (this.pistonsConfigs.reduce((p, v) => {
            return v.getPistons(p);
        }, () => this.pistons))();
    }

    action() {
        this.getPistons().action();
        console.log("The engine goes vroom vroom.");
    }

    registerEngine(config: RegisterPiston) {
        this.pistonsConfigs.push(config);
        this.pistonsConfigs.sort((a, b) => {
            return (b.priority ?? 0) - (a.priority ?? 0);
        });
    }
}
