//working with modules
const app1 = require("./app1"); //means app1 is in same path with app
console.log(app1.sum(1, 1));
console.log(app1.pi);
console.log(new app1.SomeMath());
