// script.js
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];

const product_list=document.getElementById("product-list");

const array_of_products=products.map(product=>`<li>${product.name}</li>`);
product_list.innerHTML=array_of_products.join("");


//=================================================================================================================

const in_stock_elements=products.filter(product=>product.inStock==true).map(product=>`<li class="product-item">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
</li>
`);

product_list.innerHTML=in_stock_elements.join("");


//==================================================================================================================

product_list.innerHTML="";

products.forEach(product=>
{
    const li=document.createElement("li");
    li.classList.add("product-item");
    if (!product.inStock) {
      li.classList.add("out-of-stock");
    }
    const categoryClass = `category-${product.category.toLowerCase().replace(" ", "-")}`;
    li.classList.add(categoryClass);

    const nameEl = document.createElement("h3");
    nameEl.textContent = product.name;

    const priceEl = document.createElement("p");
    priceEl.textContent = `$${product.price}`;

    
    li.appendChild(nameEl);
    li.appendChild(priceEl);

    product_list.appendChild(li);
}
);
