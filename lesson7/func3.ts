const example = [5, 11, 394, 2, 576];

function removeElement(
  array: number[],
  indexFromWhichToRemove: number,
  numberOfElementsToRemove: number
) {
  // Create an actual copy of the array, not just a reference to it
  let resultArray: number[] = [];
  for (let i = 0; i < array.length; i++) {
    // check if the current index is the index from which to remove
    // if it is, skip it
    if (i !== indexFromWhichToRemove) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}

// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// execute our function with 8, 1 params
// [0, 1, 2, 3, 4, 5, 6, 7, 9]

console.log(removeElement(example, 2, 2));
