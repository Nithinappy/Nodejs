const db = require("../util/database");
const Cart = require("./cart");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO product(title, price, imageUrl, description) VALUES (?,?,?,?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id) {
    return db.execute("DELETE FROM product WHERE id=?", [id]);
  }
  updateProduct(id) {
    return db.execute(
      "UPDATE product SET title=?,price=?,imageUrl=?,description=?  WHERE product.id=?",
      [this.title, this.price, this.imageUrl, this.description, id]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM product");
  }

  static findById(id) {
    // console.log(id);
    return db.execute("SELECT * FROM product WHERE id=?", [id]);
  }
};
