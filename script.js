"use strict";
// Variable declarations
const checkButtonEl = document.getElementById("check-btn");
if (!checkButtonEl) {
    throw new Error("Element not found");
}
const clearButtonEl = document.getElementById("clear-btn");
if (!clearButtonEl) {
    throw new Error("Element not found");
}
const inputValueEl = document.getElementById("text-input");
if (!inputValueEl) {
    throw new Error("Element not found");
}
const resultEl = document.getElementById("result");
if (!resultEl) {
    throw new Error("Element not found");
}
// isPalindrome function
const isPalindrome = (value) => {
    let re = /[\W_]/g;
    let lowerCaseValue = value.toLowerCase().replace(re, "");
    let reverseValue = lowerCaseValue.split('').reverse().join('');
    return lowerCaseValue === reverseValue;
};
// Check palindrome function
const checkPalindrome = () => {
    let value = inputValueEl.value.trim();
    if (value.length === 0) {
        alert("Please input a value");
        return;
    }
    const message = isPalindrome(value)
        ? `<p>"<em>${value}</em>" is a palindrome</p>`
        : `<p>"<em>${value}</em>" is a <strong>NOT</strong> palindrome</p>`;
    resultEl.innerHTML = message;
    clearButtonEl.style.display = "inline";
};
const clearInput = () => {
    inputValueEl.value = "";
    resultEl.innerHTML = "";
    clearButtonEl.style.display = "none";
};
// Event listeners
checkButtonEl.addEventListener("click", checkPalindrome);
clearButtonEl.addEventListener("click", clearInput);
inputValueEl.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        checkPalindrome();
    }
});
