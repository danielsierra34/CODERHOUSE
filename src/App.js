import './App.css';
import {Header} from './components/Header/Header'
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

function App() {  
  const items=[
    {
        item:"Lavadora",
        price:5000,
        brand:"Samsung",
        inventory:4
    },{
        item:"Lavadora",
        price:5500,
        brand:"LG",
        inventory:3
    },{
        item:"Secadora",
        price:6000,
        brand:"Samsung",
        inventory:1
    },{
        item:"Secadora",
        price:6500,
        brand:"LG",
        inventory:2
    },{
        item:"Lava Platos",
        price:7000,
        brand:"Samsung",
        inventory:2
    },{
        item:"Lava Platos",
        price:7500,
        brand:"LG",
        inventory:3
    },{
        item:"Aire Acondicionado",
        price:800,
        brand:"Samsung",
        inventory:4
    },{
        item:"Aire Acondicionado",
        price:8500,
        brand:"LG",
        inventory:2
    } 
]
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <div className="ItemList">
      <ItemListContainer products={items}/>
      </div>
       
    </div>
  );
}

export default App;
