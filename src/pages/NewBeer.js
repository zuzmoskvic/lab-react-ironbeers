import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState("");
    const [brewers_tips, setBrewers_tips] = useState("");
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();

        const body = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by};

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
            .then((response)=>{
                console.log(response.data);
                setName("");
                setTagline("");
                setDescription("");
                setFirst_brewed("");
                setBrewers_tips("");
                setAttenuation_level(0);
                setContributed_by("");
                
                navigate("/");
            })        
    }

    return <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input onChange={(e)=>{setName(e.target.value)}} type="text" name="name" value={name}/>

                <label>Tagline</label>
                <input onChange={(e)=>{setTagline(e.target.value)}} type="text" name="tagline" value={tagline}/>


                <label>Description</label>
                <input onChange={(e)=>{setDescription(e.target.value)}} type="text" name="description" value={description}/>

                <label>First brewed</label>
                <input onChange={(e)=>{setFirst_brewed(e.target.value)}} type="text" name="first_brewed" value={first_brewed}/>

                <label>Brewers tips</label>
                <input onChange={(e)=>{setBrewers_tips(e.target.value)}} type="text" name="brewers_tips" value={brewers_tips}/>

                <label>Attenuation level</label>
                <input onChange={(e)=>{setAttenuation_level(e.target.value)}} type="text" name="attenuation_level" value={attenuation_level}/>

                <label>Contributed by</label>
                <input onChange={(e)=>{setContributed_by(e.target.value)}} type="text" name="contributed_by" value={contributed_by}/>
                
                <button type="submit">Submit</button>
            </form>
         </div>
    
}

export default NewBeer;
