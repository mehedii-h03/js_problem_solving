function secondSmallest(numbers) {
    if (numbers.length < 2) {
        return undefined;
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    numbers.forEach((num) => {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    });

    if (secondSmallest === Infinity) {
        return undefined;
    }

    return secondSmallest;
}

const data = [1, 2, 3, 4, 5, 6];
console.log(secondSmallest(data));
