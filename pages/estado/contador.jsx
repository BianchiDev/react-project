import { useState } from "react"

export default function contador() {
    const [numero, setNumero] = useState(0)
   
    const inc = () => setNumero(numero+1)
    const dec = () =>  setNumero(numero - 1)
    
    
   /*  function inc(){
        setNumero(numero+1)
    }
   
    function dec(){
        setNumero(numero - 1)
    }
     Uma possibilidade 
     */
    const stilo = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
    
    return (
        <div style={stilo}>
            <h1>Contador</h1>
            <div>VAlor: {numero}</div>
            <span>
            <button onClick={dec}>-</button>
                <button onClick={inc}>+</button>
            </span>
        </div>
    )
}