document.addEventListener("DOMContentLoaded", () => {
    fetch('products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
            const productContainer = document.querySelector(".product-list");

            products.filter(product => product.type === "Fishing Line").forEach(product => {
                const productItem = document.createElement("div");
                productItem.classList.add("product-item");

                const productImage = document.createElement("img");
                productImage.src = product.image;
                productImage.alt = product.name;
                productImage.onerror = () => {
                    console.error(`Error loading image: ${product.image}`);
                    productImage.src = 'images/default.jpg'; // Path to a default image
                };

                const productName = document.createElement("h3");
                productName.textContent = product.name;

                const productPrice = document.createElement("p");
                productPrice.textContent = product.price;

                productItem.appendChild(productImage);
                productItem.appendChild(productName);
                productItem.appendChild(productPrice);

                productContainer.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
