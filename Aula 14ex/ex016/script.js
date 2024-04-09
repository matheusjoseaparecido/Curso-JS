function Calcular(){
    var i = document.querySelector('#início')
    var f = document.querySelector('#fim')
    var p = document.querySelector('#passos')
    var res = document.querySelector('#res')
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('Faltam dados!')
    } else { 
    res.innerHTML = 'Contando: <br>'
    var inicio = Number(i.value)
    var fim = Number(f.value)
    var passos = Number(p.value)
        if (passos <= 0){
            window.alert('Não há passo, usando passo 1')
            passos = 1
        }
        if (inicio < fim){
            //Contagem crescente!
            for (let c = inicio ; c <= fim ; c+= passos)
                res.innerHTML += `${c} \u{1F449}`
        }else {
            //Contagem decrescente!
            for (let c = inicio ; c >= fim; c-= passos)
                res.innerHTML += `${c} \u{1F449}`
        }

    }
            res.innerHTML += `\u{1F3C1}`
 }