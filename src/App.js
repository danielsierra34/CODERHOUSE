import './App.css';
import {Header} from './components/Header/Header'
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Keypress} from './components/Keypress/Keypress'
import { useState } from 'react'

function App() { 
    
    const [detalle,setDetalle] = useState([])
    const [hidden,setHidden] = useState([])
    const bajarDetalle = (p) =>{
        console.log("bajo a App")
        console.log(p)  
        setDetalle(p)
    }

  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <div className="ItemList">
      <ItemListContainer bajarDetalle={bajarDetalle}/>
      <ItemDetailContainer detalle={detalle}/>
      </div>
      <Keypress/>
       
    </div>
  );
}

export default App;
