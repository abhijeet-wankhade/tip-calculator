console.log("Tip Calculator");

const Tip_5 = document.getElementById("tip5");
const Tip_10 = document.getElementById("tip10");
const Tip_15 = document.getElementById("tip15");
const Tip_25 = document.getElementById("tip25");
const Tip_50 = document.getElementById("tip50");

const resetButton = document.getElementById("reset-button");

const calculateTip = function (percentage) {
  const billAmount = document.getElementById("bill-amount").value;

  if (billAmount > 0) {
    const tipAmount = (billAmount * percentage) / 100;
    const totalAmount = parseFloat(billAmount) + tipAmount;

    document.getElementById("tip-amount").textContent = tipAmount;
    document.getElementById("total-amount").textContent = totalAmount;
  } else {
    alert("Please enter a valid bill amount greater than 0.");
    document.getElementById("bill-amount").value = "";
    document.getElementById("tip-amount").textContent = "0.00";
    document.getElementById("total-amount").textContent = "0.00";
  }
};

Tip_5.addEventListener("click", function () {
  calculateTip(5);
});

Tip_10.addEventListener("click", function () {
  calculateTip(10);
});

Tip_15.addEventListener("click", function () {
  calculateTip(15);
});

Tip_25.addEventListener("click", function () {
  calculateTip(25);
});

Tip_50.addEventListener("click", function () {
  calculateTip(50);
});

const resetCalculator = function () {
  document.getElementById("bill-amount").value = "";
  document.getElementById("tip-amount").textContent = "0.00";
  document.getElementById("total-amount").textContent = "0.00";
};

resetButton.addEventListener("click", resetCalculator);