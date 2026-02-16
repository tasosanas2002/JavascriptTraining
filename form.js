const basePrice = 12.00;

const zoneSelect = document.getElementById("zone");
const shippingSpan = document.getElementById("shipping");
const totalSpan = document.getElementById("total");
const placeOrderBtn = document.getElementById("placeOrder");

zoneSelect.addEventListener("change", updateTotal);
placeOrderBtn.addEventListener("click", submitOrder);

function updateTotal() {
  const shipping = parseFloat(zoneSelect.value) || 0;
  const total = basePrice + shipping;

  shippingSpan.textContent = shipping.toFixed(2);
  totalSpan.textContent = total.toFixed(2);
}

function submitOrder() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const delivery = document.getElementById("delivery").value;
  const zoneText = zoneSelect.options[zoneSelect.selectedIndex].text;
  const notes = document.getElementById("notes").value;

  const shipping = parseFloat(zoneSelect.value) || 0;
  const total = basePrice + shipping;

  const output = `
    Name: ${name || "-"} <br>
    Email: ${email || "-"} <br>
    Delivery: ${delivery || "-"} <br>
    Zone: ${zoneText} <br>
    Notes: ${notes || "-"} <br><br>
    <strong>Total: €${total.toFixed(2)}</strong>
  `;

  document.getElementById("output").innerHTML = output;
}
