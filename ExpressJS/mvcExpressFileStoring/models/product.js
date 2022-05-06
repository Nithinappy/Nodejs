const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);
//refactoring  means reusing of code
//helper function
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      // return [];
      return cb([]);
    } else {
      // return JSON.parse(fileContent);
      return cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class product {
  constructor(title) {
    this.title = title;
    console.log(this);
  }
  save() {
    // const p = path.join(
    //   path.dirname(process.mainModule.filename),
    //   "data",
    //   "products.json"
    // );
    //replaced this code with helper fuction getProductsFromFile
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    /* total code is replaced with helper fuction which reuse it */
    //   const p = path.join(
    //     path.dirname(process.mainModule.filename),
    //     "data",
    //     "products.json"
    //   );
    //   fs.readFile(p, (err, fileContent) => {
    //     if (err) {
    //       // return [];
    //       cb([]);
    //     }
    //     // return JSON.parse(fileContent);
    //     cb(JSON.parse(fileContent));
    //   }); //we will get an error Cannot read properties of undefined (reading 'length')
    //   //we are returning only inner fuction result not outer function to solve this we will use callback

    getProductsFromFile(cb);
  }
};
