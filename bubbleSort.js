function bubbleSort(values) {
  let i, j;
  for (i = 0; i < values.length; i++) {
    for (j = i + 1; j < values.length; j++) {
      if (values[i] > values[j]) {
        let temp = values[j];
        values[j] = values[i];
        values[i] = temp;
      }
    }
  }
  console.log(values);
  return values;
}
bubbleSort([8, 6, 7, 9, 1, 2]);
