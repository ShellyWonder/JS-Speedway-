//get the values from inputs
//starts (controller function)
function getValues() {
  //get values from inputs

  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;
  alert("the start value:" + startValue);

  //call generateNumbers
  let numbers = generateNumbers();

  //call  displayNumbers
}

//generate numbers from startValue to the endValue
//logic function(s)
function generateNumbers(sValue, eValue) {
  let numbers = [];
  for (let index = sValue; index <= eValue; index++) {}
  return numbers;
}
//display numbers and mark even ones "Bold"
//display or view functions (RETURN)
function displayNumbers() {}
