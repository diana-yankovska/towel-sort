
// You should implement your task here.

module.exports = function towelSort(matrix) {

  return matrix === undefined || matrix.length == 0 ?
    [] :
    matrix.reduce((resultArr, currentArr, index) =>
      index % 2 == 0 ?
        resultArr.concat(currentArr) :
        resultArr.concat(currentArr.reverse()), []);
}
