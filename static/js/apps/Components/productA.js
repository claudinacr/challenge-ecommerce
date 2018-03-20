import React from 'react';
import Containerproduct from './Containerproduct';
import catalogo from './../../../../data/mock';
import ContainerCart from './ContainerCart';

//HACER UNA CONSTANTE QUE CONTENGA EL URL DE LA API
const Product = () =>{


  
return(
  catalogo.catalog.map((producto)=>
  <div className='productt' key={producto.id}>
    <img src={producto.imageURL}/>
    <h3>{producto.name}</h3>
    <h3>{producto.price}</h3>
    <button className='buttonItems' onClick={this.Search =()=>{
      const actual = document.querySelector('.TotalR').textContent
      document.querySelector('.TotalR').innerHTML='';
      document.querySelector('.TotalR').appendChild(document.createTextNode(parseInt(actual) + parseInt(producto.price)))
      }}>Add to Cart
    </button>
  </div>
  )
  )
}

    
  




export default Product;