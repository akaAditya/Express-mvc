const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(p, (err, dataContent) => {
      let cart = { products: [], totalAmount: 0 };
      if (!err) {
        cart = JSON.parse(dataContent);
      }
      const existingProductIndex = cart.products.findIndex((p) => p.id === id);
      const existingProduct = cart.products[existingProductIndex];
      let updatedProducts;
      if (existingProduct) {
        updatedProducts = { ...existingProduct };
        updatedProducts.qty = updatedProducts.qty + 1;
        cart.products = [...cart.products]
        cart.products[existingProduct] = updatedProducts;  
      }else{
        updatedProducts = {id:id, qty:1};
        cart.products = [...cart.products, updatedProducts];
      }
      cart.totalPrice = cart.totaPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), err=>{
        console.log(err);
      })
    });
  }
};
