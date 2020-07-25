import Repository from './GenericRepository';
import GenericRepository from './GenericRepository';
import Note from '../models/Note';

class NoteRepository extends GenericRepository<Note> implements Repository<Note> {

    public constructor() {
        super(Note.table);
    }

    async migrate() {
        await this._executeQuery(`CREATE TABLE IF NOT EXISTS ${this._table} (
            id integer primary key not null, 
            title text, 
            body text
        )`);
    }
}

export default NoteRepository;
