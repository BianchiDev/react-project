import { useState } from "react"
import NumeroDisplay from "../../components/indireta1/NumeroDisplay"
import { mega } from "../../function/mega"

export default function megassena(){

    const [ qtde , setQtde] = useState(6)
    const [ numeros , setNumeros] = useState(mega(qtde))



    function renderNumeros(){
        return numeros.map(
            numero => <NumeroDisplay key= {numero} numero={numero}/>
        )
    }



    return(
        <div style={{display: "flex",
       /*  flexWrap: "wrap", */
        flexDirection: "column",
        alignItems : "center"
        }}>
            <h1>Mega Sena</h1>
            <div 
            style={{display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
        }}>
                {renderNumeros()}
            </div>
            <div>
                <input type={"number"} min={6} max={20} value={qtde}
                onChange={ev => setQtde(ev.target.value)}/>
                <button onClick={() => setNumeros(mega(qtde))}>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}