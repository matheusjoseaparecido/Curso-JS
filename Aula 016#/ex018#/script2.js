let num = document.querySelector('#num')
let lista = document.querySelector('#seltab')
let valores = []
let res = document.querySelector('#res')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        window.alert('Não foi possível finalizar, por favor insira um número!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        m = soma/valores.length
        res.innerHTML += '<br>'
        res.innerHTML += `Ao todo temos ${tot} números cadastrados <br>`
        res.innerHTML += `O menor valor foi ${menor} <br> `
        res.innerHTML += `O maior valor foi ${maior} <br>`
        res.innerHTML += `A soma de todos os valores é de ${soma} <br>`
        res.innerHTML += `A média entre os valores é  de ${m}<br>`


    }
}