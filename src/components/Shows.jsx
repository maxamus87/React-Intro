import {getAvailableShows} from "./lib/showsBusinessLogic"

function Shows () {

const availableShows = getAvailableShows() 

    return (
        <div>
            {availableShows.map((show, index) => (
            <div key={index}>
                <h2>{show.title}</h2>
                <p>Genre: {show.genre}</p>
                <p>Rating: {show.rating}</p>
            </div>
            ))}
        </div>
    )
}

export default Shows