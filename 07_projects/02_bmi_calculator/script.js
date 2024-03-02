const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  let resMsg = "";

  if (isNaN(height) || height <= 0) {
    resMsg += `Please Enter a valid height: ${height}.`;
  }

  if (isNaN(weight) || weight <= 0) {
    resMsg += ` Please Enter a valid weight: ${height}.`;
  }

  if (resMsg) {
    alert(resMsg);
  } else {
    const result = (weight / height ** 2).toFixed(2);
    const span = document.createElement("span");
    const spanText = document.createTextNode(result);
    span.appendChild(spanText);
    results.appendChild(span);
    const p = document.createElement("p");
    let msg = "";
    if (result < 18.6) {
      msg = "You are under weight.";
    } else if (result < 25) {
      msg = "Your are healthy";
    } else if (result >= 25) {
      msg = "You are overweight";
    }
    const pText = document.createTextNode(msg);
    p.appendChild(pText);
    results.appendChild(p);
  }

  document.querySelector("#height").value = "";
  document.querySelector("#weight").value = "";
});
