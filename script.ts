// Variable declarations
const checkButtonEl = document.getElementById("check-btn") as HTMLButtonElement | null;
if (!checkButtonEl) {
  throw new Error("Element not found");
}
const clearButtonEl = document.getElementById("clear-btn") as HTMLButtonElement | null;
if (!clearButtonEl) {
  throw new Error("Element not found");
}
const inputValueEl = document.getElementById("text-input") as HTMLInputElement | null;
if (!inputValueEl) {
  throw new Error("Element not found");
}
const resultEl = document.getElementById("result") as HTMLDivElement | null;
if (!resultEl) {
  throw new Error("Element not found");
}



// isPalindrome function

const isPalindrome = (value: string): boolean => {
 
  let re: RegExp = /[\W_]/g;
  let lowerCaseValue: string = value.toLowerCase().replace(re, "");
  let reverseValue: string = lowerCaseValue.split('').reverse().join('');

  return lowerCaseValue === reverseValue;



}
// Check palindrome function
const checkPalindrome = (): void => {
  let value: string = inputValueEl.value.trim();
    if (value.length === 0){
      alert("Please input a value")
      return;
    }

  const message: string = isPalindrome(value) 
    ? `<p>"<em>${value}</em>" is a palindrome</p>`
    : `<p>"<em>${value}</em>" is a <strong>NOT</strong> palindrome</p>`
  
    resultEl.innerHTML = message;
    clearButtonEl.style.display = "inline";
    
  }

const clearInput = (): void => {
  inputValueEl.value = "";
  resultEl.innerHTML = "";
  clearButtonEl.style.display = "none";
}


// Event listeners

  checkButtonEl.addEventListener("click", checkPalindrome);

  clearButtonEl.addEventListener("click", clearInput);

  inputValueEl.addEventListener("keypress", function(event: KeyboardEvent) {
    if(event.key == "Enter") {
      checkPalindrome();
    }
  })
