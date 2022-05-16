import{input} from './io_utils.js'

function main(){
    const numero = Number(input('Digite aqui um número:'))
    const positivo_negativo = if_positivo(numero)
    
}

function if_positivo(numero){
    if(numero>0){
        return numero_positivo(numero)
    }else if(numero<0)
        return numero_negativo(numero)
    else{
        return numero_0(numero)
    }
}

function numero_positivo(numero){
        return console.log('Esse número é positivo')
}

function numero_negativo(numero){
    return console.log('Esse número é negativo')
}

function numero_0(numero){
    return console.log('Você digitou 0')
}
main()