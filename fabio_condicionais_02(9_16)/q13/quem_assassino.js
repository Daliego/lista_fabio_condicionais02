import{input} from './io_utils.js'

function main(){
    const perguntas = questionario()

}
function questionario(){
    console.log('Responda sim ou não para as perguntas')
    let count = 0
    const pergunta1 = input('Telefonou para a vítima? ')
    if(pergunta1 === 'sim'){
        count++
    }
    const pergunta2 = input('Esteve no local do crime? ')
    if(pergunta2 === 'sim'){
        count++
    }
    const pergunta3 = input('Mora perto da vitíma? ')
    if(pergunta3 === 'sim'){
        count++
    }
    const pergunta4 = input('Devia para a vítima? ')
    if(pergunta4 === 'sim'){
        count++
    }
    const pergunta5 = input('Já trabalhou com a vítima? ')
    if(pergunta5 === 'sim'){
        count++
    }
    contagem_count(count)
    
}
function contagem_count(valor){
    if (valor === 2){
        console.log('A pessoa é suspeita')
    }else if (valor === 4 || valor === 3){
        console.log('A pessoa é cúmplice')
    }else if (valor === 5){
        console.log('A pessoa é o assassino')
    }else if (valor === 1 || valor === 0){
        console.log('A pessoa é inocente')
    }
}
main()