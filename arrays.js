var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem) {
  return arr.unshift(elem);
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr = arr.unshift(elem);
  return arr;
}