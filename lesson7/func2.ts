const values = [533, 235, 223, 56, 88, 2, 6, 88, 664];

function minValue(arrayToCheck: number[]) {
  let min: number | null = null;

  for (let i = 0; i < arrayToCheck.length; i++) {
    if (min != null || (min != null && arrayToCheck[i] < min)) {
      min = arrayToCheck[i];
    }
  }

  return min;
}

const minimum = minValue(values);

console.log(minimum); // 2
