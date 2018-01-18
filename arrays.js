var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem) {
  return arr.push(elem);
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr = arr.push(elem);
  return arr;
}