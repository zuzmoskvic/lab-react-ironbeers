
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element=<HomePage />>Home</Route>
        <Route path='/beers' element=<AllBeers />>Home</Route>
        <Route path='/:id' element=<HomePage />>Home</Route>
        <Route path='/random' element=<HomePage />>Home</Route>
        <Route path='/new' element=<HomePage />>Home</Route>
        {/* <Route path='/search?q={query}' element=<HomePage />>Home</Route> */}
      </Routes>
    </div>
  );
}

export default App;
