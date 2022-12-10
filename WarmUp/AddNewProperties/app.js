/**
 * ? Write a function called updatedSales() which gets two arguments as parameter, one is array of products and the other one is object of discounts,and returns an array with new three keys (discount,sale and total). 
 * * The 'discount' key equals one of the discount object value which depends on amount of its stock. 
 * * The key 'sale' equals the calculated sale price based on the original price and the discount. 
 * * The key 'total' equals the computed total based on stock, the original price and the discount. 
 * ! You have to use Object Destructuring on the objects in the sales array and discountRatio.
 * If stock is 7<= stock <12 min
 *             3<= stock <7  med
 *                 stock <3  max
 * *Expected output:         
 * [
  {
    product: 'PS4 Pro',
    stock: 15,
    original: 399.99,
    discount: 0,
    sale: 399.99,
    total: 5999.85
  },
  {
    product: 'Xbox One X',
    stock: 10,
    original: 499.99,
    discount: 0.1,
    sale: 449.991,
    total: 4499.91
  },
  {
    product: 'Nintendo Switch',
    stock: 2,
    original: 299.99,
    discount: 0.5,
    sale: 149.995,
    total: 299.99
  },
  {
    product: 'PS2 Console',
    stock: 5,
    original: 299.99,
    discount: 0.25,
    sale: 224.9925,
    total: 1124.9625
  },
  {
    product: 'Nintendo 64',
    stock: 8,
    original: 199.99,
    discount: 0.1,
    sale: 179.991,
    total: 1439.928
  }
]    
 */
import { sales, discountRatio } from './data.js'
import { updatedSales } from './functions.js'

console.log(updatedSales(sales, discountRatio));