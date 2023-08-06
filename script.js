function calculo (n1, n2, operacao)
{
        if (operacao === "+")
    {
        alert(parseInt(n1)+parseInt(n2))
    }
    else if (operacao === "*")
    {
        alert(n1*n2)
    }
    else if (operacao === "-")
    {
        alert(n1-n2)
    }
    else if (operacao === "/")
    {
        alert(n1/n2)
    }
}
let x = prompt("Qual o primeiro número?")
let y = prompt("Qual o segundo número?")
const z = prompt("Qual a operação?")

calculo (x, y, z)