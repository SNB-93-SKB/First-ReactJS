import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewProduit from './components/NewProduit';
import Produits from './components/Produits';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from 'react';

function App() {
  //créer un system de routage
  const[currentRoute,setcurrentRoute]= useState()
  return(
<BrowserRouter>
<nav className='m-1 p-1 border border-info'>
<ul className="nav nav-pills">
<li>
<Link onClick={()=>setcurrentRoute("Home")}
className={currentRoute == "Home"?'btn btn-info ms-1':'btn btn-outline-info ms-1'} to={'/Home'}>Home</Link>
</li>
<li>
<Link onClick={()=>setcurrentRoute("Produits")}
className={currentRoute == "Produits"?"btn btn-info ms-1":"btn btn-outline-info ms-1"} to={'/Produits'}>Produits</Link>
</li>
<li>
<Link onClick={()=>setcurrentRoute("NewProduit")}
className={currentRoute == "NewProduit"?'btn btn-info ms-1':'btn btn-outline-info ms-1'} to={'/NewProduit'}>NewProduit</Link>
</li>
</ul>
</nav>
<Routes>
<Route path='/Home' element={<Home />}></Route>
<Route path='/Produits' element={<Produits />}></Route>
<Route path='/NewProduit' element={<NewProduit />}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
