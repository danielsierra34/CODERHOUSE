import './App.css';
import {Header} from './components/Header/Header'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Footer} from './components/Footer/Footer'
import {Home} from './components/Home/Home'
import {Credits} from './components/Credits/Credits'
import {Cart} from './components/Cart/Cart'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() { 

  return (      
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/products/:search">
            <ItemListContainer/>
          </Route>
          <Route path="/detail/:id">
            <ItemDetailContainer/>  
          </Route>
          <Route path="/credits">
            <Credits/> 
          </Route>
          <Route path="/cart">
            <Cart/> 
          </Route>
        </Switch>
        <Footer />   
      </BrowserRouter>       
    </div>
  );
}
export default App;
