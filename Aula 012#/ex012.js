var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12 && hora > 5){
    console.log('Bom dia, está de manhã!')
} else if (hora > 12 && hora < 18){
    console.log('Boa tarde, está de tarde!')
} else if(hora < 23.59 && hora > 18){
    console.log('Boa noite, está de noite!')
} else {
    console.log('Boa madrugada, está de madrugada!')
}