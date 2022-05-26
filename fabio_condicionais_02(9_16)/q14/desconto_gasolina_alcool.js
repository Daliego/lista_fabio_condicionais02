import{input} from './io_utils.js'

function main(){
    const gasolina_alcool = teste_g_a()
}
function teste_g_a(){
    let combustivel = input('Digite qual combustivel você vai usar: ')
    while (!(combustivel === 'G' || combustivel === 'A')){
        console.log('Você digitou uma letra inválida')
        combustivel = input('Digite qual combustivel você vai usar: ')
    }
    const quantidade = Number(input('Digite quantos litros você vai usar: '))
    if (combustivel === 'A'){
        if (quantidade <= 20){
            const desconto = quantidade * (3/100 * 1.90)
            const preço = (quantidade * 1.90) - (desconto)
            console.log(`O preço da gasolina é: ${preço}`)
        }else{
            const desconto = quantidade * (5/100 * 1.90)
            const preço = (quantidade * 1.90) - (desconto)
            console.log(`O preço da gasolina é: ${preço}`)
        }
    }else{
        if (quantidade <= 20){
            const desconto = quantidade * (4/100 *2.50)
            const preço = (quantidade *2.50) - (desconto)
            console.log(`O preço da gasolina é: ${preço}`)
        }else{
            const desconto = quantidade * (6/100 *2.50)
            const preço = (quantidade *2.50) - (desconto)
            console.log(`O preço da gasolina é: ${preço}`)
        }
    }
}

main()