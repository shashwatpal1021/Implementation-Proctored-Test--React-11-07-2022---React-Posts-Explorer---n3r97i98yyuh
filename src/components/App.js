import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Index}  from '../Pages/Index'; 
import '../styles/App.css';

import { Post } from '../Pages/Post';

const App = () => {
  return (
    <BrowserRouter>
      <Index/>
    </BrowserRouter>
  )
}


export default App;
