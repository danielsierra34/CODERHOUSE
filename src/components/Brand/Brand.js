import logo from '../../logo.svg'
import './Brand.css';

const nombreTienda="Tienda de Danield"
const handleLogo = () => alert(`Bienvenido a ${nombreTienda}`)

export const Brand=()=>{
    return(
      <div className="Brand">
        <img src={logo} className="logo" alt={nombreTienda}/>   
        <p className="nombreTienda" onClick={handleLogo}>{nombreTienda}</p>
      </div>
    )  

} 