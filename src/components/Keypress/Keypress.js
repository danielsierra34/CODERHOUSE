import { useEffect,useState } from 'react'
export const Keypress = (props) => {

    const [input,setInput]= useState([])

    const handleKeyPress = (e) => {
        const vowels=['a','e','i','o','u']        
        if(vowels.includes(e.key)){
            alert("esto es una vocal")
            e.preventDefault()
            return
        }
    }

    const handleOnChange = (e) => {
        setInput(e.target.value)
    }
    
   

    return(
    <div className="Keypress">
        <input type="text" onKeyPress={handleKeyPress} onChange={handleOnChange}/>   
        <p>{input}</p>    
    </div>
    )
}