import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function OneBeer() {
    const [beer, setBeer] = useState({});

    let params = useParams();
    const beerId = params.id;

    useEffect(()=>{
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
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

export default OneBeer;
