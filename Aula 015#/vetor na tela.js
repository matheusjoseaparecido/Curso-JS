let num = [5,8,2,9,3]
/*
for (let pos = 0; c < num.length; c++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}