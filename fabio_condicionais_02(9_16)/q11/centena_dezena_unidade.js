import{input} from './io_utils.js'

function main(){
    const numero = Number(input('Digite aqui o número: '))
    const tamanho = centena_dezena_unidade(numero)
}
function centena_dezena_unidade(numero){
    if(numero<1000 && numero>=100){
        const centenas = Math.floor(numero / 100)
        let resto = numero % 100
        const dezenas = Math.floor(resto / 10)
        console.log(`A quantidade de centenas é ${centenas} e dezenas é ${dezenas} e a quantidade de unidades é ${resto % 10}.`)
    }else if(numero<100 && numero>=10){
        const dezenas = Math.floor(numero / 10)
        const unidades = numero % 10
        console.log(`A quantidade de dezenas é ${dezenas} e a quantidade de unidades é ${unidades}.`)
    }else if(numero<10){
        console.log(`A quantidade de unidades é ${numero}.`)

    }
}

main()