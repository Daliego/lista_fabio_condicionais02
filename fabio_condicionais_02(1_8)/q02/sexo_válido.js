import{input} from './io_utils.js'

function main(){
    const sexo = input('Digite aqui a primeira letra do sexo da pessoa:')
    const masculino_feminino = sexo_valido(sexo)
    
}
function sexo_valido(sexo){
    if(sexo === 'M'){
        return console.log('M-Masculino') 
    }else if(sexo === 'F'){
        return console.log('F-Feminino')
    }else{
        return sexo_invalido(sexo)
    }
}
function sexo_invalido(){
    return console.log('Sexo inválido')
}
main()