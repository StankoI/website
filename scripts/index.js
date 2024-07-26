document.addEventListener("DOMContentLoaded", () => {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const featuredProducts = products.filter(product => product.featured);
            const productContainer = document.querySelector(".featured-products .product-list");

            featuredProducts.forEach(product => {
                const productItem = document.createElement("div");
                productItem.classList.add("product-item");

                const productImage = document.createElement("img");
                productImage.src = product.image;
                productImage.alt = product.name;

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
