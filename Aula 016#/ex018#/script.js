var nu = document.querySelector('#num')
var tab = document.querySelector('#seltab')
var num = [Number(nu.value)]
function inLista(c, l){
    if (l.indexOf(Number(c)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (num.length == 0) {
        window.alert('Por favor insira um número!')
    } else if (num > 100 || num < 0) {
        window.alert('Por favor, insira um número entre 1 e 100!') 
    } else if (inLista(nu.value, num)){
        window.alert('Seu número já está na lista!')
    } else {
        let item = document.createElement('option')
        item.text += `Valor ${num} adicionado!`
        tab.appendChild(item)
        return `${num}`
    }
}
function finalizar(){    
    let res = document.querySelector('#res')
    num.sort()
    res.innerHTML = ''
    res.innerHTML += `Ao todo, temos ${num.length} elementos cadastrados <br>`
    res.innerHTML += `O menor valor informado foi ${num[0]} <br>`
    res.innerHTML += `O maior valor informado foi ${num.lastIndexOf()} <br>`
    let soma = 0
    for (let i = 0; i < num.length; i++) {
    soma += num[i];
    }
    let media = soma/num.length
    console.log(soma)
    res.innerHTML += `Somando todos os valores temos ${soma} <br>`
    res.innerHTML += `A média dos números é de ${media}`
    return 'deu certo'
}