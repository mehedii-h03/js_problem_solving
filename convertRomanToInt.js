function romanToInteger(roman) {
    const romanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let previous = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentRoman = roman[i];
        const current = romanNumbers[currentRoman];

        if (current >= previous) {
            result += current;
        } else {
            result -= current;
        }

        previous = current;
    }

    return result;
}

const data = "II"
console.log(romanToInteger(data));