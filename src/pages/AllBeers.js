import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeers() {
    const [beers, setBeers] = useState([]);

    useEffect(()=>{
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response)=>{
                setBeers(response.data);
            })
    }
    ,[]);

    return <div>
        {beers.map((beer)=>{
            return (<div>
                        <img src={beer.image_url} alt="beer" width="300px"></img>
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`}>More details</Link>
                        <p></p>
                    </div>)
            })
        }
         </div>
    
}

export default AllBeers;
