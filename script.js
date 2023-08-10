function orderHandler() {
  var x = "Order";
  var y = "Submitted ✓";
  document.getElementById("review").innerHTML = x + " " + y;
  // summary();
}

function total() {
  var add = parseInt(document.getElementById("num").value);
  var message = "Your total is:";
  window.alert(message + " " + add * 15);
}

// function summary() {
//   var name = document.getElementById("nonEmpty").value;
//   if (!name.length == 0) {
//     window.location.href = "summary.html";
//   }
// }

// Function to add the selected item to the order table
function addToOrder() {
  const itemSelect = document.getElementById("item");
  const selectedItem = itemSelect.options[itemSelect.selectedIndex];

  if (selectedItem.value !== "0") {
    const itemName = selectedItem.text;
    const itemPrice = parseFloat(selectedItem.value);

    const orderTableBody = document.querySelector("#orderTable tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${itemName}</td>
      <td>${itemPrice.toFixed(2)} USD</td>
    `;

    orderTableBody.appendChild(newRow);

    updateTotal(itemPrice);
  }
}

// Function to update the total price
function updateTotal(price) {
  const totalPriceElement = document.getElementById("totalPrice");
  const currentTotal = parseFloat(totalPriceElement.textContent);
  const newTotal = currentTotal + price;
  totalPriceElement.textContent = newTotal.toFixed(2);
}
