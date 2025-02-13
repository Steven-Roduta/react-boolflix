import { useState } from "react"
import { useDataContext } from "../Context/DataContext"

export default function Main() {

    const { movies } = useDataContext()

    return (
        <>
            <main className="cotainer">

                <div className="ora"></div>

                <h2>ONLY ON BOOLFLIX</h2>
                <p>Boolflix è una piattaforma di streaming che offre una vasta gamma di film,
                   serie TV, documentari e programmi originali.
                   Gli utenti possono guardare contenuti on-demand,
                   in qualsiasi momento e su una varietà di dispositivi,
                   come smart TV, computer,
                   tablet e smartphone.
            
                </p>
                <div className="list">
                    <nav>
                        <ul>
                            {movies.map(movie => (
                                <li key={movie.id}> 
                                    
                                    <img className="poster" 
                                        //creo un url per prendere l'immagine di ogni serie
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                        alt={movie.title} 
                                    />
        
                                       {movie.title}

                                    <img className="flag"

                                //tramite l'url prendo tutte le serie con la lingua in inglese
                                        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                                            movie.original_language === "en"
                                                ? "GB"
                                                : movie.original_language.toUpperCase()
                                        }.svg`}
                                        alt={movie.original_language}
                                    />
                                </li>
                            ))}
                        </ul>
                    </nav>    
                </div>
            </main>
        </>
    )
}
