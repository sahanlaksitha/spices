let totalAmount = 0;

function addItem() {
  const itemNameElement = document.getElementById("item-name");
  const itemQuantityElement = document.getElementById("item-quantity");

  const itemName = itemNameElement.value;
  const itemPrice = parseFloat(itemNameElement.options[itemNameElement.selectedIndex].dataset.price);
  const itemQuantity = parseInt(itemQuantityElement.value);

  const itemTotal = (itemPrice / 100) * itemQuantity;
  totalAmount += itemTotal;

  const itemElement = document.createElement("li");
  itemElement.textContent = `${itemName} - ${itemQuantity}g = Rs.${itemTotal.toFixed(2)}`;

  const itemsList = document.getElementById("items-list");
  itemsList.appendChild(itemElement);

  document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
}
function clearBill() {
    totalAmount = 0;
    document.getElementById("items-list").innerHTML = '';
    document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
  }

  let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  const offset = -currentIndex * 300; 
  slides.style.transform = `translateX(${offset}px)`;
}

setInterval(showNextSlide, 5000); 
