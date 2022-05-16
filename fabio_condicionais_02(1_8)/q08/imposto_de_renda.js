import{input} from './io_utils.js'

function main(){
    const horas = Number(input('Digite aqui as horas trabalhadas: '))
    const valor_hora = Number(input('Digite aqui o valor da hora trabalhada: '))

    const decontos = imposto_de_renda(horas, valor_hora)
}
function imposto_de_renda(horas, valor_hora){
    const salario_bruto = horas * valor_hora
    const inss = salario_bruto * 0.10
    const fgts = salario_bruto * 0.11
    
    if (salario_bruto <= 900.00){
        console.log(`Salário Bruto: (${horas}*${valor_hora}) :R$ ${salario_bruto.toFixed(2)}`)
        console.log('Isento')
        console.log(`(-)INSS(10%) :R$ ${inss} `)
        console.log(`FGTS(11%) :R$ ${fgts}`)
        console.log(`Total de descontos :R$ ${inss}`)
        console.log(`Salário líquido :R$ ${salario_bruto - inss}`)

    }else if (salario_bruto <= 1500 && salario_bruto > 900){
        const ir = salario_bruto * 0.05
        console.log(`Salário Bruto: (${horas}*${valor_hora}) :R$ ${salario_bruto.toFixed(2)}`)
        console.log(`(-)IR(5%) :R$ ${ir}`)
        console.log(`(-)INSS(10%) :R$ ${inss} `)
        console.log(`FGTS(11%) :R$ ${fgts}`)
        console.log(`Total de descontos :R$ ${inss}`)
        console.log(`Salário líquido :R$ ${salario_bruto - inss - ir}`)
    }else if (salario_bruto <= 2500 && salario_bruto > 1500){
        const ir = salario_bruto * 0.10
        console.log(`Salário Bruto: (${horas}*${valor_hora}) :R$ ${salario_bruto.toFixed(2)}`)
        console.log(`(-)IR(10%) :R$ ${ir}`)
        console.log(`(-)INSS(10%) :R$ ${inss} `)
        console.log(`FGTS(11%) :R$ ${fgts}`)
        console.log(`Total de descontos :R$ ${inss}`)
        console.log(`Salário líquido :R$ ${salario_bruto - inss - ir}`)

    }else if (salario_bruto > 2500){
        const ir = salario_bruto * 0.20
        console.log(`Salário Bruto: (${horas}*${valor_hora}) :R$ ${salario_bruto.toFixed(2)}`)
        console.log(`(-)IR(10%) :R$ ${ir}`)
        console.log(`(-)INSS(10%) :R$ ${inss} `)
        console.log(`FGTS(11%) :R$ ${fgts}`)
        console.log(`Total de descontos :R$ ${inss}`)
        console.log(`Salário líquido :R$ ${salario_bruto - inss - ir}`)
    }
    /*const valor_IR = salario_bruto * 
    console.log(salario_bruto)
    console.log(valor_IR)
    console.log(inss)
    console.log(fgts)
    console.log(total_descontos)
    console.log(salario_liquido)*/
}

main()