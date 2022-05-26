import{input} from './io_utils.js'

function main(){
    const nota1 = Number(input('Digite aqui a sua nota: '))
    const nota2 = Number(input('Digite aqui a sua nota: '))
    const media = letra_media(nota1, nota2)
}
function letra_media(nota1, nota2){
    const medias = eh_media(nota1, nota2)
    if (medias>=9 && medias<=10){
        console.log(`O aluno tirou ${nota1} e ${nota2}, a sua media foi ${medias}`)
        console.log(`O aluno foi Aprovado`)

    }else if (medias>=7.5 && medias<9){
        console.log(`O aluno tirou ${nota1} e ${nota2}, a sua media foi ${medias}`)
        console.log(`O aluno foi Aprovado`)

    }else if (medias>=6.0 && medias<7.5){
        console.log(`O aluno tirou ${nota1} e ${nota2}, a sua media foi ${medias}`)
        console.log(`O aluno foi Aprovado`)

    }else if (medias>=4.0 && medias<6){
        console.log(`O aluno tirou ${nota1} e ${nota2}, a sua media foi ${medias}`)
        console.log(`O aluno foi Reprovado`)

    }else if (medias>=0 && medias<4.0){
        console.log(`O aluno tirou ${nota1} e ${nota2}, a sua media foi ${medias}`)
        console.log(`O aluno foi Reprovado`)
        
    }
}
function eh_media(nota1, nota2){
    const a_media = (nota1+nota2)/2
}
main()