"use strict";

function init() {
  var form = document.querySelector("form");
  form.addEventListener("submit", submitHandler);
}
function submitHandler(e) {
  e.preventDefault();
  var a = document.querySelector("input[name='a']");
  var b = document.querySelector("input[name='b']");
  var result = add(Number(a.value), Number(b.value));
  var resultElement = document.querySelector("p");
  if (resultElement) {
    resultElement.textContent = result.toString();
  }
}
function add(a, b) {
  return a + b;
}
init();
