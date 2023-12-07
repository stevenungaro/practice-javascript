var stringsArray = ["a", "b", "c", "d", "e", "f"];

function selectEvenItems(stringsArray) {
  var resultArray = [];
  var index = 0;

  stringsArray.forEach(function (string) {
    if (index % 2 == 0) {
      resultArray.push(string);
    }
    index += 1;
  });

  return resultArray;
}

console.log(selectEvenItems(stringsArray));
