import NoteRepository from "../data/repositories/NoteRepository";
import Repository from "../data/repositories/Repository";
import Note from "../data/models/Note";

class NoteService {

    private _repository : Repository<Note>;

    constructor() {
        this._repository = new NoteRepository();
    }

    async getPage(page : number): Promise<Note[]> {
        return await this._repository.getPage(page);
    }

    async getOne(id : number): Promise<Note> {
        return await this._repository.getOne(id);
    }

    async upsert(model : Note): Promise<Note> {
        return await this._repository.upsert(model);
    }

    async delete(id : number): Promise<boolean> {
        return await this._repository.delete(id) === 1;
    }

    async migrate() {
        return await this._repository.migrate();
    }
}

const noteService = new NoteService();

export default noteService;
