import { faCheckCircle, faCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default  function Produits() {
    const[produits, setProduits]= useState([
        {id:1, name:'Orange', 'prix':250, checked:false},
        {id:2, name:'Mangue', prix:100, checked:true},
        {id:3, name:"Tomate", prix:200, checked:true},
        {id:4, name:'Salade',prix:500, checked:false},
        {id:5, name:'crevette', prix:5000, checked:true},
        {id:6, name:'poison', prix:1000, checked:false},
        {id:7, name:'poivrons', prix:500, checked:true},
        {id:8,name:'gommebo',prix:100,checked:true},
    ]);
    const handleDeleteProduit=(produit)=>{
        const NewProduits=produits.filter(p=>p.id!=produit.id);
        setProduits(NewProduits);
    }
    
    const handleCheckProduit= (produit)=>{
        const NewProduits=produits.map(p=>{
            if(p.id==produit.id){
                p.checked=!p.checked;
            }
            return p;
        })
        setProduits(NewProduits);
    }
  return (
    <div className='p-1 m-1'>
    <div className='row'>
    <div className='col-md-6'>
    <div className='card'>
        <div className='card-body'>
        <table className='table'> 
        <thead>
        <tr>
        <th>ID</th><th>Name</th><th>Prix</th><th>Checked</th>
        </tr>
        </thead>
        <tbody>
            {produits.map(produit=>(
             <tr key={produit.id}>
                <td>{produit.id}</td>
                <td>{produit.name}</td>
                <td>{produit.prix}</td>
                <td>
                <button onClick={()=>handleCheckProduit(produit)} 
                className='btn btn-outline-sucess'>
                <FontAwesomeIcon  icon={produit.checked?faCheckCircle:faCircle}>

                </FontAwesomeIcon>
                    </button>  
                </td>

                <td>
                <button onClick={()=>handleDeleteProduit(produit)} 
                className='btn btn-danger'>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>  
                </td>
             </tr>   
            )
                )}
        </tbody>
        </table>
        </div>
    </div>
    </div>
    </div>

    </div>
  )
}

