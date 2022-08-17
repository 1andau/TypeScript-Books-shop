import React from 'react';
import Home from './Main/Home';
import { Routes, Route } from "react-router-dom"
import Details from './Main/Details';
import Cart from './components/cart/Cart';
const App = () => {
  
  return (
<div className="wrapper">
  <Routes>
  <Route  path="*" element={<Home/>}></Route>
  <Route path='/Details/:id' element={<Details/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  </Routes>

</div>

  );
};

export default App;







