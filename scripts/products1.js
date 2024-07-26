document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    // Fetch products from the JSON file
    fetch('products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
            renderProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));

    // Function to render products
    function renderProducts(products) {
        productList.innerHTML = "";

        products.forEach(product => {
            const productItem = document.createElement("div");
            productItem.classList.add("product-item");

            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/default.jpg';">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="viewProduct(${product.id})">View Product</button>`;
            productList.appendChild(productItem);
        });
    }

    // Function to add product to cart
    function addToCart(productId) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const product = products.find(p => p.id === productId);

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} has been added to your cart.`);
    }

    // Function to view product details
    function viewProduct(productId) {
        const product = products.find(p => p.id === productId);
        alert(`Viewing product: ${product.name}`);
        // You can implement additional logic here to show the product details page 
        console.log("viewing product...");
    }

    // Make addToCart and viewProduct functions accessible globally
    window.addToCart = addToCart;
    window.viewProduct = viewProduct;
});
