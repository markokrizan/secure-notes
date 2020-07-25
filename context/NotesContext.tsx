import React, { createContext, useState } from 'react';
import Note from '../data/models/Note';

const NotesContext = createContext([]);

const getMockData = () => {
    const note1 = new Note();
    note1.id = 1;
    note1.title = "First Note";
    note1.body = "Note text";

    const note2 = new Note();
    note1.id = 2;
     note1.title = "Seccond Note";
    note1.body = "Note text";

    const note3 = new Note();
    note1.id = 3;
    note1.title = "Third Note";
    note1.body = "Note text";

    return [note1, note2, note3];
}

const NotesContextProvider = ({ children } : { children : any }) => {
    const mockNotes : Note[] = getMockData();

    const [ notes, setNotes ] = useState(mockNotes);

    return (
        <NotesContext.Provider value={{
            notes,
            setNotes
        }}>
            { children }
        </NotesContext.Provider>
    )
}

export default NotesContextProvider;
