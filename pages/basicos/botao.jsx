function acao1() {
    console.log("ação01")
}

export default function botao() {
    function acao2() {
        console.log("açao2")
    }

    function acao5(e){
        console.log(e)
    }

    return (
        <div>
            <button onClick={acao1}>Click #01</button>
            <button onClick={acao2}>Click #02</button>
            <button onClick={function(){
                console.log("Ação3")
            }}>Click #03</button>
            <button onClick={() => console.log("Ação4")}>
                Click #04
            </button>
            <button onClick={acao5}>
                Click #05
            </button>
            <button onClick={e => acao5(e.altKey)}>
                Click #05
            </button>
            <div>
                <input type="text" onChange={e => console.log(e.target.value)}/>
            </div>
        </div>
    )
}