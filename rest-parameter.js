const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("sum is =", sum);

let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("sum is =", sum);


const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log(sum3);