import{input} from './io_utils.js'

function main(){
    const turno = input('Digite aqui o turno do aluno: ')
    const frase = turnos(turno)
}
function turnos(turno){
    if(turno === 'M'){
        console.log('Bom dia!')
    }else if(turno === 'V'){
        console.log('Boa tarde!')
    }else if(turno === 'N'){
        console.log('Boa noite!')
    }else{
        console.log('Valor inválido')
    }
}
main()