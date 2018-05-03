/**
 * Created by aayusharora on 5/3/18.
 */

function writable(value: boolean, price:number){
    return function (target, name, descriptor){


        console.log(target);
        console.log(name);
        descriptor.writable = value;
    }
}

class fruitsBasket {
    name: string;
    price: number;

    constructor(name: string){
        this.name = name;
        this.price = 20;
    }

    @writable(true)
    buy(){
        this.price = 30;
    }
}

let fruit = new fruitsBasket('apple');

fruit.buy = function(){
    fruit.price = 50;
};

fruit.buy();
console.log(fruit.price);