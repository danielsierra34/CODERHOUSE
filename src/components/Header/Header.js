import logo from '../../logo.svg'
import './Header.css';

const nombreTienda="Tienda de Daniel"
  const handleLogo = () => alert(`Bienvenido a ${nombreTienda}`)

export const Header=()=>{
    return(
        <header className="topbar">
        <img src={logo} className="logo" alt={nombreTienda}/>   
        <p className="nombreTienda" onClick={handleLogo}>{nombreTienda}</p>
        
      </header>
    )

}