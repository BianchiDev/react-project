import { Component } from "react";
import Contador from "../../components/Contador";

export default class ContadorPag extends Component {


    render() {
        return (<>
            <div>
                <Contador valorInicial={100} passoInicial={37}/>
            </div>
        </>
        )
    }
}