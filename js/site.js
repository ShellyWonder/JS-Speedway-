//get the values from inputs
//starts (controller function)
function getValues() {
  //get values from inputs
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //VALIDATE INPUTS to convert strings to integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //call generateNumbers():
    let numbers = generateNumbers(startValue, endValue);
    //call displayNumbers():
    displayNumbers(numbers);
  } else {
    alert("You must enter numbers.");
  }
}

//generate numbers from startValue to the endValue
//logic function(s)
function generateNumbers(sValue, eValue) {
  let numbers = [];
  for (let index = sValue; index <= eValue; index++) {
    numbers.push(index);
  }
  return numbers;
}

//display or view functions (RETURN)
function displayNumbers(numbers) {
  let templateRows = "";
  for (let index = 0; index < numbers.length; index++) {
    //mark even numbers "Bold"
    let className = "even";
    let number = numbers[index];
    ///Determining even numbers for Bold feature
    if (number % 2 == 0) {
      className = "even";
    } else {
      className = "odd";
    }

    templateRows += `<tr><td class="${className}">${number}</tr></tr>`;
  }
  document.getElementById("results").innerHTML = templateRows;
}
