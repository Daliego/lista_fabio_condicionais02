import{input} from './io_utils.js'

function main(){
    const numero = Number(input('Digite aqui o número: '))
    const decimal = eh_decimal(numero)
}
function eh_decimal(numero){
    if (numero % 1 ===0){
        console.log(`O numero ${numero} é inteiro`)
    }else{
        console.log(`O numero ${numero} é decimal`)
    }
}

main()