import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import List from './Pages/List';
import Main from './Pages/Main';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Service from './Pages/Service';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/list' element={<List />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/service' element={<Service />} />
    </Routes>
  </BrowserRouter>
)



