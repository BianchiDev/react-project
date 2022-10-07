function generateListe(final = 10) {
    const lista = []
    for(let i = 1; i <= final; i++){
         lista.push(<span>{i}</span>)   
    }
    return lista
}

export default function lista() {
    return (
        <div>
            <div>
                {generateListe(10)}
                </div>
                
                <div>
                {generateListe(20)}
                </div>

                <div>
                {generateListe(30)}
            </div>
        </div>
    )
}