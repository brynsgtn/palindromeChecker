// Variable declarations
const checkButtonEl = document.getElementById("check-btn");
const inputValueEl = document.getElementById("text-input");
const resultEl = document.getElementById("result");

// Check palindrome function
const checkPalindrome = () => {
  let value = inputValueEl.value;
  let re = /[\W_]/g;
  let lowerCaseValue = value.toLowerCase().replace(re, "");
  let reverseValue = lowerCaseValue.split('').reverse().join('');


  if (value.length === 0){
    alert("Please input a value")
  } else if (lowerCaseValue === reverseValue) {
    resultEl.innerHTML = `<p>"<em>${value}</em>" is a palindrome</p>`
  } else {
    resultEl.innerHTML = `<p>"<em>${value}</em>" is a <strong>NOT</strong> palindrome</p>`
  }
}


// Event listeners
checkButtonEl.addEventListener("click", checkPalindrome);

inputValueEl.addEventListener("keypress", function(event) {
  if(event.key == "Enter") {
    checkPalindrome();
  }
})