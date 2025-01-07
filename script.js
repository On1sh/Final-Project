let cart = [];

function addToCart(itemName, itemPrice) {
   
    cart.push({ name: itemName, price: itemPrice });

    
    updateCartDisplay();
}

function removeFromCart(index) {
    
    cart.splice(index, 1);

    
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = ''; 

    let totalPrice = 0;
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        
        
        itemElement.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        
        cartItemsContainer.appendChild(itemElement);
        
        totalPrice += item.price;
    });

    
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the button and pop-up
    const paynowButton = document.getElementById("paynow-button");
    const qrPopup = document.getElementById("qr-popup");
    const closeButton = document.getElementById("close-button");

    // Show the pop-up when the "Pay Now" button is clicked
    paynowButton.addEventListener("click", function () {
        qrPopup.style.display = "flex"; // Display the pop-up
    });

    // Hide the pop-up when the "Close" button is clicked
    closeButton.addEventListener("click", function () {
        qrPopup.style.display = "none"; // Hide the pop-up
    });

    // Hide the pop-up if the user clicks outside the QR container
    window.addEventListener("click", function (event) {
        if (event.target === qrPopup) {
            qrPopup.style.display = "none";
        }
    });
});
