let num = [5, 7, 3, 4, 1, 6]

    num.push(9)
    num.length
    num.sort()
    num.indexOf(5)

    /*for (let pos= 0; pos < num.length; pos++) {
        console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    }*/

        for (let pos in num) {
            console.log(`A posição ${pos} tem o valor ${num[pos]}`)
        }