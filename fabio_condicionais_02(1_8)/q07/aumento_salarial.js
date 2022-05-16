import{input} from './io_utils.js'

function main(){
    const salario = Number(input('Digite aqui o salário da pessoa: '))
    const aumento = aumento_salarial(salario)
}
function aumento_salarial(salario){
    let aumento = 0
    let percentual = 0
    if(salario <= 280){
        percentual = 0.20
        aumento = salario * percentual
        const salario_aumentado = salario + aumento
        console.log(salario.toFixed(2))
        console.log(percentual.toFixed(2))
        console.log(aumento.toFixed(2))
        console.log(salario_aumentado.toFixed(2))

    }else if(salario > 280.00 && salario<= 700.00){
        percentual = 0.15
        aumento = salario * percentual
        const salario_aumentado = salario + aumento
        console.log(salario.toFixed(2))
        console.log(percentual.toFixed(2))
        console.log(aumento.toFixed(2))
        console.log(salario_aumentado.toFixed(2)) 
    }else if(salario > 700.00 && salario < 1500){
        percentual = 0.10
        aumento = salario * percentual
        const salario_aumentado = salario + aumento
        console.log(salario.toFixed(2))
        console.log(percentual.toFixed(2))
        console.log(aumento.toFixed(2))
        console.log(salario_aumentado.toFixed(2))
    }else if(salario >= 1500){
        percentual = 0.05
        aumento = salario * percentual
        const salario_aumentado = salario + aumento
        console.log(salario.toFixed(2))
        console.log(percentual.toFixed(2))
        console.log(aumento.toFixed(2))
        console.log(salario_aumentado.toFixed(2))
    }
}
main()