const Film = ({title, release, url}) => {
    
    return (
        <>
            <li className="ListItem">
                <a href={url} className="FilmLink">
                    {title} ({release}) 
                </a>
            </li> 
        </>
    );
}

export default Film;