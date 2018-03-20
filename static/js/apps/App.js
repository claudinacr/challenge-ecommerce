import React from 'react';
import Product from './Components/productA';
import Title from './Components/ContainerTitle';
import Total from './Components/Total';
import ContainerCart from './Components/ContainerCart';



const App =()=>{
      return(
        <div className='App'>
          <Total></Total>
          <ContainerCart></ContainerCart>
        <Title></Title>
        <div className='Container'>
          <Product>
          </Product>
          </div>
        </div>
    )
  }

export default App;