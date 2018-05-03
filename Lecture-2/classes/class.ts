/**
 * Created by aayusharora on 5/3/18.
 */
class Person {
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

let person1 = new Person('aayush');

console.log(person1);

class shoppingCart {
    items: string[] =[];

    buy(item: string){
        this.items.push(item);
    }
}

let mobile = new shoppingCart();
mobile.buy('mobilePhone');
let tv = new shoppingCart();
console.log(tv.items);

