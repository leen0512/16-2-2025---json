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
            <h3 style={{color:"rgb(149, 93, 145)",fontFamily:"serif"}}>Movies List</h3>
            <ul style={{display:"flex", flexWrap:"wrap", gap:"10px"}}>
            {moviesList.map((movie) => (
                    <li style={{listStyleType: "none"}} key={movie.id}>
                        <p style={{color:"rgb(149, 93, 145)"}}><strong>Movie ID:</strong> {movie.id}</p>
                        <img src={movie.image} alt={movie.title} style={{ width: "150px", height:"200px", borderRadius: "10px" }}></img>
                        <p style={{color:"rgb(149, 93, 145)"}}><strong>Title:</strong> {movie.title}</p>
                        <p style={{color:"rgb(149, 93, 145)"}}><strong>Year:</strong> {movie.year}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );


}

export default MoviesList;