import logo from './logo.svg';
import './App.css';
import MoviesList from './comps/MoviesList';
import AddMovie from './comps/AddMovie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 style={{color:"rgb(234, 202, 234)", fontFamily:"serif"}}>Welcome To Disney Movies</h1>

      <BrowserRouter>
        <Routes>
          <Route path='list' element={<MoviesList/>}/>
          <Route path='add' element={<AddMovie/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
