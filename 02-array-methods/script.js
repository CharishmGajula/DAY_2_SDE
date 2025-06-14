const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];


//====================================================================================================

const inStockProducts=products.filter(instock);
function instock(user)
{
    return user.inStock==true;
}
console.log(inStockProducts);

//[OUTPUT]
//[
//   {
//     id: 1,
//     name: 'Laptop',
//     category: 'Electronics',
//     price: 1200,
//     inStock: true
//   },
//   {
//     id: 3,
//     name: 'The Great Gatsby',
//     category: 'Books',
//     price: 15,
//     inStock: true
//   },
//   {
//     id: 4,
//     name: 'Coffee Maker',
//     category: 'Home Goods',
//     price: 60,
//     inStock: true
//   },
//   {
//     id: 6,
//     name: 'Smart Watch',
//     category: 'Electronics',
//     price: 250,
//     inStock: true
//   }
// ]

//=====================================================================================================

const bookProducts=products.filter(category);
function category(user)
{
    return user.category=="Books"
}
console.log(bookProducts)


//[OUTPUT]
//[
//   {
//     id: 3,
//     name: 'The Great Gatsby',
//     category: 'Books',
//     price: 15,
//     inStock: true
//   },
//   {
//     id: 5,
//     name: 'To Kill a Mockingbird',
//     category: 'Books',
//     price: 12,
//     inStock: false
//   }
// ]

//====================================================================================================

const productNames=products.map(names);
function names(user)
{
    return user.name;
}
console.log(productNames);


//[OUTPUT]
//[
//   'Laptop',
//   'Headphones',
//   'The Great Gatsby',
//   'Coffee Maker',
//   'To Kill a Mockingbird',
//   'Smart Watch'
// ]

//===================================================================================================

const formatted_string=products.map(format);
function format(user)
{
    return `${user.name} - $${user.price}`;
}
console.log(formatted_string)

//[OUTPUT]
// [
//   'Laptop - $1200',
//   'Headphones - $150',
//   'The Great Gatsby - $15',
//   'Coffee Maker - $60',
//   'To Kill a Mockingbird - $12',
//   'Smart Watch - $250'
// ]


//===================================================================================================

const total_price=products.reduce(function(sum,product)
{
    return sum+product.price;
},0);
console.log(total_price);

//[OUTPUT]
//1687


//====================================================================================================

const eletronic_names=products.filter(product=>product.category=="Electronics").map(product=>product.name);
console.log(eletronic_names);