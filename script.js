const productsContainer = document.getElementById('products');

// Simulated product data (you would fetch this from a server in a real application)
const products = [
    { id: 1, name: 'Headphone', price: 29.99, image: 'product1.jpg' },
    { id: 2, name: 'Laptop', price: 39.99, image: 'product2.jpg' },
    { id: 3, name: 'Mobile Phone', price: 49.99, image: 'product3.jpg' },
    { id: 4, name: 'Printer', price: 59.99, image: 'product4.jpg' },
    { id: 5, name: 'Air Conditioner', price: 29.99, image: 'product5.jpg' },
    { id: 6, name: 'Cooler', price: 39.99, image: 'product6.jpg' },
    { id: 7, name: 'Blender', price: 49.99, image: 'product7.jpg' },
    { id: 8, name: 'Refrigerator', price: 59.99, image: 'product8.jpg' },
];

// Function to display products on the page
function displayProducts() {
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Function to simulate adding product to cart
function addToCart(productId) {
    alert(`Product with ID ${productId} added to cart`);
}

// Display products when the page loads
document.addEventListener('DOMContentLoaded', displayProducts);
