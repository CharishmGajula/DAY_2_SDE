
# ASSIGNMENT-2

## [EASY-1]
[QUESTION]
**Filter**: Create a new array called inStockProducts that contains only the products that are inStock. Log it to the console.
[CODE]
<pre>
const inStockProducts=products.filter(instock);
function instock(user)
{
    return user.inStock==true;
}
console.log(inStockProducts);
</pre>
[OUTPUT]
<img width="491" alt="image" src="https://github.com/user-attachments/assets/a3d5bb50-d6d5-489b-b25c-b1678a719ddd" />


## [EASY-2]
[QUESTION]
**Filter:** Create a new array called `bookProducts` that contains only the products in the "Books" category. Log it to the console.
[CODE]
<pre>
const bookProducts=products.filter(category);
function category(user)
{
    return user.category=="Books"
}
console.log(bookProducts)
</pre>
[OUTPUT]
<img width="448" alt="image" src="https://github.com/user-attachments/assets/c52d181e-32b3-4e2f-8a3b-b320842d7fe4" />


## [MEDIUM-1]
[QUESTION]
Map: Create a new array called productNames that contains only the names of the products. Log it to the console. (e.g., ['Laptop', 'Headphones', ...])
[CODE]
<pre>
const productNames=products.map(names);
function names(user)
{
    return user.name;
}
console.log(productNames);
</pre>
[OUTPUT]
<img width="428" alt="image" src="https://github.com/user-attachments/assets/b1099fb9-7b0a-49c0-aad5-51aafb45e7ec" />


## [MEDIUM-2]
[QUESTION]
Map: Create a new array of strings where each string is formatted as "Product Name - $Price". (e.g., ['Laptop - $1200', 'Headphones - $150', ...]). Log it to the console.
[CODE]
<pre>
const formatted_string=products.map(format);
function format(user)
{
    return `${user.name} - $${user.price}`;
}
console.log(formatted_string)
</pre>
[OUTPUT]

<img width="418" alt="image" src="https://github.com/user-attachments/assets/19a14bd8-7321-4eb1-ad30-f9f12aebb63a" />


## [HARD-1]
[QUESTION]
Reduce: Calculate the total price of all products in the products array. Log the final number to the console.
[CODE]
<pre>
const total_price=products.reduce(function(sum,product)
{
    return sum+product.price;
},0);
console.log(total_price);
</pre>
[OUTPUT]
<img width="422" alt="image" src="https://github.com/user-attachments/assets/456f364a-4526-46ff-a906-2b81d934807e" />


## [HARD-2]
[QUESTION]
Chaining Methods: Create a new array that contains the names of all "Electronics" products that are currently in stock. You must do this by chaining the filter and map methods. Log the result to the console.
[CODE]
<pre>
const eletronic_names=products.filter(product=>product.category=="Electronics").map(product=>product.name);
console.log(eletronic_names); 
</pre>
[OUTPUT]
<img width="419" alt="image" src="https://github.com/user-attachments/assets/35e88a20-5ec4-4035-af4a-3e99cd0ced0a" />
