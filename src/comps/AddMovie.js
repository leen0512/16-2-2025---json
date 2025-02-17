import { useState, useEffect } from "react";
import axios from "axios";


function AddMovie(){
    const [newMovie, setNewMovie] = useState({title:"", year:null, image:""});
    const [errorGet, setErrorGet] = useState(null);
    const [errorPost, setErrorPost] = useState(null);


    function handleChange(event){
        setNewMovie({... newMovie, [event.target.name]:event.target.value});
    }


    async function addNewMovie(){
        if (!newMovie.title.trim() || !newMovie.year || !newMovie.image.trim()) {
            alert("You must enter data! ❌");
            return;
        }



        try{
            const responseGet = await axios.get("http://localhost:5000/movies");
            const nextId = responseGet.data.length + 1;    
            const movieToAdd = {id:nextId, ...newMovie};

            try{
                const responsePost = await axios.post("http://localhost:5000/movies", movieToAdd);
                alert("Movie added successfully ✅");
                setNewMovie({ id:"",title: "", year: "", image:"" }); 
            }
            catch(error){
                setErrorPost(error);
                console.error("Error adding movies:", error);

            }
        }
        catch(error){
            setErrorGet(error);
            console.error("Error fetching movies:", error);

        }

        
    }



    return (
        <div className="movie-form-container">
          <h3 className="movie-form-title">Add New Movie Details</h3>
          <input className="movie-form-input" value={newMovie.title} name="title" type="text" onChange={handleChange} placeholder="Enter movie title" />
          <input className="movie-form-input" value={newMovie.year} name="year" type="number" onChange={handleChange} placeholder="Enter movie year" />
          <input className="movie-form-input" value={newMovie.image} name="image" onChange={handleChange} placeholder="Enter movie image url" />
          <br />
          <button className="movie-form-button" onClick={addNewMovie}>Click Here to Add Movie</button>
        </div>
      );
}      

export default AddMovie;