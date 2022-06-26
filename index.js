let a;
let priceCalculator = document.querySelector(".finalPriceHeader");
let grandTotalLocation = document.querySelector(".finalBillDiv");

function costCalculation() {
  a = document.querySelector(".input").value; //52430
  document.querySelector("._24_caret").innerHTML =
    "₹ " + (a * (24 / 24)).toFixed(2);
  document.querySelector("._22_caret").innerHTML =
    "₹ " + (a * (22 / 24)).toFixed(2);
  document.querySelector("._20_caret").innerHTML =
    "₹ " + (a * (20 / 24)).toFixed(2);
  document.querySelector("._18_caret").innerHTML =
    "₹ " + (a * (18 / 24)).toFixed(2);
  document.querySelector("._16_caret").innerHTML =
    "₹ " + (a * (16 / 24)).toFixed(2);
}

function finalPrice() {
  grandTotalLocation.scrollIntoView({ behavior: "smooth" });
  let price = +document.querySelector("#price").value;
  let weight = +document.querySelector("#weight").value;
  let makingPercent = +document.querySelector("#makingCharge").value;
  let taxPercent = +document.querySelector("#tax").value;
  let finalGoldPrice = price * weight;
  let makingPrice = finalGoldPrice * (makingPercent / 100);
  let taxPrice = (finalGoldPrice + makingPrice) * (taxPercent / 100);
  let grandFinalCost = finalGoldPrice + makingPrice + taxPrice;

  document.querySelector("#finalGoldPrice").innerHTML =
    finalGoldPrice.toFixed(2);
  document.querySelector("#finalMakingCharges").innerHTML =
    makingPrice.toFixed(2);
  document.querySelector("#finalTax").innerHTML = taxPrice.toFixed(2);
  document.querySelector("#grandFinalPrice").innerHTML =
    grandFinalCost.toFixed(2);
}

const abc = (e) => {
  priceCalculator.scrollIntoView({ behavior: "smooth" });
  e.target.className === "_24_caret items" &&
    (document.querySelector("#price").value = (a * (24 / 24)).toFixed(2));
  e.target.className === "_22_caret items" &&
    (document.querySelector("#price").value = (a * (22 / 24)).toFixed(2));
  e.target.className === "_20_caret items" &&
    (document.querySelector("#price").value = (a * (20 / 24)).toFixed(2));
  e.target.className === "_18_caret items" &&
    (document.querySelector("#price").value = (a * (18 / 24)).toFixed(2));
  e.target.className === "_16_caret items" &&
    (document.querySelector("#price").value = (a * (16 / 24)).toFixed(2));
};

document.querySelector(".button").addEventListener("click", costCalculation);
document.querySelector(".finalButton").addEventListener("click", finalPrice);
document.querySelector("._16_caret").addEventListener("click", abc);
document.querySelector("._18_caret").addEventListener("click", abc);
document.querySelector("._20_caret").addEventListener("click", abc);
document.querySelector("._22_caret").addEventListener("click", abc);
document.querySelector("._24_caret").addEventListener("click", abc);
