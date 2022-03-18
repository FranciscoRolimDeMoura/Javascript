//5 fatorial
// 5f = 5 x 4 x 3 x 2 x 1

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        console.log(`${fat} * ${c}`)
        fat *= c
        console.log(`${fat}`)
    }
}

console.log(fatorial(5))