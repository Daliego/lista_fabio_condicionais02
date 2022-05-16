import{input} from './io_utils.js'

function main(){
    const letra = input('Digite uma letra: ')
    const ordem_da_palavra = consoante_vogal(letra)
    
}
function consoante_vogal(letra){
        if(vogal(letra)){
           return console.log(`A letra ${letra} é uma vogal`)
        }else{
            return console.log(`A letra ${letra} é uma consoante`)
        }
}
function vogal(letra){
    for(let letter of letra){
        if(letter === 'a' || 'e' || 'i' || 'o' || 'u'){
            return true
        }
    }
    return false
}
main()