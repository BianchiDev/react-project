import { useState } from "react"

 export default function formulario(){
    const [valor, setValor] = useState("inicial")
    const stilo = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50vh",
    }

    function alterarInput(){
        setValor(valor + "!")
    }
    return(
        <div style={stilo}>
            <input type="text" value={valor} 
            onChange={e => setValor(e.target.value)}
            />
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
 }