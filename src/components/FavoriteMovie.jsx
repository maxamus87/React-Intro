import {useState} from "react"

function FavoriteMovie() {
    const [favoriteMovie, setFavoriteMovie] = useState(null)

    function saveFavorite(movie){
    localStorage.setItem("favoriteMovie", JSON.stringify(movie))
    setFavoriteMovie(movie)
    }

    function removeFavorite() {
    localStorage.removeItem("favoriteMovie")
    setFavoriteMovie(null)
    }

    return (
        <>
            <h1>Favorite Movie</h1>

            {favoriteMovie ? (
                <div>
                    <h2>{favoriteMovie.title}</h2>
                    <p>{favoriteMovie.overview}</p>
                    <button onClick={removeFavorite}>Remove Favorite</button>
                </div>
            ):(
                <p>No Favorite</p>
            )}

            <button onClick={()=>
            saveFavorite({
                title: "The Fifth Element",
                overview: "The best movie ever."
            })}>Save Favorite Movie</button>
        </>
    )
}

export default FavoriteMovie
