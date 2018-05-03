/**
 * Created by aayusharora on 5/3/18.
 */

function todoList(){

}

todoList.prototype = {
    items: [] = []
}

let todo1 = new todoList();
todo1.items.push("homework");

let todo2 = new todoList();
console.log(todo2.items);