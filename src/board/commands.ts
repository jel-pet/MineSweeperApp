export abstract class AbstractCommand {
    public abstract toStringCommand(): string;
}

export class NewGameCommand extends AbstractCommand {

    private readonly _difficulty: number;

    constructor(difficulty: number) {
        super();
        this._difficulty = difficulty;
    }

    public toStringCommand(): string {
        return `new ${this._difficulty}`;
    }
}

export class OpenCommand extends AbstractCommand {

    private readonly _x: number;
    private readonly _y: number;

    constructor(x: number, y: number) {
        super();
        this._x = x;
        this._y = y;
    }

    public toStringCommand(): string {
        return `open ${this._x} ${this._y}`;
    }
}

export class GetMapCommand extends AbstractCommand {
    public toStringCommand(): string {
        return "map";
    }
}


export default AbstractCommand;