function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1) //recursividade
    }
}

console.log(fatorial(5))
//Recursivamente
//5f = 5 * 4 * 3 * 2 * 1 equivale a 5 * 4f
//5f = 5 * 4f

// nf = n * (n-1)