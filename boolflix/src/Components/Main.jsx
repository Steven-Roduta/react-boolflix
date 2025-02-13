import { useState } from "react"
import { useDataContext } from "../Context/DataContext"

function Stars({vote}) {
    const rating = Math.round(vote / 2) // trasformo il voto da 1 a 5

    const stars = []
    for(let i = 1; i <= 5; i++) {
        if(i <= rating) {
            stars.push(<i><img className="star" src="./img/starfull.png" alt="star" /></i>) // Stella piena
        } else {
            stars.push(<i><img className="star" src="./img/star.png" alt="star" /></i>) // Stella vuota
        }
    }
    return stars
}

export default function Main() {

    const { movies, series } = useDataContext()

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

                <div className="list-second">
                   
                <h3>MOVIES</h3>
                    <nav>
                   
                        <ul>
                            {movies.map(movie => (
                                <li key={movie.id}> 
                                    
                                    <img className="poster" 
                                        //creo un url per prendere l'immagine di ogni serie
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                        alt={movie.title} 
                                    />

                                    <div className="titolo">
                                    <ul>
                                        <li>Titlo: {movie.title}</li>
                                    
                                    </ul>
                                    </div>

                                    <div className="star">
                                        <Stars vote={movie.vote_average} />
                                    </div>
                                    

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

                <div className="list-third">


                    <nav>
                    <h3>SERIES</h3>
                    <ul>
                    
                        {series?.length > 0 ? (
                         series.map(serie => (
                            <li key={'serie-'+serie.id}> 
                                <img className="poster" 
                                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} 
                                alt={serie.name} 
                            />
                        <div className="titolo-third">
                            <ul>
                                <li>Titolo: {serie.name}</li>
                            
                            </ul>
                        </div>
                        <div className="star">
                            <Stars vote={serie.vote_average} />
                        </div>
                            <img className="flag"
                            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                            serie.original_language === "jp", "ko"
                            ? "JP"
                            : serie.original_language.toUpperCase()
                            }.svg`}
                            alt={serie.original_language}
                        />
                     </li>
                        ))
                        ) : (
                        <p>Caricamento serie...</p>  // Messaggio se l'array è vuoto
                    )}
                    </ul>                       
                </nav>    
                </div>
            </main>
        </>
    )
}
