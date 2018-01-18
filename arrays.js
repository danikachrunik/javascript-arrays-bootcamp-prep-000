var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem) {
  return arr.unshift(elem);
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr = arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr, elem) {
  return arr.push(elem);
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr = arr.push(elem);
  return arr;
}

function accessElementInArray(arr, i) {
  return arr[i];
}

function destructivelyRemoveElementToBeginningOfArray(arr) {
  arr = arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  arr.slice(1);
  return arr;
}

