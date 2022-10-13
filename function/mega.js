 export function mega(quantidade = 6, numeros = []){
   /*  console.log(numeros) */
    let qtde = +quantidade
    /* Convertendo a estring (qtde) em numérico (+qtde) */
    if(qtde < 6 && qtde > 60){
        throw "Quantidade inválida!"
    }
    /* Caso gere números fora desse intervalo, será lançado a exeção "Quantidade inválida!" */
    
    if(numeros.length === qtde){
        return numeros.sort((n1, n2) => n1 - n2)
        /* A função sort() ordena os números dentro do array */
    }

    const numeroAleatorio =  parseInt(Math.random() * 60) + 1
    /* É necessário acressentar um por que o contador gera de ( 0 até 59) */
    if(!numeros.includes(numeroAleatorio)){
        return mega(qtde,[...numeros, numeroAleatorio])
    } else {
        return mega(qtde, numeros)
    }
}
