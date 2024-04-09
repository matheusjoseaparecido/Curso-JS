var idade = 35
if (idade < 16) {
    console.log('Não Vota!')
} else if (idade < 18) {
    console.log('Voto opcional!')
} else if (idade >= 18 && idade < 65){
    console.log('Voto obrigatório!')
} else {
    console.log('Voto opcional!')
}