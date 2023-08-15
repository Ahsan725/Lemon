function orderHandler() {


  displayOrderSummary();
}

function displayOrderSummary() {
  const orderTable = document.getElementById("orderTable");
  const orderTableBody = orderTable.querySelector("tbody");
  const totalElement = document.getElementById("totalPrice");

  const orderSummary = document.getElementById("orderSummary");
  orderSummary.innerHTML = ""; // Clear existing order summary

  const rows = orderTableBody.querySelectorAll("tr");

  if (rows.length === 0) {
    orderSummary.innerHTML = "<p>No items in the order.</p>";
    return;
  }

  const summaryTable = document.createElement("table");
  summaryTable.innerHTML = `
    <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  `;

  const summaryTableBody = summaryTable.querySelector("tbody");

  rows.forEach((row) => {
    const cells = row.cells;
    const itemName = cells[0].textContent;
    const itemPrice = cells[1].textContent;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${itemName}</td>
      <td>${itemPrice}</td>
    `;

    summaryTableBody.appendChild(newRow);
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td>${totalElement.textContent}</td>
  `;

  summaryTableBody.appendChild(totalRow);

  orderSummary.appendChild(summaryTable);
}


// Function to add the selected item to the order table
function addToOrder() {
  const itemSelect = document.getElementById("item");
  const selectedItem = itemSelect.options[itemSelect.selectedIndex];

  if (selectedItem.value !== "0") {
    const itemName = selectedItem.text;
    const itemPrice = parseFloat(selectedItem.value);
    const quantity = parseInt(document.getElementById("quantity").value);

    const orderTableBody = document.querySelector("#orderTable tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${itemName}</td>
      <td>${(itemPrice * quantity).toFixed(2)} USD</td>
      <td><button class="removeBtn">Remove</button></td>
    `;

    orderTableBody.appendChild(newRow);

    updateTotal(itemPrice * quantity);
    if (!timer) {
      startTimer();
    }
  }
}

// Function to update the total price
function updateTotal(price) {
  const totalPriceElement = document.getElementById("totalPrice");
  const currentTotal = parseFloat(totalPriceElement.textContent);
  const newTotal = currentTotal + price;
  totalPriceElement.textContent = newTotal.toFixed(2);
}

// Function to remove an item from the order table
function removeItem(row) {
  const itemPrice = parseFloat(row.cells[1].textContent);
  row.remove();

  updateTotal(-itemPrice); // Subtract the removed item's price from total
}

// Attach event listeners to each "Remove" button
document.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("removeBtn")) {
    const row = event.target.closest("tr");
    removeItem(row);
  }
});

let timer;
let timerDuration = 15 * 60; // 15 minutes in seconds

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timerDuration / 60);
  const seconds = timerDuration % 60;

  document.getElementById("timerDisplay").textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  if (timerDuration === 0) {
    clearInterval(timer);
    document.getElementById("timerDisplay").textContent = "Time's up!";
    document.getElementById("submitOrderBtn").disabled = true;
  } else {
    timerDuration--;
  }
}

function submitOrder() {
  // Add your existing code to process the order or any other necessary tasks

  // Redirect to the "Thank You" page after submitting the order
  window.location.href = "thank.html";
}


