const products = [];
module.exports = class product {
  constructor(title) {
    this.title = title;
    console.log(this);
  }
  save() {
    products.push(this);
  }
  static fetchAll() {
    return products;
  }
};
