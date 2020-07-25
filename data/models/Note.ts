import Model from "./Model";

class Note extends Model {
    _title!: string;
    _body!: string;

    constructor() {
        Note.table = 'notes';

        super();
    }

    public get title()  : string{
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get body()  : string{
        return this._body;
    }

    public set body(id: string) {
        this._body = id;
    }
}

export default Note;
