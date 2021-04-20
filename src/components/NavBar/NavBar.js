import logo from '../../logo.svg'
import './NavBar.css';

const nombreTienda="Tienda de Daniel"
  const handleLogo = () => alert(`Bienvenido a ${nombreTienda}`)

export const NavBar=()=>{
    return(
        <nav className="navigation">
          <ul className="links">
            <li className="link">
              <a href="">Televisores</a>
              </li>
            <li className="link">
              <a href="">Smartphones</a>
              </li>
            <li className="link">
              <a href="">Tablets</a>
              </li>
            <li className="link">
              <a href="">Agendas    </a>
              </li>
          </ul>
        </nav>
    )

}