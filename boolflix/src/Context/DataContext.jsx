import { createContext, useContext, useState } from "react";

// Creazione Contesto
const Datacontext = createContext()

//Trasmissione dei dati da condividere
 function DataProvider({children}) {

    const [movies, setMovies] = useState([])

    return (
        <Datacontext.Provider value={{movies, setMovies}}>
        {children}
        </Datacontext.Provider>
    );
 }

//Recupero dei dati
 function useDataContext() {
    const context = useContext(Datacontext);
    return context;
}

//Esportazione del contesto
 export { DataProvider, useDataContext};