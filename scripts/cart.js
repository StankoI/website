document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout-btn");

    function renderCart() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)"></p>
                    <button onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);

            // Calculate total
            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = total.toFixed(2);
    }

    function updateQuantity(id, quantity) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity = parseInt(quantity, 10);
            if (item.quantity <= 0) {
                removeFromCart(id);
                return;
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    function removeFromCart(id) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    function checkout() {
        alert("Proceeding to checkout...");
        // You can add further checkout functionality here
    }

    checkoutButton.addEventListener("click", checkout);

    renderCart();
});
