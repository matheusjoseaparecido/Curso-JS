function calcular(){
    let fa = document.querySelector('#f')
    let f = Number(fa.value)
    let tab = document.querySelector('#seltab')
    let m = 1
    if (fa.value.length == 0){
        window.alert('Insira um número, por favor!')
    } else {
        tab.innerHTML = ''
        for (let c = f; m <= 10 ;m++){
            let p = c*m
            let item = document.createElement('option')
            item.text = `${c} X ${m} = ${p}`
            tab.appendChild(item)
        }
    }

}