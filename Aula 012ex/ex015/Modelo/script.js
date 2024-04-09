function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var a = document.querySelector('input#anon')
    var nas = Number(a.value)
    var sex = document.querySelector('#radsex')
    var res = document.querySelector('#res')
    if (nas == 0 || nas > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - nas
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. `
    }
}