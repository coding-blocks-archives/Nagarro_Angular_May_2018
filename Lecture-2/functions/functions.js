"use strict";
/**
 * Created by aayusharora on 5/3/18.
 */
// function buygoods(name: string, price: number, size?: number): xyz{
//     return
// }
// buygoods('',12);
function fruits(arg1, arg2) {
    var arg3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arg3[_i - 2] = arguments[_i];
    }
    console.log(arg1);
    // console.log(arg2);
    // ...arg3.forEach((i)=>{
    //     console.log(i);
    // })
}
fruits('mango', 'apple', 'lichie', 'durian', '', '');
//# sourceMappingURL=functions.js.map