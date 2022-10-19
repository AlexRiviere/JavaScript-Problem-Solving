function incrementalDepth(flatArray) {
  let nestedArray = [];
  for (let index = flatArray.length - 1; index >= 0; index -= 1) {
    if (index === flatArray.length - 1) {
      nestedArray.push(flatArray[index]);
      continue;
    }
    nestedArray = [flatArray[index], nestedArray];
  }
  return nestedArray;
}




console.log(incrementalDepth([1, 3, 2, 6])) // [1, [3, [2, [6]]]]

console.log(incrementalDepth([1, 2])) // [1, [2]]
// [1, [2]]

console.log(incrementalDepth([1, 2, 3, 4, 5])) // [1, [2, [3, [4, [5]]]]]
// a = [5]

// [1, 2, 3, 4, 5]
// a[0] = [4, [5]]

// [1, [2, [3, [4, [5]]]]]

console.log(incrementalDepth(["dog", "cat", "cow"])) // ["dog", ["cat", ["cow"]]]