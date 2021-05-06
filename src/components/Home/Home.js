import './Home.css';
import {Link} from 'react-router-dom'
import { useEffect,useState } from 'react'

export const Home = (props) => {
    const [miTrago,setMiTrago]=useState([])
    useEffect(()=>{

     },[miTrago])
    return(
        <div className="Home">
            <h1>Bienvenidos a mi Bar</h1> 
            <h3>De qué te trago te gustan los cocktails?</h3>
            <input type="text" className="formControl" placeholder="" value={miTrago} onChange={(e) => setMiTrago(e.target.value)}/>
            <div className="bloqueBoton">
            <Link to={`/products/${miTrago}`} className="myButton">Qué hay?</Link> 
            </div>
            

        </div>
    )
}