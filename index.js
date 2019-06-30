function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach((element) => {
    if(typeof element === 'number'){
      sum += element;      
    } else {
      return sum += sumItems(element);
    }
  })
  return sum;
}

module.exports = sumItems;