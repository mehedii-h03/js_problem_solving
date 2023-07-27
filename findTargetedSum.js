function findTargetedSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return `${[left, right]} (numbers at indices ${left} and ${right}: ${numbers[left]} + ${numbers[right]} = ${sum})`;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return "No matches found";
}

console.log(findTargetedSum([1, 3, 6, 8, 11, 15], 9));
