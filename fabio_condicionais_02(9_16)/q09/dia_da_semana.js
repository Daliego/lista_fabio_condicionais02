import{input} from './io_utils.js'

function main(){
    const number = Number(input('Digite um número aqui: '))
    if(minimo_maximo(number)){
        semanal(number)
    }
  //  const dia_da_semana = semanal(numero)

}
function minimo_maximo(number){
    if(number<=7 && number>=1){
        return true
    }else{
        console.log('Você digitou um número inválido')
        
    }
}
function semanal(numero){
    if(numero === 1){
        console.log('Domingo')

    }else if(numero === 2){
        console.log('Segunda')

    }else if(numero === 3){
        console.log('Terça')

    }else if(numero === 4){
        console.log('Quarta')

    }else if(numero === 5){
        console.log('Quinta')

    }else if(numero === 6){
        console.log('Sexta')

    }else if(numero === 7){
        console.log('Sábado')

    }else{
        //return semanal()
    }
}

main()