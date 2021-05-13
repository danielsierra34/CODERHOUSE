import logo from '../../logo.svg'
import {NavLink} from 'react-router-dom'
import './NavBar.css';


export const NavBar=()=>{
    return(
        <nav className="NavBar">
          <ul className="links">
            <li className="link">
              <NavLink exact to={`/`} activeClassName="seleccionado" className="normal"> Home</NavLink>
            </li>
            <li className="link">
              <NavLink to={`/products/ `} activeClassName="seleccionado" className="normal">Products</NavLink>
            </li>
            <li className="link">
              <NavLink to={`/detail/`} activeClassName="seleccionado" className="normal">Detail</NavLink>
            </li>
            <li className="link">
            <NavLink to={`/credits/`} activeClassName="seleccionado" className="normal">Credits</NavLink>
              </li>
              <li className="link">
            <NavLink to={`/cart/`} activeClassName="seleccionado" className="normal">Cart</NavLink>
              </li>
          </ul>
        </nav>
    )

}