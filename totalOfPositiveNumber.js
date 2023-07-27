function totalOfPositiveNumbers(numbers) {
    let positiveNumbers = [];
    numbers.forEach(number => {
        if (number > 0) {
            positiveNumbers.push(number)
        }
    });
    const total = positiveNumbers.reduce((previous, current) => previous + current, 0);
    return total;
}

const data = [2, -5, 10, -3, 7];
console.log(totalOfPositiveNumbers(data));