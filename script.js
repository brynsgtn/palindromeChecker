const checkButtonEl = document.getElementById("check-btn");
const inputValueEl = document.getElementById("text-input");
const resultEl = document.getElementById("result");

checkButtonEl.addEventListener("click", function() {
  let value = inputValueEl.value;
  let re = /[\W_]/g;
  let lowerCaseValue = value.toLowerCase().replace(re, "");
  let reverseValue = lowerCaseValue.split('').reverse().join('');


  if (value.length === 0){
    alert("Please input a value")
  } else if (lowerCaseValue === reverseValue) {
    resultEl.innerHTML = `<p>${value} is a palindrome</p>`
  } else {
    resultEl.innerHTML = `<p>${value} is a <strong>NOT</strong> palindrome</p>`
  }
});