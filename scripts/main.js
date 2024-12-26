document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'product-item';
                
                const productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = product.name;

                const productName = document.createElement('h3');
                productName.textContent = product.name;

                const productPrice = document.createElement('p');
                productPrice.textContent = `$${product.price.toFixed(2)}`;

                // const addButton1 = document.createElement('button');
                // addButton1.textContent = 'add to card';
    
                //here i want to add to buttons "add to card" and view "product"
                // addButton1.onclick = () => addToCart(product);

                const addButton = document.createElement('button');
                addButton.textContent = 'view product';
    
                //here i want to add to buttons "add to card" and view "product"
                // addButton1.onclick = () => addToCart(product);
                addButton.onclick = () => viewProduct(product);

                productItem.appendChild(productImage);
                productItem.appendChild(productName);
                productItem.appendChild(productPrice);
                // productItem.appendChild(addButton1);
                productItem.appendChild(addButton);
                productList.appendChild(productItem);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});

function addToCart(product) {
    console.log(`Added ${product.name} to cart`);
    // Add your cart functionality here
}

function viewProduct(product) {
    // const product = products.find(p => p.id === productId);
    console.log(`Viewing product: ${product.page}`);
    window.location.href = `temp.html?id=${product.id}`;
}
