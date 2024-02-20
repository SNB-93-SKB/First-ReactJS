import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewProduit from './components/NewProduit';
import Produits from './components/Produits';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  //créer un system de routage
  const[currentRoute,setcurrentRoute]= useState()

  useEffect(()=>{
    const path=window.location.pathname.toLocaleLowerCase();
    setcurrentRoute(path.slice(1,path.length));
  },[]);
  return(
<BrowserRouter>
<nav className='m-1 p-1 border border-info'>
<ul className="nav nav-pills">
<li>
<Link onClick={()=>setcurrentRoute("home")}
className={currentRoute == "home"?
'btn btn-info ms-1'
:'btn btn-outline-info ms-1'} to={'/home'}>Home</Link>
</li>
<li>
<Link onClick={()=>setcurrentRoute("produits")}
className={currentRoute == "produits"?
'btn btn-info ms-1'
:'btn btn-outline-info ms-1'} to={'/produits'}>Produits</Link>
</li>
<li>
<Link onClick={()=>setcurrentRoute("newProduit")}
className={currentRoute == "newProduit"
?'btn btn-info ms-1'
:'btn btn-outline-info ms-1'} to={'/newProduit'}>NewProduit</Link>
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
