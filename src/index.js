import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';
import Inicio from './routes/Inicio';
import E404 from './routes/E404';
import Post from './routes/Post';

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={ <Inicio/> }/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='blog/:id' element={<Post/>}/>
          <Route path='contacto' element={<Contacto/>}/>

          <Route path='*' element={<E404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

