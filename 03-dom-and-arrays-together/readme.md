# ASSIGNMENT 3

## EASY
[QUESTION]
1. Select the `<ul id="product-list">`.
2. Use the `map` method on the `products` array to create an array of `<li>` HTML strings. Each string should contain the product's name. (e.g., `<li>Laptop</li>`).
3. Set the `innerHTML` of the product list `<ul>` to the joined array of HTML strings.
[CODE]
<pre>
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

</pre>
[OUTPUT]
<img width="566" alt="easy" src="https://github.com/user-attachments/assets/58f813ec-40f7-4e67-8b61-0a9de48a7f64" />


## MEDIUM
[QUESTION]
1. Filter the `products` array to get only the items that are `inStock`.
2. For each of these in-stock products, create a full list item structure as a string:
    
    ```html
    <li class="product-item">
        <h3>Product Name</h3>
        <p>$Price</p>
    </li>
    
    ```
    
3. Render these product items inside the `<ul id="product-list">`.
[CODE]
<pre>
const in_stock_elements=products.filter(product=>product.inStock==true).map(product=>`<li class="product-item">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
</li>
`);

product_list.innerHTML=in_stock_elements.join("");

</pre>
[OUTPUT]
<img width="907" alt="medium" src="https://github.com/user-attachments/assets/03de89be-0777-4b3e-a518-2df7229f445b" />



## HARD
[QUESTION]
1. Start by clearing any existing content in the `<ul id="product-list">`.
2. Iterate over the **entire** `products` array.
3. For each product, create an `<li>` element using `document.createElement()`.
4. Create and append an `<h3>` for the product name and a `<p>` for the price to the `<li>`.
5. **Conditionally** add a class:
    - If a product is `inStock: false`, add the class `out-of-stock` to the `<li>`.
    - Add a category-specific class to the `<li>` (e.g., `category-electronics`, `category-books`). You can find these in the CSS file.
6. Append the fully constructed `<li>` to the `<ul id="product-list">`.
7. **Bonus:** Use `reduce` to calculate the total value of all products currently in stock. Create a new `div` on the page to display this total (e.g., "Total Value of In-Stock Items: $XXXX").
[CODE]
<pre>
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
</pre>
[OUTPUT]
<img width="925" alt="hard" src="https://github.com/user-attachments/assets/f9762507-7ff5-4f29-92d2-1924503e4f66" />


