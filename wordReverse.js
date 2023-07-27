function wordReverse(str) {
  let reverseWord = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reverseWord += str[i];
  }
  return reverseWord;
}

console.log(wordReverse("hello word"));