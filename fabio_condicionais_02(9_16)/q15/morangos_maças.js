import{input} from './io_utils.js'

function main(){
    const morangos = Number(input('Digite a quantidade de morangos comprados em (kg): '))
    const maças = Number(input('Digite a quantidade de maças compradas em (kg): '))
    const preço = quantidade_de_produtos(morangos, maças)
}
function quantidade_de_produtos(morangos, maças){
    
    const preço1_morangos = 2.50 * morangos
    const preço2_morangos = 2.20 * morangos
    const preço1_maças = 1.80 * maças
    const preço2_maças = 1.50 * maças
    const total1 = preço1_morangos + preço1_maças
    const total2 = preço1_morangos + preço2_maças
    const qtd_kg = morangos + maças
    
    const total3 = preço2_morangos + preço1_maças
    const total4 = preço2_morangos + preço2_maças


    if((morangos > 0 && morangos <= 5) && (maças > 0 && maças <= 5) && (qtd_kg <= 8)){
        if ((total1 < 25.00)){
            console.log(`O preço total é ${(total1).toFixed(2)}`)
        }else{
            grande_qtd_compras(qtd_kg, total1, total2, total3, total4, morangos, maças)
        }
    }else if((morangos > 0 && morangos <= 5) && (maças > 5 && maças <= 8) && (qtd_kg <= 8)){
        if ((total2 < 25.00)){
            console.log(`O preço total é ${(total2).toFixed(2)}`)
        }else{
            grande_qtd_compras(qtd_kg, total1, total2, total3, total4, morangos, maças)
        }
    }else if((morangos > 5 && morangos <= 8) && (maças > 0 && maças <= 5) && (qtd_kg <= 8)){
        if((total3 < 25.00)){
            console.log(`O preço total é ${(total3).toFixed(2)}`)
        }else{
            grande_qtd_compras(qtd_kg, total1, total2, total3, total4, morangos, maças)
        }
    }else if((morangos > 5 && morangos <= 8) && (maças > 5 && maças <= 8) && (qtd_kg <= 8)){
        if ((total4 < 25.00)){
            console.log(`O preço total é ${(total4).toFixed(2)}`)
        }else{
            grande_qtd_compras(qtd_kg, total1, total2, total3, total4, morangos, maças)
        }
    }else if(grande_qtd_compras(qtd_kg, total1, total2, total3, total4, morangos, maças)){
    }
    
}
function grande_qtd_compras(qtd_kg, total1, total2, total3, total4, morangos, maças){
    if (qtd_kg > 8){
            if((morangos > 0 && morangos <= 5) && (maças > 0 && maças <= 5)){
                console.log(`O preço total é ${(total1 * 90/100).toFixed(2)}`)
            }else if((morangos > 0 && morangos <= 5) && (maças > 5 && maças <= 8)){
                console.log(`O preço total é ${(total2 * 90/100).toFixed(2)}`)
            }else if((morangos > 5 && morangos <= 8) && (maças > 0 && maças <= 5)){
                console.log(`O preço total é ${(total3 * 90/100).toFixed(2)}`)
            }else if((morangos > 5 && morangos <= 8) && (maças > 5 && maças <= 8)){
                console.log(`O preço total é ${(total4 * 90/100).toFixed(2)}`)
        }    
    }else if(total1 > 25.00){
        console.log(`O preço total é ${(total1 * 90/100).toFixed(2)}`)
    }else if(total2 > 25.00){
        console.log(`O preço total é ${(total2 * 90/100).toFixed(2)}`)
    }else if(total3 > 25.00){
        console.log(`O preço total é ${(total3 * 90/100).toFixed(2)}`)
    }else if(total4 > 25.00){
        console.log(`O preço total é ${(total4 * 90/100).toFixed(2)}`)
    }
}
main()