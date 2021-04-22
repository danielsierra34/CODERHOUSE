import './App.css';
import {Header} from './components/Header/Header'
import {NavBar} from './components/NavBar/NavBar'
import {ItemList} from './components/ItemList/ItemList'

function App() {  
  const items=[
    {
        item:"Lavadora",
        price:5000,
        brand:"Samsung"
    },{
        item:"Lavadora",
        price:5500,
        brand:"LG"
    },{
        item:"Secadora",
        price:6000,
        brand:"Samsung"
    },{
        item:"Secadora",
        price:6500,
        brand:"LG"
    },{
        item:"Lava Platos",
        price:7000,
        brand:"Samsung"
    },{
        item:"Lava Platos",
        price:7500,
        brand:"LG"
    },{
        item:"Aire Acondicionado",
        price:800,
        brand:"Samsung"
    },{
        item:"Aire Acondicionado",
        price:8500,
        brand:"LG"
    } 
]
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <div className="ItemList">
      <ItemList products={items}/>
      </div>
       
    </div>
  );
}

export default App;
