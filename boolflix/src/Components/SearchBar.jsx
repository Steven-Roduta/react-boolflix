import { useState } from "react"
import { useDataContext } from "../Context/DataContext"
import axios from "axios"


export default function SearchBar() {

    const [search, setSearch] = useState("")
    const {setMovies} = useDataContext()

    const handleSearch = (e) => {
        e.preventDefault();

        axios.get("https://api.themoviedb.org/3/search/movie" , {
            params: {
                api_key:"5f5f5a9ee5074979e34ae669af35bcae",
                language:"it-IT",
                query: search,
            }
        }).then((res) => setMovies (res.data.results))
    } 

    return (

        <div className="search-container">
           
            <form onSubmit= {handleSearch}>
                <input
                 type="text"
                 placeholder="Search.."
                 name="search"
                 value={search} 
                 onChange= {(e) => setSearch(e.target.value)} />

                <button type="submit">Send</button>
            </form>
        </div>
            
    )

}