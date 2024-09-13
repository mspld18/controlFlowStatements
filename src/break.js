const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < numbers.length; i++) {
    if (i < 50) break;
        console.log(numbers[i])

}