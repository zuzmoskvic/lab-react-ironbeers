
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import OneBeer from './pages/OneBeer';
import RandomBeer from './pages/RandomBeer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element=<HomePage />/>
        <Route path='/beers' element=<AllBeers />/>
        <Route path='/beers/:id' element=<OneBeer />/>
        <Route path='/random' element=<RandomBeer />/>
        <Route path='/new' element=<HomePage />/>
        {/* <Route path='/search?q={query}' element=<HomePage />>Home</Route> */}
      </Routes>
    </div>
  );
}

export default App;
