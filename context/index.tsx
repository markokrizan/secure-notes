import React, { createContext } from 'react';

import NotesContext from './NotesContext';

const CombinedContextProvider = ({ children } : { children : any }) => {
    return (
       <NotesContext>

       </NotesContext>
    )
}

export default CombinedContextProvider;
