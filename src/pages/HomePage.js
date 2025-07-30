import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
        <p><Link to="/beers">All beers</Link></p>
        <p><Link to="/random-beer">Random beer</Link></p>
        <p><Link to="/new-beer">New beer</Link></p>

    </div>
  );
}

export default HomePage;
