import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Hebergement from './Pages/Hebergement';
import Home from './Pages/Home';
import Location from './Pages/Location';
import Planning from './Pages/Planning';
import Quiz from './Pages/Quiz';
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/planning' element= {<Planning/>}/>
        <Route path='/location' element= {<Location/>}/>
        <Route path='/hebergement' element= {<Hebergement/>}/>
        <Route path='/quiz' element= {<Quiz/>}/>
        <Route path='/contact' element= {<Contact/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;