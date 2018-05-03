"use strict";
/**
 * Created by aayusharora on 5/3/18.
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var person1 = new Person('aayush');
console.log(person1);
var shoppingCart = /** @class */ (function () {
    function shoppingCart() {
        this.items = [];
    }
    shoppingCart.prototype.buy = function (item) {
        this.items.push(item);
    };
    return shoppingCart;
}());
var mobile = new shoppingCart();
mobile.buy('mobilePhone');
var tv = new shoppingCart();
console.log(tv.items);
//# sourceMappingURL=class.js.map