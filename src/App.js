import React from 'react';

import './styles.css'
import { NavBar } from  './components/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';

import { ItemListContainer } from './components/ItemListContainer';
import  Bebidas from './assets/imagenes/Bebidas.jpg'
import { ItemCount } from './components/ItemCount';





function App() {


  return (
    <div className="mi-app">
      
        <NavBar/>

        <hr></hr>

        <div className="imagen">
          <img src={Bebidas} alt="Botellas de Bebebidas"/>

        </div>


        <ItemListContainer greeting="El Mercado De Las Bebida"/>
        <ItemCount stock="5"/>

        

       
       
    </div>
  );
}

export default App;
