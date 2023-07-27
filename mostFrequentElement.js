function mostFrequentElement(elements) {
    const elementObj = {};
  
    let highestFrequentElement;
    let highestElementCount = 0;
  
    elements.forEach((element) => {
      if (elementObj[element]) {
        elementObj[element]++;
      } else {
        elementObj[element] = 1;
      }
  
      if (elementObj[element] > highestElementCount) {
        highestFrequentElement = element;
        highestElementCount = elementObj[element];
      }
    });
  
    return highestFrequentElement;
  }

  const data = [3, 5, 2, 5, 3, 3, 1, 4, 5] ;
  console.log(mostFrequentElement(data));
  