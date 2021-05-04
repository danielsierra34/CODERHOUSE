import './ItemDetail.css';
import { useEffect,useState } from 'react'
export const ItemDetail = (props) => {

  const [resultado,setResultado] = useState([])


  useEffect(()=>{
    console.log("llego a ItemDetail") 
    console.log(props.detalle)   
  },[props.detalle])





    return (    
        <div className="ItemDetail {hidden}">
          <h2>{props.detalle.strDrink}</h2>
          <table>
            <tr>
              <td>
                <div className="drinkImgn">
                  <img src={props.detalle.strDrinkThumb}/>
                </div>
              </td>
              <td>

              <p className="category"><b>Categoria:</b>{props.detalle.strCategory}</p>
          <p className="copa"><b>Copa:</b>{props.detalle.strGlass}</p>
          <p className="tipo"><b>Tipo:</b>{props.detalle.strAlcoholic}</p>
              </td>
            </tr>
          </table>
          
          <p className="instructions"><b>Instrucciones:</b>{props.detalle.strInstructions}</p>
          


                
        </div>
      )    
      
}
