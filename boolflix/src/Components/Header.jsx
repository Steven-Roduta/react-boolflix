import { useState } from "react"
import Searchbar from "./SearchBar"



export default function Header(){

    return (


        <>
        <header>
        <h1>BOOLFLIX</h1>
            <Searchbar/>

            <div className="logo"></div>
        <div className="list">
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">My List</a>
                    </li>
                    <li>
                        <a href="#">Browse</a>
                    </li>
                    <li>
                    <a href="#">Account</a>
                    </li>
                </ul>
            </nav>
        </div>

        </header>

        </>
    )
}