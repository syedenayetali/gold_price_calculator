function abc() {
  console.log(document.querySelector(".input").value);
  console.log(document.querySelector("._24_caret"));
  let a = document.querySelector(".input").value;
  document.querySelector("._24_caret").innerHTML =
    "₹" + (a * (24 / 24)).toFixed(2);
  document.querySelector("._22_caret").innerHTML =
    "₹" + (a * (22 / 24)).toFixed(2);
  document.querySelector("._20_caret").innerHTML =
    "₹" + (a * (20 / 24)).toFixed(2);
  document.querySelector("._18_caret").innerHTML =
    "₹" + (a * (18 / 24)).toFixed(2);
  document.querySelector("._16_caret").innerHTML =
    "₹" + (a * (16 / 24)).toFixed(2);
}

document.querySelector(".button").addEventListener("click", abc);
