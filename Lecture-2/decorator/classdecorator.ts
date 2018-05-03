/**
 * Created by aayusharora on 5/3/18.
 */

function modifyOrnaments(constructor){

   return class extends constructor {
        ornaments = 'blue'
    }
}

@modifyOrnaments
class christmasTree{
    ornaments: string;
    constructor(){
        this.ornaments = 'red';
    }
}

let tree = new christmasTree();
console.log(tree.ornaments);