import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeer() {
    const [beer, setBeer] = useState({});

    useEffect(()=>{
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response)=>{
                console.log(response.data)
                setBeer(response.data);
            })
    }
    ,[]);

    return <div>
                <img src={beer.image_url} alt="beer" width="300px"></img>
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
                <p></p>
         </div>
}

export default RandomBeer;
