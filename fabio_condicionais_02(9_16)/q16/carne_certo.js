import {input} from './io_utils.js'


function main(){

    const carnes = preço()    
}
function preço(){
    const tipo = menu()
    if (tipo === 1){            
        const qtd = Number(input('Digite a quantidade de quilos de filé que vai querer: ')) 
        if (qtd <= 5 && qtd>0){
                if(eh_cartao()){
                const preço = qtd * 4.90
                const desconto = preço * 0.05
                const preço_total = preço - desconto
                let cupom_fiscal = 'Filé'
                cupom_fiscal += `\n A quantidade é de ${qtd.toFixed(2)} kg`
                cupom_fiscal += `\n O preço é ${preço.toFixed(2)} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto.toFixed(2)} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço_total.toFixed(2)} reais`

                console.log(cupom_fiscal)
            }else{
                    const preço = qtd * 4.90
                    const desconto = 0
                    const preço_total = preço
                    let cupom_fiscal = 'Filé'
                    cupom_fiscal += `\n A quantidade é de ${qtd.toFixed(2)} kg`
                    cupom_fiscal += `\n O preço é ${preço.toFixed(2)} reais`
                    cupom_fiscal += '\n O pagamento é em espécie'
                    cupom_fiscal += `\n O desconto é de ${desconto.toFixed(2)} reais`
                    cupom_fiscal += `\n O total a pagar é de ${preço.toFixed(2)} reais`
        
                    console.log(cupom_fiscal)
            }
        }else if (qtd > 5){
            if (eh_cartao){
                const preço = qtd * 5.80
                const desconto = preço * 0.05
                const preço_total = preço - desconto
                let cupom_fiscal = 'Filé'
                cupom_fiscal += `\n A quantidade é de ${qtd.toFixed(2)} kg`
                cupom_fiscal += `\n O preço é ${preço.toFixed(2)} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto.toFixed(2)} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço_total.toFixed(2)} reais`

                console.log(cupom_fiscal)
            }else{
                const preço = qtd * 5.80
                const desconto = preço * 0.05
                const preço_total = preço - desconto
                let cupom_fiscal = 'Filé'
                cupom_fiscal += `\n A quantidade é de ${qtd.toFixed(2)} kg`
                cupom_fiscal += `\n O preço é ${preço.toFixed(2)} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto.toFixed(2)} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço_total.toFixed(2)} reais`

                console.log(cupom_fiscal)
            }
        }
    }else if (tipo === 2){
        const qtd = Number(input('Digite a quantidade de quilos de picanha que vai querer: ')) 
        if (qtd <= 5 && qtd>0){
                if(eh_cartao()){
                const preço = qtd * 6.90
                const desconto = preço * 0.05
                const preço_total = preço - desconto
                let cupom_fiscal = 'Picanha'
                cupom_fiscal += `\n A quantidade é de ${qtd.toFixed(2)} kg`
                cupom_fiscal += `\n O preço é ${preço.toFixed(2)} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto.toFixed(2)} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço_total.toFixed(2)} reais`

                console.log(cupom_fiscal)
            }else{
                    const preço = qtd * 6.90
                    const desconto = 0
                    const preço_total = preço
                    let cupom_fiscal = 'Picanha'
                    cupom_fiscal += `\n A quantidade é de ${qtd.toFixed(2)} kg`
                    cupom_fiscal += `\n O preço é ${preço.toFixed(2)} reais`
                    cupom_fiscal += '\n O pagamento é em espécie'
                    cupom_fiscal += `\n O desconto é de ${desconto.toFixed(2)} reais`
                    cupom_fiscal += `\n O total a pagar é de ${preço.toFixed(2)} reais`
        
                    console.log(cupom_fiscal)
            }
        }else if (qtd > 5){
            if (eh_cartao){
                const preço = qtd * 7.80
                const desconto = preço * 0.05
                const preço_total = preço - desconto
                let cupom_fiscal = 'Picanha'
                cupom_fiscal += `\n A quantidade é de ${qtd.toFixed(2)} kg`
                cupom_fiscal += `\n O preço é ${preço.toFixed(2)} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto.toFixed(2)} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço_total.toFixed(2)} reais`

                console.log(cupom_fiscal)
            }else{
                const preço = qtd * 7.80
                const desconto = preço * 0.05
                const preço_total = preço - desconto
                let cupom_fiscal = 'picanha'
                cupom_fiscal += `\n A quantidade é de ${qtd.toFixed(2)} kg`
                cupom_fiscal += `\n O preço é ${preço.toFixed(2)} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto.toFixed(2)} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço_total.toFixed(2)} reais`

                console.log(cupom_fiscal)
            }
        }
    }else if (tipo === 3){
        const qtd = Number(input('Digite a quantidade de quilos de alcatra que vai querer: ')) 
        if (qtd <= 5 && qtd>0){
                if(eh_cartao()){
                const preço = qtd * 6.90
                const desconto = preço * 0.05
                const preço_total = preço - desconto
                let cupom_fiscal = 'Alcatra'
                cupom_fiscal += `\n A quantidade é de ${qtd.toFixed(2)} kg`
                cupom_fiscal += `\n O preço é ${preço.toFixed(2)} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto.toFixed(2)} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço_total.toFixed(2)} reais`

                console.log(cupom_fiscal)
            }else{
                    const preço = qtd * 6.90
                    const desconto = 0
                    const preço_total = preço
                    let cupom_fiscal = 'Alcatra'
                    cupom_fiscal += `\n A quantidade é de ${qtd.toFixed(2)} kg`
                    cupom_fiscal += `\n O preço é ${preço.toFixed(2)} reais`
                    cupom_fiscal += '\n O pagamento é em espécie'
                    cupom_fiscal += `\n O desconto é de ${desconto.toFixed(2)} reais`
                    cupom_fiscal += `\n O total a pagar é de ${preço.toFixed(2)} reais`
        
                    console.log(cupom_fiscal)
            }
        }else if (qtd > 5){
            if (eh_cartao){
                const preço = qtd * 7.80
                const desconto = preço * 0.05
                const preço_total = preço - desconto
                let cupom_fiscal = 'Alcatra'
                cupom_fiscal += `\n A quantidade é de ${qtd.toFixed(2)} kg`
                cupom_fiscal += `\n O preço é ${preço.toFixed(2)} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto.toFixed(2)} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço_total.toFixed(2)} reais`

                console.log(cupom_fiscal)
            }else{
                const preço = qtd * 7.80
                const desconto = preço * 0.05
                const preço_total = preço - desconto
                let cupom_fiscal = 'Alcatra'
                cupom_fiscal += `\n A quantidade é de ${qtd.toFixed(2)} kg`
                cupom_fiscal += `\n O preço é ${preço.toFixed(2)} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto.toFixed(2)} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço_total.toFixed(2)} reais`

                console.log(cupom_fiscal)
            }
        }
    }
}

function menu(){
    let menu = '\n1 - Filé'
    menu += '\n2 - Alcatra'
    menu += '\n3 - Picanha'
    console.log(menu)
    let opçao = Number(input('Digite aqui a opção desejada: '))
    while(!(opçao <=3 && opçao>=1)){
        console.log('Você digitou uma opção inválida')
        console.clear()
        console.log(menu)
        opçao = Number(input('Digite aqui a opção desejada novamente: '))

    }
    return opçao
}
function eh_cartao(){
    const cartao = input('Vai utilizar cartão? ')
    while (!(cartao === 'sim' || 'nao')){
        const cartao = input('Vai utilizar cartão? ')
    }
    if (cartao === 'sim'){
        return true
    }else{
        return false
    }
}
main()        