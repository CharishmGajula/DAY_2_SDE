
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


## [HARD-2]
[QUESTION]
Chaining Methods: Create a new array that contains the names of all "Electronics" products that are currently in stock. You must do this by chaining the filter and map methods. Log the result to the console.
[CODE]
<pre>
const eletronic_names=products.filter(product=>product.category=="Electronics").map(product=>product.name);
console.log(eletronic_names); 
</pre>
[OUTPUT]
