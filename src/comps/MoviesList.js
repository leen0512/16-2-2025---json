import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function MoviesList(){
    const [moviesList, setMoviesList] = useState([]);
    const GetMovies =  async() => {
        const response = await axios.get("http://localhost:5000/movies");
        return response.data;
    };
    
    const {data, error, isLoading} = useQuery({
        queryKey: ['movies'],
        queryFn: GetMovies,
        staleTime: 5000,
    });

    if(isLoading) return <p>Loading Data... </p>
    if(error) return <p>{error.message}</p>

    // const [error, setError] = useState(null);
    // useEffect(() => {
    //     const fetchMovies = async () =>{ 
    //     try{
    //         const response = await axios.get("http://localhost:5000/movies");
    //         setMoviesList(response.data);
    //     }
    //     catch(error){
    //         setError(error.message); 

    //     }
    // };

    // fetchMovies();
    
    // }, []);
    // if(error) return <p>{error}</p>

    return (
        <div className="movies-container">
    <h3 className="movies-title" style={{color:"rgb(234, 202, 234)"}}>Movies List</h3>

    <ul className="movies-list">
        {data.map((movie) => (
            <li key={movie.id} className="movie-card">
                <p className="movie-id">Movie ID: {movie.id}</p>

                <img src={movie.image} alt={movie.title} className="movie-image" />

                <p className="movie-title">{movie.title}</p>

                <p className="movie-year">Year: {movie.year}</p>
            </li>
        ))}
    </ul>
</div>);



}

export default MoviesList;