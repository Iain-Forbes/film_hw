import {useState} from "react"
import FilmList from "../components/FilmList"

const FilmBox = () => {
   
    const initialState = [
        {
            id: 1,
            title: "Wonder Woman 1984",
            release: "Dec 2020",
            url: "https://www.imdb.com/title/tt7126948/?ref_=nv_sr_srsg_0"
        },
        {
            id: 2,
            title: "The Haunting of Alice Bowles ",
            release: "Dec 2020",
            url: "https://www.imdb.com/title/tt13342216/?ref_=rlm" 
        },
        {
            id: 3,
            title: "Chaos Walking ",
            release: "January 2021",
            url: "https://www.imdb.com/title/tt2076822/?ref_=rlm" 
        },

        {
            id: 4,
            title: "Candyman",
            release: "August 2021",
            url: "https://www.imdb.com/title/tt9347730/?ref_=rlm" 
        },
    ];

    const [films, setFilms] = useState(initialState);
        return (
            <body>
            <div className="FilmBox">
                <FilmList films={films} />
            </div>
            </body>
        );
}

export default FilmBox;