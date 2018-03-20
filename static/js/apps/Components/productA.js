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
      const divContainer = document.createElement('div');
      divContainer.className='divContainer'
      const image = document.createElement('img');
      const imageLink = producto.imageURL;
      const ContainerCart = document.querySelector('.ContainerCart');
      image.setAttribute('src', imageLink)
      divContainer.appendChild(image)
      divContainer.appendChild(document.createElement('h3')).appendChild(document.createTextNode(producto.name))
      divContainer.appendChild(document.createElement('h3')).appendChild(document.createTextNode(producto.price))

      ContainerCart.appendChild(divContainer)
      
      }}>Add to Cart
    </button>
  </div>
  )
  )
}

    
  




export default Product;