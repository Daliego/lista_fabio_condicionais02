import{input} from './io_utils.js'

function main(){
    const nota = input('Digite aqui as notas com um espaço de distância: ')
    const notas = nota.split(' ').map(Number)
    const media = medias(notas[0], notas[1])
}
function medias(nota1, nota2){
    const medias = (nota1 + nota2)/2
    if(medias >= 7 && medias != 10){
        console.log('Aprovado')
    }else if(medias < 7){
        console.log('Reprovado')
    }else if(medias === 10){
        console.log('Aprovado com distinção')
    }
}
main()