import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Movie_list from './components/Movie/Movie';
import Tv from './components/Movie/Tv';
import Celebrity from './components/Movie/Celebrity';
import MovieDetail from './components/Movie/MovieDetail';
import Home from './components/Movie/Home';

function App() {

  const [loginstate, setloginstate] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login loginstate={setloginstate}/>}/>
          <Route path='/movie' element={<Movie_list/>}/>
          <Route path='/tv' element={loginstate ? <Tv/> : <Login loginstate = {setloginstate}/>}/>
          <Route path='/person' element={loginstate ? <Celebrity/> : <Login loginstate = {setloginstate}/>}/>
          <Route path='/moviedetail/:title' element={<MovieDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
