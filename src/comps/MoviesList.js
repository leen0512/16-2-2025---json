import { useState, useEffect } from "react";
import axios from "axios";


function MoviesList(){
    const [moviesList, setMoviesList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () =>{ 
        try{
            const response = await axios.get("http://localhost:5000/movies");
            setMoviesList(response.data);
        }
        catch(error){
            setError(error.message); 

        }
    };

    fetchMovies();
    
    }, []);

    if(error) return <p>{error}</p>

    return (
        <div>
            <h2>Movies List</h2>
            <ul>
            {moviesList.map((movie) => (
                    <li key={movie.id}>
                        <p><strong>Movie ID:</strong> {movie.id}</p>
                        <p><strong>Title:</strong> {movie.title}</p>
                        <p><strong>Year:</strong> {movie.year}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );


}

export default MoviesList;