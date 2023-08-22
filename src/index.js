import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Education from './Education';
import Skils from './Skils';
import Experiance from './Experiance';
import Contact from './Contact';
import Project from './Project';
import Error from './Error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    {
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>

      <Route path='About' element={<About/>}/>


      <Route path='Education' element={<Education/>}/>
      <Route path='Skils' element={<Skils/>}/>
      <Route path='Experiance' element={<Experiance/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Project' element={<Project/>}/>
      <Route path='/' element={<Error/>}/>
      </Route>

    



    </Routes>
    </BrowserRouter>
    }
  </React.StrictMode>
);


