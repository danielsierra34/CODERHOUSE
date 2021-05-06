import './App.css';
import {Header} from './components/Header/Header'
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Footer} from './components/Footer/Footer'
import {Home} from './components/Home/Home'
import {Credits} from './components/Credits/Credits'
import {Keypress} from './components/Keypress/Keypress'
import { useState } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


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
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/products">
            <ItemListContainer bajarDetalle={bajarDetalle}/>
          </Route>
          <Route path="/detail/:drink">
            <ItemDetailContainer detalle={detalle}/>  
          </Route>
          <Route path="/credits">
            <Credits/> 
          </Route>
        </Switch>
        <Footer />   
      </BrowserRouter>       
    </div>
  );
}


/*<Header/>      
      <div className="ItemList">
      
      
      </div>
      <Keypress/>*/

export default App;
