import{input} from './io_utils.js'

function main(){
    const preços = input('Digite aqui os preços dos profutos com um espaço de distância: ')
    const preço = preços.split(' ').map(Number)
    const o_menor = menor_preço(preço[0], preço[1], preço[2])
}
function menor_preço(preço1, preço2, preço3){
    if(preço1 < (preço2 && preço3)){
        console.log(`${preço1} é o mais barato`)
    }else if(preço2 < (preço1 && preço3)){
        console.log(`${preço2} é o mais barato`)
    }else if(preço3 < (preço1 && preço2)){
        console.log(`${preço3} é o mais barato`)
    }
}
main()