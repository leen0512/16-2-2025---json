import { useState, useEffect } from "react";
import axios from "axios";


function AddMovie(){
    const [newMovie, setNewMovie] = useState({id:"" ,title:"", year:null, image:""});
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");


    function handleChange(event){
        setNewMovie({... newMovie, [event.target.name]:event.target.value});
    }


    async function addNewMovie(){
        if (!newMovie.title || !newMovie.year || !newMovie.image) {
            setMessage("You must enter data! ❌");
            return;
        }

        try{
            const response = await axios.post("http://localhost:5000/movies", newMovie);
            setMessage("Movie added successfully ✅");
            setNewMovie({ id:"",title: "", year: "", image:"" }); 
        }
        catch(error){
            setError(error);
        }

        
    }



    return (<div>
        <h3 style={{color:"rgb(149, 93, 145)",fontFamily:"serif"}}>Add New Movie Details</h3>
        <input style={{margin:"3px"}} value={newMovie.id} name="id" type="number" onChange={handleChange} placeholder="Enter movie id"></input>
        <input style={{margin:"3px"}} value={newMovie.title} name="title" type="text" onChange={handleChange} placeholder="Enter movie title"></input>
        <input style={{margin:"3px"}} value={newMovie.year} name="year" type="number" onChange={handleChange} placeholder="Enter movie year"></input>
        <input style={{margin:"3px"}} value={newMovie.image} name="image"  onChange={handleChange} placeholder="Enter movie image url"></input>
        <br></br>
        <button style={{backgroundColor: "rgb(164, 135, 162)", color: "white", padding: "6px 6px", border: "none", borderRadius: "5px", marginTop:"10px", fontFamily:"Garamond"}}onClick={addNewMovie}>Click Here to Add Movie</button>
        <p>{message}</p>
    </div>)
}

export default AddMovie;